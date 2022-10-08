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

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

//isto kao ovo...
const flightNum = flight;
const passengerData = passenger;
