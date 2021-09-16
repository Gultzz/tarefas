// var input = document.getElementById('input');
// input.addEventListener('focus', function () { // Focus quer dizer que o campo foi focado
//     addEventListener('keydown', seila); // keydown, keyup e keypress para a tecla selecionada
// });
// input.addEventListener('blur', function () { // blur quer dizer que o campo foi desfocado
//     console.log('input Desfocado');
// });
// var ctrl = false;
// function seila(event) {
//     console.log("O código da tecla clicado é " + event.keyCode);
//     if (event.keyCode == 17) {
//         ctrl = true;
//     }
//     if (ctrl == true && event.keyCode == 65) {
//         console.log("CTRL + A");
//         ctrl = false;
//     }
//     console.log(ctrl);
// }


// //TODO          Estilo Classe

// function Carro() {
//     this.name;
//     this.marca;
//     this.modelo;
//     this.velocidade;
// }

// var carro1 = new Carro();
// carro1.marca = "seila";
// console.log(carro1.marca);



// function teste2() {
//     var i = document.getElementById("i");
//     // setTimeout(()=>{
//     //         console.log(i.value);
//     //         teste2();
//     // },1000);

//     setInterval(() => {
//         console.log(i.value);
//     }, 1000);
// }
// teste2();
// function validar() {
//     var i = document.getElementById("i");
//     if (i.value.trim() == "") {
//         i.style.backgroundColor = "red";
//         alert("Digite uma senha valida para enviar com sucesso.");
//         return false;
//     } else if (i.value.length < 8) {
//         alert("Digite uma senha maior.");
//         return false;
//     }else {
//         alert("Formulario enviado com sucesso.");
//         return true;
//     }
// }



var lista = JSON.parse(localStorage.listaInteira);
var tarefaValor = document.getElementById("tarefaInput");
var listaAdd = document.querySelector("#div ul");
var botao = document.getElementById('botao');

function RenderList(){
    listaAdd.innerHTML = '';
    for(item of lista){

        var liElement = document.createElement('li');
        liElement.classList.add('itemLista');
        var liText = document.createTextNode(item);

        var posicao = lista.indexOf(item);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', "deletarItem("+posicao+")");
        linkElement.setAttribute('style', 'padding:10px 15px;background-color:rgba(255,0,0,0.8);color: #fff;font-family: sand-serif;');
        linkElement.innerHTML = "Excluir";

        listaAdd.appendChild(liElement);
        liElement.appendChild(liText);
        liElement.appendChild(linkElement);
    }
    salvarDados();
}
RenderList();

function adicionarItem(){
    var itemText = tarefaValor.value;
    if(itemText.trim().length >= 1){
        lista.push(itemText);
        RenderList();
        salvarDados();
    }
}
botao.addEventListener('click', adicionarItem);
botao.addEventListener('click', limparInput("tarefaInput"));
function deletarItem(position){
    lista.splice(position,1);
    RenderList();
    salvarDados();
}
function salvarDados(){
    localStorage.listaInteira = JSON.stringify(lista);
}
addEventListener('keypress', (event)=>{
    if(event.keyCode == 13){
        adicionarItem();
        limparInput("tarefaInput");
    }
});


function limparInput(name) {
  var tarefas = document.querySelectorAll("input[id='" + name + "']");
  [].map.call(tarefas, tarefaInput => tarefaInput.value = '');
}