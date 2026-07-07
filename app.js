// Constant Data Sets matching the React bundle definitions
const FILTERS = [
  { id: "regular", label: "REGULAR", accentColor: "hsl(35 60% 50%)", description: "WARM VINTAGE" },
  { id: "bw", label: "B & W", accentColor: "hsl(0 0% 55%)", description: "MONOCHROME" },
  { id: "cyberpunk", label: "CYBERPUNK", accentColor: "hsl(210 90% 55%)", description: "NEON SHIFT" },
  { id: "vintage_bw", label: "STAR B&W", accentColor: "hsl(40 30% 45%)", description: "STARRY NIGHT" },
  { id: "mothers_day", label: "MOTHER'S DAY", accentColor: "hsl(340 70% 65%)", description: "LOVE & JOY" },
  { id: "jellyfish", label: "JELLYFISH", accentColor: "hsl(190 80% 55%)", description: "SWIM!" }
];

const SE_STARS = [
  { x: 5, y: 10, size: 60, opacity: .6, rot: 15 },
  { x: 12, y: 5, size: 40, opacity: .4, rot: 45 },
  { x: 8, y: 88, size: 70, opacity: .7, rot: 0 },
  { x: 3, y: 50, size: 50, opacity: .5, rot: 30 },
  { x: 92, y: 8, size: 80, opacity: .6, rot: 10 },
  { x: 88, y: 15, size: 40, opacity: .3, rot: 60 },
  { x: 95, y: 90, size: 60, opacity: .5, rot: 25 },
  { x: 90, y: 95, size: 50, opacity: .7, rot: 5 },
  { x: 50, y: 4, size: 60, opacity: .4, rot: 40 },
  { x: 45, y: 94, size: 50, opacity: .5, rot: 20 },
  { x: 14, y: 75, size: 40, opacity: .6, rot: 80 },
  { x: 85, y: 40, size: 70, opacity: .4, rot: 15 },
  { x: 89, y: 70, size: 50, opacity: .5, rot: 55 },
  { x: 10, y: 30, size: 60, opacity: .3, rot: 35 },
  { x: 75, y: 92, size: 40, opacity: .6, rot: 75 }
];

const PE_HEARTS = [
  { x: 8, y: 12, size: 30, opacity: .5, rot: -20, cIdx: 0 },
  { x: 85, y: 15, size: 35, opacity: .4, rot: 25, cIdx: 1 },
  { x: 12, y: 85, size: 40, opacity: .6, rot: -10, cIdx: 2 },
  { x: 88, y: 88, size: 25, opacity: .5, rot: 15, cIdx: 0 },
  { x: 5, y: 45, size: 20, opacity: .3, rot: -35, cIdx: 1 },
  { x: 95, y: 55, size: 30, opacity: .5, rot: 40, cIdx: 2 },
  { x: 35, y: 8, size: 18, opacity: .4, rot: -5, cIdx: 0 },
  { x: 70, y: 5, size: 22, opacity: .6, rot: 10, cIdx: 1 },
  { x: 50, y: 92, size: 35, opacity: .4, rot: 0, cIdx: 2 },
  { x: 20, y: 30, size: 15, opacity: .5, rot: -15, cIdx: 0 },
  { x: 80, y: 35, size: 25, opacity: .3, rot: 30, cIdx: 1 },
  { x: 25, y: 70, size: 28, opacity: .4, rot: -25, cIdx: 2 },
  { x: 75, y: 65, size: 20, opacity: .6, rot: 15, cIdx: 0 },
  { x: 55, y: 2, size: 15, opacity: .5, rot: 5, cIdx: 1 },
  { x: 15, y: 55, size: 30, opacity: .4, rot: -45, cIdx: 2 }
];

const HEART_COLORS = ["rgb(255, 150, 170)", "rgb(255, 120, 150)", "rgb(255, 180, 200)"];

const EE_DAISIES = [
  { x: 15, y: 15, size: 25, opacity: .5, rot: 10 },
  { x: 80, y: 25, size: 30, opacity: .4, rot: 45 },
  { x: 25, y: 85, size: 35, opacity: .6, rot: 15 },
  { x: 75, y: 85, size: 40, opacity: .5, rot: 30 },
  { x: 45, y: 10, size: 20, opacity: .4, rot: 5 },
  { x: 10, y: 60, size: 30, opacity: .5, rot: 60 },
  { x: 90, y: 40, size: 25, opacity: .4, rot: 20 },
  { x: 50, y: 80, size: 45, opacity: .35, rot: -10 },
  { x: 65, y: 55, size: 28, opacity: .6, rot: -25 },
  { x: 30, y: 40, size: 22, opacity: .5, rot: 0 }
];

const DE_SPARKLES = [
  { x: 15, y: 20, size: 12, opacity: .4, rot: 10, cIdx: 0 },
  { x: 80, y: 10, size: 10, opacity: .5, rot: 45, cIdx: 1 },
  { x: 10, y: 75, size: 15, opacity: .3, rot: -15, cIdx: 0 },
  { x: 90, y: 80, size: 14, opacity: .4, rot: 30, cIdx: 1 },
  { x: 40, y: 15, size: 8, opacity: .5, rot: 0, cIdx: 0 },
  { x: 60, y: 85, size: 10, opacity: .4, rot: -20, cIdx: 1 },
  { x: 5, y: 35, size: 12, opacity: .5, rot: 15, cIdx: 0 },
  { x: 95, y: 45, size: 9, opacity: .3, rot: 60, cIdx: 1 },
  { x: 30, y: 90, size: 11, opacity: .5, rot: -5, cIdx: 0 },
  { x: 70, y: 25, size: 15, opacity: .4, rot: 25, cIdx: 1 }
];

const SPARKLE_COLORS = ["rgb(255, 255, 255)", "rgb(255, 240, 245)"];

const WE_JELLYS = [
  { x: 10, y: 20, size: 5, rot: -10, baseDelay: 0, baseDur: 5 },
  { x: 85, y: 15, size: 6.3, rot: 15, baseDelay: 1, baseDur: 6 },
  { x: 15, y: 75, size: 4.2, rot: 5, baseDelay: 2, baseDur: 4.5 },
  { x: 80, y: 80, size: 5.3, rot: -15, baseDelay: .5, baseDur: 7 },
  { x: 45, y: 40, size: 6.7, rot: -5, baseDelay: 1.5, baseDur: 5.5 },
  { x: 55, y: 85, size: 3.7, rot: 10, baseDelay: 2.5, baseDur: 6.5 }
];

const UE_BUBBLES = [
  { x: 5, y: 90, size: 2, baseDelay: 0, baseDur: 6 },
  { x: 12, y: 30, size: 3, baseDelay: 1.5, baseDur: 8 },
  { x: 25, y: 80, size: 1.7, baseDelay: 3, baseDur: 5 },
  { x: 35, y: 15, size: 2.5, baseDelay: .5, baseDur: 7 },
  { x: 45, y: 95, size: 3.3, baseDelay: 2, baseDur: 9 },
  { x: 60, y: 60, size: 2.3, baseDelay: 4, baseDur: 6.5 },
  { x: 75, y: 25, size: 1.8, baseDelay: 1, baseDur: 5.5 },
  { x: 85, y: 85, size: 2.7, baseDelay: 2.5, baseDur: 7.5 },
  { x: 92, y: 45, size: 3.2, baseDelay: .2, baseDur: 8.5 },
  { x: 50, y: 10, size: 2.2, baseDelay: 3.5, baseDur: 6 },
  { x: 8, y: 65, size: 1.5, baseDelay: 1.8, baseDur: 5 },
  { x: 88, y: 5, size: 2.5, baseDelay: 4.5, baseDur: 7 },
  { x: 15, y: 85, size: 10, baseDelay: .5, baseDur: 10 },
  { x: 75, y: 35, size: 12, baseDelay: 2, baseDur: 12 },
  { x: 12, y: 8, size: 9, baseDelay: 1, baseDur: 11 },
  { x: 85, y: 75, size: 8.5, baseDelay: 3, baseDur: 9 }
];

const QE_FLARES = [
  { x: 0, y: 0, size: 25, opacity: .25 },
  { x: 100, y: 0, size: 20, opacity: .2 },
  { x: 0, y: 100, size: 30, opacity: .15 },
  { x: 100, y: 100, size: 23, opacity: .2 }
];

// App State
let currentFilter = "regular";
let capturedPhotos = [];
let webcamStream = null;
let countdownInterval = null;
let activeView = "home"; // "home" or "booth"
let boothViewPanel = "idle"; // "idle", "developing", "result", "error"

// DOM Selectors
const homeView = document.getElementById("home-view");
const boothView = document.getElementById("booth-view");
const boothIdlePanel = document.getElementById("booth-idle-panel");
const boothDevelopingPanel = document.getElementById("booth-developing-panel");
const boothResultPanel = document.getElementById("booth-result-panel");
const boothErrorPanel = document.getElementById("booth-error-panel");

const beginSessionBtn = document.getElementById("begin-session-btn");
const abortSessionLink = document.getElementById("abort-session-link");
const newSessionBtn = document.getElementById("new-session-btn");
const downloadPrintBtn = document.getElementById("download-print-btn");
const shutterTriggerBtn = document.getElementById("shutter-trigger-btn");
const capturingIndicator = document.getElementById("capturing-indicator");
const retryCameraBtn = document.getElementById("retry-camera-btn");

const webcamVideo = document.getElementById("webcam-video");
const webcamLoading = document.getElementById("webcam-loading");
const countdownOverlay = document.getElementById("countdown-overlay");
const countdownNumber = document.getElementById("countdown-number");
const flashOverlay = document.getElementById("flash-overlay");
const loadingBarFill = document.getElementById("loading-bar-fill");
const photoCanvas = document.getElementById("photo-canvas");
const filmSlotsContainer = document.getElementById("film-slots");
const statusTextCount = document.getElementById("status-text-count");

const filterOverlayVintageBw = document.getElementById("filter-overlay-vintage-bw");
const filterOverlayMothersDay = document.getElementById("filter-overlay-mothersday");
const filterOverlayJellyfish = document.getElementById("filter-overlay-jellyfish");

// View Transitions
function switchView(viewName) {
  activeView = viewName;
  if (viewName === "home") {
    homeView.style.display = "flex";
    boothView.style.display = "none";
    stopWebcam();
  } else if (viewName === "booth") {
    homeView.style.display = "none";
    boothView.style.display = "flex";
    switchBoothPanel("idle");
    startWebcam();
  }
}

function switchBoothPanel(panelName) {
  boothViewPanel = panelName;
  boothIdlePanel.style.display = panelName === "idle" ? "flex" : "none";
  boothDevelopingPanel.style.display = panelName === "developing" ? "flex" : "none";
  boothResultPanel.style.display = panelName === "result" ? "flex" : "none";
  boothErrorPanel.style.display = panelName === "error" ? "flex" : "none";
}

// Webcam stream handling
async function startWebcam() {
  webcamLoading.style.display = "flex";
  webcamVideo.classList.add("hidden");
  switchBoothPanel("idle");

  if (webcamStream) {
    stopWebcam();
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    });
    webcamStream = stream;
    webcamVideo.srcObject = stream;
    webcamLoading.style.display = "none";
    webcamVideo.classList.remove("hidden");
  } catch (err) {
    console.error("Camera access error:", err);
    document.getElementById("booth-error-message").innerText = err instanceof Error ? err.message : "Failed to access camera. Please check permissions.";
    switchBoothPanel("error");
  }
}

function stopWebcam() {
  if (webcamStream) {
    webcamStream.getTracks().forEach(track => track.stop());
    webcamStream = null;
  }
  webcamVideo.srcObject = null;
}

// Live Video filters
function getCSSFilter(filterId) {
  switch (filterId) {
    case "regular": return "sepia(0.2) contrast(1.1) saturate(0.9)";
    case "bw": return "grayscale(1) contrast(1.2) brightness(1.05)";
    case "cyberpunk": return "saturate(1.6) contrast(1.25) hue-rotate(200deg) brightness(1.05)";
    case "vintage_bw": return "grayscale(1) contrast(1.15) brightness(0.95) sepia(0.15)";
    case "mothers_day": return "brightness(1.08) contrast(0.95) saturate(1.1) sepia(0.08)";
    case "jellyfish": return "brightness(1.05) contrast(1.05) saturate(1.15) hue-rotate(5deg)";
    default: return "none";
  }
}

function applyLiveFilter(filterId) {
  currentFilter = filterId;
  webcamVideo.style.filter = getCSSFilter(filterId);

  // Toggle overlay visual components in viewfinder
  filterOverlayVintageBw.style.display = filterId === "vintage_bw" ? "block" : "none";
  filterOverlayMothersDay.style.display = filterId === "mothers_day" ? "block" : "none";
  filterOverlayJellyfish.style.display = filterId === "jellyfish" ? "block" : "none";

  // Highlight chosen filters in panel
  document.querySelectorAll(".filter-option").forEach(btn => {
    if (btn.getAttribute("data-filter") === filterId) {
      btn.classList.add("selected");
      const indicator = btn.querySelector(".selected-indicator");
      if (indicator) indicator.style.display = "block";
    } else {
      btn.classList.remove("selected");
      const indicator = btn.querySelector(".selected-indicator");
      if (indicator) indicator.style.display = "none";
    }
  });
}

// Render Star B&W elements
function initStars() {
  const container = document.getElementById("stars-container");
  container.innerHTML = "";
  SE_STARS.forEach((star, idx) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "star-element");
    svg.setAttribute("viewBox", "0 0 10 10");
    svg.setAttribute("fill", "white");
    svg.style.left = `${star.x}%`;
    svg.style.top = `${star.y}%`;
    svg.style.width = `${star.size}px`;
    svg.style.height = `${star.size}px`;
    svg.style.opacity = star.opacity;
    svg.style.transform = `translate(-50%, -50%) rotate(${star.rot}deg)`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z");
    svg.appendChild(path);
    container.appendChild(svg);
  });
}

// Render Mother's day overlay elements
function initMothersDay() {
  const heartsCon = document.getElementById("hearts-container");
  const daisiesCon = document.getElementById("daisies-container");
  const sparklesCon = document.getElementById("sparkles-container");

  heartsCon.innerHTML = "";
  daisiesCon.innerHTML = "";
  sparklesCon.innerHTML = "";

  PE_HEARTS.forEach((heart, idx) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "overlay-element");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.style.left = `${heart.x}%`;
    svg.style.top = `${heart.y}%`;
    svg.style.width = `${heart.size}px`;
    svg.style.height = `${heart.size}px`;
    svg.style.opacity = heart.opacity;
    svg.style.fill = HEART_COLORS[heart.cIdx];
    svg.style.transform = `translate(-50%, -50%) rotate(${heart.rot}deg)`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z");
    svg.appendChild(path);
    heartsCon.appendChild(svg);
  });

  EE_DAISIES.forEach((daisy, idx) => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "overlay-element");
    wrapper.style.left = `${daisy.x}%`;
    wrapper.style.top = `${daisy.y}%`;
    wrapper.style.width = `${daisy.size}px`;
    wrapper.style.height = `${daisy.size}px`;
    wrapper.style.opacity = daisy.opacity;
    wrapper.style.transform = `translate(-50%, -50%) rotate(${daisy.rot}deg)`;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("fill", "white");

    [0, 60, 120].forEach(deg => {
      const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      ellipse.setAttribute("cx", "12");
      ellipse.setAttribute("cy", "12");
      ellipse.setAttribute("rx", "3");
      ellipse.setAttribute("ry", "10");
      ellipse.setAttribute("transform", `rotate(${deg} 12 12)`);
      g.appendChild(ellipse);
    });

    const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    center.setAttribute("cx", "12");
    center.setAttribute("cy", "12");
    center.setAttribute("r", "4.5");
    center.setAttribute("fill", "rgb(255, 220, 80)");

    svg.appendChild(g);
    svg.appendChild(center);
    wrapper.appendChild(svg);
    daisiesCon.appendChild(wrapper);
  });

  DE_SPARKLES.forEach((spark, idx) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "overlay-element");
    svg.setAttribute("viewBox", "0 0 10 10");
    svg.style.left = `${spark.x}%`;
    svg.style.top = `${spark.y}%`;
    svg.style.width = `${spark.size}px`;
    svg.style.height = `${spark.size}px`;
    svg.style.opacity = spark.opacity;
    svg.style.fill = SPARKLE_COLORS[spark.cIdx];
    svg.style.transform = `translate(-50%, -50%) rotate(${spark.rot}deg)`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z");
    svg.appendChild(path);
    sparklesCon.appendChild(svg);
  });
}

// Render Jellyfish/Underwater overlay elements
function initJellyfish(animated = true) {
  const flaresCon = document.getElementById("lens-flares-container");
  const bubblesCon = document.getElementById("bubbles-container");
  const jellysCon = document.getElementById("jellyfish-graphics-container");
  const grassSvg = document.getElementById("grass-svg");

  flaresCon.innerHTML = "";
  bubblesCon.innerHTML = "";
  jellysCon.innerHTML = "";
  grassSvg.innerHTML = "";

  // 1. Flares
  QE_FLARES.forEach((flare, idx) => {
    const d = document.createElement("div");
    d.setAttribute("class", "lens-flare");
    d.style.left = `${flare.x}%`;
    d.style.top = `${flare.y}%`;
    d.style.width = `${flare.size}%`;
    d.style.aspectRatio = "1 / 1";
    d.style.opacity = flare.opacity;
    flaresCon.appendChild(d);
  });

  // 2. Bubbles
  UE_BUBBLES.forEach((bubble, idx) => {
    const d = document.createElement("div");
    d.setAttribute("class", `bubble ${animated ? "bubble-animated" : ""}`);
    d.style.left = `${bubble.x}%`;
    d.style.top = `${bubble.y}%`;
    d.style.width = `${bubble.size}%`;
    d.style.aspectRatio = "1 / 1";
    if (animated) {
      d.style.animationDelay = `${bubble.baseDelay}s`;
      d.style.animationDuration = `${bubble.baseDur}s`;
    }

    const highlight = document.createElement("div");
    highlight.setAttribute("class", "bubble-highlight");
    d.appendChild(highlight);
    bubblesCon.appendChild(d);
  });

  // 3. Jellyfish
  WE_JELLYS.forEach((jelly, idx) => {
    const container = document.createElement("div");
    container.setAttribute("class", `jellyfish-container ${animated ? "jellyfish-container-animated" : ""}`);
    container.style.left = `${jelly.x}%`;
    container.style.top = `${jelly.y}%`;
    container.style.width = `${jelly.size}%`;
    container.style.aspectRatio = "1 / 1.2";
    container.style.transform = `translate(-50%, -50%) rotate(${jelly.rot}deg)`;
    if (animated) {
      container.style.animationDelay = `${jelly.baseDelay}s`;
      container.style.animationDuration = `${jelly.baseDur}s`;
    }

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", `jellyfish-svg ${animated ? "jellyfish-svg-animated" : ""}`);
    svg.setAttribute("viewBox", "0 0 100 120");
    if (animated) {
      svg.style.animationDelay = `${jelly.baseDelay}s`;
      svg.style.animationDuration = `${jelly.baseDur}s`;
    }

    // Gradient definitions inside SVGs
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const linearGrad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    linearGrad.setAttribute("id", `jelly-grad-${idx}`);
    linearGrad.setAttribute("x1", "0%");
    linearGrad.setAttribute("y1", "0%");
    linearGrad.setAttribute("x2", "0%");
    linearGrad.setAttribute("y2", "100%");

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "rgba(135, 206, 235, 0.95)");

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "rgba(0, 206, 209, 0.35)");

    linearGrad.appendChild(stop1);
    linearGrad.appendChild(stop2);
    defs.appendChild(linearGrad);
    svg.appendChild(defs);

    // Tentacles paths
    const paths = [
      "M 30,55 Q 15,85 25,115",
      "M 70,55 Q 85,85 75,115",
      "M 40,57 Q 30,85 40,110",
      "M 60,57 Q 70,85 60,110",
      "M 50,58 Q 45,90 50,118"
    ];

    paths.forEach((p, pIdx) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", p);
      path.setAttribute("stroke", "rgba(0, 100, 220, 0.7)");
      path.setAttribute("stroke-width", pIdx === 4 ? "5" : pIdx >= 2 ? "3" : "4");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linecap", "round");
      svg.appendChild(path);
    });

    // Jelly head
    const head = document.createElementNS("http://www.w3.org/2000/svg", "path");
    head.setAttribute("d", "M 10,55 A 40,40 0 0 1 90,55 Q 50,70 10,55 Z");
    head.setAttribute("fill", `url(#jelly-grad-${idx})`);
    svg.appendChild(head);

    // Highlight reflections
    const refl1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    refl1.setAttribute("cx", "35");
    refl1.setAttribute("cy", "25");
    refl1.setAttribute("rx", "15");
    refl1.setAttribute("ry", "8");
    refl1.setAttribute("transform", "rotate(-25 35 25)");
    refl1.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
    svg.appendChild(refl1);

    const refl2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    refl2.setAttribute("cx", "70");
    refl2.setAttribute("cy", "35");
    refl2.setAttribute("rx", "6");
    refl2.setAttribute("ry", "3");
    refl2.setAttribute("transform", "rotate(20 70 35)");
    refl2.setAttribute("fill", "rgba(255, 255, 255, 0.5)");
    svg.appendChild(refl2);

    container.appendChild(svg);
    jellysCon.appendChild(container);
  });

  // 4. Grass Border blades
  const blades = [];
  const seed = 42; // static seed for initial loading
  for (let c = 0; c < 120; c++) {
    const i = seed + c;
    const h = Math.abs(Math.sin(i * 12.9898));
    const l = Math.abs(Math.sin(i * 78.233));
    const f = Math.abs(Math.sin(i * 45.123));
    const x = (c / 120) * 1000 - 10 + h * 15;
    const height = 30 + l * 60;
    const curve = (f - 0.5) * 40;
    const width = 8 + h * 6;
    let fill;
    if (l > 0.66) fill = "rgba(50, 160, 50, 0.85)";
    else if (l > 0.33) fill = "rgba(80, 200, 80, 0.9)";
    else fill = "rgba(100, 220, 100, 0.95)";
    const hasHighlight = h > 0.4;
    blades.push({ x, height, curve, width, fill, hasHighlight });
  }
  blades.sort((c, i) => {
    const hC = c.height + Math.sin(c.x) * 10;
    const hI = i.height + Math.sin(i.x) * 10;
    return hC - hI; // render shorter grass in back (earlier in SVG)
  });

  blades.forEach(blade => {
    const p = blade.x + blade.curve + blade.width / 2;
    const u = 100 - blade.height;

    const gElement = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${blade.x} 100 Q ${blade.x + blade.curve / 2} ${100 - blade.height / 2} ${p} ${u} Q ${blade.x + blade.width + blade.curve / 2} ${100 - blade.height / 2} ${blade.x + blade.width} 100 Z`);
    path.setAttribute("fill", blade.fill);
    gElement.appendChild(path);

    if (blade.hasHighlight) {
      const highlight = document.createElementNS("http://www.w3.org/2000/svg", "path");
      highlight.setAttribute("d", `M ${blade.x + blade.width * .1} 100 Q ${blade.x + blade.curve / 2} ${100 - blade.height / 2} ${p} ${u + blade.height * .05} Q ${blade.x + blade.curve / 2 + blade.width * .3} ${100 - blade.height / 2} ${blade.x + blade.width * .4} 100 Z`);
      highlight.setAttribute("fill", "rgba(255, 255, 255, 0.35)");
      gElement.appendChild(highlight);
    }

    grassSvg.appendChild(gElement);
  });
}

// Canvas Photo Filtering (Applied when writing frames to canvas: Na function)
function applyCanvasFilter(ctx, canvas, filterId, seed = 0) {
  const w = canvas.width;
  const h = canvas.height;

  switch (filterId) {
    case "regular":
      ctx.fillStyle = "rgba(100, 50, 0, 0.1)";
      ctx.fillRect(0, 0, w, h);
      break;

    case "bw": {
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const grayscaleVal = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        data[i] = grayscaleVal;
        data[i + 1] = grayscaleVal;
        data[i + 2] = grayscaleVal;
      }
      ctx.putImageData(imgData, 0, 0);
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, w, h);
      break;
    }

    case "cyberpunk":
      ctx.fillStyle = "rgba(80, 0, 200, 0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0, 80, 255, 0.06)";
      ctx.fillRect(0, 0, w, h);
      break;

    case "vintage_bw": {
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const grayscaleVal = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        data[i] = grayscaleVal;
        data[i + 1] = grayscaleVal;
        data[i + 2] = grayscaleVal;
      }
      ctx.putImageData(imgData, 0, 0);
      ctx.fillStyle = "rgba(80, 60, 30, 0.08)";
      ctx.fillRect(0, 0, w, h);

      // Draw white dust particles
      const dustWhite = [
        { xRatio: .08, yRatio: .12, r: 1.5, opacity: .35 },
        { xRatio: .23, yRatio: .47, r: 1, opacity: .25 },
        { xRatio: .37, yRatio: .08, r: 2, opacity: .2 },
        { xRatio: .54, yRatio: .31, r: 1, opacity: .3 },
        { xRatio: .61, yRatio: .72, r: 1.5, opacity: .2 },
        { xRatio: .77, yRatio: .19, r: 1, opacity: .28 },
        { xRatio: .83, yRatio: .58, r: 2, opacity: .18 },
        { xRatio: .91, yRatio: .83, r: 1, opacity: .32 },
        { xRatio: .14, yRatio: .66, r: 1, opacity: .22 },
        { xRatio: .46, yRatio: .88, r: 1.5, opacity: .25 },
        { xRatio: .68, yRatio: .44, r: 1, opacity: .15 },
        { xRatio: .29, yRatio: .91, r: 1, opacity: .2 },
        { xRatio: .73, yRatio: .05, r: 1, opacity: .3 },
        { xRatio: .05, yRatio: .38, r: 2, opacity: .15 },
        { xRatio: .96, yRatio: .27, r: 1, opacity: .25 },
        { xRatio: .52, yRatio: .55, r: 1.5, opacity: .18 },
        { xRatio: .39, yRatio: .34, r: 1, opacity: .22 },
        { xRatio: .87, yRatio: .76, r: 1, opacity: .2 },
        { xRatio: .17, yRatio: .82, r: 2, opacity: .17 },
        { xRatio: .64, yRatio: .97, r: 1, opacity: .25 }
      ];

      const dustBlack = [
        { xRatio: .18, yRatio: .55, r: 1, opacity: .3 },
        { xRatio: .42, yRatio: .22, r: 1.5, opacity: .2 },
        { xRatio: .65, yRatio: .78, r: 1, opacity: .25 },
        { xRatio: .85, yRatio: .4, r: 1, opacity: .2 },
        { xRatio: .5, yRatio: .6, r: 1, opacity: .18 },
        { xRatio: .31, yRatio: .77, r: 1, opacity: .22 },
        { xRatio: .78, yRatio: .93, r: 1.5, opacity: .15 },
        { xRatio: .11, yRatio: .43, r: 1, opacity: .2 },
        { xRatio: .59, yRatio: .15, r: 1, opacity: .25 },
        { xRatio: .93, yRatio: .62, r: 1.5, opacity: .18 }
      ];

      dustWhite.forEach(pt => {
        const offsetSin = seed ? Math.sin(seed * pt.xRatio * 3) * 0.05 : 0;
        const offsetCos = seed ? Math.cos(seed * pt.yRatio * 7) * 0.05 : 0;
        const cx = Math.max(0.02, Math.min(0.98, pt.xRatio + offsetSin)) * w;
        const cy = Math.max(0.02, Math.min(0.98, pt.yRatio + offsetCos)) * h;

        ctx.beginPath();
        ctx.arc(cx, cy, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pt.opacity})`;
        ctx.fill();
      });

      dustBlack.forEach(pt => {
        const offsetSin = seed ? Math.sin(seed * pt.xRatio * 4) * 0.04 : 0;
        const offsetCos = seed ? Math.cos(seed * pt.yRatio * 6) * 0.04 : 0;
        const cx = Math.max(0.02, Math.min(0.98, pt.xRatio + offsetSin)) * w;
        const cy = Math.max(0.02, Math.min(0.98, pt.yRatio + offsetCos)) * h;

        ctx.beginPath();
        ctx.arc(cx, cy, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${pt.opacity})`;
        ctx.fill();
      });

      // Draw white starry shapes matching SE_STARS
      SE_STARS.forEach((star, sIdx) => {
        const offsetSin = seed ? Math.sin(seed * sIdx * 3) * 5 : 0;
        const offsetCos = seed ? Math.cos(seed * sIdx * 7) * 5 : 0;
        const cx = Math.max(2, Math.min(98, star.x + offsetSin / w * 100)) / 100 * w;
        const cy = Math.max(2, Math.min(98, star.y + offsetCos / h * 100)) / 100 * h;
        const size = star.size + (seed % 3);
        const rot = star.rot + seed * 15;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(0, 0, size, 0);
        ctx.quadraticCurveTo(0, 0, 0, size);
        ctx.quadraticCurveTo(0, 0, -size, 0);
        ctx.quadraticCurveTo(0, 0, 0, -size);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        ctx.restore();
      });
      break;
    }

    case "mothers_day": {
      ctx.fillStyle = "rgba(255, 180, 200, 0.08)";
      ctx.fillRect(0, 0, w, h);

      // 1. Draw hearts
      const drawHeart = (cx, cy, size, fill, rot) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot * Math.PI / 180);
        ctx.beginPath();
        const g = size * 0.3;
        ctx.moveTo(0, g);
        ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, g);
        ctx.bezierCurveTo(-size / 2, (size + g) / 2, 0, (size + g) / 2, 0, size);
        ctx.bezierCurveTo(0, (size + g) / 2, size / 2, (size + g) / 2, size / 2, g);
        ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, g);
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.restore();
      };

      PE_HEARTS.forEach((heart, idx) => {
        const offsetSin = seed ? Math.sin(seed * idx * 3) * 5 : 0;
        const offsetCos = seed ? Math.cos(seed * idx * 7) * 5 : 0;
        const cx = Math.max(2, Math.min(98, heart.x + offsetSin / w * 100)) / 100 * w;
        const cy = Math.max(2, Math.min(98, heart.y + offsetCos / h * 100)) / 100 * h;
        const size = heart.size + (seed % 4);
        const rot = heart.rot + seed * 5;

        drawHeart(cx, cy, size, HEART_COLORS[heart.cIdx], rot);
      });

      // 2. Draw daisies
      const drawDaisy = (cx, cy, size, opacity, rot) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot * Math.PI / 180);
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "#ffffff";
        for (let g = 0; g < 3; g++) {
          ctx.beginPath();
          ctx.ellipse(0, 0, size * 0.2, size * 0.5, g * 60 * Math.PI / 180, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255, 220, 80)";
        ctx.fill();
        ctx.restore();
      };

      EE_DAISIES.forEach((daisy, idx) => {
        const offsetSin = seed ? Math.sin(seed * idx * 4) * 4 : 0;
        const offsetCos = seed ? Math.cos(seed * idx * 6) * 4 : 0;
        const cx = Math.max(2, Math.min(98, daisy.x + offsetSin / w * 100)) / 100 * w;
        const cy = Math.max(2, Math.min(98, daisy.y + offsetCos / h * 100)) / 100 * h;
        const size = daisy.size + (seed % 5);
        const rot = daisy.rot + seed * 8;

        drawDaisy(cx, cy, size, daisy.opacity, rot);
      });

      // 3. Draw sparkles
      const drawSparkle = (cx, cy, size, opacity, rot) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(0, 0, size, 0);
        ctx.quadraticCurveTo(0, 0, 0, size);
        ctx.quadraticCurveTo(0, 0, -size, 0);
        ctx.quadraticCurveTo(0, 0, 0, -size);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 240, 245, ${opacity})`;
        ctx.fill();
        ctx.restore();
      };

      DE_SPARKLES.forEach((spark, idx) => {
        const offsetSin = seed ? Math.sin(seed * idx * 5) * 4 : 0;
        const offsetCos = seed ? Math.cos(seed * idx * 4) * 4 : 0;
        const cx = Math.max(2, Math.min(98, spark.x + offsetSin / w * 100)) / 100 * w;
        const cy = Math.max(2, Math.min(98, spark.y + offsetCos / h * 100)) / 100 * h;
        const size = spark.size + (seed % 3);
        const rot = spark.rot + seed * 10;

        drawSparkle(cx, cy, size, spark.opacity, rot);
      });
      break;
    }

    case "jellyfish": {
      ctx.fillStyle = "rgba(0, 180, 210, 0.06)";
      ctx.fillRect(0, 0, w, h);

      // 1. Draw bubbles
      const drawBubble = (cx, cy, radius, opacity) => {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const grad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, 0, cx, cy, radius);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        grad.addColorStop(0.5, "rgba(0, 206, 209, 0.3)");
        grad.addColorStop(1, "rgba(0, 191, 255, 0.1)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx - radius * 0.4, cy - radius * 0.4, radius * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
        ctx.restore();
      };

      const staticBubbles = [
        { x: .1, y: .8, r: 16, o: .2 },
        { x: .8, y: .2, r: 24, o: .15 },
        { x: .3, y: .3, r: 12, o: .25 },
        { x: .7, y: .9, r: 20, o: .2 },
        { x: .9, y: .6, r: 30, o: .15 },
        { x: .2, y: .5, r: 14, o: .3 }
      ];
      staticBubbles.forEach(b => {
        drawBubble(b.x * w, b.y * h, b.r, b.o);
      });

      // 2. Draw lens flares
      const drawLensFlare = (cx, cy, radius, opacity) => {
        ctx.save();
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(255, 255, 255, ${opacity * 2})`);
        grad.addColorStop(0.5, `rgba(135, 206, 235, ${opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      const staticFlares = [
        { x: .15, y: .15, r: 120, o: .1 },
        { x: .85, y: .85, r: 160, o: .08 }
      ];
      staticFlares.forEach(f => {
        drawLensFlare(f.x * w, f.y * h, f.r, f.o);
      });
      break;
    }
  }
}

// Generate image from video stream
function captureFrame() {
  if (!webcamVideo || !photoCanvas) return null;
  const vWidth = webcamVideo.videoWidth;
  const vHeight = webcamVideo.videoHeight;

  photoCanvas.width = vWidth;
  photoCanvas.height = vHeight;
  const ctx = photoCanvas.getContext("2d");
  if (!ctx) return null;

  // Mirror canvas draw since video feed is mirrored
  ctx.translate(vWidth, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(webcamVideo, 0, 0, vWidth, vHeight);
  ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scale/translate

  // Apply photo filter canvas modifications
  applyCanvasFilter(ctx, photoCanvas, currentFilter, capturedPhotos.length + 1);

  return photoCanvas.toDataURL("image/jpeg", 0.85);
}

// Initiate photo sequence capture
async function initiatePhotoSequence() {
  // Disable controls
  shutterTriggerBtn.style.display = "none";
  capturingIndicator.style.display = "flex";
  document.querySelectorAll(".filter-option").forEach(btn => btn.setAttribute("disabled", "true"));
  abortSessionLink.style.pointerEvents = "none";
  abortSessionLink.style.opacity = ".5";

  capturedPhotos = [];
  updateFilmSlots();

  for (let v = 0; v < 4; v++) {
    // Countdown
    countdownOverlay.style.display = "flex";
    for (let T = 3; T > 0; T--) {
      countdownNumber.innerText = T;
      // Re-trigger CSS pop-in animation
      countdownNumber.style.animation = "none";
      countdownNumber.offsetHeight; // Reflow
      countdownNumber.style.animation = "pop-in var(--animation-duration-fast) ease-out";

      await new Promise(res => setTimeout(res, 1000));
    }
    countdownOverlay.style.display = "none";

    // Toggle active filter overlays off during flash (similar to React logic)
    toggleFilterOverlays(false);

    // Shutter capture (flash)
    flashOverlay.style.display = "block";
    await new Promise(res => setTimeout(res, 150));

    // Capture photo frame
    const frameData = captureFrame();
    if (frameData) {
      capturedPhotos.push(frameData);
      updateFilmSlots();
    }

    flashOverlay.style.display = "none";

    // Toggle active filter overlays back on
    toggleFilterOverlays(true);

    // Wait between captures (except for last capture)
    if (v < 3) {
      await new Promise(res => setTimeout(res, 800));
    }
  }

  // Reset sequence indicators
  capturingIndicator.style.display = "none";
  shutterTriggerBtn.style.display = "inline-flex";
  document.querySelectorAll(".filter-option").forEach(btn => btn.removeAttribute("disabled"));
  abortSessionLink.style.pointerEvents = "auto";
  abortSessionLink.style.opacity = "1";

  // Transition to Developing Overlay screen
  startDevelopingAnimation();
}

function toggleFilterOverlays(visible) {
  if (visible) {
    filterOverlayVintageBw.style.display = currentFilter === "vintage_bw" ? "block" : "none";
    filterOverlayMothersDay.style.display = currentFilter === "mothers_day" ? "block" : "none";
    filterOverlayJellyfish.style.display = currentFilter === "jellyfish" ? "block" : "none";
  } else {
    filterOverlayVintageBw.style.display = "none";
    filterOverlayMothersDay.style.display = "none";
    filterOverlayJellyfish.style.display = "none";
  }
}

// Update exposed indicators
function updateFilmSlots() {
  document.querySelectorAll(".film-slot").forEach((slot, idx) => {
    if (idx < capturedPhotos.length) {
      slot.classList.add("filled");
    } else {
      slot.classList.remove("filled");
    }
  });
  statusTextCount.innerText = `${capturedPhotos.length} / 4 EXPOSED`;
}

// Start Safe-light Developing screen transition
function startDevelopingAnimation() {
  switchBoothPanel("developing");
  loadingBarFill.classList.remove("loading-bar-fill-animate");
  loadingBarFill.offsetHeight; // trigger reflow
  loadingBarFill.classList.add("loading-bar-fill-animate");

  setTimeout(() => {
    renderPhotoStripPrint();
    switchBoothPanel("result");
  }, 4000);
}

// CSS Filters for Strip Print Photos (Fa function logic)
function getStripCSSFilter(filterId) {
  switch (filterId) {
    case "regular": return "grayscale(20%) sepia(30%) contrast(1.1) brightness(0.95)";
    case "bw": return "grayscale(1) contrast(1.15) brightness(1.0)";
    case "cyberpunk": return "saturate(1.6) contrast(1.25) hue-rotate(200deg) brightness(1.05)";
    case "vintage_bw": return "grayscale(1) contrast(1.1) brightness(0.95) sepia(0.1)";
    case "mothers_day": return "brightness(1.05) contrast(0.95) saturate(1.1) sepia(0.05)";
    case "jellyfish": return "brightness(1.05) contrast(1.05) saturate(1.15) hue-rotate(5deg)";
    default: return "none";
  }
}

// Render dynamic strip preview matching reference layout
function renderPhotoStripPrint() {
  const strip = document.getElementById("photo-strip");
  const container = document.getElementById("strip-inner-photos");
  container.innerHTML = "";

  // Strip background theme
  if (currentFilter === "mothers_day") {
    strip.style.backgroundColor = "#fef0f3"; // Pinkish paper base
  } else {
    strip.style.backgroundColor = "#f4ece4"; // Cream retro paper base
  }

  capturedPhotos.forEach((photoUrl, idx) => {
    const photoFrame = document.createElement("div");
    photoFrame.setAttribute("class", "photo-frame");

    // Img tag
    const img = document.createElement("img");
    img.src = photoUrl;
    img.alt = `Capture ${idx + 1}`;
    img.style.filter = getStripCSSFilter(currentFilter);
    photoFrame.appendChild(img);

    // Photo inner shadows
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "photo-overlay");
    photoFrame.appendChild(overlay);

    // Append filter graphics to photo frame (non-animated)
    if (currentFilter === "vintage_bw") {
      const starsWrapper = document.createElement("div");
      starsWrapper.setAttribute("class", "stars-container");

      SE_STARS.forEach((star, sIdx) => {
        const seed = idx + 1;
        const offsetSin = Math.sin(seed * sIdx * 3) * 5;
        const offsetCos = Math.cos(seed * sIdx * 7) * 5;
        // Keep in boundaries
        const cx = Math.max(2, Math.min(98, star.x + offsetSin));
        const cy = Math.max(2, Math.min(98, star.y + offsetCos));
        const size = star.size + (seed % 3);
        const rot = star.rot + seed * 15;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "star-element");
        svg.setAttribute("viewBox", "0 0 10 10");
        svg.setAttribute("fill", "white");
        svg.style.left = `${cx}%`;
        svg.style.top = `${cy}%`;
        svg.style.width = `${size}px`;
        svg.style.height = `${size}px`;
        svg.style.opacity = star.opacity;
        svg.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z");
        svg.appendChild(path);
        starsWrapper.appendChild(svg);
      });
      photoFrame.appendChild(starsWrapper);
    }

    else if (currentFilter === "mothers_day") {
      const mdWrapper = document.createElement("div");
      mdWrapper.setAttribute("class", "mothersday-overlay");
      mdWrapper.style.background = "none";

      const seed = idx + 1;

      // Hearts
      PE_HEARTS.forEach((heart, hIdx) => {
        const offsetSin = Math.sin(seed * hIdx * 3) * 5;
        const offsetCos = Math.cos(seed * hIdx * 7) * 5;
        const cx = Math.max(2, Math.min(98, heart.x + offsetSin));
        const cy = Math.max(2, Math.min(98, heart.y + offsetCos));
        const size = heart.size + (seed % 4);
        const rot = heart.rot + seed * 5;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "overlay-element");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.style.left = `${cx}%`;
        svg.style.top = `${cy}%`;
        svg.style.width = `${size}px`;
        svg.style.height = `${size}px`;
        svg.style.opacity = heart.opacity;
        svg.style.fill = HEART_COLORS[heart.cIdx];
        svg.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z");
        svg.appendChild(path);
        mdWrapper.appendChild(svg);
      });

      // Daisies
      EE_DAISIES.forEach((daisy, dIdx) => {
        const offsetSin = Math.sin(seed * dIdx * 4) * 4;
        const offsetCos = Math.cos(seed * dIdx * 6) * 4;
        const cx = Math.max(2, Math.min(98, daisy.x + offsetSin));
        const cy = Math.max(2, Math.min(98, daisy.y + offsetCos));
        const size = daisy.size + (seed % 5);
        const rot = daisy.rot + seed * 8;

        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "overlay-element");
        wrapper.style.left = `${cx}%`;
        wrapper.style.top = `${cy}%`;
        wrapper.style.width = `${size}px`;
        wrapper.style.height = `${size}px`;
        wrapper.style.opacity = daisy.opacity;
        wrapper.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 24 24");

        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("fill", "white");

        [0, 60, 120].forEach(deg => {
          const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
          ellipse.setAttribute("cx", "12");
          ellipse.setAttribute("cy", "12");
          ellipse.setAttribute("rx", "3");
          ellipse.setAttribute("ry", "10");
          ellipse.setAttribute("transform", `rotate(${deg} 12 12)`);
          g.appendChild(ellipse);
        });

        const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        center.setAttribute("cx", "12");
        center.setAttribute("cy", "12");
        center.setAttribute("r", "4.5");
        center.setAttribute("fill", "rgb(255, 220, 80)");

        svg.appendChild(g);
        svg.appendChild(center);
        wrapper.appendChild(svg);
        mdWrapper.appendChild(wrapper);
      });

      // Sparkles
      DE_SPARKLES.forEach((spark, sIdx) => {
        const offsetSin = Math.sin(seed * sIdx * 5) * 4;
        const offsetCos = Math.cos(seed * sIdx * 4) * 4;
        const cx = Math.max(2, Math.min(98, spark.x + offsetSin));
        const cy = Math.max(2, Math.min(98, spark.y + offsetCos));
        const size = spark.size + (seed % 3);
        const rot = spark.rot + seed * 10;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "overlay-element");
        svg.setAttribute("viewBox", "0 0 10 10");
        svg.style.left = `${cx}%`;
        svg.style.top = `${cy}%`;
        svg.style.width = `${size}px`;
        svg.style.height = `${size}px`;
        svg.style.opacity = spark.opacity;
        svg.style.fill = SPARKLE_COLORS[spark.cIdx];
        svg.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z");
        svg.appendChild(path);
        mdWrapper.appendChild(svg);
      });

      photoFrame.appendChild(mdWrapper);
    }

    else if (currentFilter === "jellyfish") {
      const jfWrapper = document.createElement("div");
      jfWrapper.setAttribute("class", "jellyfish-overlay");
      jfWrapper.style.background = "none";

      const seed = idx + 1;

      // Bubbles
      UE_BUBBLES.forEach((bubble, bIdx) => {
        const offsetSin = Math.sin(seed * bIdx * 3) * 5;
        const offsetCos = Math.cos(seed * bIdx * 7) * 5;
        const cx = Math.max(2, Math.min(98, bubble.x + offsetSin));
        const cy = Math.max(2, Math.min(98, bubble.y + offsetCos));
        const size = bubble.size + (seed % 4) * .2;

        const d = document.createElement("div");
        d.setAttribute("class", "bubble");
        d.style.left = `${cx}%`;
        d.style.top = `${cy}%`;
        d.style.width = `${size}%`;
        d.style.aspectRatio = "1 / 1";

        const highlight = document.createElement("div");
        highlight.setAttribute("class", "bubble-highlight");
        d.appendChild(highlight);
        jfWrapper.appendChild(d);
      });

      // Flares
      QE_FLARES.forEach((flare, fIdx) => {
        const offsetSin = Math.sin(seed * fIdx) * 10;
        const offsetCos = Math.cos(seed * fIdx) * 10;
        const cx = Math.max(-10, Math.min(110, flare.x + offsetSin));
        const cy = Math.max(-10, Math.min(110, flare.y + offsetCos));
        const size = flare.size + (seed % 3);

        const d = document.createElement("div");
        d.setAttribute("class", "lens-flare");
        d.style.left = `${cx}%`;
        d.style.top = `${cy}%`;
        d.style.width = `${size}%`;
        d.style.aspectRatio = "1 / 1";
        d.style.opacity = flare.opacity;
        jfWrapper.appendChild(d);
      });

      photoFrame.appendChild(jfWrapper);
    }

    container.appendChild(photoFrame);

    // Mother's Day interstitial gap text
    if (currentFilter === "mothers_day" && idx < 3) {
      const gapDiv = document.createElement("div");
      gapDiv.setAttribute("class", "mothersday-gap-text");
      if (idx === 0) gapDiv.innerText = "Happy";
      if (idx === 1) gapDiv.innerText = "Mother's";
      if (idx === 2) gapDiv.innerText = "Day ♥";
      container.appendChild(gapDiv);
    }
  });

  // Stamp Footer data
  const dateStr = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date()).toUpperCase();

  const footer = document.createElement("div");
  footer.setAttribute("class", "footer-data");

  const logo = document.createElement("div");
  logo.setAttribute("class", "logo-mark");
  logo.innerText = "studio jass";

  const ts = document.createElement("div");
  ts.setAttribute("class", "timestamp");
  ts.innerText = dateStr;

  footer.appendChild(logo);
  footer.appendChild(ts);
  container.appendChild(footer);
}

// Download final strip print using html-to-image library
async function downloadPrint() {
  const strip = document.getElementById("photo-strip");
  if (!strip) return;

  downloadPrintBtn.setAttribute("disabled", "true");
  downloadPrintBtn.innerText = "PROCESSING...";

  try {
    // Generate high resolution PNG using pixelRatio = 2
    const dataUrl = await htmlToImage.toPng(strip, { quality: 0.95, pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = `photobooth-strip-${new Date().getTime()}.png`;
    link.href = dataUrl;
    link.click();
  } catch (err) {
    console.error("Failed to export strip:", err);
    alert("Failed to save image. Please try again.");
  } finally {
    downloadPrintBtn.removeAttribute("disabled");
    downloadPrintBtn.innerText = "EXTRACT PRINT";
  }
}

// Generate dynamic Filter lists for UI (desktop and mobile)
function renderFilterLists() {
  const desktopContainer = document.getElementById("filter-list-desktop");
  const inlineContainer = document.getElementById("filter-list-inline");

  desktopContainer.innerHTML = "";
  inlineContainer.innerHTML = "";

  FILTERS.forEach(f => {
    // Create button helper
    const createBtn = () => {
      const btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "filter-option");
      btn.setAttribute("data-filter", f.id);

      const dot = document.createElement("span");
      dot.setAttribute("class", "accent-dot");
      dot.style.backgroundColor = f.accentColor;

      const content = document.createElement("span");
      content.setAttribute("class", "filter-content");

      const label = document.createElement("span");
      label.setAttribute("class", "filter-label");
      label.innerText = f.label;

      const desc = document.createElement("span");
      desc.setAttribute("class", "filter-description");
      desc.innerText = f.description;

      content.appendChild(label);
      content.appendChild(desc);

      btn.appendChild(dot);
      btn.appendChild(content);

      const arrow = document.createElement("span");
      arrow.setAttribute("class", "selected-indicator");
      arrow.innerText = "◀";
      arrow.style.display = "none";
      btn.appendChild(arrow);

      // Click event
      btn.addEventListener("click", () => {
        applyLiveFilter(f.id);
      });

      return btn;
    };

    desktopContainer.appendChild(createBtn());
    inlineContainer.appendChild(createBtn());
  });
}

// Initialize Interactive Events
function initEvents() {
  // Routing buttons
  beginSessionBtn.addEventListener("click", () => switchView("booth"));
  abortSessionLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home");
  });

  // Camera retry
  retryCameraBtn.addEventListener("click", () => startWebcam());

  // Shutter action
  shutterTriggerBtn.addEventListener("click", () => initiatePhotoSequence());

  // Exporter download
  downloadPrintBtn.addEventListener("click", () => downloadPrint());

  // Reset session
  newSessionBtn.addEventListener("click", () => {
    capturedPhotos = [];
    updateFilmSlots();
    switchBoothPanel("idle");
    applyLiveFilter("regular");
  });
}

// Initial Loading
document.addEventListener("DOMContentLoaded", () => {
  // Render filters list
  renderFilterLists();

  // Initialize filter graphical items
  initStars();
  initMothersDay();
  initJellyfish(true);

  // Add listeners
  initEvents();

  // Start on regular filter default
  applyLiveFilter("regular");

  // Default to home page
  switchView("home");
});
