// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


 function createFareMultiplier(multiplier) {
   return function(fare) {
       return fare * multiplier 
       
   };
}

const fareDoubler = (fare) => {
    const doubler = createFareMultiplier(2);
    return doubler(fare);
 } 
const fareTripler = (fare) => {
    const d = createFareMultiplier(3);
    return d(fare);
 } 

function selectDifferentDrivers(drivers, fun) {
    return fun(drivers)
}