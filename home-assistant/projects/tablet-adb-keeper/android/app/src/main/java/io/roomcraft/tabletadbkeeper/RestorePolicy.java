package io.roomcraft.tabletadbkeeper;

final class RestorePolicy {
    private RestorePolicy() {}

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
