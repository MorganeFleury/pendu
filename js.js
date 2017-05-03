/*declaration des variables*/


var tableauMot = ["lavande", "corail", "sauge", "caramel", "cacao", "or", "canard", "ballet", "lilas", "rubis"];
var motAleatoire = tableauMot[Math.floor(Math.random()*tableauMot.length)];
var btnRjz = document.querySelector(".btn-rejouez");




/*faire une boucle et generer des inputs*/


var clavier = document.querySelector("#clavier");

for( char of "abcdefghijklmnopqrstuvwxyz" ){
                    
    clavier.innerHTML += "<div class='touche'>" + char + "</div>";
}
    
    
    
    