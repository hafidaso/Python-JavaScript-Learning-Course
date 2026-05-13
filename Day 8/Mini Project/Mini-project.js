// Mini-projet final Jour 2
// Gestionnaire d'étudiants

const etudiants = [
  {
    nom: "Mohamed",
    formation: "Développement Digital",
    notes: [15, 17, 14]
  },
  {
    nom: "Rida",
    formation: "Data Analytics",
    notes: [9, 11, 8]
  },
  {
    nom: "Amine",
    formation: "Développement Digital",
    notes: [18, 16, 17]
  },
  {
    nom: "Linda",
    formation: "UX/UI Design",
    notes: [13, 12, 14]
  }
];

//  Calculer la moyenne d'un étudiant
function calculerMoyenne(notes) {
  const somme = notes.reduce((total, note) => total + note, 0);
  return somme / notes.length;
}

// Déterminer le niveau selon la moyenne
function determinerNiveau(moyenne) {
  if (moyenne >= 16) {
    return "Excellent";
  } else if (moyenne >= 14) {
    return "Bon";
  } else if (moyenne >= 10) {
    return "Passable";
  } else {
    return "Insuffisant";
  }
}

// Générer la liste complète avec moyenne et niveau
function genererListeComplete(etudiants) {
  return etudiants.map((etudiant) => {
    const moyenne = calculerMoyenne(etudiant.notes);
    const niveau = determinerNiveau(moyenne);

    return {
      nom: etudiant.nom,
      formation: etudiant.formation,
      notes: etudiant.notes,
      moyenne: Number(moyenne.toFixed(2)),
      niveau: niveau
    };
  });
}

// Obtenir les étudiants admis
function obtenirAdmis(etudiants) {
  return etudiants.filter((etudiant) => etudiant.moyenne >= 10);
}

//  Rechercher un étudiant par nom
function rechercherEtudiant(etudiants, nom) {
  return etudiants.find(
    (etudiant) => etudiant.nom.toLowerCase() === nom.toLowerCase()
  );
}

// Générer un résumé de la promo
function genererResume(etudiants) {
  const totalEtudiants = etudiants.length;

  const admis = obtenirAdmis(etudiants);
  const nombreAdmis = admis.length;
  const nombreNonAdmis = totalEtudiants - nombreAdmis;

  const sommeMoyennes = etudiants.reduce(
    (total, etudiant) => total + etudiant.moyenne,
    0
  );

  const moyenneGenerale = sommeMoyennes / totalEtudiants;

  const meilleurEtudiant = etudiants.reduce((meilleur, etudiant) => {
    if (etudiant.moyenne > meilleur.moyenne) {
      return etudiant;
    } else {
      return meilleur;
    }
  });

  return {
    totalEtudiants: totalEtudiants,
    nombreAdmis: nombreAdmis,
    nombreNonAdmis: nombreNonAdmis,
    moyenneGenerale: Number(moyenneGenerale.toFixed(2)),
    meilleurEtudiant: {
      nom: meilleurEtudiant.nom,
      moyenne: meilleurEtudiant.moyenne,
      niveau: meilleurEtudiant.niveau
    }
  };
}

// Générer le payload JSON final
function genererPayload(etudiants) {
  const listeComplete = genererListeComplete(etudiants);
  const admis = obtenirAdmis(listeComplete);
  const resume = genererResume(listeComplete);

  return {
    event: "students_results_generated",
    source: "javascript_day_2",
    createdAt: new Date().toISOString(),
    data: {
      listeComplete: listeComplete,
      admis: admis,
      resume: resume
    }
  };
}

// Exécution du programme

const listeComplete = genererListeComplete(etudiants);
const admis = obtenirAdmis(listeComplete);
const etudiantRecherche = rechercherEtudiant(listeComplete, "Mohamed");
const resume = genererResume(listeComplete);
const payload = genererPayload(etudiants);

console.log("\n--- Liste complète ---");
console.log(listeComplete);

console.log("\n--- Étudiants admis ---");
console.log(admis);

console.log("\n--- Recherche étudiant ---");
console.log(etudiantRecherche);

console.log("\n--- Résumé de promo ---");
console.log(resume);

console.log("\n--- Payload JSON ---");
console.log(JSON.stringify(payload, null, 2));