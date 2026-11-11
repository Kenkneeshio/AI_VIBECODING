package io.roomcraft.tabletadbkeeper;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import android.content.Intent;

import org.junit.Test;

public final class RestorePolicyTest {
    @Test
    public void acceptsSystemBootAndOwnPackageReplacement() {
        assertTrue(RestorePolicy.isRestoreBroadcast(Intent.ACTION_LOCKED_BOOT_COMPLETED));
        assertTrue(RestorePolicy.isRestoreBroadcast(Intent.ACTION_BOOT_COMPLETED));
        assertTrue(RestorePolicy.isRestoreBroadcast(Intent.ACTION_MY_PACKAGE_REPLACED));
    }

    @Test
    public void skipsUnrecognizedOrMissingActions() {
        assertFalse(RestorePolicy.isRestoreBroadcast(Intent.ACTION_PACKAGE_REPLACED));
        assertFalse(RestorePolicy.isRestoreBroadcast(null));
    }

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
