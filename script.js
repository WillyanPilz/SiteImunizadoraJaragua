document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !telefone) {
      showMessage("Preencha nome e telefone.", "error");
      return;
    }

    const texto = encodeURIComponent(
      `Olá, sou ${nome} (${telefone}). ${mensagem || ""}`
    );

    const numero = "47999751771"; 
    const url = `https://wa.me/${numero}?text=${texto}`;

 
    window.open(url, "_blank");

    showMessage("Abrindo WhatsApp...");
    form.reset();
  });

  function showMessage(text, type = "info") {
    formMsg.textContent = text;
    formMsg.style.color = type === "error" ? "#d32f2f" : "#6b7280";
    setTimeout(() => {
      formMsg.textContent = "";
    }, 4000);
  }
});

