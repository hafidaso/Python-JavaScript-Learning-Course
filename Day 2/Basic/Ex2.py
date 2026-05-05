# Prix, quantité, TVA

prix = float(input("Entrez le prix du produit : "))
quantite = int(input("Entrez la quantité : "))
tva = float(input("Entrez la TVA en % : "))

total_ht = prix * quantite
montant_tva = total_ht * tva / 100
total_ttc = total_ht + montant_tva

print("---- Facture ----")
print("Prix unitaire :", prix)
print("Quantité :", quantite)
print("Total HT :", total_ht)
print("TVA :", montant_tva)
print("Total TTC :", total_ttc)