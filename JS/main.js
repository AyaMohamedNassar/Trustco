(function () {
  var msg = [
    "مرحبًا فريق Trustco،",
    "وصلتكم عن طريق الموقع،",
    "أبغى عرض سعر لـ الستائر أو أبواب الأكورديون،",
    "وهل متوفر قياس ومعاينة داخل البحرين؟",
    "بانتظار ردكم، شكرًا لكم.",
  ].join("\n");
  var btn = document.getElementById("whatsapp-btn");
  if (btn) {
    btn.href = "https://wa.me/201111235794?text=" + encodeURIComponent(msg);
  }
})();
