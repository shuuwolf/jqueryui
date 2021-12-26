var playerLevel = 1;
var playerHpBase = Math.floor(playerLevel * 20);
var playerHp = playerHpBase;
var playerAttackBase = 1;
var playerAttack = 1;
var playerExp = 0;
var exp = 0;
var gold = 0;

var monsterHpBase = Math.floor( (playerLevel * 10) + (playerHp / 3) );
var monsterHp = monsterHpBase;
var monsterAttackBase = 1;
var monsterAttack = 1;
var monsterLevel = 1;

var player_damage = document.getElementById("showPlayerDamage");
var monster_damage = document.getElementById("showMonsterDamage");
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
    //console.log(monsterHp);
    //console.log(playerAttack);

    //Imagem do player caso antes esteja fugindo!
    let buildimg = `/images/player_sword.png`;
    document.querySelector('#player_img').setAttribute('src', buildimg);
    $('#player_hp_bar').show();//voltar a mostrar o hp!

    //imagem do escudo, trocar para imagem de atacar!
    let buildimg2 = `/images/sword.png`;
    document.querySelector('#attack_or_defense').setAttribute('src', buildimg2);
}

function monsterKilled(){
    var exp = 5 * monsterLevel;
    var gold = 10 * monsterLevel;
    if(monsterHp <= 0){
        let msg = 'Você matou o monstro! \r\n';
        msg += 'Exp: ' + exp + "\r\n";
        msg += 'Gold: ' + gold;
        alert(msg);
        monsterHp = monsterHpBase;
        levelUP();
    }
}

function levelUP(){
    playerExp = playerExp + exp;
    if(playerExp >= 50){
        playerLevel++;
    }
}

function showPlayerDamage(){
    if(playerAttack >= 7){
        player_damage.innerHTML = "CritDamage Dealt: " + playerAttack;
    }else{
        player_damage.innerHTML = "Damage Dealt: " + playerAttack;
    }
    //player_damage.insertAdjacentHTML('afterend', ' ');
    //player_damage.insertAdjacentHTML('afterend', playerAttack);
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
    //console.log(monsterAttack);
}

function showMonsterDamage(){
    if(monsterAttack >= 7){
        monster_damage.innerHTML = "CritDamage Dealt: " + monsterAttack;
    }else{
        monster_damage.innerHTML = "Damage Dealt: " + monsterAttack;
    }
}

function playerRun(){
    let buildimg = `/images/running person.png`;
    document.querySelector('#player_img').setAttribute('src', buildimg);
    let msg = 'Você fugiu da batalha, Sem ganho de Exp e Gold!';
    $('#player_hp_bar').hide();
}

function playerDefense(){
    let buildimg = `/images/defense.png`;
    document.querySelector('#attack_or_defense').setAttribute('src', buildimg);
    //monsterAttack = monsterAttack * 0.5;//diminui o ataque do monstro em 50%
   
}


//EFFECTS WITH JQUERY UI
$("#attack").click(function(){
    $("#monster_img").effect("shake");
});

