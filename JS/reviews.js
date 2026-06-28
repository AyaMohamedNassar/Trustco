(function () {
  "use strict";

  
  const CARD_WIDTH = 400; 
  const CARD_GAP = 32; 
  const AUTOPLAY_MS = 5000; 
  const EASING = "cubic-bezier(0.34, 1.12, 0.64, 1)";

  
  const track = document.getElementById("cr-track");
  const dotsWrap = document.getElementById("cr-dots");
  const btnPrev = document.getElementById("cr-prev");
  const btnNext = document.getElementById("cr-next");
  const activeName = document.getElementById("cr-active-name");

  if (!track) return; 

  const slots = Array.from(track.querySelectorAll(".cr-slot"));
  const cards = Array.from(track.querySelectorAll(".cr-card"));
  const total = slots.length;
  let current = 0;
  let autoTimer = null;
  let isPaused = false;

  
  let isSectionVisible = false;
  const section = document.getElementById("reviews");
  if (section) {
    const visObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isSectionVisible = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );
    visObs.observe(section);
  }

  
  dotsWrap.innerHTML = "";
  slots.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "cr-dot" + (i === 0 ? " active" : "");
    d.setAttribute("aria-label", "انتقل للتقييم " + (i + 1));
    d.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(d);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".cr-dot"));

  
  function applyLayout(idx, animate) {
    
    requestAnimationFrame(() => {
      slots.forEach((slot, i) => {
        const card = slot.querySelector(".cr-card");
        const diff = i - idx;
        const absDiff = Math.abs(diff);

        
        const offset = diff * (CARD_WIDTH + CARD_GAP);
        slot.style.setProperty("--offset", offset + "px");
        slot.style.transition = animate
          ? `left 0.7s ${EASING}`
          : "none";

        
        const isActive = i === idx;
        card.classList.toggle("cr-is-active", isActive);

        
        const scale = isActive ? 1 : absDiff === 1 ? 0.85 : 0.72;
        const opacity = isActive ? 1 : absDiff === 1 ? 0.5 : 0.3;
        const blur = isActive ? 0 : absDiff === 1 ? 2 : 4;
        const zIndex = isActive ? 10 : absDiff === 1 ? 5 : 1;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = opacity;
        card.style.filter = blur > 0 ? `blur(${blur}px)` : "none";
        card.style.zIndex = zIndex;
        card.style.transition = animate
          ? `transform 0.7s ${EASING}, opacity 0.5s ease, filter 0.5s ease`
          : "none";
      });

      
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));

      
      const activeCard = cards[idx];
      const name = activeCard
        ? activeCard.querySelector(".cr-name")?.textContent || ""
        : "";
      if (activeName) activeName.textContent = name;

      
      btnPrev.disabled = false;
      btnNext.disabled = false;
    });
  }

  
  function goTo(idx) {
    current = (idx + total) % total;
    applyLayout(current, true);
    resetAutoplay();
  }

  function prev() {
    goTo(current - 1);
  }
  function next() {
    goTo(current + 1);
  }

  btnPrev.addEventListener("click", prev);
  btnNext.addEventListener("click", next);

  
  function startAutoplay() {
    stopAutoplay();
    autoTimer = setInterval(() => {
      if (!isPaused) next();
    }, AUTOPLAY_MS);
  }

  function stopAutoplay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  
  const stageWrap = document.querySelector(".cr-stage-wrap");
  if (stageWrap) {
    stageWrap.addEventListener("mouseenter", () => {
      isPaused = true;
    });
    stageWrap.addEventListener("mouseleave", () => {
      isPaused = false;
    });
    stageWrap.addEventListener("focusin", () => {
      isPaused = true;
    });
    stageWrap.addEventListener("focusout", () => {
      isPaused = false;
    });
  }

  
  document.addEventListener("keydown", (e) => {
    
    if (!isSectionVisible) return;

    if (e.key === "ArrowRight") prev();
    if (e.key === "ArrowLeft") next();
  });

  
  let touchStartX = null;
  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );
  track.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        dx > 0 ? prev() : next();
      }
      touchStartX = null;
    },
    { passive: true },
  );

  
  slots.forEach((slot, i) => {
    slot.addEventListener("click", () => {
      if (i !== current) goTo(i);
    });
  });

  
  
  applyLayout(current, false);
  
  startAutoplay();

  
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => applyLayout(current, false), 150);
  });
})();

