var str = "";
var enemy = "";
var my = "";
var player_points = 0;
var enemy_points = 0;

var player_mark = document.getElementById("my_points");
var enemy_mark = document.getElementById("enemy_points");
var text_result = document.getElementById("msg_result");
var msg_result = "Clique em alguma figura abaixo, para começar!";

function jokenpo(str){
    enemy_rng();
    let my_choice_img = document.getElementById("my_choice_img");

    let option4 = document.getElementById("opt4");//pedra
    let option5 = document.getElementById("opt5");//papel
    let option6 = document.getElementById("opt6");//tesoura

    option4.onclick = function(){
        my_choice_img.src = "images/pedra.png";
        option4.setAttribute("class", "escolhido-player");
        option5.removeAttribute("class");
        option6.removeAttribute("class");
        my = "pedra";
    }

    option5.onclick = function(){
        my_choice_img.src = "images/papel.png";
        option5.setAttribute("class", "escolhido-player");
        option4.removeAttribute("class");
        option6.removeAttribute("class");
        my = "papel";
    }

    option6.onclick = function(){
        my_choice_img.src = "images/tesoura.png";
        option6.setAttribute("class", "escolhido-player");
        option4.removeAttribute("class");
        option5.removeAttribute("class");
        my = "tesoura";
    }

    /*
    if(str.lenght === 7){//SCISSOR
        my_choice_img.src = "images/tesoura.png";
        option6.setAttribute("class", "escolhido");
        option4.removeAttribute("class");
        option5.removeAttribute("class");
        var my = "tesoura";
    }

    if(str.lenght === 4){//ROCK
        my_choice_img.src = "images/pedra.png";
        option4.setAttribute("class", "escolhido");
        option5.removeAttribute("class");
        option6.removeAttribute("class");
        var my = "pedra";
    }

    if(str.lenght === 5){//PAPER
        my_choice_img.src = "images/papel.png";
        option5.setAttribute("class", "escolhido");
        option4.removeAttribute("class");
        option6.removeAttribute("class");
        var my = "papel";
    }
    */
    if(enemy == "papel" && my == "papel"){
        console.log("empatou!");
        msg_result = "Você empatou!";
    }

    if(enemy == "papel" && my == "tesoura"){
        console.log("voce ganhou!");
        msg_result = "Você ganhou!";
        player_points++;
    }

    if(enemy == "papel" && my == "pedra"){
        console.log("voce perdeu!");
        msg_result = "Você perdeu!";
        enemy_points++;
    }

    if(enemy == "pedra" && my == "papel"){
        console.log("voce ganhou!");
        msg_result = "Você ganhou!";
        player_points++;
    }

    if(enemy == "pedra" && my == "tesoura"){
        console.log("voce perdeu!");
        msg_result = "Você perdeu!";
        enemy_points++;
    }

    if(enemy == "pedra" && my == "pedra"){
        console.log("empatou!");
        msg_result = "Você empatou!";
    }

    if(enemy == "tesoura" && my == "papel"){
        console.log("voce perdeu!");
        msg_result = "Você perdeu!";
        enemy_points++;
    }

    if(enemy == "tesoura" && my == "tesoura"){
        console.log("empatou!");
        msg_result = "Você empatou!";
    }

    if(enemy == "tesoura" && my == "pedra"){
        console.log("voce ganhou!");
        msg_result = "Você ganhou!";
        player_points++;
    }

    enemy_mark.innerHTML = "Seu adversário tem: " + enemy_points + " pontos";
    player_mark.innerHTML = "Você tem: " + player_points + " pontos";
    text_result.innerHTML = msg_result;
    if(player_points === 100){
        let msg = "Caaarai ainda ta jogando?";
        alert(msg);
    }
}

function enemy_rng(){
    let enemy_choice_img = document.getElementById("enemy_choice_img");
    let enemy_choice = Math.floor ( (Math.random() * 3) + 1);
    console.log(enemy_choice);

    let option1 = document.getElementById("opt1");
    let option2 = document.getElementById("opt2");
    let option3 = document.getElementById("opt3");
    switch (enemy_choice)
    {
        case 1:
            enemy_choice_img.src = "images/pedra.png";
            option1.setAttribute("class", "escolhido");
            option2.removeAttribute("class");
            option3.removeAttribute("class");
            enemy = 'pedra';
            return "pedra";
            break;
            
        case 2:
            enemy_choice_img.src = "images/papel.png";
            option2.setAttribute("class", "escolhido");
            option1.removeAttribute("class");
            option3.removeAttribute("class");
            enemy = 'papel';
            return "papel";
            break;
    
        case 3:
            enemy_choice_img.src = "images/tesoura.png";
            option3.setAttribute("class", "escolhido");
            option1.removeAttribute("class");
            option2.removeAttribute("class");
            enemy = 'tesoura';
            return "tesoura";
            break;
    }

    /* ERROR
    if("pedra"){
        option1.setAttribute("class", "escolhido");
        option2.removeAttribute("class");
        option3.removeAttribute("class");
    }

    if("papel"){
        option2.setAttribute("class", "escolhido");
        option1.removeAttribute("class");
        option3.removeAttribute("class");
    }

    if("tesoura"){
        option3.setAttribute("class", "escolhido");
        option1.removeAttribute("class");
        option2.removeAttribute("class");
    }
    */
}

$(function() {
    enemy_rng();
    text_result.innerHTML = msg_result;
    jokenpo('rock');
  });