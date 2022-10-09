/*
const karte = [];

const izborKarte = function (tribina, sektor, broj, cena = 600 * broj) {
  const karta = {
    tribina,
    sektor,
    broj,
    cena,
  };
  console.log(karta);
  karte.push(karta);
};

izborKarte('zapad', 2, 3);
izborKarte('sever', undefined, 3, 300);
*/

const spojenaRecenica = function (recenica) {
  return recenica.replaceAll('-', ' ').toLowerCase().replaceAll('0', 'o');
};

spojenaRecenica('pr0lEtEri-svih-zEmalja-ujedinitE-sE');
console.log(spojenaRecenica('pr0lEtEri-svih-zEmalja-ujedinitE-sE'));

const ispravnaRecenica = function (recenica) {
  const [first, ...others] = recenica
    .replaceAll('-', ' ')
    .toLowerCase()
    .split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

ispravnaRecenica('pr0lEtEri-svih-zEmalja-ujedinitE-sE');
console.log(ispravnaRecenica('pr0lEtEri-svih-zEmalja-ujedinitE-sE'));

const resenje = function (string, fn) {
  console.log(fn(string));
};

resenje('pr0lEtEri-svih-zEmalja-ujedinitE-sE', ispravnaRecenica);
