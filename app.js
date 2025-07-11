/**
 *  Gera um parágrafo dentro do html
 *  @param {string} text
 */
function writeLine(text){
    let element = document.querySelector(".box");
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    element.appendChild(paragraph);
}
const arr = [0]; //Inicialização da array como number
let averangeGasStationPrice = 0;
//Declaração de variáveis de entrada
let minimumCostGasStation; //verificar
let totalValues = 0;
let traveledDistance = parseFloat(prompt("Qual a distância percorrida da sua casa até seu trabalho (em km)"));
let avgCosume = parseFloat(prompt("Qual o consumo médio do seu veículo (em km/L)"));

//Calculo para saber consumo de gasolina por litros
const fuelConsumption = traveledDistance/avgCosume;

//Quantidade de posto de combustível pesquisada
let quantityGasStation = parseInt(prompt("Em quantos postos de gasolina você pesquisou?"))

//Capturando os preços pesquisados
for(let i = 0; i < quantityGasStation; i++){
    let valueGasStation = parseFloat(prompt(`Digite o valor encontrado (em R$) no posto ${i+1}`));
    
    //Atribuindo o valor na array
    arr[i] = valueGasStation;

    //Soma dos valores
    totalValues += valueGasStation;
}

//Ordenando os valores
arr.sort()
//Pegando o menor valor
minimumCostGasStation = arr[0]

// Calcula a média de valores dos postos pesquisado
averangeGasStationPrice = totalValues/quantityGasStation 

//Resposta do Sistema
alert(`O cosumo necessário é ${fuelConsumption.toFixed(2)} litros`);

//Gasto diário
const dayCost = 2*(fuelConsumption*minimumCostGasStation)

//Escrevendo no HTML    
writeLine(`O cosumo necessário é ${fuelConsumption.toFixed(2)} litros`);
writeLine(`O menor valor pesquisado é R$ ${minimumCostGasStation.toFixed(2)}`);
writeLine(`A média dos valores pesquisado é R$ ${averangeGasStationPrice.toFixed(2)}`);
writeLine(`O gasto diário (ida e volta) é R$ ${dayCost.toFixed(2)}`)

// FALTA FAZER TRATAMENTO DE DADOS NOS PROMPTS