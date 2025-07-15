window.addEventListener("mousemove", (e)=> { /*Busca evento de mexer o mouse da página*/
setTimeout(() => document.getElementById("container-main__audio").play(), 1000) /*Espera de 1s*/
})
let option = 0;
let result = [0];
let index = 0;
const inputTag = document.querySelector(".main-challenger__info--input")
const containerText = document.querySelector(".main-challenger__box-img--dialog-cloud-text")
const questionBox = [
    "* Qual a distância percorrida da sua casa até seu trabalho (em km)?",
    "* Qual o consumo médio do seu veículo (em km/L)?",
    "* Em quantos postos de gasolina você pesquisou?",
    "..."
]

/**
 * Cria a caixa de perguntas do Sans
 * @param {object} arr array de dialogos
 * @param {number} index número inteiro para indice
*/
function dialogSans(arr, index){
    let letterArray = arr[index].split("");
    for(let joo = 0; joo< letterArray.length; joo++){
        let element = document.createElement("span")
        element.textContent = letterArray[joo]
        element.classList.add("main-challenger__box-img--dialog-cloud-text-letter")
        if (element.textContent.trim().length == 0){
            element.textContent = "\u00A0"
        }
        containerText.appendChild(element); 
        }
}

function clearInput(){
    return inputTag.value = ""
}

/**
 * Valida o input de dados
 * @param {string} valueInput valor que deve ser validado
*/
function valueVerification(valueInput){
    if(valueInput.includes(",")){
        valueInput.replace(",", ".");
        return false;
    } else if (isNaN(valueInput)){
        alert("O valor não é um número.");
        return true;
    } else if (valueInput < 0){
        alert("O valor não é um número positivo.");
        return true;
    } else if (valueInput.length === 0){
        alert("Campo vazio.")
        return true;
    } else {
        return false;
    }
}

/**
 * Transforma a string em um number.
 * @param {string} valueInput valor que vai ser transformado em número.
*/
function transformInNumber(valueInput){
    if(parseFloat(valueInput) - parseInt(valueInput) === 0)
        return parseInt(valueInput);
    return parseFloat(valueInput);
}

/**
 * Captura valor do input
*/
function submitValue(){
    document.querySelector("button").addEventListener( "click", function() {
        let value = document.querySelector(".main-challenger__info--input").value;
        let allElementSpan = document.querySelectorAll(".main-challenger__box-img--dialog-cloud-text-letter");
        if (valueVerification(value)){
            return
        }
        if (index === 2)
            value = parseInt(value)
        else
            value = transformInNumber(value)
        result[index] = value;
        console.log(typeof(result))
        console.log(typeof(result[0]))
        for (let i = 0; i < allElementSpan.length; i++){
            let element = document.querySelector(".main-challenger__box-img--dialog-cloud-text-letter")
            element.remove()
        }
        index++;
        console.log(index)
        if (option < 3)
            option++;
        switch (option) {
            case 1:
                clearInput()
                dialogSans(questionBox, 1);
                break;
            case 2:
                clearInput()
                dialogSans(questionBox, 2)
                break;
            case 3:
                clearInput()
                dialogSans(questionBox, 3)
                break;
            default:
                break;
        }
    })
}

submitValue() //Espera ser chamado para executar o evento
dialogSans(questionBox, 0)