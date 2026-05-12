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
console.log("Objet final :", etudiant);


// Exercice 2 : Calcul de la moyenne d’un étudiant

// Créer l'objet étudiant
let etudiant = {
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
console.log("Moyenne :", etudiant.calculerMoyenne());