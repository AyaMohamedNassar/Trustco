(function () {
  "use strict";

  const TOTAL = 6;
  const GAP = 340; /* px between card centres */
  const NAMES = [
    "نورا حسن",
    "محمد عادل",
    "نانسي أمجد",
    "نانسي أمجد",
    "نانسي أمجد",
    "محمد عادل",
  ];

  let active = 2;

  function go(idx) {
    active = Math.max(0, Math.min(TOTAL - 1, idx));
    render();
  }

  function render() {
    const slots = document.querySelectorAll(".customer-reviews .card-slot");
    const cards = document.querySelectorAll(".customer-reviews .review-card");
    const dots = document.querySelectorAll(".customer-reviews .dot");
    const label = document.getElementById("card-title");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

    /* position every slot relative to the active one */
    slots.forEach(function (slot, i) {
      slot.style.setProperty("--offset", (i - active) * GAP + "px");
    });

    /* style each card based on distance from active */
    cards.forEach(function (card, i) {
      const diff = i - active;

      if (i === active) {
        card.classList.add("is-active");
        card.style.transform = "";
        card.style.opacity = "";
        card.style.filter = "";
        card.style.zIndex = "2";
      } else {
        card.classList.remove("is-active");
        const abs = Math.abs(diff);
        const rot = diff * 50;
        const op = abs > 2 ? 0 : 0.42;
        const blur = abs > 2 ? 0 : 3;
        card.style.transform = "scale(0.82) rotateY(" + rot + "deg)";
        card.style.opacity = op;
        card.style.filter = "blur(" + blur + "px)";
        card.style.zIndex = abs > 2 ? "0" : "1";
      }
    });

    /* dots */
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === active);
    });

    /* label */
    if (label) label.textContent = NAMES[active];

    /* arrow buttons */
    if (btnPrev) btnPrev.disabled = active === 0;
    if (btnNext) btnNext.disabled = active === TOTAL - 1;
  }

  function init() {
    /* build dots */
    var dotsWrap = document.getElementById("dots");
    if (dotsWrap) {
      for (var i = 0; i < TOTAL; i++) {
        var d = document.createElement("div");
        d.className = "dot";
        /* closure to capture i */
        d.addEventListener(
          "click",
          (function (idx) {
            return function () {
              go(idx);
            };
          })(i),
        );
        dotsWrap.appendChild(d);
      }
    }

    /* arrow buttons — bind here, NOT via inline onclick */
    var btnPrev = document.getElementById("btn-prev");
    var btnNext = document.getElementById("btn-next");
    if (btnPrev)
      btnPrev.addEventListener("click", function () {
        go(active - 1);
      });
    if (btnNext)
      btnNext.addEventListener("click", function () {
        go(active + 1);
      });

    /* individual card click */
    document
      .querySelectorAll(".customer-reviews .review-card")
      .forEach(function (card) {
        card.addEventListener("click", function () {
          go(parseInt(card.getAttribute("data-index"), 10));
        });
      });

    render();
  }

  /* run after DOM is ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
