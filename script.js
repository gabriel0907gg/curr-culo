document.addEventListener("DOMContentLoaded", function () {
  // Botão de impressão
  const printBtn = document.getElementById("print-btn");

  printBtn.addEventListener("click", function () {
    window.print();
  });

  // Efeito de digitação opcional (pode ser removido se não quiser)
  const profession = document.querySelector(".profession");
  if (profession) {
    // const professions = [
    //   "Desenvolvedor Web",
    //   "Designer Digital",
    //   "Analista de Sistemas",
    //   "Code Breaker",
    // ];
    let currentProfession = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentText = professions[currentProfession];

      if (isDeleting) {
        profession.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        profession.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentProfession = (currentProfession + 1) % professions.length;
        setTimeout(typeEffect, 500);
      } else {
        const speed = isDeleting ? 50 : 150;
        setTimeout(typeEffect, speed);
      }
    }

    setTimeout(typeEffect, 1000);
  }
});
