// Exercice n° 1

let nom = "Dupont"
let prenom = "Jean"

// Solution avec concatenation
console.log(prenom + " " + nom)
// Solutation avec interpolation
console.log(`${prenom} ${nom}`)

// Exercice n°2
let age = 30

if (age < 18) {
  console.log("Vous êtes mineur")
} else if (age >= 18 && age < 60) {
  console.log("Vous êtes majeur")
} else {
  console.log("Vous êtes sénior")
}

// Exercice 3
let noms = ["Jean", "Jack", "John", "David"]
console.log(noms)

console.log(noms[2])

// Exercice 4
console.log("For In")

for (let i in noms) {
  console.log(noms[i])
}

// Exercice 5
console.log("For of")

for (let blaze of noms) {
  console.log(blaze)
}

// Exercice 6
let eleve = {
  nom: "Doe",
  prenom: "John",
  age: 42,
  notes: [12, 8],
}

console.log(`Bonjour ${eleve.prenom} ${eleve.nom}, vous avez ${eleve.age} ans`)

// Exercice 7 (Solution 1)
let listeDesNotes = ""

for (let noteDeEleve of eleve.notes) {
  // noteDeEleve = 12, listeDesNotes = ''
  // noteDeEleve = 8, listeDesNotes = '12 / 20'

  if (listeDesNotes === "") {
    listeDesNotes = `${noteDeEleve} / 20`
  } else {
    listeDesNotes = `${listeDesNotes}, ${noteDeEleve} / 20`
  }

  // noteDeEleve = 12, listeDesNotes = "12 / 20"
  // noteDeEleve = 8, listeDesNotes = '12 / 20, 8 / 20'
}

console.log(`Vos notes : ${listeDesNotes}`)

// Exercice 8

const moyenne = function (notes) {
  let somme = 0
  let total = 0

  for (let noteDeEleve of notes) {
    // somme = 0, total = 0, noteDeEleve = 12
    // somme = 12, total = 1, noteDeEleve = 8

    somme = somme + noteDeEleve
    total = total + 1

    // somme = 12, total = 1, noteDeEleve = 12
    // somme = 20, total = 2, noteDeEleve = 8
  }

  return somme / total
}

console.log(`${eleve.prenom} ${eleve.nom} : ${moyenne(eleve.notes)} / 20`)
