const jeu = document.getElementsByClassName("btn-nouveau")[0]
const dé = document.getElementsByClassName("btn-lancer")[0]
const commute = document.getElementsByClassName("btn-commuter")[0]
const scoreEnCoursJoueur1 = document.getElementById("encours-1")
const scoreEnCoursJoueur2 = document.getElementById("encours-2")
const scoreTotalJoueur1 = document.getElementById("score-1")
const scoreTotalJoueur2 = document.getElementById("score-2")
const joueur2 = document.getElementsByClassName("joueur-2-panel")[0]
const joueur1 = document.getElementsByClassName("joueur-1-panel")[0]
let totalx1 = 0
let totalx2 = 0
let totalScore1 = 0
let totalScore2 = 0

dé.addEventListener("click", function () {
let x = (Math.floor(Math.random() * 6 + 1))
document.getElementsByClassName("de")[0].src = "./resources/images/de-" + x + ".png";
if (x !== 1 && joueur1.classList.contains("active")) {
totalx1 = totalx1 + x
scoreEnCoursJoueur1.innerHTML = totalx1
} else if (x === 1 && joueur1.classList.contains("active")) {
    totalx1 = 0
scoreEnCoursJoueur1.innerHTML = totalx1
joueur1.classList.remove("active")
joueur2.classList.add("active")
} else if (x !== 1 && joueur2.classList.contains("active")) {
    totalx2 = totalx2 + x
    scoreEnCoursJoueur2.innerHTML = totalx2
} else if (x === 1 && joueur2.classList.contains("active")) {
    totalx2 = 0
scoreEnCoursJoueur2.innerHTML = totalx2
joueur2.classList.remove("active")
joueur1.classList.add("active")
}
})

commute.addEventListener("click", function () {
if (joueur1.classList.contains("active")) {
totalScore1 = totalScore1 + totalx1
scoreTotalJoueur1.innerHTML = totalScore1
  if (totalScore1 > 99) {
    joueur1.classList.add("vainqueur") 
  } else {
    joueur1.classList.remove("active")
    joueur2.classList.add("active")
    totalx1 = 0
         }
} else if (joueur2.classList.contains("active")) {
totalScore2 = totalScore2 + totalx2
scoreTotalJoueur2.innerHTML = totalScore2
    if (totalScore2 > 99) {
    joueur2.classList.add("vainqueur") 
    } else {
    joueur2.classList.remove("active")
    joueur1.classList.add("active")
    totalx2 = 0
          }
}
})

jeu.addEventListener("click", function () {
  scoreEnCoursJoueur1.innerHTML = 0
  scoreEnCoursJoueur2.innerHTML = 0
  scoreTotalJoueur1.innerHTML = 0
  scoreTotalJoueur2.innerHTML = 0
  joueur1.classList.remove("vainqueur")
  joueur2.classList.remove("vainqueur")

})



