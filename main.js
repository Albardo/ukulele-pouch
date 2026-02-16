const PLAY_URL = "https://play.google.com/store/apps/details?id=cz.raldes.ukulelepouch";
const PRIVACY_URL = "https://albardo.github.io/ukulele-pouch-legal/privacy-policy";
const APP_PRICE = null;
const APP_CURRENCY = "CZK";
const MOBILE_MEDIA = window.matchMedia("(max-width: 899px)");
const COMPACT_SCREENSHOTS = true;

const i18n = {
  cs: {
    metaTitle: "Ukulele Pouch – PDF taby, akordy, ladička a metronom",
    metaDescription:
      "Aplikace se vším co na ukulele potřebuješ: import PDF zpěvníků a tabulatur, knihovna akordů, akordových progresí, stupnice, ladička (High‑G/Low‑G) a metronom. Funguje offline. Bez reklam.",
    heroTitle: "Ukulele Pouch",
    heroSubtitle:
      "Aplikace se vším co na ukulele potřebuješ: import PDF zpěvníků a tabulatur, knihovna akordů, akordových progresí, stupnice, ladička a metronom.",
    heroLead:
      "Měj své PDF zpěvníky a tabulatury na jednom místě, procházej akordy a cvič s vestavěnými nástroji. Navrženo pro pohodlné cvičení, výuku i hraní pro radost.",
    primaryCta: "Stáhnout z Google Play",
    qrCaption: "Naskenuj QR pro otevření Google Play",
    qrAlt: "QR kód na Google Play",
    logoAlt: "Logo Ukulele Pouch",
  heroTagline: "Pohodový nástroj pro ukulele",
    badgeOffline: "Funguje offline",
    badgeNoAds: "Bez reklam",
    badgeNoSubs: "Bez předplatného",
    featuresTitle: "Co umí",
    feature1Title: "PDF zpěvník a taby",
    feature1Desc: "Importuj vlastní PDF, třiď je do kategorií a rychle vyhledávej.",
    feature2Title: "Knihovna akordů",
    feature2Desc: "Interaktivní hmaty s více variantami a přehráváním.",
    feature3Title: "Akordové postupy",
    feature3Desc:
      "Filtruj podle nálady a žánru, transponuj do libovolné tóniny a přehraj celý postup.",
    feature4Title: "Stupnice",
    feature4Desc: "Tóny na hmatníku, diatonické akordy a přehrání celé stupnice.",
    feature5Title: "Ladička a metronom",
    feature5Desc: "Přesná ladička (High‑G / Low‑G) a metronom s Tap Tempo.",
    feature6Title: "Záloha a přenos",
    feature6Desc: "Exportuj a importuj celou knihovnu pro snadný přechod na nové zařízení.",
    screenshotsTitle: "Ukázky aplikace",
    devicePhone: "Telefon",
    deviceTablet: "Tablet",
    faqTitle: "FAQ",
    faq1Q: "Můžu importovat vlastní PDF?",
    faq1A: "Ano. PDF soubory importuješ do knihovny, třídíš do kategorií a rychle vyhledáváš.",
    faq2Q: "Funguje aplikace offline?",
    faq2A: "Ano, vše funguje offline včetně zpěvníku, akordů, ladičky i metronomu.",
    faq3Q: "Jak zálohovat nebo přenést data?",
    faq3A: "Použij export/import a přenes celou knihovnu do nového zařízení.",
    footerText:
      `© ${new Date().getFullYear()} Ukulele Pouch.`,
    footerPlay: "Google Play",
    footerPrivacy: "Zásady ochrany soukromí",
  },
  en: {
    metaTitle: "Ukulele Pouch – PDF Tabs, Chords, Tuner & Metronome",
    metaDescription:
      "All‑in‑one ukulele app: PDF songbook & tabs viewer, chord library, progressions, scales, tuner (High‑G/Low‑G) and metronome. Works offline. No ads.",
    heroTitle: "Ukulele Pouch",
    heroSubtitle:
      "All‑in‑one ukulele app: PDF songbook & tabs, chords, tuner, metronome, scales, chord progressions.",
    heroLead:
      "Keep your PDF songbooks & tabs in one place, explore chords and practice with built‑in tools. Designed for comfortable practicing, teaching, and casual playing.",
    primaryCta: "Get it on Google Play",
    qrCaption: "Scan the QR to open Google Play",
    qrAlt: "QR code to Google Play",
    logoAlt: "Ukulele Pouch logo",
    heroTagline: "Warm & cozy ukulele toolkit",
    badgeOffline: "Works offline",
    badgeNoAds: "No ads",
    badgeNoSubs: "No subscriptions",
    featuresTitle: "What you get",
    feature1Title: "PDF Songbook & Tabs",
    feature1Desc: "Import your own PDFs, organize them into categories, and search instantly.",
    feature2Title: "Chord Library",
    feature2Desc: "Interactive chord diagrams with multiple fingerings and playback.",
    feature3Title: "Chord Progressions",
    feature3Desc:
      "Browse moods and genres, transpose to any key, and play the full progression.",
    feature4Title: "Scales",
    feature4Desc: "See scale tones on the fretboard, diatonic chords, and play the scale.",
    feature5Title: "Tuner & Metronome",
    feature5Desc: "Accurate tuner (High‑G / Low‑G) and a flexible metronome with Tap Tempo.",
    feature6Title: "Backup & Transfer",
    feature6Desc: "Export and import your library for easy migration to a new device.",
    screenshotsTitle: "Screenshots",
    devicePhone: "Phone",
    deviceTablet: "Tablet",
    faqTitle: "FAQ",
    faq1Q: "Can I import my own PDFs?",
    faq1A: "Yes. Import PDFs into your library, organize them into categories, and search fast.",
    faq2Q: "Does it work offline?",
    faq2A: "Everything works offline, including the songbook, chords, tuner, and metronome.",
    faq3Q: "How do I backup or move data?",
    faq3A: "Use the export/import tools to move your library to a new device.",
    footerText:
      `© ${new Date().getFullYear()} Ukulele Pouch.`,
    footerPlay: "Google Play",
    footerPrivacy: "Privacy policy",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
const deviceTabs = document.querySelectorAll(".device-tab");
const deviceSections = document.querySelectorAll(".device-section");
const deviceTabsWrapper = document.querySelector(".device-tabs");
const screenshotGridPhone = document.getElementById("screenshot-grid-phone");
const screenshotGridTablet = document.getElementById("screenshot-grid-tablet");
const carouselButtons = document.querySelectorAll(".carousel-btn");
const carouselDots = document.querySelectorAll(".carousel-dots");
const jsonLdScript = document.getElementById("json-ld");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const screenshotsSection = document.querySelector(".screenshots");

let currentLang = "en";
let currentDevice = "phone";
let screenshotsData = [];
let lastFocusedCard = null;

const supportedLangs = ["cs", "en"];

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (supportedLangs.includes(urlLang)) {
    return urlLang;
  }
  const storedLang = localStorage.getItem("ukuleleLang");
  if (supportedLangs.includes(storedLang)) {
    return storedLang;
  }
  const preferred = navigator.languages?.[0] || navigator.language || "en";
  if (preferred.toLowerCase().startsWith("cs") || preferred.toLowerCase().startsWith("sk")) {
    return "cs";
  }
  return "en";
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("ukuleleLang", lang);

  const params = new URLSearchParams(window.location.search);
  params.set("lang", lang);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", newUrl);

  document.documentElement.lang = lang;
  document.title = i18n[lang].metaTitle;

  updateMeta(lang);
  updateContent(lang);
  updateLangButtons(lang);
  updateSocialImages(lang);
  renderScreenshots();
  updateStructuredData();
}

function setCompactMode(enabled) {
  if (!screenshotsSection) return;
  screenshotsSection.classList.toggle("compact", enabled);
}

function updateMeta(lang) {
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const canonical = `${baseUrl}?lang=${lang}`;
  const otherLang = lang === "cs" ? "en" : "cs";
  document.getElementById("canonical-link").href = canonical;
  document.getElementById("hreflang-cs").href = `${baseUrl}?lang=cs`;
  document.getElementById("hreflang-en").href = `${baseUrl}?lang=en`;
  document.getElementById("og-url").setAttribute("content", canonical);
  document.getElementById("og-title").setAttribute("content", i18n[lang].metaTitle);
  document
    .getElementById("og-description")
    .setAttribute("content", i18n[lang].metaDescription);
  document.getElementById("twitter-title").setAttribute("content", i18n[lang].metaTitle);
  document
    .getElementById("twitter-description")
    .setAttribute("content", i18n[lang].metaDescription);

  document.getElementById("hreflang-cs").setAttribute("hreflang", "cs");
  document.getElementById("hreflang-en").setAttribute("hreflang", "en");

  document
    .querySelectorAll("[data-i18n-attr]")
    .forEach((element) => applyI18nAttr(element, lang));

  document.querySelectorAll("a[href*='play.google.com']").forEach((link) => {
    link.setAttribute("href", PLAY_URL);
  });
  document.querySelectorAll("a[href*='privacy-policy']").forEach((link) => {
    link.setAttribute("href", PRIVACY_URL);
  });
}

function updateContent(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const text = i18n[lang][key];
    if (typeof text === "string") {
      element.textContent = text;
    }
  });
}

function updateLangButtons(lang) {
  langButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
}

function updateSocialImages(lang) {
  const baseUrl = new URL(".", window.location.href);
  const graphic = lang === "cs" ? "assets/feature-graphic-cz.png" : "assets/feature-graphic-en.png";
  const absGraphic = new URL(graphic, baseUrl).toString();
  document.getElementById("og-image").setAttribute("content", absGraphic);
  document.getElementById("twitter-image").setAttribute("content", absGraphic);
}

function applyI18nAttr(element, lang) {
  const key = element.getAttribute("data-i18n");
  const attr = element.getAttribute("data-i18n-attr");
  if (!key || !attr) return;
  const text = i18n[lang][key];
  if (typeof text === "string") {
    element.setAttribute(attr, text);
  }
}

async function loadScreenshots() {
  try {
    const response = await fetch("assets/screenshots.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error("Screenshots JSON not found");
    }
    const data = await response.json();
    screenshotsData = Array.isArray(data) ? data : [];
  } catch (error) {
    const fallback = window.SCREENSHOTS_DATA;
    screenshotsData = Array.isArray(fallback) ? fallback : [];
  }
}

function renderScreenshotsForDevice(device, container) {
  if (!container) return;
  const filtered = screenshotsData.filter(
    (item) => item.lang === currentLang && item.device === device
  );

  container.innerHTML = "";

  if (!filtered.length) {
    container.innerHTML = `<div class="card"><p>${
      currentLang === "cs"
        ? "Screenshoty doplníš do assets/screenshots.json"
        : "Add screenshots to assets/screenshots.json"
    }</p></div>`;
    return;
  }

  filtered.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "screenshot-card";
    button.setAttribute("aria-label", item.caption);
    button.dataset.fullSrc = `assets/screenshots-${item.device}/${item.file}`;
    button.dataset.caption = item.caption;
    button.innerHTML = `
      <img src="assets/screenshots-${item.device}/${item.file}" alt="${item.caption}" loading="lazy" />
      <p>${item.caption}</p>
    `;
    button.addEventListener("click", () =>
      openLightbox(button.dataset.fullSrc, button.dataset.caption, button)
    );
    container.appendChild(button);
  });
}

function updateDeviceTabs() {
  deviceTabs.forEach((button) => {
    button.setAttribute("aria-selected", button.dataset.device === currentDevice ? "true" : "false");
  });
}

function syncDeviceSections() {
  const hasPhone = screenshotsData.some((item) => item.device === "phone");
  const hasTablet = screenshotsData.some((item) => item.device === "tablet");
  const showTabs = hasPhone && hasTablet;
  if (deviceTabsWrapper) {
    deviceTabsWrapper.style.display = showTabs && MOBILE_MEDIA.matches ? "inline-flex" : "none";
  }

  deviceSections.forEach((section) => {
    const isActive = section.dataset.device === currentDevice;
    section.classList.toggle("is-active", isActive);
  });

  updateDeviceTabs();
}

function renderScreenshots() {
  renderScreenshotsForDevice("phone", screenshotGridPhone);
  renderScreenshotsForDevice("tablet", screenshotGridTablet);
  setupCarousel("phone");
  setupCarousel("tablet");
  syncDeviceSections();
}

function scrollCarousel(target, direction) {
  const grid = target === "tablet" ? screenshotGridTablet : screenshotGridPhone;
  if (!grid) return;
  const step = Math.round(grid.clientWidth * 0.9);
  grid.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
}

function setupCarousel(device) {
  const grid = device === "tablet" ? screenshotGridTablet : screenshotGridPhone;
  const dots = document.querySelector(`.carousel-dots[data-dots-for="${device}"]`);
  if (!grid || !dots) return;

  renderDots(device, grid, dots);
  updateCarouselState(device, grid, dots);

  if (grid.dataset.carouselInit) return;
  grid.dataset.carouselInit = "true";

  let rafId = null;
  grid.addEventListener("scroll", () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      updateCarouselState(device, grid, dots);
      rafId = null;
    });
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollCarousel(device, "next");
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollCarousel(device, "prev");
    }
  });

  enableDragScroll(grid);
}

function enableDragScroll(grid) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  grid.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".screenshot-card")) {
      return;
    }
    if (event.pointerType !== "mouse") return;
    isDown = true;
    startX = event.clientX;
    scrollLeft = grid.scrollLeft;
    grid.setPointerCapture(event.pointerId);
    grid.classList.add("is-dragging");
  });

  grid.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    const walk = event.clientX - startX;
    grid.scrollLeft = scrollLeft - walk;
  });

  grid.addEventListener("pointerup", (event) => {
    if (!isDown) return;
    isDown = false;
    grid.releasePointerCapture(event.pointerId);
    grid.classList.remove("is-dragging");
  });

  grid.addEventListener("pointerleave", () => {
    if (!isDown) return;
    isDown = false;
    grid.classList.remove("is-dragging");
  });
}

function renderDots(device, grid, dots) {
  const cards = Array.from(grid.querySelectorAll(".screenshot-card"));
  dots.innerHTML = "";
  if (cards.length <= 1) {
    dots.style.display = "none";
    return;
  }
  dots.style.display = "flex";

  cards.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => scrollToCard(grid, index));
    dots.appendChild(dot);
  });
}

function scrollToCard(grid, index) {
  const cards = Array.from(grid.querySelectorAll(".screenshot-card"));
  const card = cards[index];
  if (!card) return;
  card.scrollIntoView({ behavior: "smooth", inline: "start" });
}

function updateCarouselState(device, grid, dots) {
  const cards = Array.from(grid.querySelectorAll(".screenshot-card"));
  const prevButton = document.querySelector(
    `.carousel-btn[data-carousel-target="${device}"][data-direction="prev"]`
  );
  const nextButton = document.querySelector(
    `.carousel-btn[data-carousel-target="${device}"][data-direction="next"]`
  );

  const maxScroll = grid.scrollWidth - grid.clientWidth - 1;
  const hasOverflow = grid.scrollWidth > grid.clientWidth + 2;
  if (prevButton) {
    prevButton.disabled = !hasOverflow || grid.scrollLeft <= 1;
  }
  if (nextButton) {
    nextButton.disabled = !hasOverflow || grid.scrollLeft >= maxScroll;
  }

  if (!dots || !cards.length) return;
  const paddingLeft = parseFloat(getComputedStyle(grid).paddingLeft) || 0;
  const target = grid.scrollLeft + paddingLeft + 1;
  let activeIndex = 0;
  let smallestDiff = Number.POSITIVE_INFINITY;
  cards.forEach((card, index) => {
    const diff = Math.abs(card.offsetLeft - target);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      activeIndex = index;
    }
  });

  dots.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeIndex);
  });
}

window.addEventListener("resize", () => {
  if (screenshotGridPhone) {
    const dots = document.querySelector('.carousel-dots[data-dots-for="phone"]');
    updateCarouselState("phone", screenshotGridPhone, dots);
  }
  if (screenshotGridTablet) {
    const dots = document.querySelector('.carousel-dots[data-dots-for="tablet"]');
    updateCarouselState("tablet", screenshotGridTablet, dots);
  }
});

function openLightbox(fullSrc, caption, trigger) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lastFocusedCard = trigger || document.activeElement;
  if (fullSrc.includes("screenshots-phone")) {
    lightbox.classList.add("lightbox-phone");
  } else {
    lightbox.classList.remove("lightbox-phone");
  }
  lightboxImage.src = fullSrc;
  lightboxImage.alt = caption || "";
  lightboxCaption.textContent = caption || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.classList.remove("lightbox-phone");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxCaption.textContent = "";
  document.body.classList.remove("no-scroll");
  if (lastFocusedCard && typeof lastFocusedCard.focus === "function") {
    lastFocusedCard.focus();
  }
  lastFocusedCard = null;
}

function handleScreenshotClick(event) {
  const path = event.composedPath ? event.composedPath() : [];
  const cardFromPath = path.find(
    (node) => node?.classList && node.classList.contains("screenshot-card")
  );
  const card = cardFromPath || event.target.closest(".screenshot-card");
  if (!card) return;
  const fullSrc = card.dataset.fullSrc;
  const caption = card.dataset.caption;
  if (!fullSrc) return;
  openLightbox(fullSrc, caption, card);
}

function updateStructuredData() {
  const baseUrl = new URL(".", window.location.href);
  const pageUrl = new URL(window.location.href);
  pageUrl.searchParams.set("lang", currentLang);
  const screenshots = screenshotsData
    .filter((item) => item.lang === currentLang)
    .map((item) =>
      new URL(`assets/screenshots-${item.device}/${item.file}`, baseUrl).toString()
    );
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ukulele Pouch",
    operatingSystem: "Android",
    applicationCategory: "MusicApplication",
    url: pageUrl.toString(),
    downloadUrl: PLAY_URL,
    installUrl: PLAY_URL,
    sameAs: PLAY_URL,
    image: new URL("assets/icon.png", baseUrl).toString(),
    screenshot: screenshots,
  };

  if (APP_PRICE !== null) {
    data.offers = {
      "@type": "Offer",
      price: String(APP_PRICE),
      priceCurrency: APP_CURRENCY,
    };
  }

  jsonLdScript.textContent = JSON.stringify(data, null, 2);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLang(button.dataset.lang));
});

deviceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    currentDevice = button.dataset.device;
    syncDeviceSections();
  });
});


carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scrollCarousel(button.dataset.carouselTarget, button.dataset.direction);
  });
});

if (screenshotGridPhone) {
  screenshotGridPhone.addEventListener("click", handleScreenshotClick);
}

if (screenshotGridTablet) {
  screenshotGridTablet.addEventListener("click", handleScreenshotClick);
}

MOBILE_MEDIA.addEventListener("change", () => {
  if (MOBILE_MEDIA.matches && !currentDevice) {
    currentDevice = "phone";
  }
  syncDeviceSections();
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

(async function init() {
  await loadScreenshots();
  currentLang = detectLanguage();
  setLang(currentLang);
  setCompactMode(COMPACT_SCREENSHOTS);
})();
