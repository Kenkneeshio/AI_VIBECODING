package io.roomcraft.tabletadbkeeper;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public final class RestorePolicyTest {
    @Test
    public void skipsWhenOwnerDidNotOptIn() {
        assertEquals(
                RestorePolicy.Decision.SKIP_NOT_OPTED_IN,
                RestorePolicy.decide(false, true));
    }

    @Test
    public void skipsWhenPrivilegedPermissionIsMissing() {
        assertEquals(
                RestorePolicy.Decision.SKIP_PERMISSION_MISSING,
                RestorePolicy.decide(true, false));
    }

    @Test
    public void attemptsOnlyWhenOptedInAndAuthorized() {
        assertEquals(
                RestorePolicy.Decision.ATTEMPT,
                RestorePolicy.decide(true, true));
    }
}
