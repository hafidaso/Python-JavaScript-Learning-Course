#Full code for Day 2 exercises

nom_etudiant = input("Entrez le nom de l'étudiant : ")
prenom_etudiant = input("Entrez le prénom de l'étudiant : ")
age_etudiant = int(input("Entrez l'âge de l'étudiant : "))
classe = input("Entrez la classe : ")

print("---- Fiche Étudiant ----")
print("Nom :", nom_etudiant)
print("Prénom :", prenom_etudiant)
print("Âge :", age_etudiant)
print("Classe :", classe)

prix = float(input("Entrez le prix du produit : "))
quantite = int(input("Entrez la quantité : "))
tva = float(input("Entrez la TVA en % : "))

total_ht = prix * quantite
montant_tva = total_ht * tva / 100
total_ttc = total_ht + montant_tva

print("---- Facture ----")
print("Total HT :", total_ht)
print("TVA :", montant_tva)
print("Total TTC :", total_ttc)


# test de pourcentage

score = float(input("Entrez le score obtenu : "))
total = float(input("Entrez le score total : "))

pourcentage = (score / total) * 100
print("Le score est :", pourcentage, "%")


# Full code for Day 2 exercises - Dictionnaires

etudiant = {
    "nom": input("Entrez le nom de l'étudiant : "),
    "prenom": input("Entrez le prénom de l'étudiant : "),
    "age": int(input("Entrez l'âge de l'étudiant : ")),
    "classe": input("Entrez la classe : ")
}

print("--- Fiche Étudiant ---")
print("Nom :", etudiant["nom"])
print("Prénom :", etudiant["prenom"])
print("Âge :", etudiant["age"])
print("Classe :", etudiant["classe"])


facture = {
    "prix": float(input("Entrez le prix du produit : ")),
    "quantite": int(input("Entrez la quantité : ")),
    "tva": float(input("Entrez la TVA en % : "))
}

facture["total_ht"] = facture["prix"] * facture["quantite"]
facture["montant_tva"] = facture["total_ht"] * facture["tva"] / 100
facture["total_ttc"] = facture["total_ht"] + facture["montant_tva"]

print("---- Facture ----")
print("Prix unitaire :", facture["prix"])
print("Quantité :", facture["quantite"])
print("Total HT :", facture["total_ht"])
print("TVA :", facture["montant_tva"])
print("Total TTC :", facture["total_ttc"])



# Test de pourcentage avec dictionnaire
test = {
    "score": float(input("Entrez le score obtenu : ")),
    "total": float(input("Entrez le score total : "))
}

test["pourcentage"] = (test["score"] / test["total"]) * 100

print("---- Résultat du test ----")
print("Le score est :", test["pourcentage"], "%")