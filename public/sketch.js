let canvas
//gift
let bulbasaur
let movimiento
let abilidad

let charmander
let movimientoPOKE2
let abilidadPOKE2

let squirtle
let movimientoPOKE3
let abilidadPOKE3

//Data
let bulbasaurData
let charmanderData
let squirtleData


function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    Getbulbasaur()
    Getcharmander()
    Getsquirtle()
}

function draw() {
    background(255);
    newCursor();
    //rect bulbasaur
    fill(0,255,0);
        rect(10, 20, 650, 250, 20);

    //rect charmander
    fill(255,128,0);
        rect(10, 580, 650, 250, 20);

    //rect squirtle
    fill(0,170,228);
        rect(10, 300, 650, 250, 20);
    

    if (bulbasaur !== undefined) {
        fill(0)
        image (giftbalbusaur, 20, 50, 150, 150)
        text (`${bulbasaur.name}`, 40, 240)
    }

    if (charmander !== undefined) {
        fill(0)
        image (giftcharmander, 20, 610, 150, 150)
        text (`${charmander.name}`, 40, 800)
    }

    if (squirtle !== undefined) {
        fill(0)
        image (giftsquirtle, 20, 315, 150, 150)
        textFont('Poppins');
        textSize(30);
        text (`${squirtle.name}`, 45, 510)
    }

    if (bulbasaurData !== undefined) {
        fill(255, 0, 0)
        text('Movements:', 250, 120)
        text('Abilities:', 250, 200)
        fill(0)
        text(movimiento, 450, 120)
        text(abilidad, 380, 200)
    }

    if (charmanderData !== undefined) {
        fill(255, 0, 0)
        text('Movements:', 250, 680)
        text('Abilities:', 250, 750)
        fill(0)
        text(movimientoPOKE2, 450, 680)
        text(abilidadPOKE2, 380, 750)
    }

    if (squirtleData !== undefined) {
        fill(255, 0, 0)
        text('Movements:', 250, 370)
        text('Abilities:', 250, 460)
        fill(0)
        text(movimientoPOKE3, 450, 370)
        text(abilidadPOKE3, 400, 460)
    }
}

async function Getbulbasaur() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${1}`)
        const data  = await results.json()
        bulbasaur = data
        movimiento = data.moves[0].move.name
        abilidad = data.abilities[0].ability.name
        console.log(bulbasaur)
        giftbalbusaur = loadImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif`)
    } catch (error) {
        console.log('ocurrio un error');
    }
}

async function Getcharmander() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${4}`)
        const data  = await results.json()
        charmander = data
        movimientoPOKE2 = data.moves[0].move.name
        abilidadPOKE2 = data.abilities[0].ability.name
        console.log(charmander)
        giftcharmander = loadImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif`)
    } catch (error) {
        console.log('ocurrio un error');
    }
}

async function Getsquirtle() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${7}`)
        const data  = await results.json()
        squirtle = data
        movimientoPOKE3 = data.moves[1].move.name
        abilidadPOKE3 = data.abilities[0].ability.name
        console.log(squirtle)
        giftsquirtle = loadImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif`)
    } catch (error) {
        console.log('ocurrio un error');
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    Bulbasaur()
    Charmander()
    Squirtle()
}

async function Bulbasaur() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${1}`)
        const data  = await results.json()
        bulbasaurData = data
        console.log(bulbasaurData)
    } catch (error) {
        console.log('ocurrio un error');
    }
}

async function Charmander() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${4}`)
        const data  = await results.json()
        charmanderData = data
        console.log(charmanderData)
    } catch (error) {
        console.log('ocurrio un error');
    }
}

async function Squirtle() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${7}`)
        const data  = await results.json()
        squirtleData = data
        console.log(squirtleData)
    } catch (error){
        console.log('ocurrio un error');
    }
}

function newCursor() {
    noStroke();
    fill(0);
    ellipse(pmouseX, pmouseY, 10, 10);
}