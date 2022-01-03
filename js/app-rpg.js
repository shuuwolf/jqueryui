var playerLevel = 1;
var playerHpBase = Math.floor(playerLevel * 20);
var playerHp = playerHpBase;
var playerAttackBase = 1;
var playerAttack = 1;
var playerExp = 0;

var monsterHpBase = Math.floor( (playerLevel * 10) + (playerHp / 3) );
var monsterHp = monsterHpBase;
var monsterAttackBase = 1;
var monsterAttack = 1;
var monsterLevel = 1;

var player_damage;
var monster_damage;
var exp_required = 5 * monsterLevel * 2;
var exp = 0;
var gold = 10 * monsterLevel;
var player_hp = document.getElementById("player_hp_number");
var monster_hp = document.getElementById("monster_hp_number");

function Attack(){
    playerAttack = Math.floor ( (Math.random() * 10) + playerAttackBase);
    if(playerAttack >= 7){
        //Quando o ataque der 7 ou mais, recebera um porcetagem bonus de ( 25% ) por ser critico!
        playerAttack = Math.floor( (playerAttack * 1.25) );
    }
    monsterHp = monsterHp - playerAttack;
    monster_hp.innerHTML = monsterHp + '/' + monsterHpBase;
    monsterKilled();
    Monster_Attack();
    showPlayerDamage();
    textLogOfBattlePlayer();
    //console.log(monsterHp);
    //console.log(playerAttack);

    //Imagem do player caso antes esteja fugindo!
    let buildimg = `/images/player_sword.png`;
    document.querySelector('#player_img').setAttribute('src', buildimg);
    $('#player_hp_bar').show();//voltar a mostrar o hp!
}

function showPlayerDamage(){
    if(playerAttack >= 7){
        player_damage = "CritDamage Dealt: " + playerAttack;
    }else{
        player_damage = "Damage Dealt: " + playerAttack;
    }
}

function Monster_Attack(){
    monsterAttack = Math.floor ( (Math.random() * 10) + monsterAttackBase);
    if(monsterAttack >= 7){
        //Quando o ataque der 7 ou mais, recebera um porcetagem ( 25% ) por ser critico!
        monsterAttack = Math.floor( (monsterAttack * 1.25) );
    }
    playerHp = playerHp - monsterAttack;
    player_hp.innerHTML = playerHp + '/' + playerHpBase;
    showMonsterDamage();
    textLogOfBattleMonster();
    //console.log(monsterAttack);
}

function showMonsterDamage(){
    if(monsterAttack >= 7){
        monster_damage = "CritDamage Dealt: " + monsterAttack;
    }else{
        monster_damage = "Damage Dealt: " + monsterAttack;
    }
}

function textLogOfBattlePlayer(){//Coloca um p dinamicamente no dom, com o valor do ataque do player.
    var text_log = document.getElementById("log_text_battle");
    text_log.insertAdjacentHTML("afterbegin", `<p class="text-log-player">` + `<span style="color:white;">Player: </span>` + player_damage + "</p>");
    //removeTextBattle();
}

function textLogOfBattleMonster(){//Coloca um p dinamicamente no dom, com o valor do ataque do monstro.
    var text_log_monster = document.getElementById("log_text_battle");
    text_log_monster.insertAdjacentHTML("afterbegin", `<p class="text-log-monster">` + `<span style="color:white;">Monster: </span>` + monster_damage + "</p>");
    //removeTextBattle();
}

function textLogOfBattleResources(){//Coloca um p dinamicamente no dom, com o valor do ataque do monstro.
    var text_log_resource = document.getElementById("log_text_battle");
    text_log_resource.insertAdjacentHTML("afterbegin", `<p class="text-log-resource">` + `<span style="color:white;">Resources: </span>` + 'Gold: ' + gold + ' Exp: ' + exp + "</p>");
    //removeTextBattle();
}

function monsterKilled(){
    if(monsterHp <= 0){
        let msg = 'Você matou o monstro! \r\n';
        levelUP();
        resource_update();
        alert(msg);
        monsterHp = monsterHpBase;
        textLogOfBattleResources();
    }
}

function levelUP(){
    if(playerExp >= exp_required){
        playerLevel = playerLevel + 1;
        playerExp = 0;
        exp = 0;
        monsterLevel = monsterLevel + 1;
        let msg = "Você passou de level!!";
        alert(msg);    
    }
}

function playerRun(){
    let buildimg = `/images/running person.png`;
    document.querySelector('#player_img').setAttribute('src', buildimg);
    let msg = 'Você fugiu da batalha, Sem ganho de Exp e Gold!';
    $('#player_hp_bar').hide();
}

function resource_update(){
    exp = 5 * monsterLevel;
    var expResource = document.getElementById("xp_currency");
    var goldResource = document.getElementById("gold_currency");
    playerExp = exp + playerExp;
    expResource.innerHTML = 'EXP: ' + playerExp + ' / ' + '<span id=\"exp_required\">' + exp_required + '</span>';
    //expResource.insertAdjacentHTML("afterbegin", "<span>Gold: " + gold + "</span>");
    //goldResource.insertAdjacentHTML("afterbegin", "<span>Exp: " + exp + "</span>");
}

/*
function removeTextBattle(){
    let textLogMonster = document.getElementsByClassName("text-log-monster");
    let textLogPlayer = document.getElementsByClassName("text-log-player");
    for(let i = 0; i < textLogMonster.length; i++){
        if(textLogMonster.length <= 5){
            return;
        }else{
            textLogMonster[5].remove();
        } 
    }

    for(let i = 0; i < textLogPlayer.length; i++){
        if(textLogPlayer.length <= 5){
            return;
        }else{
            textLogPlayer[5].remove();
        } 
    }
}
*/


//EFFECTS WITH JQUERY UI
$("#attack").click(function(){
    $("#monster_img").effect("shake");
});

