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

/**
 * Cria prompt para inserir o valores do tipo number na variável. (Obs: por padrão, o valor atribuito é ponto flutuante)
 * @param {number} variable variável a ser atribuida.
 * @param {string} text  mensagem exibida.
 * @param {boolean} option true para valores de ponto flutuante e falso para valores inteiro.
*/
function inputValue(text, option = true) {
let variable = "";
if(option == true){
do {
    variable = prompt(text);
    variable = variable.replace(",", ".")
    variable = parseFloat(variable)
    
} while(isNaN(variable));
}
else if (option == false){
do {
    variable = prompt(text);
    variable = variable.replace(",", ".")
    variable = parseInt(variable)
    if (isNaN(variable)){
        alert("O valor não é um número ou campo está vazio.")
    }
} while(isNaN(variable) || variable >= 1);
}
else {
console.error("Valor inválido");
}
return variable;
}

/**
 * Valida o valor passado como parâmetro.
 * @param {number | string} value valor que vai ser validado.
 * @param {boolean} option verificação para validar números maior que 1.
*/
function validatedValue(value, option = false) {
if (value == "") {
return alert("Campo vazio.")
} else if (isNaN(variable)){
return alert("O valor não é um número")
} else if (value < 1 && option == true){
return alert("Digite um valor maior que zero.")
}
}

/**
 * Verifica se o número é positivo.
 * @param {number} num valor numérico.
 * @returns {boolean} retorna true caso seja positivo e false caso seja negativo
 */
function isPositivoNumber(num){
if (num >= 0)
return true;
else if (isNaN(num))
alert("Digite alguma coisa")
alert("O valor não é um número positivo.")
return false;
}

//====================Variáveis====================

const arr = [0]; // array para pegar o menor número.
let averangeGasStationPrice = 0; //Media de preço.
let minimumCostGasStation = 0; //Valor mínimo.
let totalValues = 0; //Soma dos valores dos postos pesquisados.
let traveledDistance = 0; // Distância percorrida.
let avgCosume = 0; //Media de consumo.
let quantityGasStation = 0; //Quantidade de posto.
let valueGasStation = 0 //Preço de cada posto.

//Entrada e validação da distância percorrida
while(true){

traveledDistance = inputValue("Qual a distância percorrida da sua casa até seu trabalho (em km)");
let flag = isPositivoNumber(traveledDistance)
if(flag){
//Entrada e validação do consumo médio
while(true){
    avgCosume = inputValue("Qual o consumo médio do seu veículo (em km/L)")
    if(isPositivoNumber(avgCosume))
        break;
}
break;
}
}

//Calculo para saber consumo de gasolina por litros
const fuelConsumption = traveledDistance/avgCosume;

//Quantidade de posto de combustível pesquisada
while(true){
quantityGasStation = inputValue("Em quantos postos de gasolina você pesquisou?", false)
if (isPositivoNumber(quantityGasStation))
break;
}

//Capturando os preços pesquisados
for(let i = 0; i < quantityGasStation; i++){
while(true){
valueGasStation = inputValue(`Digite o valor encontrado (em R$) no posto ${i+1}`)
if (isPositivoNumber(valueGasStation))
    break;
}

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

//Passando para o HTML    
writeLine(`O cosumo necessário é ${fuelConsumption.toFixed(2)} litros`);
writeLine(`O menor valor pesquisado é ${minimumCostGasStation.toLocaleString("pt-br", {style: "currency", currency:"BRL"})}`);
writeLine(`A média dos valores pesquisado é ${averangeGasStationPrice.toLocaleString("pt-br", {style: "currency", currency:"BRL"})}`);
writeLine(`O gasto diário (ida e volta) é ${dayCost.toLocaleString("pt-br", {style: "currency", currency:"BRL"})}`)