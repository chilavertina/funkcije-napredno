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
