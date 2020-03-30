// DESCRIZIONE:
// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola
// inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.


var palindromo = prompt("inserisci una parola e ti dirò se è palindroma");

function confronto(frase){
  //dichiarazioni variabili
  var porz1, porz2;
  var condizioneverità = true;
  // prendere in input la parola

  // dividere la parola in 2 parole dalla lunghezza di : prima [(1)--- math.ceil(length/2)]  seconda[math.floor(length/2)--- length]
    porz1 = frase.slice(0,Math.ceil(frase.length/2));
    porz2 = frase.slice(Math.floor(frase.length/2), frase.length);
  //confrontare  l'indice crescente della prima parola con l'indice decrescente della seconda parola

    for (var i = 0; i < porz1.length; i++) {
      var reversecounter = ((porz1.length-1)-i);
      if (porz1[i] != porz2[reversecounter]) {
        condizioneverità = false;
      }
    }
  // se uguali output: palindroma.
  if (condizioneverità) {
    alert("è palindroma")
  }else{
    alert("non è palindroma")
  }
}

confronto(palindromo);
