var altura;
var sexo;
var somaalturahomens = 0;
var quantidademulheres = 0;
var maioraltura = 0;
var menoraltura = 0;  

// Perguntas para o usuario 
for (var i = 1; i <= 15; i++) {
    altura = prompt(`Digite a altura:`);
    sexo = prompt(`Digite o sexo (M ou F):`);

// Obter maior altura
if (altura > maioraltura) {
    maioraltura = altura; }

// Obter menor altura  
if (altura < menoraltura) {
    menoraltura = altura; }

// Obter quantidade de homens e somar  
if (sexo === 'M') {
    somaalturahomens += altura;} 
    
// Obter quantidade de mulheres    
else if (sexo === 'F') {
    quantidademulheres++; }
}  

// Calcular media de homens 
const mediaalturaHomens = somaalturahomens / 15;

// Imprimir resultados 
console.log ("A maior altura do grupo é", maioraltura) 
console.log ("A menor altura do grupo é", menoraltura) 
console.log ("A media de altura dos homens é, " ) 
console.log ("A quantidade de mulheres pesquisadas foi de" , quantidademulheres)  
