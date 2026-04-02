//SCRIPT CHANGEMENT DE THEME
const button = document.getElementById("theme-switch");

button.addEventListener("click", () => {
    
    if (document.documentElement.classList.contains("light-mode")) {

        document.documentElement.classList.remove("light-mode");
        document.documentElement.classList.add("dark-mode");

        localStorage.setItem("theme", "dark");

    } else {

        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");

        localStorage.setItem("theme", "light");
    }
})