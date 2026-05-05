/* ===== APP — cursor, spotlight, time, theme ===== */
(function () {
  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => [...p.querySelectorAll(s)];

  /* Cursor */
  const ring = $("#cursor-ring");
  const dot = $("#cursor-dot");
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (dot) { dot.style.left = mx + "px"; dot.style.top = my + "px"; }
    document.documentElement.style.setProperty("--mx", mx + "px");
    document.documentElement.style.setProperty("--my", my + "px");
  });
  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener("mouseover", (e) => {
    const t = e.target.closest("[data-cursor='hover'], a, button, .tool-tag, .pillar, .skill-card");
    if (t && ring) ring.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    const t = e.target.closest("[data-cursor='hover'], a, button, .tool-tag, .pillar, .skill-card");
    if (t && ring) ring.classList.remove("hover");
  });

  /* Hero blob parallax */
  const blob = $("#hero-blob");
  if (blob) {
    document.addEventListener("mousemove", (e) => {
      const dx = (e.clientX - window.innerWidth/2) * 0.04;
      const dy = (e.clientY - window.innerHeight/2) * 0.04;
      blob.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  }

  /* Local time */
  function tickTime() {
    const opts = { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" };
    const t = new Intl.DateTimeFormat("en-GB", opts).format(new Date());
    const a = $("#local-time"), b = $("#local-time-2");
    if (a) a.textContent = `${t} IST · Vadodara`;
    if (b) b.textContent = `${t} local time (IST)`;
  }
  tickTime(); setInterval(tickTime, 30000);

  /* Mobile burger */
  const burger = $("#nav-burger");
  if (burger) {
    burger.addEventListener("click", () => {
      // simple jump-to-list behavior on mobile
      const target = document.querySelector("#about");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* Theme toggle (header + floating) */
  const toggle = $("#theme-toggle");
  const navToggle = $("#nav-theme-toggle");
  const stored = localStorage.getItem("tp-theme");
  if (stored) document.body.dataset.theme = stored;

  function setFloatingIcon() {
    const dark = document.body.dataset.theme === "dark";
    if (!toggle) return;
    toggle.innerHTML = dark
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke-linecap="round"/></svg>`;
  }
  setFloatingIcon();

  function flipTheme() {
    const next = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = next;
    localStorage.setItem("tp-theme", next);
    setFloatingIcon();
    window.dispatchEvent(new CustomEvent("tp-theme-change", { detail: next }));
  }

  if (toggle) toggle.addEventListener("click", flipTheme);
  if (navToggle) navToggle.addEventListener("click", flipTheme);

  /* Nav scroll state */
  const nav = $("#main-nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
