window.addEventListener("mousemove", (e)=> { /*Busca evento de mexer o mouse da página*/
setTimeout(() => document.getElementById("container-main__audio").play(), 1000) /*Espera de 1s*/
})
let option = 0;
let result = [0];
let index = 0;
const containerText = document.querySelector(".main-challenger__box-img--dialog-cloud-text")
const questionBox = [
    "* Qual a distância percorrida da sua casa até seu trabalho (em km)",
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
    let letterArray = arr[index].split("")
    console.log(letterArray.length)
    for(let joo = 0; joo< letterArray.length; joo++){
        let element = document.createElement("span")
        element.textContent = letterArray[joo]
        element.classList.add("main-challenger__box-img--dialog-cloud-text-letter")
        console.log(element.textContent)
        if (element.textContent.trim().length == 0){
            element.textContent = "\u00A0"
        }
        containerText.appendChild(element); 
        }
}

/**
 * Captura valor do input
*/
function submitValue(){
    document.querySelector("button").addEventListener( "click", function() {
        let value = parseFloat(document.querySelector(".main-challenger__info--input").value);
        let allElementSpan = document.querySelectorAll(".main-challenger__box-img--dialog-cloud-text-letter")
        result[index] = value;
        for (let o in allElementSpan){
            let element = document.querySelector(".main-challenger__box-img--dialog-cloud-text-letter")
            element.remove()
        }
        index++;
        option++;
        switch (option) {
            case 1:
                dialogSans(questionBox, 1);
                break;
            case 2:
                console.log(result.length)
                dialogSans(questionBox, 2)
                break;
            case 3:
                console.log(result.length)
                dialogSans(questionBox, 3)
                break;
            case 4:
                console.log(result.length)
                dialogSans(questionBox, 3)
                break;
            default:
                break;
        }
    })
}

submitValue() //Espera ser chamado para executar o evento
console.log(result.length)

dialogSans(questionBox, 0)