var zero = document.getElementById("0");
var un = document.getElementById("1");
var deux = document.getElementById("2");
var trois = document.getElementById("3");
var quatre = document.getElementById("4");
var cinq = document.getElementById("5");
var six = document.getElementById("6");
var sept = document.getElementById("7");
var huit = document.getElementById("8");
var neuf = document.getElementById("9");
var dix = document.getElementById("10");
var onze = document.getElementById("11");

var tabs = ["red","blue","yellow","green","pink","white"];


function rouge() {

    for (let i = 0; i < tabs.length; i++) {
        zero.style.background =  tabs[Math.floor(Math.random() * (tabs.length - 0 + 1) + 0)];
    }

    if (tabs != tabs) {
        zero.style.background = "blue";
    }

}



function bleu() {
    un.style.background = "red";


}

function vert() {
    deux.style.background = "green";

    
}

function jaune() {
    trois.style.background = "yellow";

}

function orange() {
    quatre.style.background = "orange";


}

function rose() {
    cinq.style.background = "pink";


}

function blanc() {
    six.style.background = "white";

   
}








zero.addEventListener("click",rouge);
un.addEventListener("click",bleu);
deux.addEventListener("click",vert);
trois.addEventListener("click",jaune);
quatre.addEventListener("click",orange);
cinq.addEventListener("click",rose);
six.addEventListener("click",blanc);

