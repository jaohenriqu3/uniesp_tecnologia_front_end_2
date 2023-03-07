// algoritmo que obtenha dados de altura e o sexo (masculino ou feminino) de 15 pessoas e apresente os seguintes resultados:
// a maior e menor altura do grupo
// a media de altura dos homens 
// numero de mulheres 

var altura, sexo;
var somaalturahomens = 0;
var quantidademulheres = 0;
var maioraltura = 0;
var menoraltura = 0;  

for (var i = 1; i <= 15; i++) {
    altura = prompt(`Digite a altura da ${i}ª pessoa:`);
    sexo = prompt(`Digite o sexo da ${i}ª pessoa (M ou F):`);

if (altura > maioraltura) {
    maioraltura = altura; }
  
if (altura < menoraltura) {
    menoraltura = altura; }
  
if (sexo === 'M') {
    somaalturahomens += altura;}
else if (sexo === 'F') {
    quantidademulheres++; }
}  

const mediaalturaHomens = somaalturahomens / 15;

console.log ("A maior altura do grupo é", maiorAltura) 
console.log ("A menor altura do grupo é", menorAltura) 
console.log ("A media de altura dos homens é, " ) 
console.log ("A quantidade de mulheres pesquisadas foi de" , quantidademulheres)  
