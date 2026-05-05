# Conditions et boucles


# Validation d'une note

note = float(input("Entrez une note entre 0 et 20 : "))

while note < 0 or note > 20:
    print("Erreur : la note doit être entre 0 et 20")
    note = float(input("Entrez une note entre 0 et 20 : "))

print("Note valide :", note)


# Student information form with validation


student = {
    "nom": input("Entrez le nom de l'étudiant : "),
    "prenom": input("Entrez le prénom de l'étudiant : "),
    "age": int(input("Entrez l'âge de l'étudiant : ")),
    "classe": input("Entrez la classe : "),
    "note": float(input("Entrez la note de l'étudiant : "))
}

print("-- Fiche Étudiant --")

for key, value in student.items():
    print(key, ":", value)


# Classification d'une note

note = student["note"]
if note < 10:
    classification = "Note insuffisante"
elif note < 12:
    classification = "Note passable"
elif note < 14:
    classification = "Note assez bien"
elif note < 16:
    classification = "Note bien"
elif note < 18:
    classification = "Note très bien"
else:
    classification = "Note excellente"

print("Classification :", classification)

# Moyenne avec boucle de validation

nombre_notes = int(input("Combien de notes voulez-vous entrer ? "))

somme = 0

for i in range(1, nombre_notes + 1):
    note = float(input("Entrez la note numéro " + str(i) + " : "))
    somme = somme + note

moyenne = somme / nombre_notes

print("La moyenne est :", moyenne)

# Menu simple avec while


choix = ""

while choix != "4":
    print("---- Menu ----")
    print("1. Afficher la fiche étudiant")
    print("2. Afficher la classification")
    print("3. Calculer une moyenne")
    print("4. Quitter")

    choix = input("Choisissez une option : ")

    if choix == "1":
        print("---- Fiche Étudiant ----")
        for key, value in student.items():
            print(key, ":", value)

    elif choix == "2":
        print("Classification :", classification)

    elif choix == "3":
        nombre_notes = int(input("Combien de notes voulez-vous entrer ? "))
        somme = 0

        for i in range(1, nombre_notes + 1):
            note = float(input("Entrez la note numéro " + str(i) + " : "))
            somme = somme + note

        moyenne = somme / nombre_notes
        print("La moyenne est :", moyenne)

    elif choix == "4":
        print("Au revoir !")

    else:
        print("Choix invalide.")

