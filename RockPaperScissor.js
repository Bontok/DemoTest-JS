const getUserChoice = userInput => {
 userInput = userInput.toLowerCase();
  if(userInput === 'roca' || userInput === 'papel' || userInput === 'tijeras'){
    return userInput;
  }else{
    console.log('NONONOOOOOO - ERROR!');
  }
};
const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() *3)
switch (randomNumber) {
  case 0 :
   return 'roca';
    case 1 :
   return 'papel';
   case 2 :
   return 'tijeras';
}
};
const determineWinner = (userChoise, computerChoise) => {
 if(userChoise === computerChoise){
   return 'Empate ;) tirar de nuevo!'
 }
 if(userChoise === 'roca')
  if(computerChoise === 'papel'){
    return 'Gano la compu';
  }else{
    console.log('You win');
  }
  if(userChoise === 'papel')
  if(computerChoise === 'tijeras'){
    return 'Gano la compu';
  }else{
    console.log('You win');
  }
  if(userChoise === 'tijeras')
  if(computerChoise === 'roca'){
    return 'Gano la compu';
  }else{
    console.log('You win');
  }

};
const playGame = () => {
   const userChoice = getUserChoice('tijeras');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();