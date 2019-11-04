
// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi. Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

var num, un, sup, n1, n2, n3, n4, n5, ok, ncom, fun;

num = [];
un = [];
ncom = [];

while(num.length < 5){
  sup = Math.floor(Math.random() * 100) + 1;
  if(num.indexOf(sup) === -1){
    num.push(sup);
  }
}

alert("Memorizza questi numeri, ti serviranno; " + num)

fun = confronto();


function confronto(){

  // N1

  ok = 0;

  while (ok < 1){
    n1 = parseInt(prompt("Inserisci il primo numero"));
    if (isNaN(n1)) {
      alert("Inserisci un numero")
    } else{
      un.push(n1);
      ok = 1;
    }
  }

  ok = 0;
  i = 0;

  while (ok < 1 && i < num.length) {
    if (n1 == num[i]){
      ok = 1;
      ncom.push(n1);
    } else {
      i++;
    }
  }

  // N2

  ok = 0;

  while (ok < 1){
    n2 = parseInt(prompt("Inserisci il secondo numero"));
    if (isNaN(n2)) {
      alert("Inserisci un valore numerico");
    } else if(un.indexOf(n2) === -1){
      un.push(n2);
      ok = 1;
    } else{
      alert("Inserisci un altro numero");
    }
  }

  ok = 0;
  i = 0;

  while (ok < 1 && i < num.length) {
    if (n2 == num[i]){
      ok = 1;
      ncom.push(n2);
    } else {
      i++;
    }
  }

  // N3

  ok = 0;

  while (ok < 1){
    n3 = parseInt(prompt("Inserisci il terzo numero"));
    if (isNaN(n3)) {
      alert("Inserisci un numero")
    } else if(un.indexOf(n3) === -1){
      un.push(n3);
      ok = 1;
    } else{
      alert("Inserisci un altro numero");
    }
  }

  ok = 0;
  i = 0;

  while (ok < 1 && i < num.length) {
    if (n3 == num[i]){
      ok = 1;
      ncom.push(n3);
    } else {
      i++;
    }
  }

  // N4

  ok = 0;

  while (ok < 1){
    n4 = parseInt(prompt("Inserisci il quarto numero"));
    if (isNaN(n4)) {
      alert("Inserisci un numero")
    } else if(un.indexOf(n4) === -1){
      un.push(n4);
      ok = 1;
    } else{
      alert("Inserisci un altro numero");
    }
  }

  ok = 0;
  i = 0;

  while (ok < 1 && i < num.length) {
    if (n4 == num[i]){
      ok = 1;
      ncom.push(n4);
    } else {
      i++;
    }
  }

  // N5

  ok = 0;

  while (ok < 1){
    n5 = parseInt(prompt("Inserisci il quinto numero"));
    if (isNaN(n5)) {
      alert("Inserisci un numero")
    } else if(un.indexOf(n5) === -1){
      un.push(n5);
      ok = 1;
    } else{
      alert("Inserisci un altro numero");
    }
  }

  ok = 0;
  i = 0;

  while (ok < 1 && i < num.length) {
    if (n5 == num[i]){
      ok = 1;
      ncom.push(n5);
    } else {
      i++;
    }
  }

  console.log(ncom);

  console.log(un);
}

document.getElementById('tuoi').innerHTML = "Numeri inseriti dall'utente: " + un;

document.getElementById('pc').innerHTML = "Numeri scelti dal pc: " + num;

if (ncom > 0) {
  document.getElementById('comune').innerHTML = "I numeri scelti da entrambi: " + ncom + "," + " hai totalizzato: " + ncom.length + " punti";
} else {
  document.getElementById('comune').innerHTML = "Nessun numero in comune";
}



console.log(num);
