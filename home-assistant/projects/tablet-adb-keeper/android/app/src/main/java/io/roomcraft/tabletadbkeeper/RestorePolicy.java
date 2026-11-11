package io.roomcraft.tabletadbkeeper;

import android.content.Intent;

final class RestorePolicy {
    private RestorePolicy() {}

    static boolean isRestoreBroadcast(String action) {
        return Intent.ACTION_LOCKED_BOOT_COMPLETED.equals(action)
                || Intent.ACTION_BOOT_COMPLETED.equals(action)
                || Intent.ACTION_MY_PACKAGE_REPLACED.equals(action);
    }

    static Decision decide(boolean optedIn, boolean permissionGranted) {
        if (!optedIn) {
            return Decision.SKIP_NOT_OPTED_IN;
        }
        if (!permissionGranted) {
            return Decision.SKIP_PERMISSION_MISSING;
        }
        return Decision.ATTEMPT;
    }

    enum Decision {
        ATTEMPT,
        SKIP_NOT_OPTED_IN,
        SKIP_PERMISSION_MISSING
    }
}
