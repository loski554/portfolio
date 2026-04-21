document.addEventListener("DOMContentLoaded", () => {

  const isMobile =
    FORCE_MOBILE || window.matchMedia("(hover: none)").matches;

  // 💻 si PC → on arrête tout
  if (!isMobile) return;

  const cards = document.querySelectorAll(".project-card");

  function updateActiveCard() {
    const windowHeight = window.innerHeight;
    const center = windowHeight / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;

      const distance = Math.abs(center - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    const activationThreshold = 120;

    cards.forEach((card) => card.classList.remove("active-hover"));

    if (closestDistance < activationThreshold) {
      closestCard.classList.add("active-hover");
    }
  }

  window.addEventListener("scroll", updateActiveCard);
  window.addEventListener("resize", updateActiveCard);

  updateActiveCard();
});