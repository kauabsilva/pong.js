
let xBolinha = 300;
let yBolinha = 200;
let diametro = 50;
let vxBolinha = 6;
let vybolinha = -6;
let raio = diametro / 2;
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    criarBolinha ();



    xBolinha += vxBolinha;

    if (xBolinha + raio > width  || xBolinha - raio < 0 ) {
        vxBolinha *= -1;
    }
   console.log(xBolinha)


   yBolinha += vybolinha;
   if(yBolinha + raio > height || yBolinha - raio < 0) {
    vybolinha *= -1;
 
console.log(vybolinha)


}

function criarBolinha (){
    circle(xBolinha, yBolinha, diametro);
}
}
