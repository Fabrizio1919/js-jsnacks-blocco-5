/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.  */


const zucchine = [
{
   tipo:'ghh',
   peso:2,
   lunghezza:10
},
{
    tipo:'ecec',
    peso:3,
    lunghezza:10
 },
 {
    tipo:'Keei',
    peso:2,
    lunghezza:10 
 },
 {
    tipo:'dcec',
    peso:2,
    lunghezza:10 
 },
 {
    tipo:'Medvevela',
    peso: 2,
    lunghezza:120 
 },
 {
    tipo:'Perecea',
    peso: 2,
    lunghezza:102
 },
 {
    tipo:'Verza',
    peso: 1,
    lunghezza:103
 },
 {
    tipo:'Poori',
    peso: 2,
    lunghezza: 110
 },
 {
    tipo:'Iata',
    peso:2,
    lunghezza:102
 },
 {
    tipo:'Ptate',
    peso:2,
    lunghezza: 23
 },

]
let somma = 0;
zucchine.forEach(zucchina => somma += zucchina.peso);
console.log(`Il peso totale delle zucchine è di ${somma}kg`);