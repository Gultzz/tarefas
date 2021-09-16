var input = document.getElementById('input');
input.addEventListener('focus', function () { // Focus quer dizer que o campo foi focado
    addEventListener('keydown', seila); // keydown, keyup e keypress para a tecla selecionada
});
input.addEventListener('blur', function () { // blur quer dizer que o campo foi desfocado
    console.log('input Desfocado');
});
var ctrl = false;
function seila(event) {
    console.log("O código da tecla clicado é " + event.keyCode);
    if (event.keyCode == 17) {
        ctrl = true;
    }
    if (ctrl == true && event.keyCode == 65) {
        console.log("CTRL + A");
        ctrl = false;
    }
    console.log(ctrl);
}


//TODO          Estilo Classe

function Carro() {
    this.name;
    this.marca;
    this.modelo;
    this.velocidade;
}

var carro1 = new Carro();
carro1.marca = "seila";
console.log(carro1.marca);



function teste2() {
    var i = document.getElementById("i");
    // setTimeout(()=>{
    //         console.log(i.value);
    //         teste2();
    // },1000);

    setInterval(() => {
        console.log(i.value);
    }, 1000);
}
teste2();
function validar() {
    var i = document.getElementById("i");
    if (i.value.trim() == "") {
        i.style.backgroundColor = "red";
        alert("Digite uma senha valida para enviar com sucesso.");
        return false;
    } else if (i.value.length < 8) {
        alert("Digite uma senha maior.");
        return false;
    }else {
        alert("Formulario enviado com sucesso.");
        return true;
    }
}

var arr = [1,2,3,4,5];

var newArrayMap = arr.map(function(item, index){ // map percorre todos os itens de um array e retorna alguma coisa
    return item + index;
});
console.log(newArrayMap);

var newArrayReduce = arr.reduce(function(item, proximo){ //dá para somar todos.
    return item + proximo;
});
console.log(newArrayReduce);

var newArrayFind = arr.find(function(item){ // find percorre array e ve se tem algo nele
    return item === 5;
});
console.log(newArrayFind);



// teste de endsWich e StartWich // verifica se inicia com uma certa letra(Numero) ou termina com uma certa letra(Numero)
var name2 = "Gustavo";
console.log(name2.startsWith('G') + " " + name2.endsWith('o'));

if (name2.startsWith('G') && name2.endsWith('o')) {
    console.log("Começa com G e termina com O");
}



// não funciona com array
// var array2 = ['matheus', 'gustavo', 'lucas', 'joao'];
// console.log(array2.endsWith('o'));

var array3 = [
    { nome: "Lucas", idade: 19 },
    { nome: "Gustavo", idade: 17 },
    { nome: "Adão", idade: 22 }
];

var some = array3.some(pessoa => pessoa.nome === 'Gustavo'); //some() Verifica se existe pelo menos um // verifica se existe pelo menos um 'Gustavo'
console.log(some);

var every = array3.every(pessoa => pessoa.idade >= 18); //some() Verifica se existe pelo menos um // verifica se todos são maiores de 18 anos
console.log(every);