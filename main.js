window.addEventListener("mousemove", (e)=> { /*Busca evento de mexer o mouse da página*/
setTimeout(() => document.getElementById("container-main__audio").play(), 1000) /*Espera de 1s*/
})


function submitValue(){
    document.querySelector("button").addEventListener( "click", function() {
        let value = document.querySelector(".main-challenger__info--input").value
    })
}
const question = [
    "*Qual a distância percorrida da sua casa até seu trabalho (em km)"
]
let distance = 0;
let container = document.querySelector(".main-challenger__box-img--dialog-cloud-text")
while(true){
    do {
        paragraph = document.createElement("p")
    } while(isNaN(paragraph))
    break;
}