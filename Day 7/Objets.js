// Exercice 1 : Création et manipulation d’un objet étudiant

// Créer un objet étudiant
let etudiant = {
    nom: "Hafida",
    age: 33,
    formation: "Mathématiques",
    moyenne: 16
};

// Afficher le nom
console.log("Nom :", etudiant.nom);

// Afficher la formation
console.log("Formation :", etudiant.formation);

// Modifier l’âge
etudiant.age = 23;

// Ajouter une ville
etudiant.ville = "Salé";

// Afficher l’objet final
console.log("Objet final :");
console.log("Nom :", etudiant.nom);
console.log("Âge :", etudiant.age);
console.log("Formation :", etudiant.formation);
console.log("Moyenne :", etudiant.moyenne);
console.log("Ville :", etudiant.ville);

console.log("\n------------------------------\n");

// Exercice 2 : Calcul de la moyenne d’un étudiant

// Créer l'objet étudiant
let etudiant1 = {
    nom: "Hafida",
    notes: [12, 15, 18, 10],


    calculerMoyenne: function () {

        let somme = 0;


        for (let i = 0; i < this.notes.length; i++) {
            somme += this.notes[i];
        }

        // Calcul de la moyenne
        return somme / this.notes.length;
    }
};

// Afficher la moyenne
console.log("Moyenne :", etudiant1.calculerMoyenne());



console.log("\n------------------------------\n");



// Exercice 3 : Liste de 3 étudiants

// Liste de 3 étudiants
let etudiants = [
    {
        nom: "Hafida",
        age: 33,
        notes: [14, 15, 18]
    },
    {
        nom: "Sara",
        age: 21,
        notes: [8, 10, 9]
    },
    {
        nom: "Yassine",
        age: 24,
        notes: [14, 16, 13]
    }
];

// Calculer la moyenne de chaque étudiant
for (let i = 0; i < etudiants.length; i++) {
    let somme = 0;

    for (let j = 0; j < etudiants[i].notes.length; j++) {
        somme += etudiants[i].notes[j];
    }

    let moyenne = somme / etudiants[i].notes.length;

    // Ajouter une propriété moyenne
    etudiants[i].moyenne = moyenne;
}

// Afficher les étudiants avec leurs moyennes
console.log("Liste des étudiants avec moyenne :");
console.log(etudiants);

console.log("\n------------------------------\n");

// Filtrer les étudiants admis
let admis = etudiants.filter(function (etudiant) {
    return etudiant.moyenne >= 10;
});

console.log("Étudiants admis :");
console.log(admis);

console.log("\n------------------------------\n");

// Rechercher un étudiant par nom
let recherche = "Hafida";

let etudiantTrouve = etudiants.find(function (etudiant) {
    return etudiant.nom === recherche;
});

console.log("Étudiant recherché :");
console.log(etudiantTrouve);