/*
 * ─── EmailJS Setup ───────────────────────────────────────────────────────
 * 1. Sign up free at https://www.emailjs.com
 * 2. Add an Email Service (Gmail etc.)  → copy the Service ID
 * 3. Create a Template with variables:
 *      {{from_name}}  {{from_email}}  {{message}}
 *    Set the "To" field to aya.m.nasar@gmail.com  → copy the Template ID
 * 4. Account → API Keys → copy your Public Key
 * 5. Paste the three values below
 * ─────────────────────────────────────────────────────────────────────────
 */
emailjs.init({ publicKey: CONFIG.EMAILJS_PUBLIC_KEY });

document
  .getElementById("btn-send")
  .addEventListener("click", async function () {
    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const message = document.getElementById("sender-message").value.trim();
    const btn = this;

    if (!name || !email || !message) {
      showAlert("يرجى ملء جميع الحقول قبل الإرسال.", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showAlert("يرجى إدخال بريد إلكتروني صحيح.", "error");
      return;
    }

    btn.disabled = true;
    btn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> جارٍ الإرسال...';

    try {
      await emailjs.send(
        CONFIG.EMAILJS_SERVICE_ID,
        CONFIG.EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message, to_email: TO_EMAIL },
      );
      showAlert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.", "success");
      document.getElementById("sender-name").value = "";
      document.getElementById("sender-email").value = "";
      document.getElementById("sender-message").value = "";
    } catch (err) {
      console.error("EmailJS error:", err);
      showAlert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.", "error");
    } finally {
      btn.disabled = false;
      btn.innerHTML =
        '<span class="btn-dot"></span> إرسال الرسالة <i class="fa-solid fa-paper-plane"></i>';
    }
  });

function showAlert(msg, type) {
  const el = document.getElementById("form-alert");
  el.textContent = msg;
  el.className = type;
  el.style.display = "block";
  setTimeout(() => {
    el.style.display = "none";
  }, 5000);
}