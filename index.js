function myColorLeft () {
    let recupLeft = document.getElementById('myColorLeft').value
    document.getElementById('joyLeft').style.backgroundImage = "";
    document.getElementById('joyLeft').style.backgroundColor=recupLeft;
}
function myColorRight () {
    let recupRight = document.getElementById('myColorRight').value
    document.getElementById('joyRight').style.backgroundImage = "";
    document.getElementById('joyRight').style.backgroundColor=recupRight;
}


function getPathPhoto(){
    let getAvatar = document.getElementById('avatar').src

    document.getElementById('joyLeft').style.backgroundImage=`url(${ $("#preview").attr('src') })`;

}

function myPhoto(){
    let recupPhoto = document.getElementById('myPhoto').value
    document.getElementById('image').style.backgroundImage=`url(${recupPhoto})`;
    document.getElementById('joyLeft').style.backgroundImage=`url(${recupPhoto})`;
    document.getElementById('joyLeft').style.backgroundPosition = "top left";
    document.getElementById('joyRight').style.backgroundImage=`url(${recupPhoto})`;
    document.getElementById('joyRight').style.backgroundPosition = "top right";
    document.getElementById('joyLeft').style.backgroundSize="cover";
    document.getElementById('joyRight').style.backgroundSize='cover';
}






function colorRedBlue(){
    document.getElementById('joyLeft').style.backgroundImage = "";
    document.getElementById('joyRight').style.backgroundImage = "";
    document.getElementById('joyLeft').style.backgroundColor="#d63031";
    document.getElementById('joyRight').style.backgroundColor="#0984e3";

}

function colorPinkPurle(){
    document.getElementById('joyLeft').style.backgroundColor="#f78fb3";
    document.getElementById('joyRight').style.backgroundColor="#574b90";
    document.getElementById('joyLeft').style.backgroundImage = "";
    document.getElementById('joyRight').style.backgroundImage = "";
}

function colorYellowGreen(){
    document.getElementById('joyLeft').style.backgroundColor="#fed330";
    document.getElementById('joyRight').style.backgroundColor="#2ed573";
    document.getElementById('joyLeft').style.backgroundImage = "";
    document.getElementById('joyRight').style.backgroundImage = "";
}

function strangerThing(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/strangers.jpeg')";
    document.getElementById('joyLeft').style.backgroundPosition = "bottom left";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "#b33939";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "#b33939";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('image').style.backgroundImage="url('./images/strangers.jpeg')";
    document.getElementById('joyRight').style.backgroundImage="url('./images/strangers.jpeg')";
    document.getElementById('joyRight').style.backgroundPosition = "bottom right";
    document.body.style.backgroundColor = "#b33939";
    document.body.style.transition = ".8s";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}

function onePiece(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.getElementById('image').style.backgroundImage="url('./images/onepiece.jpeg')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/onepiece.jpeg')";
    document.getElementById('joyLeft').style.backgroundPosition = "top left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/onepiece.jpeg')";
    document.getElementById('joyRight').style.backgroundPosition = "top right";
    document.body.style.backgroundColor = "#0097e6";
    document.body.style.transition = ".8s";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "#0097e6";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "#0097e6";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}

function dragonBall(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.getElementById('image').style.backgroundImage="url('./images/dragonball.jpeg')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/dragonball.jpeg')";
    document.getElementById('joyLeft').style.backgroundPosition = "top left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/dragonball.jpeg')";
    document.getElementById('joyRight').style.backgroundPosition = "top right";
    document.body.style.backgroundColor = "#ff9f1a";
    document.body.style.transition = ".8s";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "#ff9f1a";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "#ff9f1a";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}


function walkingDead(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.body.style.backgroundColor = "#222f3e";
    document.body.style.transition = ".8s";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "#222f3e";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "#222f3e";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('image').style.backgroundImage="url('./images/walkingdead.png')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/walkingdead.png')";
    document.getElementById('joyLeft').style.backgroundPosition = "top left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/walkingdead.png')";
    document.getElementById('joyRight').style.backgroundPosition = "top right";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}

function zelda(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.body.style.backgroundColor = "#8854d0";
    document.body.style.transition = ".8s";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "#8854d0";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "#8854d0";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('image').style.backgroundImage="url('./images/zelda.jpeg')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/zelda.jpeg')";
    document.getElementById('joyLeft').style.backgroundPosition = "top left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/zelda.jpeg')";
    document.getElementById('joyRight').style.backgroundPosition = "top right";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}

function simpson(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.body.style.backgroundColor = "#f6b93b";
    document.body.style.transition = ".8s";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "#f6b93b";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "#f6b93b";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('image').style.backgroundImage="url('./images/simpson.jpg')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/simpson.jpg')";
    document.getElementById('joyLeft').style.backgroundPosition = "top left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/simpson.jpg')";
    document.getElementById('joyRight').style.backgroundPosition = "top left";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}

function diablo(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.body.style.backgroundColor = "black";
    document.body.style.transition = ".8s";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "black";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "black";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('image').style.backgroundImage="url('./images/diablo.jpeg')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/diablo.jpeg')";
    document.getElementById('joyLeft').style.backgroundPosition = "bottom left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/diablo.jpeg')";
    document.getElementById('joyRight').style.backgroundPosition = "bottom right";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}

function mario(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.body.style.backgroundColor = "red";
    document.body.style.transition = ".8s";
    document.getElementById('curvedScreenLeft').style.backgroundColor = "red";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "red";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('image').style.backgroundImage="url('./images/mario.jpeg')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/mario.jpeg')";
    document.getElementById('joyLeft').style.backgroundPosition = "top left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/mario.jpeg')";
    document.getElementById('joyRight').style.backgroundPosition = "top right";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}

function donkey(){
    document.getElementById('joyLeft').style.backgroundColor="black";
    document.getElementById('joyRight').style.backgroundColor="black";
    document.body.style.backgroundColor = "#3c6382"
    document.body.style.transition = ".8s"
    document.getElementById('curvedScreenLeft').style.backgroundColor = "#3c6382";
    document.getElementById('curvedScreenLeft').style.transition = ".8s";
    document.getElementById('curvedScreenRight').style.backgroundColor = "#3c6382";
    document.getElementById('curvedScreenRight').style.transition = ".8s";
    document.getElementById('image').style.backgroundImage="url('./images/donkey.jpeg')";
    document.getElementById('joyLeft').style.backgroundImage="url('./images/donkey.jpeg')";
    document.getElementById('joyLeft').style.backgroundPosition = "bottom left";
    document.getElementById('joyRight').style.backgroundImage="url('./images/donkey.jpeg')";
    document.getElementById('joyRight').style.backgroundPosition = "bottom right";
    document.getElementById('title').style.color="white";
    document.getElementById('presentation').style.color="white";
}