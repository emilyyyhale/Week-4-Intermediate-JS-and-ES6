// Rewrite the following three functions as arrow functions. Make sure to assign them to a const identifier.

// function createFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
const arrowFunction1 = (firstName, lastName) => `$(firstName) $(lastName)`;


// function doubleNumber(number) {
//   return number * 2;
// }
const arrowFunction2 = number => number * 2;


// function getEvenNumbers(array) {
//   let evenNumbers = [];
//   for (let i of array) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }
const arrowFunction3 = (array) => {
    let evenNumbers = [];
    for (let i of array) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
    }
  }
  return evenNumbers;
}





// The product owner on your development team believes they've seen a pattern as to which customers 
// purchase the most socks. To verify, you've been asked to write a function that processes an array
// of customer objects and return a new array that contains only customers that match ANY of the following criteria:

// name starts with a 'C' (upper or lowercase)
// address contains no undefined fields
// the city is Peoria and the state is AZ
//  membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too

// The array of customer objects will have the following schema:

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Pheonix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    }
];






const sockPurchasingCustomers = aGivenArray => {

let newArray = [];

  for (i=0; i<aGivenArray.length; i++) {
    if (aGivenArray[i].name.startsWith('C') || aGivenArray[i].name.startsWith('c')) {
      newArray.push(aGivenArray[i]);
    } else if ((aGivenArray[i].address.street && aGivenArray[i].address.city && aGivenArray[i].address.zip && aGivenArray[i].address.state) !== undefined) {
      newArray.push(aGivenArray[i]);
    } else if ((aGivenArray[i].address.city === 'Peoria') && (aGivenArray[i].address.state === 'AZ')) {
      newArray.push(aGivenArray[i]);
    } else if ((aGivenArray[i].membershipLevel === "GOLD") || (aGivenArray[i].membershipLevel === "PLATINUM")) {
      newArray.push(aGivenArray[i]);
    } else if ((aGivenArray[i].age <29) && (aGivenArray[i].membershipLevel === "SILVER")) {
      newArray.push(aGivenArray[i]);
    } else {
      console.log('This item does not meet the criteria.');
    }
  } return newArray
}

console.log(sockPurchasingCustomers(customers));
