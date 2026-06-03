(function () {
  var msg = [
    "مرحبًا فريق مصنع الثقة،",
    "وصلتكم عن طريق الموقع،",
    "أبغى عرض سعر لـ الستائر أو أبواب الأكورديون،",
    "وهل متوفر قياس ومعاينة داخل البحرين؟",
    "بانتظار ردكم، شكرًا لكم.",
  ].join("\n");
  var btn = document.getElementById("whatsapp-btn");
  if (btn) {
    btn.href = "https://wa.me/97336789207?text=" + encodeURIComponent(msg);
  }
})();
