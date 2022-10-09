'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 3); //undefined ako zelimo da preskocimo unos nekog od podataka (parametara)
*/
/*
const flight = 'LH234';
const passenger = {
  name: 'Uros Martic',
  passport: 592834,
};

const checkIn = function (flightNum, passengerData) {
  flightNum = 'LH999';
  passengerData.name = 'Mr. ' + passengerData.name;

  if (passengerData.passport === 592834) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

//isto kao ovo...
// const flightNum = flight;
// const passengerData = passenger;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(passenger);
checkIn(flight, passenger);
console.log(passenger);
*/
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

//console.log(oneWord('Na kraj Sela zuta kuca'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//console.log(upperFirstWord('na kraj Sela zuta kuca'));

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Na kraj Sela zuta kuca', upperFirstWord);
transformer('Na kraj Sela zuta kuca', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖐');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
/*
const pozdravljanje = function (pozdrav) {
  return function (ime) {
    console.log(`${pozdrav} ${ime}`);
  };
};

const pozdravHej = pozdravljanje('Hej');
pozdravHej('Uros');

pozdravljanje('Zdravo')('Marko');

//ARROW funkcija
const arrowPozdrav = pozdrav => ime => console.log(`${pozdrav} ${ime}`);

arrowPozdrav('Hej')('Mirko');
*/

const lufthansa = {
  airline: 'Lufhansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Uros Martic');
lufthansa.book(523, 'Mitar Mitrovic');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//CALL method
book.call(euroWings, 23, 'Sarah Williams');
book.call(lufthansa, 754, 'Harry McGuire');
console.log(euroWings);
console.log(lufthansa);

const airSerbia = {
  airline: 'Air Serbia',
  iataCode: 'AS',
  bookings: [],
};

book.call(airSerbia, 632, 'Pujo Sotka');

//APPLY method
const flighData = [962, 'Dragan Stojkovic'];
book.apply(airSerbia, flighData); //razlika u odnosu na call metodu je ta sto apply ne uzima listu argumenata nakon this, vec niz

book.call(airSerbia, ...flighData); //ovo je isto kao i apply, samo sto se ovde koristi call metoda i spread operator
console.log(airSerbia);

//BIND metoda
// book.call(euroWings, 23, 'Sarah Williams');

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookAS = book.bind(airSerbia);

bookEW(794, 'Milivoje Vatrogasac');
bookLH(721, 'Marko Gobeljinjo');
bookAS(117, 'Spic Stojkovic');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Thiery Henry');
bookEW23('David Trezeguet');
console.log(euroWings);
