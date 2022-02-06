var ctx;
var black = new Image();
black.src = "Images/balck.png";
var gamefreak1 = new Image();
gamefreak1.src = "Images/gamefreak.jpg";
var gamefreakintro = new Image();
gamefreakintro.src = "Images/gamefreakintro.jpg";
var star = new Image();
star.src = "Images/star.gif";
stars = [];
var fish = new Image();
fish.src = "Images/shellder.png";
shellder = [];
var rock = new Image();
rock.src = "Images/rock.png";
var seaweed = new Image();
seaweed.src = "Images/SeaWeed.png";
plants = [];
var water = new Image();
water.src = "Images/water.png";
var oceantop = new Image();
oceantop.src = "Images/oceantop.jpg";
var waterfall = new Image();
waterfall.src = "Images/waterfall.gif";
var fish2 = new Image();
fish2.src = "Images/magikarp.png";
magik = [];
var lapras = new Image();
lapras.src = "Images/lapras.png";
var forest = new Image();
forest.src = "Images/forest.jpeg";
var jiggle = new Image();
jiggle.src = "Images/jigglypuff.png";
var pika = new Image();
pika.src = "Images/pikachu.gif";
var white = new Image();
white.src = "Images/white.png";
var chico = new Image;
chico.src = "Images/chico.png";
var cya = new Image();
cya.src = "Images/cya.png";
var tot = new Image();
tot.src = "Images/tot.png";
var black2 = new Image();
black2.src = "Images/black2.png";
var pokeball = new Image();
pokeball.src = "Images/Pokeball.png";
rowan = new Image();
rowan.src = "battle/rowan.png";
text1 = new Image();
rowan.src = "battle/rowan intro.png";
text = new Image();
text.src = "battle/text.png";

var charizard = new Image();
charizard.src = "battle/charizard.png";
var arrow = new Image();
arrow.src = "battle/arrow.png";
var flamethrower = new Image();
flamethrower.src = "battle/flamethrower.png";
var dragonclaw = new Image();
dragonclaw.src = "battle/dragonclaw.png";
var feathers = new Image();
feathers.src = "battle/roost.png";
var wings = new Image();
wings.src = "battle/wingattack.png";
var charizard2 = new Image();
charizard2.src = "battle/charizard2.png";
var venusaur2 = new Image();
venusaur2.src = "battle/venusaur2.png";
var blast2 = new Image();
blast2.src = "battle/blast2.png";
var opponentfire = new Image();
opponentfire.src = "battle/flamethrower2.png";
roost = [];
claws = [];
wings1 = [];
var blastoisepick = new Image();
blastoisepick.src = "battle/blastoisepick.png";
var venusaurpick = new Image();
venusaurpick.src = "battle/venusaurpick.png";
var battleanimation = new Image();
battleanimation.src = "battle/battle animation.jpg";
var battleanimation2 = new Image();
battleanimation2.src = "battle/battle animation2.png";
var blank = new Image();
blank.src = "battle/blank.png";
var cythia = new Image();
cythia.src = "battle/cythia.jpg";
var hydropump = new Image();
hydropump.src = "battle/hydropump.png";
var hydroopponent = new Image();
hydroopponent.src = "battle/hydroopponent.png";
var dragonpulse = new Image();
dragonpulse.src = "battle/dragonpulse.png";
pulse = [];
var headbutt = new Image();
headbutt.src = "battle/headbutt.png";
var raindance = new Image();
raindance.src = "battle/raindance.png";
rain = [];
var headbutt2 = new Image();
headbutt2.src = "battle/heatbutt opponent.png";
var leafstorm = new Image();
leafstorm.src = "battle/leafstorm.png";
leaves = [];
var synthesis = new Image();
synthesis.src = "battle/synthesis.png";
suns = [];
var double = new Image();
double.src = "battle/double edge.png";
edge = [];
var strength = new Image();
strength.src = "battle/strength.png";
power = [];
var songs = new Image();
songs.src = "battle/songs.png";
var megacharizard = new Image();
megacharizard.src = "megas/mega charizard.gif.png";
var megablastoise = new Image();
megablastoise.src = "megas/mega blastoise.png";
var megaevolution = new Image();
megaevolution.src = "megas/mega evolution.png";
var megavenusaur = new Image();
megavenusaur.src = "megas/mega venusaur.gif.png";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function initialize() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    intro = createImage("Images/balck.png", "intro", 0, 0);
    ctx.drawImage(intro, intro.left, intro.top, 850, 620);
    stars.push(createImage("Images/star.gif", "star", -50, -200));
    stars.push(createImage("Images/star.gif", "star", -200, -400));
    stars.push(createImage("Images/star.gif", "star", -300, -600));
    shellder.push(createImage("Images/shellder.png", "shellder", -300, 440));
    shellder.push(createImage("Images/shellder.png", "shellder", -300, 500));
    shellder.push(createImage("Images/shellder.png", "shellder", -300, 480));
    magik.push(createImage("Images/magikarp.png", "magik", 900, 200));
    magik.push(createImage("Images/magikarp.png", "magik", 1000, 300));
    magik.push(createImage("Images/magikarp.png", "magik", 1200, 400));
    plants.push(createImage("Images/SeaWeed.png", "plants", -300, 510));
    plants.push(createImage("Images/SeaWeed.png", "plants", -300, 490));
    water = createImage("Images/water.png", "water", -1000, -800);
    waterfall = createImage("Images/waterfall.gif", "waterfall", -40, -1500);
    oceantop = createImage("Images/oceantop.jpg", "oceantop", 0, -1500);
    jiggle = createImage("Images/jigglypuff.png", "jigglepull", 100, -300);
    pika = createImage("Images/pikachu.gif", "pikachu", 900, 400);
    white = createImage("Images/white.png", "white", -1150, 0);
    chico = createImage("Images/chico.png", "chico", -50, -200);
    cya = createImage("Images/cya.png", "cya", 660, -200);
    tot = createImage("Images/tot.png", "cya", 300, -200);
    black2 = createImage("Images/black2.png", "cya", -1150, 0);
    pokeball = createImage("Images/Pokeball.png", "pokeball", -1150, 0, 50, 50);


}

function drawVideo1(){
    var v = document.getElementById("video1");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;

    window.setInterval(function() {ctx.drawImage(v,500,0,320,200)},20);
}

var createImage = function (src, title, xcoord, ycoord, wnum, hnum) {
    var img = new Image();
    img.src = src;
    img.alt = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    img.width = wnum;
    img.height = hnum;
    return img;
};

function titlescreen() {
    a = requestAnimationFrame(titlescreen);
    gamefreak();
    setTimeout(function () {
        gamefreak2();
    }, 2000);
    setTimeout(function () {
        beach();
    }, 8500);

    setTimeout(function () {
        abovebeach();
    }, 13000);
    setTimeout(function () {
        movefishes();
    }, 15000);
    setTimeout(function () {
        drawwater();
    }, 20000);
    setTimeout(function () {
        movefall();
    }, 19000);
    setTimeout(function () {
        abovewater();
    }, 20000);
    setTimeout(function () {
        forrest();
    }, 32500);
    setTimeout(function () {
        attack();
    }, 36000);
    setTimeout(function () {
        attack2();
    }, 37200);
    setTimeout(function () {
        show();
    }, 41000);
    setTimeout(function () {
        show2();
    }, 42000);
    setTimeout(function () {
        show3();
    }, 43000);
    setTimeout(function () {
        pokeballextend();
    }, 47000);
    setTimeout(function () {
        titlescreen2();
    }, 51000);
    // setTimeout(function () {
    //     stop();
    // }, 53000);
}

move1 = -1150;
rock1 = -600;
rock2 = 300;
water1 = 2000;
forest1 = -1150;

function gamefreak() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(gamefreak1, 0, 0, 850, 620);
    ctx.drawImage(gamefreakintro, move1, 0, 850, 620);
    for (i = 0; i < stars.length; i++) {
        ctx.drawImage(stars[i], stars[i].left, stars[i].top, 100, 100);

    }
    ctx.drawImage(water, water.left, water.top, 1000, 1500);
    // ctx.drawImage(sand, sand1, 500, 1000, 400);
    // ctx.drawImage(sand, sand.left, sand.top, 1000, 400);
    ctx.drawImage(rock, rock1, rock2, 300, 300);
    for (i = 0; i < shellder.length; i++) {
        ctx.drawImage(shellder[i], shellder[i].left, shellder[i].top, 150, 150);

    }
    for (i = 0; i < plants.length; i++) {
        ctx.drawImage(plants[i], plants[i].left, plants[i].top, 100, 100);

    }
    for (i = 0; i < magik.length; i++) {
        ctx.drawImage(magik[i], magik[i].left, magik[i].top, 120, 120);

    }
    ctx.drawImage(oceantop, oceantop.left, oceantop.top, 850, 650);
    ctx.drawImage(waterfall, waterfall.left, waterfall.top, 1000, 1500);
    ctx.drawImage(lapras, water1, 200, 300, 300);


    ctx.drawImage(forest, forest1, 0, 850, 620);
    ctx.drawImage(jiggle, jiggle.left, jiggle.top, 200, 200);

    ctx.drawImage(pika, pika.left, pika.top, 200, 200);
    ctx.drawImage(white, white.left, white.top, 850, 620);
    ctx.drawImage(chico, chico.left, chico.top, 200, 200);
    ctx.drawImage(cya, cya.left, cya.top, 200, 200);
    ctx.drawImage(tot, tot.left, tot.top, 200, 200);
    ctx.drawImage(pokeball, pokeball.left, pokeball.top, pokeball.width, pokeball.height);
    ctx.drawImage(black2, black2.left, black2.top, 870, 660);


}

function gamefreak2() {
    move1 = -10;
    for (i = 0; i < stars.length; i++) {
        stars[i].left += 10;
        stars[i].top += 10

    }

}

function beach() {
    //sand1 = 0;
    water.left = 0;
    shellder[0].left = 50;
    shellder[1].left = 250;
    shellder[2].left = 500;
    rock1 = 620;
    plants[0].left = 180;
    plants[1].left = 400;
    // sand.left = 0;
    //increase plants.width

}

function abovebeach() {
    shellder[0].top += 1;
    shellder[1].top += 1;
    shellder[2].top += 1;
    plants[0].top += 1;
    plants[1].top += 1;
    //sand.top += 1;
    rock2 += 1;
    water.top += 1;


}

function movefall() {
    waterfall.top += 20;
}

function abovewater() {
    oceantop.top = 0;
}

function movefishes() {
    for (i = 0; i < magik.length; i++) {
        magik[i].left -= 5;

    }
    magik[0].top += 1;
    magik[2].top -= 1;
    water1 -= 2;


}

function forrest() {
    forest1 = 0;
    jiggle.top = 400;
}

function attack() {
    pika.left -= 10;
}

function attack2() {
    jiggle.left -= 10;

}

function show() {
    white.left = 0;
    chico.left += 10;
    chico.top += 10
}

function show2() {
    cya.left -= 10;
    cya.top += 10
}

function show3() {
    tot.top += 10;

}

function pokeballextend() {
    pokeball.left = 0;
    pokeball.top = 0;
    pokeball.width += 5;
    pokeball.height += 5;

}

function titlescreen2() {
    black2.left = -20;
}

evo = false;
endgame = false;
end2 = false;
end3 = false;
skey = false;
spacebar = false;
song1 = false;
song2 = false;
enterbar = 0;
// pick = Math.floor(Math.random() *3);
pick = 0;
step1 = false;
step2 = false;
charizardhealth = 500;
blastoisehealth = 520;
venusaurhealth = 530;
userhealth = 0;
flamethrowerdamage = 90;
wingattackdamage = 60;
dragonclawdamage = 80;
roostdamage = 50;
hydropumpdamage = 100;
headbuttdamage = 70;
raindancedamage = 0;
dragonpulsedamage = 80;
leafstormdamage = 90;
synthesisdamage = 50;
doubleedgdamage = 100;
strengthdamage = 70;
enter = false;
animate = false;
var audio = new Audio('Audio/Pokemon Gold and Silver Full Intro HD.mp3');
var audio2 = new Audio('Audio/lab.mp3');
var audio4 = new Audio('Audio/clash.mp3');
var red = new Audio('Audio/red.mp3');
var wally = new Audio('Audio/Wally.mp3');
var zinnia = new Audio('Audio/Zinnia.mp3');
var cynthiamusic = new Audio('Audio/Cynthiamusic.mp3');
var megasounds = new Audio('Audio/Mega Evolution FX.ogg');



$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == 83) {
        if (skey == false) {
            audio.play();
            titlescreen();
            skey = true;
            step1 = true;
        }
    }

    if (keycode == 32) {
        if (step1 == true) {
            if (spacebar == false) {
                cancelAnimationFrame(titlescreen());
                audio.pause();
                audio2.play();
                playgame();
                spacebar = true;
                step2 = true;
            }
        }

    }
    if (step2 == true) {
        if (keycode == 49) { //1
            if(song1 == false){
                audio3 = red;
                song1 = true;
            }
            if (song2 == true){
                cancelAnimationFrame(gameintro);
                animate = true;
                setTimeout(function () {
                    audio4.play();
                }, 1500);
                userhealth = 500;
                audio2.pause();
                audio3.play();
                enterbar = 1;
                setTimeout(function () {
                    pokemon();
                    opponent();
                }, 5000);
                step2 = false;
            }


        }
        if (keycode == 50) {//2
            if (song1 == false){
                audio3 = wally;
                song1 = true;
            }
            if (song2 == true){
                cancelAnimationFrame(gameintro);
                animate = true;
                setTimeout(function () {
                    audio4.play();
                }, 1500);
                userhealth = 520;
                audio2.pause();
                audio3.play();
                enterbar = 2;
                setTimeout(function () {
                    pokemon();
                    opponent();
                }, 5000);
                step2 = false;
            }

        }
        if (keycode == 51) {//3
            if (song1 == false){
                audio3 = zinnia;
                song1 = true;
            }
            if (song2 == true){
                cancelAnimationFrame(gameintro);
                animate = true;
                setTimeout(function () {
                    audio4.play();
                }, 1500);
                userhealth = 530;
                audio2.pause();
                audio3.play();
                enterbar = 3;
                setTimeout(function () {
                    pokemon();
                    opponent();
                }, 5000);
                step2 = false;
            }

        }
        if (keycode == 52){
            if(song1 == false){
                audio3 = cynthiamusic;
                song1 = true;
            }
        }
    }
    if (keycode == 88){
        if (endgame == false){
            if (evo == false){
                if(enter == false){
                    megasounds.play();
                    if (enterbar == 1){
                        endgame = true;
                        megaball();
                        setTimeout(function () {
                            mega1();
                            endgame = false;
                            alert("You mega evolved!");
                            cancelAnimationFrame(megaball());
                        }, 2000);
                        evo = true;
                        dragonclawdamage = dragonpulsedamage *2

                    }
                    if(enterbar == 2){
                        endgame = true;
                        megaball();
                        setTimeout(function () {
                            mega2();
                            endgame = false;
                            alert("You mega evolved!");
                            cancelAnimationFrame(megaball());
                        }, 2000);
                        evo = true;
                        dragonpulsedamage = dragonpulsedamage*2;

                    }
                    if(enterbar == 3){
                        endgame = true;
                        megaball();
                        setTimeout(function () {
                            mega3();
                            endgame = false;
                            alert("You mega evolved!");
                            cancelAnimationFrame(megaball());
                        }, 2000);
                        evo = true;
                        leafstormdamage = leafstormdamage*2;
                    }
                }

            }

        }
    }

    if (keycode == 39) { //right
        arrow.left = arrow.left + 300;
        if (arrow.left > 380) {
            arrow.left = 380;
        }
    }

    if (keycode == 37) { //left
        arrow.left = arrow.left - 300;
        if (arrow.left < 80) {
            arrow.left = 80;
        }
    }
    if (keycode == 40) { //down
        arrow.top = arrow.top + 90;
        if (arrow.top > 520) {
            arrow.top = 520;
        }
    }
    if (keycode == 38) { //up
        arrow.top = arrow.top - 90;
        if (arrow.top < 430) {
            arrow.top = 430;
        }
    }
    if (keycode == 13) { //enter key
        if (enter == false) { //Boolean used to prevent enter key from being pressed more than once in a 4 second period
            if (endgame == false) { //This boolean blocks the user from playing the game when the game is over
                enter = true;
                setTimeout(function () {
                    enter = false
                }, 4000);
                if (enterbar == 1) { //If the user selects charizard
                    moves = Math.floor(Math.random() * 4); //variable to random decide which move the opponent will choose
                    if (arrow.left == 80 && arrow.top == 430) { //measures the position of the arrow key
                        alert("You use flamethrower!");
                        flamethrower1(); //One of the user's attack, flamethrower
                        if (pick == 0) { // If the opponent is random generated to Charizard
                            charizardhealth = charizardhealth - flamethrowerdamage; //calculating the amount of damage an attack will do
                            if (charizardhealth <= 0) { //If the opponent's health points == 0, game is over
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) { // will only run if the opponent still has health left
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice1();
                                }, 3000);
                            }
                        }
                        if (pick == 1) { // If the opponent is random generated to Blastoise
                            blastoisehealth = blastoisehealth - (flamethrowerdamage / 2); //Notice how
                            //flamethrower only does half damage. For each pokemon, the amount of damage done
                            //is different
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2(); //animates the opponent's attack
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice2(); //calculates how much damage you take from your opponent's attack
                                }, 3000);
                            }


                        }
                        if (pick == 2) { // If the opponent is random generated to Venusaur
                            venusaurhealth = venusaurhealth - (2 * (flamethrowerdamage));
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice3();
                                }, 3000);
                            }


                        }
                    }
                    if (arrow.left == 80 && arrow.top == 520) {
                        alert("You use dragonclaw!");
                        dragonclaw1();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - dragonclawdamage;
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice1();
                                }, 3000);
                            }

                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - dragonclawdamage;
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice2();
                                }, 3000);
                            }

                        }
                        if (pick == 2) {
                            venusaurhealth = venusaurhealth - dragonclawdamage;
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice3();
                                }, 3000);
                            }

                        }
                    }
                    if (arrow.left == 380 && arrow.top == 430) {
                        alert("You use wing attack!");
                        wingattack();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - (wingattackdamage / 2);
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice1();
                                }, 3000);
                            }

                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - wingattackdamage;
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice2();
                                }, 3000);
                            }

                        }
                        if (pick == 2) {
                            venusaurhealth = venusaurhealth - (2 * (wingattackdamage));
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice3();
                                }, 3000);
                            }


                        }
                    }
                    if (arrow.left == 380 && arrow.top == 520) {
                        alert("You use roost!");
                        roost1();
                        if (pick == 0) {
                            userhealth = userhealth + roostdamage;
                            setTimeout(function () {
                                opponent1();
                                alert("Charizard's HP recovered to " + userhealth);
                            }, 2000);
                            setTimeout(function () {
                                choice1();
                            }, 3000);


                        }
                        if (pick == 1) {
                            userhealth = userhealth + roostdamage;
                            setTimeout(function () {
                                opponent2();
                                alert("Charizard's HP recovered to " + userhealth);
                            }, 2000);
                            setTimeout(function () {
                                choice2();
                            }, 3000);


                        }
                        if (pick == 2) {
                            userhealth = userhealth + roostdamage;
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("Your health is restored back to " + userhealth);
                                }, 2000);
                                setTimeout(function () {
                                    choice3();
                                }, 3000);
                            }
                        }
                    }
                }

                if (enterbar == 2) { // If the user selects Blastoise
                    moves = Math.floor(Math.random() * 4);
                    if (arrow.left == 80 && arrow.top == 430) {
                        alert("You use hydropump!");
                        hydropump1();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - (2 * (hydropumpdamage));
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice4();
                                }, 3000);
                            }

                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - hydropumpdamage;
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice5();
                                }, 3000);
                            }


                        }
                        if (pick == 2) {
                            venusaurhealth = venusaurhealth - (hydropumpdamage / 2);
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice6();
                                }, 3000);
                            }


                        }
                    }
                    if (arrow.left == 80 && arrow.top == 520) {
                        alert("You use dragonpulse!");
                        dragonpulse1();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - dragonpulsedamage;
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice4();
                                }, 3000);

                            }
                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - dragonpulsedamage;
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice5();
                                }, 3000);
                            }

                        }
                        if (pick == 2) {
                            venusaurhealth = venusaurhealth - dragonpulsedamage;
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice6();
                                }, 3000);
                            }


                        }
                    }
                    if (arrow.left == 380 && arrow.top == 430) {
                        alert("You use headbutt!");
                        headbutt1();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - headbuttdamage;
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice4();
                                }, 3000);
                            }

                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - headbuttdamage;
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice5();
                                }, 3000);
                            }


                        }
                        if (pick == 2) {
                            venusaurhealth = venusaurhealth - headbuttdamage;
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice6();
                                }, 3000);
                            }


                        }
                    }
                    if (arrow.left == 380 && arrow.top == 520) {
                        alert("You use raindance!");
                        raindance1();
                        if (pick == 0) {
                            flamethrowerdamage = (flamethrowerdamage / 2);
                            hydropumpdamage = (2 * (hydropumpdamage));
                            setTimeout(function () {
                                opponent1();
                                alert("Water power is now stronger! Fire power weakened.");
                            }, 2000);
                            setTimeout(function () {
                                choice4();
                            }, 3000);


                        }
                        if (pick == 1) {
                            flamethrowerdamage = (flamethrowerdamage / 2);
                            hydropumpdamage = (2 * (hydropumpdamage));
                            setTimeout(function () {
                                opponent2();
                                alert("Water power is now stronger! Fire power weakened.");
                            }, 2000);
                            setTimeout(function () {
                                choice5();
                            }, 3000);


                        }
                        if (pick == 2) {
                            flamethrowerdamage = (flamethrowerdamage / 2);
                            hydropumpdamage = (2 * (hydropumpdamage));
                            setTimeout(function () {
                                opponent3();
                                alert("Water power is now stronger! Fire power weakened.");
                            }, 2000);
                            setTimeout(function () {
                                choice6();
                            }, 3000);


                        }
                    }
                }

                if (enterbar == 3) {// If the user selects Venusaur
                    moves = Math.floor(Math.random() * 4);
                    if (arrow.left == 80 && arrow.top == 430) {
                        alert("You use leafstorm!");
                        leafstorm1();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - (leafstormdamage / 2);
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice7();
                                }, 3000);
                            }

                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - (2 * (leafstormdamage));
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice8();
                                }, 3000);
                            }


                        }
                        if (pick == 2) {
                            venusaurhealth = venusaurhealth - leafstormdamage;
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice9();
                                }, 3000);
                            }


                        }
                    }
                    if (arrow.left == 80 && arrow.top == 520) {
                        alert("You use synthesis!");
                        synthesis2();
                        if (pick == 0) {
                            userhealth = userhealth + synthesisdamage;
                            setTimeout(function () {
                                opponent1();
                                alert("Your health is restored back to " + userhealth);
                            }, 2000);
                            setTimeout(function () {
                                choice7();
                            }, 3000);


                        }
                        if (pick == 1) {
                            userhealth = userhealth + synthesisdamage;
                            setTimeout(function () {
                                opponent2();
                                alert("Your health is restored back to " + userhealth);
                            }, 2000);
                            setTimeout(function () {
                                choice8();
                            }, 3000);


                        }
                        if (pick == 2) {
                            userhealth = userhealth + synthesisdamage;
                            setTimeout(function () {
                                opponent3();
                                alert("Your health is restored back to " + userhealth);
                            }, 2000);
                            setTimeout(function () {
                                choice9();
                            }, 3000);


                        }
                    }
                    if (arrow.left == 380 && arrow.top == 430) {
                        alert("You use double edge!");
                        doubleedge();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - doubleedgdamage;
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice7();
                                }, 3000);
                            }


                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - doubleedgdamage;
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice8();
                                }, 3000);
                            }


                        }
                        if (pick == 2) {

                            venusaurhealth = venusaurhealth - doubleedgdamage;
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice9();
                                }, 3000);
                            }

                        }
                    }
                    if (arrow.left == 380 && arrow.top == 520) {
                        alert("You use strength!");
                        strength1();
                        if (pick == 0) {
                            charizardhealth = charizardhealth - strengthdamage;
                            if (charizardhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Charizard has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent1();
                                    alert("The Opponent's Charizard has " + charizardhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice7();
                                }, 3000);
                            }


                        }
                        if (pick == 1) {
                            blastoisehealth = blastoisehealth - strengthdamage;
                            if (blastoisehealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Blastoise has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent2();
                                    alert("The Opponent's Blatoise has " + blastoisehealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice8();
                                }, 3000);
                            }


                        }
                        if (pick == 2) {
                            venusaurhealth = venusaurhealth - strengthdamage;
                            if (venusaurhealth <= 0) {
                                end2 = true;
                                setTimeout(function () {
                                    alert("Venusaur has zero health points left! You win");
                                    audio3.pause();
                                }, 2000);
                                endgame = true;
                            }
                            if (end2 == false) {
                                setTimeout(function () {
                                    opponent3();
                                    alert("The Opponent's Venusaur has " + venusaurhealth + " HP left!");
                                }, 2000);
                                setTimeout(function () {
                                    choice9();
                                }, 3000);
                            }
                        }
                    }
                }
            }


        }

    }

});
function megaball() {
    a = requestAnimationFrame(megaball);
    megaevolution.left = -50;
    megaevolution.height += 2;
    megaevolution.width += 5;

}
function mega1(){
    megacharizard.left = 0;
}
function mega2(){
    megablastoise.left = 0;
}
function mega3(){
    megavenusaur.left = 0;
}

function choice1() { //While the function above calculated the amount of damage your opponent will take, these
    //choice functions calculated how much damage your own pokemon will take
    //choice functions 1-3 is how much damage you will take if you have a Charizard
    if (moves == 0) {
        userhealth = userhealth - flamethrowerdamage;
        alert("The opponent's Charizard uses flamethrower!");

        if (userhealth <= 0) { //The game will only continue if you have enough heath points
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }
    }
    if (moves == 1) {
        charizardhealth = charizardhealth + roostdamage;
        alert("The opponent's Charizard uses roost!");
        alert("The opponent's Charizard's HP recovered to " + charizardhealth);

    }
    if (moves == 2) {
        userhealth = userhealth - dragonclawdamage;
        alert("The opponent's Charizard uses dragonclaw!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }
    }
    if (moves == 3) {
        userhealth = userhealth - (wingattackdamage / 2);
        alert("The opponent's Charizard uses wing attack!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }
    }
}

function choice2() {
    if (moves == 0) {
        flamethrowerdamage = (flamethrowerdamage / 2);
        hydropumpdamage = (2 * (hydropumpdamage));
        alert("The opponent's Blastoise uses rain dance!");
        alert("Water power is now stronger! Fire power weakened.");

    }
    if (moves == 1) {
        userhealth = userhealth - (2 * (hydropumpdamage));
        alert("The opponent's Blastoise uses hydropump!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }



    }
    if (moves == 2) {
        userhealth = userhealth - dragonpulsedamage;
        alert("The opponent's Blastoise uses dragonpulse!");

        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {

        userhealth = userhealth - headbuttdamage;
        alert("The opponent's Blastoise uses headbutt!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }

    }
}

function choice3() {
    if (moves == 0) {
        userhealth = userhealth - (leafstormdamage / 2);
        alert("The opponent's venusaur uses leafstorm!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }

    }
    if (moves == 1) {

        venusaurhealth = venusaurhealth + synthesisdamage;
        alert("The opponent's venusaur uses synthesis!");
        alert("Your opponent's health is restored back to " + venusaurhealth);

    }
    if (moves == 2) {

        userhealth = userhealth - doubleedgdamage;
        alert("The opponent's venusaur uses double-edge!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {

        userhealth = userhealth - strengthdamage;
        alert("The opponent's venusaur uses strength!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Charizard has " + userhealth + " HP left!");
        }

    }
}

//choice 4-6 is for the damage YOUR blastoise will take depending on the opponent
function choice4() {
    if (moves == 0) {

        userhealth = userhealth - (flamethrowerdamage / 2);
        alert("The opponent's Charizard uses flamethrower!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
    if (moves == 1) {

        charizardhealth = charizardhealth + roostdamage;
        alert("The opponent's Charizard uses roost!");
        alert("The opponent's Charizard's HP recovered to " + charizardhealth);

    }
    if (moves == 2) {

        userhealth = userhealth - dragonclawdamage;
        alert("The opponent's Charizard uses dragonclaw!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {

        userhealth = userhealth - (wingattackdamage);
        alert("The opponent's Charizard uses wing attack!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
}

function choice5() {
    if (moves == 0) {
        flamethrowerdamage = (flamethrowerdamage / 2);
        hydropumpdamage = (2 * (hydropumpdamage));
        alert("The opponent's blastoise uses rain dance!");
        alert("Water power is now stronger! Fire power weakened.");

    }
    if (moves == 1) {

        userhealth = userhealth - (hydropumpdamage);
        alert("The opponent's blastoise uses hydropump!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
    if (moves == 2) {

        userhealth = userhealth - dragonpulsedamage;
        alert("The opponent's blastoise uses dragonpulse!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {
        userhealth = userhealth - headbuttdamage;
        alert("The opponent's blastoise uses headbutt!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
}

function choice6() {
    if (moves == 0) {
        userhealth = userhealth - (2 * (leafstormdamage));
        alert("The opponent's venusaur uses leafstorm!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
    if (moves == 1) {

        venusaurhealth = venusaurhealth + synthesisdamage;
        alert("The opponent's venusaur uses synthesis!");
        alert("Your opponent's health is restored back to " + venusaurhealth);

    }
    if (moves == 2) {

        userhealth = userhealth - doubleedgdamage;
        alert("The opponent's venusaur uses double edge!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {
        userhealth = userhealth - strengthdamage;
        alert("The opponent's venusaur uses strength!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Blastoise has " + userhealth + " HP left!");
        }

    }
}
//choice 7-9 is how much damage your pokemon will take if you have a vensaur
function choice7() {
    if (moves == 0) {
        userhealth = userhealth - (2 * (flamethrowerdamage));
        alert("The opponent's Charizard uses flamethrower!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
    if (moves == 1) {

        charizardhealth = charizardhealth + roostdamage;
        alert("The opponent's Charizard roost!");
        alert("The opponent's Charizard's HP recovered to " + charizardhealth);

    }
    if (moves == 2) {

        userhealth = userhealth - dragonclawdamage;
        alert("The opponent's Charizard uses draonclaw!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {

        userhealth = userhealth - (2 * (wingattackdamage));
        alert("The opponent's Charizard uses wing attack!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
}

function choice8() {
    if (moves == 0) {

        flamethrowerdamage = (flamethrowerdamage / 2);
        hydropumpdamage = (2 * (hydropumpdamage));
        alert("The opponent's blastoise uses raindance!");
        alert("Water power is now stronger! Fire power weakened.");

    }
    if (moves == 1) {

        userhealth = userhealth - (hydropumpdamage / 2);
        alert("The opponent's blastoise uses hydropump!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
    if (moves == 2) {

        userhealth = userhealth - dragonpulsedamage;
        alert("The opponent's blastoise uses dragonpulse!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {

        userhealth = userhealth - headbuttdamage;
        alert("The opponent's blastoise uses headbutt!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
}

function choice9() {
    if (moves == 0) {

        userhealth = userhealth - (leafstormdamage);
        alert("The opponent's venusaur uses leafstorm!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
    if (moves == 1) {

        venusaurhealth = venusaurhealth + synthesisdamage;
        alert("The opponent's venusaur uses synthesis!");
        alert("Your opponent's health is restored back to " + venusaurhealth);

    }
    if (moves == 2) {

        userhealth = userhealth - doubleedgdamage;
        alert("The opponent's venusaur uses double edge!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
    if (moves == 3) {
        userhealth = userhealth - strengthdamage;
        alert("The opponent's venusaur uses strength!");
        if (userhealth <= 0) {
            alert("Your Pokemon fainted fainted! You lose...");
            audio3.pause();
            end3 = true;
            endgame = true;
        }
        else {
            alert("Venusaur has " + userhealth + " HP left!");
        }

    }
}


function opponent1() {

    if (moves == 0) {
        a = requestAnimationFrame(opponent1);
        opponentfire.top = 100;
        opponentfire.width += 7;
        opponentfire.height += 7;
        opponentfire.left -= 7;
        if (opponentfire.left < 300) {
            opponentfire.top = -200;
            opponentfire.width = 50;
            opponentfire.height = 50;
            opponentfire.left = 600;
            cancelAnimationFrame(a);
        }

    }
    if (moves == 1) {

        a = requestAnimationFrame(opponent1);
        roost[1].left = 500;
        roost[1].top += 3;
        if (roost[1].top > 250) {
            roost[1].left = -300;
            roost[1].top = 20;

            cancelAnimationFrame(a);
        }

    }
    if (moves == 2) {

        a = requestAnimationFrame(opponent1);
        claws[1].left = 100;
        claws[1].width += 3;
        claws[1].height += 3;
        claws[1].top += 5;
        if (claws[1].top > 280) {
            claws[1].top = 50;
            claws[1].left = -200;
            claws[1].height = 50;
            claws[1].width = 50;
            cancelAnimationFrame(a);
        }

    }
    if (moves == 3) {

        a = requestAnimationFrame(opponent1);
        wings1[1].left = 100;
        wings1[1].width += 3;
        wings1[1].height += 3;
        wings1[1].top += 1;
        if (wings1[1].top > 180) {
            wings1[1].top = 100;
            wings1[1].left = -100;
            wings1[1].height = 50;
            wings1[1].width = 50;
            cancelAnimationFrame(a);
        }
    }
}

function opponent2() {
    if (moves == 0) {
        a = requestAnimationFrame(opponent2);
        rain[1].top += 10;
        if (rain[1].top > 600) {
            rain[1].top = -1000;
            cancelAnimationFrame(a);
        }
    }
    if (moves == 1) {
        a = requestAnimationFrame(opponent2);
        hydroopponent.top = 100;
        hydroopponent.width += 7;
        hydroopponent.height += 7;
        hydroopponent.left -= 7;
        if (hydroopponent.left < 300) {
            hydroopponent.top = -200;
            hydroopponent.width = 50;
            hydroopponent.height = 50;
            hydroopponent.left = 600;
            cancelAnimationFrame(a);
        }

    }
    if (moves == 2) {
        a = requestAnimationFrame(opponent2);
        pulse[1].left = 100;
        pulse[1].width += 3;
        pulse[1].height += 3;
        pulse[1].top += 1;
        if (pulse[1].top > 180) {
            pulse[1].top = 100;
            pulse[1].left = -100;
            pulse[1].height = 50;
            pulse[1].width = 50;
            cancelAnimationFrame(a);
        }
    }
    if (moves == 3) {
        a = requestAnimationFrame(opponent2);
        headbutt2.left -= 10;
        headbutt2.top += 3;
        headbutt2.width += 3;
        headbutt2.height += 3;
        if (headbutt2.left < 100) {
            headbutt2.left = 850;
            headbutt2.top = 0;
            headbutt2.width = 50;
            headbutt2.height = 50;
            cancelAnimationFrame(a);
        }
    }
}

function opponent3() {
    if (moves == 0) {
        a = requestAnimationFrame(opponent3);
        leaves[1].left = 100;
        leaves[1].width += 3;
        leaves[1].height += 3;
        leaves[1].top += 1;
        if (leaves[1].top > 180) {
            leaves[1].top = 100;
            leaves[1].left = -100;
            leaves[1].height = 50;
            leaves[1].width = 50;
            cancelAnimationFrame(a);
        }
    }
    if (moves == 1) {
        a = requestAnimationFrame(opponent3);
        suns[1].left = 650;
        suns[1].top += 3;
        suns[1].width += 2;
        suns[1].height += 2;
        if (suns[1].top > 200) {
            suns[1].left = -300;
            suns[1].top = 20;
            suns[1].width = 50;
            suns[1].height = 50;
            cancelAnimationFrame(a);
        }
    }
    if (moves == 2) {
        a = requestAnimationFrame(opponent3);
        edge[1].left -= 10;
        edge[1].top += 3;
        edge[1].width += 3;
        edge[1].height += 3;
        if (edge[1].left < 100) {
            edge[1].left = 850;
            edge[1].top = 0;
            edge[1].width = 50;
            edge[1].height = 50;
            cancelAnimationFrame(a);
        }
    }
    if (moves == 3) {
        a = requestAnimationFrame(opponent3);
        power[1].left = 550;
        power[1].width += 3;
        power[1].height += 3;
        if (power[1].width > 250) {
            power[1].left = -100;
            power[1].top = 100;
            power[1].width = 50;
            power[1].height = 50;
            cancelAnimationFrame(a)
        }
    }
}

function playgame() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.clearRect(-2000, -2000, 10000, 10000); //redraws canvas so images do not get in the way
    white = createImage("Images/white.png", "white", 0, 0);
    rowan = createImage("battle/rowan.png", "rowan", 400, 100);
    text1 = createImage("battle/rowan intro.png", "text1", 0, 400);
    text = createImage("battle/text.png", "text", -1000, 400);
    songs = createImage("battle/songs.png", "songs", -2000, 0);
    pokechoice = createImage("battle/pokemon choices.png", "choices", -2000, 0);
    blank = createImage("battle/blank.png", "blank", -10000, 0);
    battleanimation = createImage("battle/battle animation.jpg", "battleanimation", -600, 10000, 462, 620);
    battleanimation2 = createImage("battle/battle animation2.png", "battleanimation2", 1000, 10000, 462, 620);
    cythia = createImage("battle/cythia.jpg", "cythia", -10000, 0, 850, 620);
    gameintro();
}

function gameintro() {
    a = requestAnimationFrame(gameintro);
    ctx.drawImage(white, white.left, white.top, 850, 620);
    ctx.drawImage(rowan, rowan.left, rowan.top, 500, 500);
    ctx.drawImage(text1, text1.left, text1.top, 500, 200);
    ctx.drawImage(text, text.left, text.top, 500, 200);
    ctx.drawImage(songs, songs.left, songs.top, 850, 620);
    ctx.drawImage(pokechoice, pokechoice.left, pokechoice.top, 850, 620);
    ctx.drawImage(blank, blank.left, blank.top, 850, 620);
    ctx.drawImage(battleanimation, battleanimation.left, battleanimation.top, battleanimation.width, battleanimation.height);
    ctx.drawImage(battleanimation2, battleanimation2.left, battleanimation2.top, battleanimation2.width, battleanimation2.height);
    ctx.drawImage(cythia, cythia.left, cythia.top, cythia.width, cythia.height);
    setTimeout(function () {
        nextwords();
    }, 5000);
    setTimeout(function () {
        songchoice();
    }, 10000);
    // setTimeout(function () {
    //     choice();
    // }, 10000);
    if (animate == true) {
        start()
    }
}
function songchoice(){
    songs.left = 0;
    if(song1 == true){
        pokechoice.left = 0;
        song2 = true;
    }
}
function nextwords() {
    text.left = 0;
}

function start() {
    blank.left = 0;
    battleanimation.top = 0;
    battleanimation2.top = 0;
    battleanimation.left += 5;
    battleanimation2.left -= 5;
    if (battleanimation2.left == 450) {
        cythia.left = 0;
    }
}

function arrowanimate() {
    a = requestAnimationFrame(arrowanimate);
    ctx.drawImage(arrow, arrow.left, arrow.top, 50, 50);
}

function battle1() {
    a = requestAnimationFrame(battle1);
    ctx.drawImage(charizard, charizard.left, charizard.top, 850, 620);
    ctx.drawImage(blastoisepick, blastoisepick.left, blastoisepick.top, 850, 620);
    ctx.drawImage(venusaurpick, venusaurpick.left, venusaurpick.top, 850, 620);
    ctx.drawImage(megaevolution, megaevolution.left, megaevolution.top, megaevolution.width, megaevolution.height);
    /////////////////////////////////////////////////////////////////////////////
    ctx.drawImage(megacharizard, megacharizard.left, megacharizard.top, 850, 620);
    ctx.drawImage(megavenusaur, megavenusaur.left, megavenusaur.top, 850, 620);
    ctx.drawImage(megablastoise, megablastoise.left, megablastoise.top, 850, 620);
    ctx.drawImage(charizard2, charizard2.left, charizard2.top, 200, 200);
    ctx.drawImage(venusaur2, venusaur2.left, venusaur2.top, 200, 200);
    ctx.drawImage(blast2, blast2.left, blast2.top, 200, 200);

    ctx.drawImage(flamethrower, flamethrower.left, flamethrower.top, flamethrower.width, flamethrower.height);
    ctx.drawImage(opponentfire, opponentfire.left, opponentfire.top, opponentfire.width, opponentfire.height);
    for (i = 0; i < roost.length; i++) {
        ctx.drawImage(roost[i], roost[i].left, roost[i].top, 200, 200);
    }
    for (i = 0; i < claws.length; i++) {
        ctx.drawImage(claws[i], claws[i].left, claws[i].top, claws[i].width, claws[i].height);
    }
    for (i = 0; i < wings1.length; i++) {
        ctx.drawImage(wings1[i], wings1[i].left, wings1[i].top, wings1[i].width, wings1[i].height);
    }
    ctx.drawImage(hydropump, hydropump.left, hydropump.top, hydropump.width, hydropump.height);
    ctx.drawImage(hydroopponent, hydroopponent.left, hydroopponent.top, hydroopponent.width, hydroopponent.height);
    for (i = 0; i < pulse.length; i++) {
        ctx.drawImage(pulse[i], pulse[i].left, pulse[i].top, pulse[i].width, pulse[i].height);
    }
    ctx.drawImage(headbutt, headbutt.left, headbutt.top, headbutt.width, headbutt.height);
    ctx.drawImage(headbutt2, headbutt2.left, headbutt2.top, headbutt2.width, headbutt2.height);
    for (i = 0; i < rain.length; i++) {
        ctx.drawImage(rain[i], rain[i].left, rain[i].top, rain[i].width, rain[i].height);
    }
    for (i = 0; i < leaves.length; i++) {
        ctx.drawImage(leaves[i], leaves[i].left, leaves[i].top, leaves[i].width, leaves[i].height);
    }
    for (i = 0; i < suns.length; i++) {
        ctx.drawImage(suns[i], suns[i].left, suns[i].top, suns[i].width, suns[i].height);
    }
    for (i = 0; i < edge.length; i++) {
        ctx.drawImage(edge[i], edge[i].left, edge[i].top, edge[i].width, edge[i].height);
    }
    for (i = 0; i < power.length; i++) {
        ctx.drawImage(power[i], power[i].left, power[i].top, power[i].width, power[i].height);
    }

}

function pokemon() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    // ctx.clearRect(0, 0, 850, 620);
    ctx.clearRect(-2000, -2000, 10000, 10000);
    arrow = createImage("battle/arrow.png", "arrow", 80, 430);
    charizard = createImage("battle/charizard.png", "charizard", -1150, 0);
    venusaurpick = createImage("battle/venusaurpick.png", "vensaurpick", -1150, 0);
    blastoisepick = createImage("battle/blastoisepick.png", "blastoisepick", -1150, 0);
    megacharizard = createImage("megas/mega charizard.gif.png", "mega charizard", -1150, 0);
    megablastoise = createImage("megas/mega blastoise.png", "mega blastoise", -1150, 0);
    megavenusaur = createImage("megas/mega venusaur.gif.png", "mega venusaur", -1150, 0);
    megaevolution = createImage("megas/mega evolution.png", "evolution", -1150, 200,20,20);
    flamethrower = createImage("battle/flamethrower.png", "flamethrower", -100, 245, 50, 50);
    opponentfire = createImage("battle/flamethrower2.png", "flamethrower2", 600, -200, 50, 50);
    charizard2 = createImage("battle/charizard2.png", "charizard2", -300, 100);
    venusaur2 = createImage("battle/venusaur2.png", "venusaur2", -300, 100);
    blast2 = createImage("battle/blast2.png", "blast2", -300, 100);
    wings1.push(createImage("battle/wingattack.png", "wings", -100, 100, 50, 50));
    wings1.push(createImage("battle/wingattack.png", "wings", -100, 100, 50, 50));
    claws.push(createImage("battle/dragonclaw.png", "dragonclaw", -200, 80, 50, 50));
    claws.push(createImage("battle/dragonclaw.png", "dragonclaw", -200, 50, 50, 50));
    roost.push(createImage("battle/roost.png", "roost", -300, 20));
    roost.push(createImage("battle/roost.png", "roost", -300, 20));
    hydropump = createImage("battle/hydropump.png", "hydropump", -100, 245, 50, 50);
    hydroopponent = createImage("battle/hydroopponent.png", "hydroopponent", 600, -200, 50, 50);
    pulse.push(createImage("battle/dragonpulse.png", "dragonpulse", -100, 100, 50, 50));
    pulse.push(createImage("battle/dragonpulse.png", "dragonpulse", -100, 100, 50, 50));
    headbutt = createImage("battle/headbutt.png", "headbutt", -100, 380, 50, 50);
    headbutt2 = createImage("battle/headbutt opponent.png", "headbutt opponent", 850, 0, 50, 50);
    rain.push(createImage("battle/raindance.png", "raindance", 0, -1000, 850, 620));
    rain.push(createImage("battle/raindance.png", "raindance", 0, -1000, 850, 620));
    leaves.push(createImage("battle/leafstorm.png", "leafstorm", -100, 100, 50, 50));
    leaves.push(createImage("battle/leafstorm.png", "leafstorm", -100, 100, 50, 50));
    suns.push(createImage("battle/synthesis.png", "synthesis", -300, 20, 50, 50));
    suns.push(createImage("battle/synthesis.png", "synthesis", -300, 20, 50, 50));
    edge.push(createImage("battle/double edge.png", "edge", -100, 380, 50, 50));
    edge.push(createImage("battle/double edge.png", "edge", 850, 0, 50, 50));
    power.push(createImage("battle/strength.png", "power", -300, 20, 50, 50));
    power.push(createImage("battle/strength.png", "power", -100, 100, 50, 50));
    battle1();
    arrowanimate();
}

function flamethrower1() {
    b = requestAnimationFrame(flamethrower1);
    flamethrower.left = 290;
    flamethrower.width += 7;
    flamethrower.height += 7;
    flamethrower.top -= 5;
    if (flamethrower.top < 10) {
        flamethrower.top = 245;
        flamethrower.left = -100;
        flamethrower.width = 50;
        flamethrower.height = 50;
        cancelAnimationFrame(b);
    }
}

function dragonclaw1() {
    b = requestAnimationFrame(dragonclaw1);
    claws[0].left = 600;
    claws[0].width += 3;
    claws[0].height += 3;
    claws[0].top += 5;
    if (claws[0].top > 280) {
        claws[0].top = 80;
        claws[0].left = -200;
        claws[0].height = 50;
        claws[0].width = 50;
        cancelAnimationFrame(b);
    }
}

function roost1() {
    b = requestAnimationFrame(roost1);
    roost[0].left = 150;
    roost[0].top += 3;
    if (roost[0].top > 250) {
        roost[0].left = -300;
        roost[0].top = 20;

        cancelAnimationFrame(b);
    }
}

function wingattack() {
    b = requestAnimationFrame(wingattack);
    wings1[0].left = 500;
    wings1[0].width += 3;
    wings1[0].height += 3;
    wings1[0].top += 1;
    if (wings1[0].top > 180) {
        wings1[0].top = 100;
        wings1[0].left = -100;
        wings1[0].height = 50;
        wings1[0].width = 50;
        cancelAnimationFrame(b);
    }
}

function hydropump1() {
    b = requestAnimationFrame(hydropump1);
    hydropump.left = 290;
    hydropump.width += 7;
    hydropump.height += 7;
    hydropump.top -= 5;
    if (hydropump.top < 10) {
        hydropump.top = 245;
        hydropump.left = -100;
        hydropump.width = 50;
        hydropump.height = 50;
        cancelAnimationFrame(b);
    }
}

function dragonpulse1() {
    b = requestAnimationFrame(dragonpulse1);
    pulse[0].left = 550;
    pulse[0].width += 3;
    pulse[0].height += 3;
    if (pulse[0].width > 250) {
        pulse[0].left = -100;
        pulse[0].top = 100;
        pulse[0].width = 50;
        pulse[0].height = 50;
        cancelAnimationFrame(b)
    }
}

function headbutt1() {
    b = requestAnimationFrame(headbutt1);
    headbutt.left += 7;
    headbutt.top -= 3;
    headbutt.width += 3;
    headbutt.height += 3;
    if (headbutt.left > 500) {
        headbutt.left = -100;
        headbutt.top = 380;
        headbutt.width = 50;
        headbutt.height = 50;
        cancelAnimationFrame(b);
    }
}

function raindance1() {
    b = requestAnimationFrame(raindance1);
    rain[0].top += 10;
    if (rain[0].top > 600) {
        rain[0].top = -1000;
        cancelAnimationFrame(b);
    }
}

function leafstorm1() {
    b = requestAnimationFrame(leafstorm1);
    leaves[0].left = 550;
    leaves[0].width += 3;
    leaves[0].height += 3;
    if (leaves[0].width > 250) {
        leaves[0].left = -100;
        leaves[0].top = 100;
        leaves[0].width = 50;
        leaves[0].height = 50;
        cancelAnimationFrame(b)
    }
}

function synthesis2() {
    b = requestAnimationFrame(synthesis2);
    suns[0].left = 150;
    suns[0].top += 3;
    suns[0].width += 2;
    suns[0].height += 2;
    if (suns[0].top > 250) {
        suns[0].left = -300;
        suns[0].top = 20;
        suns[0].width = 50;
        suns[0].height = 50;
        cancelAnimationFrame(b);
    }
}

function doubleedge() {
    b = requestAnimationFrame(doubleedge);
    edge[0].left += 7;
    edge[0].top -= 3;
    edge[0].width += 3;
    edge[0].height += 3;
    if (edge[0].left > 500) {
        edge[0].left = -100;
        edge[0].top = 380;
        edge[0].width = 50;
        edge[0].height = 50;
        cancelAnimationFrame(b);
    }
}

function strength1() {
    b = requestAnimationFrame(strength1);
    power[0].left = 100;
    power[0].top = 200;
    power[0].width += 3;
    power[0].height += 3;
    if (power[0].width > 280) {
        power[0].left = -300;
        power[0].top = 20;
        power[0].width = 50;
        power[0].height = 50;
        cancelAnimationFrame(b);
    }
}

function opponent() {
    if (pick == 0) {
        charizard2.left = 600;
    }
    if (pick == 1) {
        blast2.left = 600;
    }
    if (pick == 2) {
        venusaur2.left = 600;
    }
    if (enterbar == 1) {
        charizard.left = 0;
    }
    if (enterbar == 2) {
        blastoisepick.left = 0
    }
    if (enterbar == 3) {
        venusaurpick.left = 0;
    }

}








