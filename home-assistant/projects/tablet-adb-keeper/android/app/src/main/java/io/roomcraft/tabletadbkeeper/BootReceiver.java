package io.roomcraft.tabletadbkeeper;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public final class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent == null ? "unknown" : intent.getAction();
        AdbRestoreManager.restoreIfEnabled(context, action == null ? "unknown" : action);
    }
}
