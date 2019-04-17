// ITERAR LISTA COM FOR
// let filmes = ['Harry Potter', 'Titanic', 'Laranja Mecanica', 'Wall-e', 'O menino que descobriu o vento',  'Nazismo',  'KillBill'];

// // FAROFA (FOR OF)
// for(let item of filmes){
//     console.log (item);
// }

// // FARINHA (FOR IN)
// for(let indice in filmes){
// console.log (indice);
// }

// NORMAL
//let indice;
//for (indice=0; indice<filmes.length;indice++){
// console.log(filmes[indice]);
//}


//FUNCTION NOME DAFUNÇÃO(ARGUMENTOS){
// RETURN- QUALQUER COISA QUE ENVOLVA OS ARGUMENTOS
//{

// function calculadora(a,b,c){
//    return (a+b)*c;
// }
// console.log(calculadora(2,3,5));

// //FUNÇÃO ANONIMA
// function CalcMedia (n1,n2,n3){
//   return (n1+n2+n3)/3.
// }
// console.log(CalcMedia(3,7,10));


let idade=prompt ("Digite sua idade")
let posição= 0;

let filmes=[   
    {titulo:"Star Wars", classificacao: 14},
    {titulo:"Chureki", classificacao: 0},
    {titulo:"Ninja Assassino", classificacao: 18}
];

/*QUAL É A SUA IDADE?
(CONDIÇÃO SE A IDADE FOR MENOR OU IGUAL CLASSIFICAÇÃO,MOSTRAR O FILME DISPONIVEL)
**FERRAMENTAS**
VARIAVEL E PROMPT
FOR IN
IF ELSE
*/


for (let i in filmes){
    if (idade >= filmes [i].classificacao){
        alert(filmes[i].titulo);
    }
}


















