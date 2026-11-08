package io.roomcraft.tabletadbkeeper;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.provider.Settings;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

public final class MainActivity extends Activity {
    private TextView status;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(buildView());
    }

    @Override
    protected void onResume() {
        super.onResume();
        refresh();
    }

    private View buildView() {
        int padding = dp(24);
        LinearLayout body = new LinearLayout(this);
        body.setOrientation(LinearLayout.VERTICAL);
        body.setPadding(padding, padding, padding, padding);
        body.setBackgroundColor(Color.rgb(243, 245, 241));

        TextView title = new TextView(this);
        title.setText(R.string.app_name);
        title.setTextSize(28);
        title.setTextColor(Color.rgb(31, 63, 45));
        body.addView(title, matchWrap());

        TextView explanation = new TextView(this);
        explanation.setText(R.string.explanation);
        explanation.setTextSize(16);
        explanation.setPadding(0, dp(12), 0, dp(18));
        body.addView(explanation, matchWrap());

        status = new TextView(this);
        status.setTextSize(15);
        status.setTextIsSelectable(true);
        status.setPadding(dp(16), dp(16), dp(16), dp(16));
        status.setBackgroundColor(Color.WHITE);
        body.addView(status, matchWrap());

        body.addView(button(R.string.enable_restore, view -> {
            AdbRestoreManager.setOptedIn(this, true);
            refresh();
        }));

        body.addView(button(R.string.disable_restore, view -> {
            AdbRestoreManager.setOptedIn(this, false);
            refresh();
        }));

        body.addView(button(R.string.attempt_now, view -> {
            AdbRestoreManager.restoreIfEnabled(this, "manual");
            refresh();
        }));

        body.addView(button(R.string.open_developer_options, view -> {
            startActivity(new Intent(Settings.ACTION_APPLICATION_DEVELOPMENT_SETTINGS));
        }));

        ScrollView scroll = new ScrollView(this);
        scroll.addView(body);
        return scroll;
    }

    private Button button(int label, View.OnClickListener listener) {
        Button button = new Button(this);
        button.setText(label);
        button.setAllCaps(false);
        button.setOnClickListener(listener);
        LinearLayout.LayoutParams params = matchWrap();
        params.topMargin = dp(12);
        button.setLayoutParams(params);
        return button;
    }

    private void refresh() {
        boolean permission = AdbRestoreManager.hasPrivilegedPermission(this);
        boolean optedIn = AdbRestoreManager.isOptedIn(this);
        int setting = AdbRestoreManager.currentWirelessDebugSetting(this);

        status.setText(getString(
                R.string.status_template,
                getString(permission ? R.string.granted : R.string.missing),
                getString(optedIn ? R.string.enabled : R.string.disabled),
                setting,
                AdbRestoreManager.lastResult(this)));
    }

    private LinearLayout.LayoutParams matchWrap() {
        return new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT);
    }

    private int dp(int value) {
        return Math.round(value * getResources().getDisplayMetrics().density);
    }
}
