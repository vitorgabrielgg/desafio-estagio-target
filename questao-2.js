function verificarString(string) {
  const letras = string.split("");
  let letraA_quantidade = 0;

  for (let i in letras) {
    if (letras[i].toLowerCase() === "a") {
      letraA_quantidade++;
    }
  }

  return letraA_quantidade;
}

console.log(verificarString("Antes"));
console.log(verificarString("Abra"));
console.log(verificarString("aaaAAA"));
