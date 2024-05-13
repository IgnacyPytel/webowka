function obliczRate() {
  var rataMiesieczna = document.getElementById("rata_miesieczna");
  var kwotaOdsetki = document.getElementById("kwota_odsetki");

  var kwota = parseInt(document.getElementById("kwota").value);
  var liczbaRat = parseInt(document.getElementById("raty").value);
  var oprocentowanie = parseInt(document.getElementById("procent").value);

  var zmienna;
  var pr_mc = oprocentowanie / 100 / 12;

  zmienna = (kwota * pr_mc) /
      (1 - 1 / Math.pow(1 + pr_mc, liczbaRat));

  if (isNaN(zmienna) || !isFinite(zmienna) || zmienna <= 0) {
    alert("Niepoprawne dane, proszę wprowadzić ponownie!");
  } else {
    rataMiesieczna.value = zmienna.toFixed(2);
    kwotaOdsetki.value = (kwota + (zmienna * 10 - kwota)).toFixed(2);
  }
}


