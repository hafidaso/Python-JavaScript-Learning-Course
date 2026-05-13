// Ex1 : 

// Création de l'objet étudiant
let etudiant = {
    nom: "Sara",
    formation: "Développement Digital",
    moyenne: 15
};

// Création du message avec template literal
let message = `Bonjour ${etudiant.nom}, vous êtes inscrit en ${etudiant.formation}. Votre moyenne est ${etudiant.moyenne}/20.`;

// Affichage du message
console.log(message);

console.log("\n------------------------------\n");

// Ex2 : 


// Création du payload
let payload = {
    event: "student_created",
    source: "javascript_day_2",
    createdAt: new Date().toISOString(),
    data: {
        nom: "Sara",
        moyenne: 15
    }
};

// Conversion de l'objet JavaScript en JSON string
let jsonPayload = JSON.stringify(payload);

// Affichage
console.log(jsonPayload);

console.log("\n------------------------------\n");

// Ex3: 

// Liste des étudiants
let students = [
    {
        nom: "Marwan",
        moyenne: 15,
        niveau: "Développement Digital"
    },
    {
        nom: "Yassine",
        moyenne: 12,
        niveau: "Développement Digital"
    },
    {
        nom: "Hafida",
        moyenne: 17,
        niveau: "Développement Digital"
    }
];

// Calcul du total des étudiants
let totalStudents = students.length;

// Calcul de la moyenne générale
let somme = 0;

for (let student of students) {
    somme = somme + student.moyenne;
}

let average = somme / totalStudents;

// Création du payload
let payload1 = {
    event: "promotion_created",
    source: "javascript_day_2",
    createdAt: new Date().toISOString(),
    totalStudents: totalStudents,
    average: average,
    students: students
};

// Conversion en JSON
// JSON.stringify(value, replacer, space)
let jsonPayload1 = JSON.stringify(payload1, null, 2);

// Affichage
console.log(jsonPayload1);
