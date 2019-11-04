
// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi. Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

var sesso, nome, ok, res;

ok = 0;

nome = prompt("inserisci il tuo nome");

res = document.getElementById('risultato');

while (ok < 1) {
  sesso = prompt("Inserisci se sei maschio o femmina").toLowerCase();
  if (sesso == "maschio") {
    ok = 1;
    res.innerHTML = nome;
    res.style.color = "lightblue"
  } else if (sesso == "femmina") {
    ok = 1;
    res.innerHTML = nome;
    res.style.color = "lightpink"
  } else{
    alert("Riprova ad inserire il valore")
  }
}
