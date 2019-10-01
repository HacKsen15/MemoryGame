var tabs = ["red","blue","yellow","green","orange","white"]; // taille: 6

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var shuffleArray = shuffle(tabs.concat(tabs));
console.log(shuffleArray);



// selectionner tte les carte
var card = document.getElementsByClassName("card");
console.log(card);

for (i in shuffleArray) {
        card[i].classList.add(shuffleArray[i]);
        card[i].addEventListener('click', function(event) {
            event.target.classList.add("bg-" + event.target.classList[1])
        })
}

