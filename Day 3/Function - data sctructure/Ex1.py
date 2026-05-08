import pandas as pd
import numpy as np

data = {
    "nom_eleve": ["Ali", "Sara", "Youssef", "Imane", "Nabil", "Hafsa", "Omar"],
    "matiere": ["Math", "Math", "Physique", "Math", "Physique", "SVT", "SVT"],
    "note": [15, np.nan, 12, 18, 9, np.nan, 14],
    "classe": ["2A", "2A", "2B", "2A", "2B", "2C", "2C"]
}

df = pd.DataFrame(data)



# Save the DataFrame to a CSV file

df.to_csv("notes_eleves.csv", index=False, encoding="utf-8")

print("Fichier CSV créé avec succès.")
print(df)


# read the CSV file and display its content

df = pd.read_csv("notes_eleves.csv")

print("\nLecture du fichier CSV:")
print(df)


# null values

print("\nValeurs manquantes:")
print(df.isnull().sum())



# Replace null values with the mean of the "note" column

moyenne_note = df["note"].mean()
df["note"] = df["note"].fillna(moyenne_note)

print("\nAprès remplacement des valeurs nulles:")
print(df)

# Calculate the average grade for each subject

moyenne_generale = np.mean(df["note"])

print("\nMoyenne générale:")
print(moyenne_generale)


# Calculate the average grade for each class

moyenne_par_classe = df.groupby("classe")["note"].mean()

print("\nMoyenne par classe:")
print(moyenne_par_classe)


# Calculate the average grade for each subject

moyenne_par_matiere = df.groupby("matiere")["note"].mean()

print("\nMoyenne par matière:")
print(moyenne_par_matiere)


# Add a new column "resultat" that indicates whether the student passed (note >= 10) or failed (note < 10)


df["resultat"] = np.where(df["note"] >= 10, "Réussi", "Échoué")

print("\nAprès ajout de la colonne résultat:")
print(df)


# Add a new student to the DataFrame and save the updated DataFrame back to the CSV file

nouvel_eleve = {
    "nom_eleve": "Lina",
    "matiere": "Math",
    "note": 16,
    "classe": "2A",
    "resultat": "Réussi"
}

df = pd.concat([df, pd.DataFrame([nouvel_eleve])], ignore_index=True)

print("\nAprès ajout d'un nouvel élève:")
print(df)




# Rename columns

df = df.rename(columns={
    "nom_eleve": "nom",
    "matiere": "subject",
    "note": "grade",
    "classe": "class"
})

print("\nAprès renommage des colonnes:")
print(df)


# drop the "resultat" column from the DataFrame

df = df.drop(columns=["resultat"])

print("\nAprès suppression de la colonne résultat:")
print(df)

# Remove the row corresponding to the student "Omar" from the DataFrame


df = df[df["nom"] != "Omar"]

print("\nAprès suppression de Omar:")
print(df)



# Save the final DataFrame to a new CSV file

df.to_csv("notes_eleves_final.csv", index=False, encoding="utf-8")

print("\nFichier final sauvegardé avec succès.")