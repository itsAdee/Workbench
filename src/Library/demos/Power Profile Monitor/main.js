import Adw from "gi://Adw";
import Gio from "gi://Gio";

const power_profile_monitor = Gio.PowerProfileMonitor.dup_default();
const overlay = workbench.builder.get_object("overlay");

power_profile_monitor.connect("notify::power-saver-enabled", () => {
  let toast;

  if (power_profile_monitor.power_saver_enabled) {
    toast = new Adw.Toast({
      title: "Backup paused to save power",
      button_label: "Resume",
      priority: Adw.ToastPriority.HIGH,
    });
  } else {
    toast = new Adw.Toast({
      title: "Backup resumed",
      priority: Adw.ToastPriority.HIGH,
    });
  }

  overlay.add_toast(toast);
});

