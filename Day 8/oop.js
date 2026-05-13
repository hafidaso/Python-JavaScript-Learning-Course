// Ex1: basic class definition and instantiation


class Etudiant {
  constructor(nom, notes) {
    this.nom = nom;
    this.notes = notes;
  }
}

const etudiantBasic = new Etudiant("Rida", [15, 17, 14]);

console.log(etudiantBasic.nom);
console.log(etudiantBasic.notes);



console.log("\n------------------------------\n");

// Ex2: adding methods to the class


class Etudiant1 {
  constructor(nom, notes) {
    this.nom = nom;
    this.notes = notes;
  }

  calculerMoyenne() {
    let somme = 0;

    for (let note of this.notes) {
      somme = somme + note;
    }

    return somme / this.notes.length;
  }

  determinerNiveau() {
    const moyenne = this.calculerMoyenne();

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
}

const etudiantAvecMethodes = new Etudiant1("Sara", [15, 17, 14]);

console.log("Nom :", etudiantAvecMethodes.nom);
console.log("Notes :", etudiantAvecMethodes.notes);
console.log("Moyenne :", etudiantAvecMethodes.calculerMoyenne());
console.log("Niveau :", etudiantAvecMethodes.determinerNiveau());




console.log("\n------------------------------\n");


// Ex3: inheritance and payload generation


class Etudiant2 {
  constructor(nom, notes) {
    this.nom = nom;
    this.notes = notes;
  }

  calculerMoyenne() {
    let somme = 0;

    for (let note of this.notes) {
      somme = somme + note;
    }

    return somme / this.notes.length;
  }

  determinerNiveau() {
    const moyenne = this.calculerMoyenne();

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
}

class EtudiantProjet extends Etudiant2 {
  constructor(nom, notes, projet) {
    super(nom, notes);
    this.projet = projet;
  }

  afficherProjet() {
    return `${this.nom} travaille sur le projet : ${this.projet}`;
  }

  genererPayload() {
    return {
      event: "student_project_created",
      source: "javascript_classes",
      createdAt: new Date().toISOString(),
      data: {
        nom: this.nom,
        notes: this.notes,
        moyenne: this.calculerMoyenne(),
        niveau: this.determinerNiveau(),
        projet: this.projet
      }
    };
  }
}

// Ex3
const etudiantProjet = new EtudiantProjet(
  "Amine",
  [15, 17, 14],
  "Application de gestion des étudiants"
);

console.log("Nom :", etudiantProjet.nom);
console.log("Notes :", etudiantProjet.notes);
console.log("Moyenne :", etudiantProjet.calculerMoyenne());
console.log("Niveau :", etudiantProjet.determinerNiveau());
console.log(etudiantProjet.afficherProjet());

console.log(JSON.stringify(etudiantProjet.genererPayload(), null, 2));