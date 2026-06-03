// ── Scroll reveal ──────────────────────────
(function () {
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  revealEls.forEach((el) => observer.observe(el));
})();

// ── Category filter tabs ───────────────────
(function () {
  const tabs = document.querySelectorAll(".filter-tab");
  const categories = document.querySelectorAll(".service-category");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;

      categories.forEach((cat) => {
        if (filter === "all" || cat.dataset.category === filter) {
          cat.style.display = "";
        } else {
          cat.style.display = "none";
        }
      });

      document
        .querySelector(".services-grid-section")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

// ── Lightbox ───────────────────────────────
(function () {
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbDownload = document.getElementById("lightbox-download");
  const lbClose = document.getElementById("lightbox-close");

  const images = document.querySelectorAll("img:not(.navbar-brand img)");

  images.forEach((img) => {
    img.classList.add("lightbox-trigger");
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lbDownload.href = src;
    const filename = src.split("/").pop() || "image";
    lbDownload.setAttribute("download", filename);
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    lbImg.src = "";
  }

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
})();
