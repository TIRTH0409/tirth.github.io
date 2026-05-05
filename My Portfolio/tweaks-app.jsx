/* Tweaks panel — light/dark + accent color */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#0040FF"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.dataset.theme = tweaks.theme;
    localStorage.setItem("tp-theme", tweaks.theme);
    if (tweaks.accent) {
      document.documentElement.style.setProperty("--accent", tweaks.accent);
    }
    const tgl = document.getElementById("theme-toggle");
    if (tgl) {
      const dark = tweaks.theme === "dark";
      tgl.innerHTML = dark
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke-linecap="round"/></svg>`;
    }
  }, [tweaks.theme, tweaks.accent]);

  React.useEffect(() => {
    function onChange(e) {
      if (e.detail && e.detail !== tweaks.theme) {
        setTweak("theme", e.detail);
      }
    }
    window.addEventListener("tp-theme-change", onChange);
    return () => window.removeEventListener("tp-theme-change", onChange);
  }, [tweaks.theme]);

  const { TweaksPanel, TweakSection, TweakRadio, TweakColor } = window;

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Appearance" />
      <TweakRadio
        label="Theme"
        value={tweaks.theme}
        options={["light", "dark"]}
        onChange={v => setTweak("theme", v)}
      />
      <TweakColor
        label="Accent"
        value={tweaks.accent}
        onChange={v => setTweak("accent", v)}
      />
    </TweaksPanel>
  );
}

const tweakRoot = document.createElement("div");
document.body.appendChild(tweakRoot);
ReactDOM.createRoot(tweakRoot).render(<TweaksApp />);
