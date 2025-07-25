import '../css/style.css'

// Ripple-эффект
document.querySelectorAll(".ripple-wrapper").forEach((el) => {
  el.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-effect");

    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;

    el.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Генерация PDF с помощью html2pdf.js
document.getElementById("downloadBtn")?.addEventListener("click", () => {
  const element = document.getElementById("app");

  const opt = {
    margin:       0,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});


