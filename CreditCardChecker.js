const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



//check card array & return true if valid / false if invalid
function validateCred(cardArray) {
  let total = 0;
  for (let i = cardArray.length - 1; i >= 0; i--) {
    let changeSum = cardArray[i];
    if (((cardArray.length - i) % 2) == 0) {
      changeSum *= 2;
      if (changeSum > 9) {
        changeSum -= 9;
      }
    };
    total += changeSum;
  }
  if ((total % 10) !== 0) {
    return false;
  } else {
    return true;
  }
}

function findInvalidCards(arrayOfCards) {
  let validatedCards = [];
  let invalidCards = [];

  for (let i = 0; i < arrayOfCards.length; i++) {
    if (validateCred(arrayOfCards[i]) === false) {
      validatedCards.push(`Card #${i+1} (${creditArrayString[i]}) is invalid.`);
      invalidCards.push(arrayOfCards[i]);
    } else {
      validatedCards.push(`Card #${i+1} (${creditArrayString[i]}) is valid.`);
    }
  }
  return [validatedCards, invalidCards];
};

console.log(validateCred(invalid1))
console.log(findInvalidCards(invalid1))
