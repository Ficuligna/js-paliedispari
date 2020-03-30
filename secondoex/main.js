// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.


var container = document.getElementById("container");
var button = document.getElementById("button");

container.style.display = "flex";
container.style.width = "100vw";
container.style.height = "100vh";
// container.style.justify-content = "center";
// container.style.align-items = "center";
button.innerHTML ="Gioca"



function giveMeFive(){
  var sceltaGiocatore = prompt("Scegli pari o dispari");
  var giocatore = Math.ceil(Math.random()*5);
  var computer = Math.ceil(Math.random()*5);
  var somma = giocatore + computer;

  if ((sceltaGiocatore == "pari" && somma%2 == 0) || (sceltaGiocatore == "dispari") && (somma%2 !=0)){
    alert("Hai vinto");
  }else{
    alert("Hai perso");
  }
console.log(somma);
}

button.addEventListener("click", giveMeFive);
