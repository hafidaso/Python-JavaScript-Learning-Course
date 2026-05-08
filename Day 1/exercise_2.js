/*
** EPITECH PROJECT, 2026
** Python-JavaScript-Learning-Course
** File description: Exercise 2 - Conditional Statements (Skill Level)
** Author: hafida belayd
*/

// Exercise 2 - Créer une variable score puis afficher Débutant, Intermédiaire ou Avancé selon la valeur.

let score = 75;

if (score < 50) {
    console.log("Débutant");
} else if (score < 75) {
    console.log("Intermédiaire");
} else {
    console.log("Avancé");
}
