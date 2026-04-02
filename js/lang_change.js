//SCRIPT CHANGEMENT DE LANGUE
let currentLang = localStorage.getItem("lang") || "en";
let translations = {};

document.addEventListener("DOMContentLoaded", () => {

  loadLanguage(currentLang);

  document.querySelectorAll(".langBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "fr" : "en";
      loadLanguage(currentLang);
    });
  });
});

function loadLanguage(lang) {
  fetch(`portfolio/data/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      translations = data;
      updateText();
    })
    .catch(err => console.error("Erreur JSON :", err));

  localStorage.setItem("lang", lang);
}

function updateText() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    const index = element.getAttribute("data-i18n-index");

    const value = translations[key];

    if (value) {
      if (Array.isArray(value)) {
        element.innerHTML = value[index ?? 0];
      } else {
        element.innerHTML = value;
      }
    }
  });

  document.querySelectorAll(".langBtn").forEach(btn => {
    btn.textContent = currentLang === "en" ? "FR" : "EN";
  });
}