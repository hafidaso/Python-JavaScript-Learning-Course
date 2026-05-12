for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " est pair → réussite");
  } else {
    console.log(i + " est impair → échec");
  }

  console.log("Table de multiplication de " + i);

  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }

  console.log("------");
}