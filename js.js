var clavier = document.querySelector("#clavier");

for( char of "abcdefghijklmnopqrstuvwxyz" ){
                    
    clavier.innerHTML += "<div class='touche'>" + char + "</div>";
}
    
    
    
    