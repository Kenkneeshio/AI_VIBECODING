package io.roomcraft.tabletadbkeeper;

import android.Manifest;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.provider.Settings;
import android.util.Log;

import java.time.Instant;

final class AdbRestoreManager {
    private static final String TAG = "TabletAdbKeeper";
    private static final String PREFS = "adb_keeper";
    private static final String PREF_ENABLED = "restore_on_boot";
    private static final String PREF_LAST_RESULT = "last_result";
    private static final String ADB_WIFI_SETTING = "adb_wifi_enabled";

    private AdbRestoreManager() {}

    static boolean hasPrivilegedPermission(Context context) {
        return context.checkSelfPermission(Manifest.permission.WRITE_SECURE_SETTINGS)
                == PackageManager.PERMISSION_GRANTED;
    }

    static boolean isOptedIn(Context context) {
        return preferences(context).getBoolean(PREF_ENABLED, false);
    }

    static void setOptedIn(Context context, boolean enabled) {
        preferences(context).edit().putBoolean(PREF_ENABLED, enabled).apply();
        record(context, enabled ? "Owner enabled restore on boot" : "Owner disabled restore on boot");
    }

    static int currentWirelessDebugSetting(Context context) {
        return Settings.Global.getInt(context.getContentResolver(), ADB_WIFI_SETTING, 0);
    }

    static String lastResult(Context context) {
        return preferences(context).getString(PREF_LAST_RESULT, "No attempt recorded");
    }

    static boolean restoreIfEnabled(Context context, String trigger) {
        RestorePolicy.Decision decision = RestorePolicy.decide(
                isOptedIn(context), hasPrivilegedPermission(context));

        if (decision != RestorePolicy.Decision.ATTEMPT) {
            record(context, trigger + ": " + decision.name());
            return false;
        }

        try {
            boolean accepted = Settings.Global.putInt(
                    context.getContentResolver(), ADB_WIFI_SETTING, 1);
            int observed = currentWirelessDebugSetting(context);
            String result = trigger + ": write=" + accepted + ", observed=" + observed;
            record(context, result);
            return accepted && observed == 1;
        } catch (SecurityException | IllegalArgumentException error) {
            record(context, trigger + ": failed: " + error.getClass().getSimpleName());
            Log.e(TAG, "Wireless debugging restore failed", error);
            return false;
        }
    }

    private static SharedPreferences preferences(Context context) {
        Context protectedContext = context.createDeviceProtectedStorageContext();
        return protectedContext.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    private static void record(Context context, String message) {
        String line = Instant.now() + " — " + message;
        preferences(context).edit().putString(PREF_LAST_RESULT, line).apply();
        Log.i(TAG, line);
    }
}
