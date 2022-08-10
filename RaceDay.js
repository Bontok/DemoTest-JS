let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let yearRunner = 18;
// Edad del corredor inscripto. 
if ( earlyReg === true && yearRunner >= 18){
 raceNumber += 1000;
}
// Regustro de edad mayores de 18 asignación número
if (earlyReg === true && yearRunner >=18){
  console.log(`Genial te has registrado correras a las 9:30 de la mañana con el númoer ${raceNumber}`)
}else if (earlyReg === false && yearRunner >=18){
   console.log(`Genial te has registrado correras a las 11 de la mañana con el númoer ${raceNumber}`);
}else if ( yearRunner < 18){
   console.log(`Genial te has registrado correras a las 12:30 de la mañana con el númoer ${raceNumber}`);
}