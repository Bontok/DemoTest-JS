let userName = 'Marta';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'voy aconseguir mi propósito?';
console.log(`${userName} has preguntado ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
 console.log(randomNumber);
let eightball = '';
switch (randomNumber){
  case 1 :
  eightball = 'Hazlo';
  break;
   case 2 :
 eightball = 'Ni se te ocurra';
  break;
  case 3 :
  eightball = 'tira de vuelta';
  break;
   case 4 :
  eightball = 'mejor averigua';
  break;
   case 5 :
 eightball = 'sera un exito';
  break;
   case 6 :
 eightball = 'tendras mucho que perder';
  break;
   case 7 :
  eightball = 'no no no';
  break;
   case 8 :
 eightball = 'estas seguro';
  break;
  case 0 :
 eightball = 'corre';
  break;
}
console.log(`La bola magica te responde ${eightball}`);