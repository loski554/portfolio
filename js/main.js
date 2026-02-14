// SCRIPT POUR BTN LANGAGE :
const btnEnglish = document.getElementById("btnEnglish");
const btnFrench = document.getElementById("btnFrench");

const textEnglish = document.querySelector(".english");
const textFrench = document.querySelector(".french");

btnEnglish.addEventListener("click", () => {
  textEnglish.style.display = "block";
  textFrench.style.display = "none";
});

btnFrench.addEventListener("click", () => {
  textEnglish.style.display = "none";
  textFrench.style.display = "block";
});

// SCRIPT POUR DARKMODE/LIGHTMODE :

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

//Fonctions
const enableDarkmode = () => {
    document.body.classList.remove('lightmode')
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    document.body.classList.add('lightmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active"){
    enableDarkmode()
}
else if(darkmode === "inactive"){
    disableDarkmode()
}
else {
    if(document.body.classList.contains("darkmode")){
        localStorage.setItem("darkmode", "active")
    } else {
        localStorage.setItem("darkmode", "inactive")
    }
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

