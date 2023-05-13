var images = [
    'imagens/showroom1.jpg',
    'imagens/showroom2.jpg',
    'imagens/showroom3.jpg',
];

var Index=0
var time = 7000

function slideShow(){
    document.getElementById('imgSobre').src=images[Index];
    Index++;
    if (Index == images.length)[Index=0];
    setTimeout('slideShow()', time)
};

function trocar(cor){
    document.body.style.background = cor
}

slideShow()

let data7 = new Date()
let dia =("O" +data7.getDate()).slice(0-2)
let mes = data7.getMonth()
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let ano = data7 .getFullYear()
let mensagem = dia + " de " +meses[mes]+ " de " +ano


let msg = document.getElementById('msg')
msg.innerHTML = mensagem

