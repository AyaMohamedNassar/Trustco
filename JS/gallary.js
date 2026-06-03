// ══════════════════════════════════════════════════
//  SERVICE DATA — edit images arrays per service
//  Image paths are relative to your project root.
//  Add as many images as you have for each service.
// ══════════════════════════════════════════════════
const SERVICES = {
  "accordion-plastic": {
    name: "أبواب اكورديون بلاستيك",
    nameShort: "اكورديون بلاستيك",
    desc: "أبواب أنيقة وعملية توفر المساحة، مثالية للمنازل والمكاتب والمحلات التجارية بتصميم عصري وسهولة استخدام.",
    icon: "fa-door-open",
    badge: "الأكثر طلباً",
    images: [
      {
        src: "./images/accordion-plastic/Door-1.webp",
        caption: "أبواب اكورديون بلاستيك – نموذج 1",
      },
      {
        src: "./images/accordion-plastic/Door-2.jpg",
        caption: "أبواب اكورديون بلاستيك – نموذج 2",
      },
      {
        src: "./images/accordion-plastic/Door-1.webp",
        caption: "أبواب اكورديون بلاستيك – نموذج 3",
      },
      {
        src: "./images/accordion-plastic/Door-2.jpg",
        caption: "أبواب اكورديون بلاستيك – نموذج 4",
      },
      {
        src: "./images/accordion-plastic/Door-1.webp",
        caption: "أبواب اكورديون بلاستيك – نموذج 5",
      },
      {
        src: "./images/accordion-plastic/Door-2.jpg",
        caption: "أبواب اكورديون بلاستيك – نموذج 6",
      },
      {
        src: "./images/accordion-plastic/Door-1.webp",
        caption: "أبواب اكورديون بلاستيك – نموذج 7",
      },
      {
        src: "./images/accordion-plastic/Door-2.jpg",
        caption: "أبواب اكورديون بلاستيك – نموذج 8",
      },
    ],
  },
  "accordion-leather": {
    name: "أبواب اكورديون جلد",
    nameShort: "اكورديون جلد",
    desc: "أبواب اكورديون مكسوة بالجلد الفاخر، تضيف لمسة راقية ودافئة لأي مساحة داخلية.",
    icon: "fa-door-open",
    badge: "فاخر",
    images: [
      {
        src: "./images/accordion-leather/Door-1.webp",
        caption: "أبواب اكورديون جلد – نموذج 1",
      },
      {
        src: "./images/accordion-leather/Door-2.jpg",
        caption: "أبواب اكورديون جلد – نموذج 2",
      },
      {
        src: "./images/accordion-leather/Door-1.webp",
        caption: "أبواب اكورديون جلد – نموذج 3",
      },
      {
        src: "./images/accordion-leather/Door-2.jpg",
        caption: "أبواب اكورديون جلد – نموذج 4",
      },
      {
        src: "./images/accordion-leather/Door-1.webp",
        caption: "أبواب اكورديون جلد – نموذج 5",
      },
      {
        src: "./images/accordion-leather/Door-2.jpg",
        caption: "أبواب اكورديون جلد – نموذج 6",
      },
    ],
  },
  "metal-curtains": {
    name: "ستائر معدنية",
    nameShort: "معدنية",
    desc: "ستائر معدنية عصرية توفر تحكماً ممتازاً في الضوء مع مظهر صناعي أنيق يناسب المكاتب والمحلات.",
    icon: "fa-table-columns",
    badge: "عصري",
    images: [
      {
        src: "./images/metal-curtains/Curtains-1.webp",
        caption: "ستائر معدنية – نموذج 1",
      },
      {
        src: "./images/metal-curtains/Curtains-2.jpg",
        caption: "ستائر معدنية – نموذج 2",
      },
      {
        src: "./images/metal-curtains/Curtains-3.png",
        caption: "ستائر معدنية – نموذج 3",
      },
      {
        src: "./images/metal-curtains/Curtains-4.webp",
        caption: "ستائر معدنية – نموذج 4",
      },
      {
        src: "./images/metal-curtains/OIP.webp",
        caption: "ستائر معدنية – نموذج 5",
      },
      {
        src: "./images/metal-curtains/Curtains-1.webp",
        caption: "ستائر معدنية – نموذج 6",
      },
    ],
  },
  "wooden-curtains": {
    name: "ستائر خشبية",
    nameShort: "خشبية",
    desc: "ستائر خشبية طبيعية تمنح أجواء دافئة وأصيلة، متوفرة بخشب البامبو والخشب الطبيعي بألوان متعددة.",
    icon: "fa-table-columns",
    badge: "طبيعي",
    images: [
      {
        src: "./images/wooden-curtains/Curtains-1.webp",
        caption: "ستائر خشبية – نموذج 1",
      },
      {
        src: "./images/wooden-curtains/Curtains-2.jpg",
        caption: "ستائر خشبية – نموذج 2",
      },
      {
        src: "./images/wooden-curtains/Curtains-3.png",
        caption: "ستائر خشبية – نموذج 3",
      },
      {
        src: "./images/wooden-curtains/Curtains-4.webp",
        caption: "ستائر خشبية – نموذج 4",
      },
      {
        src: "./images/wooden-curtains/OIP.webp",
        caption: "ستائر خشبية – نموذج 5",
      },
      {
        src: "./images/wooden-curtains/Curtains-2.jpg",
        caption: "ستائر خشبية – نموذج 6",
      },
    ],
  },
  "wavy-curtains": {
    name: "ستائر ويفي",
    nameShort: "ويفي",
    desc: "ستائر ويفي بتصاميم موجية فريدة تعطي إيهاماً بالحركة والأناقة، مناسبة للمساحات الراقية.",
    icon: "fa-water",
    badge: "جديد",
    images: [
      {
        src: "./images/wavy-curtains/Curtains-1.webp",
        caption: "ستائر ويفي – نموذج 1",
      },
      {
        src: "./images/wavy-curtains/Curtains-2.jpg",
        caption: "ستائر ويفي – نموذج 2",
      },
      {
        src: "./images/wavy-curtains/Curtains-3.png",
        caption: "ستائر ويفي – نموذج 3",
      },
      {
        src: "./images/wavy-curtains/Curtains-4.webp",
        caption: "ستائر ويفي – نموذج 4",
      },
      {
        src: "./images/wavy-curtains/Curtains-1.webp",
        caption: "ستائر ويفي – نموذج 5",
      },
      {
        src: "./images/wavy-curtains/OIP.webp",
        caption: "ستائر ويفي – نموذج 6",
      },
    ],
  },
  "zebra-curtains": {
    name: "ستائر زيبرا",
    nameShort: "زيبرا",
    desc: "ستائر زيبرا بشرائط متبادلة تتيح التحكم الدقيق في الضوء والخصوصية بتصميم عصري مميز.",
    icon: "fa-grip-lines",
    badge: "الأكثر مبيعاً",
    images: [
      {
        src: "./images/zebra-curtains/Curtains-1.webp",
        caption: "ستائر زيبرا – نموذج 1",
      },
      {
        src: "./images/zebra-curtains/Curtains-2.jpg",
        caption: "ستائر زيبرا – نموذج 2",
      },
      {
        src: "./images/zebra-curtains/Curtains-3.png",
        caption: "ستائر زيبرا – نموذج 3",
      },
      {
        src: "./images/zebra-curtains/Curtains-4.webp",
        caption: "ستائر زيبرا – نموذج 4",
      },
      {
        src: "./images/zebra-curtains/OIP.webp",
        caption: "ستائر زيبرا – نموذج 5",
      },
      {
        src: "./images/zebra-curtains/Curtains-2.jpg",
        caption: "ستائر زيبرا – نموذج 6",
      },
    ],
  },
  "vertical-curtains": {
    name: "ستائر عمودية",
    nameShort: "عمودية",
    desc: "ستائر عمودية أنيقة تمنح إيهاماً بارتفاع الأسقف، مثالية للمكاتب والفضاءات الكبيرة.",
    icon: "fa-table-columns",
    badge: "مميز",
    images: [
      {
        src: "./images/vertical-curtains/Curtains-1.webp",
        caption: "ستائر عمودية – نموذج 1",
      },
      {
        src: "./images/vertical-curtains/Curtains-2.jpg",
        caption: "ستائر عمودية – نموذج 2",
      },
      {
        src: "./images/vertical-curtains/Curtains-3.png",
        caption: "ستائر عمودية – نموذج 3",
      },
      {
        src: "./images/vertical-curtains/Curtains-4.webp",
        caption: "ستائر عمودية – نموذج 4",
      },
      {
        src: "./images/vertical-curtains/OIP.webp",
        caption: "ستائر عمودية – نموذج 5",
      },
      {
        src: "./images/vertical-curtains/Curtains-2.jpg",
        caption: "ستائر عمودية – نموذج 6",
      },
    ],
  },
  "roll-curtains": {
    name: "ستائر رول",
    nameShort: "رول",
    desc: "ستائر رول عصرية تجمع بين البساطة والأناقة بأقمشة من الشفافة إلى الحاجبة الكاملة، مع تحكم يدوي أو كهربائي.",
    icon: "fa-scroll",
    badge: "الأكثر طلباً",
    images: [
      {
        src: "./images/roll-curtains/Curtains-1.webp",
        caption: "ستائر رول – نموذج 1",
      },
      {
        src: "./images/roll-curtains/Curtains-2.jpg",
        caption: "ستائر رول – نموذج 2",
      },
      {
        src: "./images/roll-curtains/Curtains-3.png",
        caption: "ستائر رول – نموذج 3",
      },
      {
        src: "./images/roll-curtains/Curtains-4.webp",
        caption: "ستائر رول – نموذج 4",
      },
      {
        src: "./images/roll-curtains/OIP.webp",
        caption: "ستائر رول – نموذج 5",
      },
      {
        src: "./images/roll-curtains/Curtains-2.jpg",
        caption: "ستائر رول – نموذج 6",
      },
    ],
  },
};

// ══════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════
const params = new URLSearchParams(window.location.search);
const serviceKey = params.get("service") || "roll-curtains";
const service = SERVICES[serviceKey] || SERVICES["roll-curtains"];

// Update page meta
document.title = `Trustco – ${service.name}`;
document.querySelector('meta[name="description"]') &&
  (document.querySelector('meta[name="description"]').content = service.desc);

// Update hero
document.getElementById("hero-breadcrumb").textContent = service.name;
document.getElementById("hero-title-highlight").textContent = service.name;
document.getElementById("hero-badge").textContent = service.badge;
document.getElementById("hero-desc").textContent = service.desc;
document.getElementById("service-name-inline").textContent = service.name;

// Animate counter
let count = 0;
const target = service.images.length;
const counterEl = document.getElementById("stat-count");
const showingEl = document.getElementById("showing-count");
const interval = setInterval(() => {
  count = Math.min(count + 1, target);
  counterEl.textContent = count;
  if (count === target) clearInterval(interval);
}, 40);
showingEl.textContent = target;

// ══════════════════════════════════════════════════
//  BUILD GALLERY GRID
// ══════════════════════════════════════════════════
const grid = document.getElementById("gallery-grid");

service.images.forEach((item, idx) => {
  // Safe version using DOM methods
  const card = document.createElement("div");
  card.className = "gallery-card reveal";

  const img = document.createElement("img");
  img.src = item.src; // safe — treated as text, not HTML
  img.alt = item.caption; // safe
  img.loading = "lazy";
  img.onerror = function () {
    this.style.display = "none";
    card.querySelector(".img-placeholder-card").style.display = "flex";
  };

  const placeholder = document.createElement("div");
  placeholder.className = "img-placeholder-card";
  placeholder.style.display = "none";
  const icon = document.createElement("i");
  icon.className = `fa-solid ${service.icon}`;
  const span = document.createElement("span");
  span.textContent = item.caption; // textContent — never interprets HTML
  placeholder.append(icon, span);

  const overlay = document.createElement("div");
  overlay.className = "card-overlay";

  const title = document.createElement("span");
  title.className = "card-overlay-title";
  title.textContent = item.caption; // safe

  const actions = document.createElement("div");
  actions.className = "card-overlay-actions";

  const viewBtn = document.createElement("button");
  viewBtn.className = "card-action-btn btn-view";
  viewBtn.dataset.idx = idx;
  viewBtn.title = "عرض الصورة";
  viewBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';

  const dlLink = document.createElement("a");
  dlLink.className = "card-action-btn btn-download";
  dlLink.href = item.src;
  dlLink.download = item.caption + ".jpg";
  dlLink.title = "تحميل";
  dlLink.innerHTML = '<i class="fa-solid fa-download"></i>';
  dlLink.addEventListener("click", (e) => e.stopPropagation());

  actions.append(viewBtn, dlLink);
  overlay.append(title, actions);
  card.append(img, placeholder, overlay);

  card.addEventListener("click", (e) => {
    if (!e.target.closest(".btn-download")) openLightbox(idx);
  });

  grid.appendChild(card);
});


let currentIdx = 0;
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCounter = document.getElementById("lb-counter");
const lbCaption = document.getElementById("lb-caption");
const lbDownload = document.getElementById("lb-download");
const lbThumbs = document.getElementById("lb-thumbs");

// Build thumbnails
service.images.forEach((item, idx) => {
  const thumb = document.createElement("img");
  thumb.className = "lb-thumb";
  thumb.src = item.src;
  thumb.alt = item.caption;
  thumb.loading = "lazy";
  thumb.addEventListener("click", () => goTo(idx));
  lbThumbs.appendChild(thumb);
});

function openLightbox(idx) {
  currentIdx = idx;
  lb.classList.add("active");
  document.body.style.overflow = "hidden";
  updateLightbox();
}

function closeLightbox() {
  lb.classList.remove("active");
  document.body.style.overflow = "";
}

function goTo(idx) {
  currentIdx = (idx + service.images.length) % service.images.length;
  updateLightbox();
}

function updateLightbox() {
  const item = service.images[currentIdx];
  lbImg.src = item.src;
  lbImg.alt = item.caption;
  lbCaption.textContent = item.caption;
  lbCounter.textContent = `${currentIdx + 1} / ${service.images.length}`;
  lbDownload.href = item.src;
  lbDownload.download = item.caption + ".jpg";

  // Update thumbs
  document.querySelectorAll(".lb-thumb").forEach((t, i) => {
    t.classList.toggle("active", i === currentIdx);
  });

  // Scroll active thumb into view
  const activeThumb = lbThumbs.children[currentIdx];
  if (activeThumb)
    activeThumb.scrollIntoView({ inline: "center", behavior: "smooth" });
}

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document
  .getElementById("lb-prev")
  .addEventListener("click", () => goTo(currentIdx - 1));
document
  .getElementById("lb-next")
  .addEventListener("click", () => goTo(currentIdx + 1));

lb.addEventListener("click", (e) => {
  if (e.target === lb) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight" || e.key === "ArrowUp") goTo(currentIdx - 1);
  if (e.key === "ArrowLeft" || e.key === "ArrowDown") goTo(currentIdx + 1);
});

// Touch swipe
let touchStartX = null;
lb.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true },
);
lb.addEventListener("touchend", (e) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) goTo(currentIdx + (dx > 0 ? -1 : 1));
  touchStartX = null;
});

// ══════════════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════════════
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
