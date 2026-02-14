  // SCRIPT POUR AFFICHER TOUT LES PROJETS
const btnMore = document.getElementById("btnMore");
const btnLess = document.getElementById("btnLess");

btnMore.addEventListener("click", () => {
  const cards = document.querySelectorAll(".project-card.hidden");

  cards.forEach((card, index) => {
    card.classList.remove("hidden");
    card.classList.add("showing");

    setTimeout(() => {
      card.classList.remove("showing");
    }, 10 + index * 180);
  });

  btnMore.style.display = "none";
  btnLess.style.display = "flex";
});

btnLess.addEventListener("click", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    if (!card.classList.contains("always")) {
      card.classList.add("hidden");
    }
  });

  btnLess.style.display = "none";
  btnMore.style.display = "flex";
});

