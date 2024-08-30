//https://youtu.be/-l_N1zWND7M

//apretar R para ver diseño original
//apretar S para eliminar stroke

let tam;
let cant;
let imagen;

function preload() {
  imagen=loadImage('assets/F_11.png');
}

function setup() {
  createCanvas( 800, 400 );

  strokeWeight( 3.25 );

  cant = 6  //cantidad de cuadrados en grilla
    tam = width / 2 / cant //coloca grilla de un lado
}

function draw() {
  background ( 255 );
  image(imagen, 0, 0);
  translate(402, 1.5); //mueve el diseño hacia la derecha

  //colores
  if (mouseX > width/4*3 && mouseY > height/2) {
    fill( 0, 190, 230, 100 );
    stroke( 207, 49, 232);
  } else if (mouseX < width/4*3 && mouseY < height/2) {
    fill( 200, 0, 0, 100 );
    stroke( 123, 196, 96);
  } else if (mouseY < height/2) {
    fill( 200, 255, 40, 100);
    stroke( 98, 210, 170);
  } else if (mouseX < width/4*3 && mouseY > height/2) {
    fill( 0, 200, 50, 100);
    stroke( 255, 188, 0);
  }
  //Funciones propias
  keyPressed();
  reiniciar();
  grilla();
  miniGrillaUno(6);
  miniGrillaDos(6);
  miniGrillaTres(6);
  miniGrillaCuatro(6);
}

function grilla() {
  for (let i = 0; i < cant; i++) {
    for (let u = 0; u < cant; u++) {
      rect( i*tam, u*tam, tam, tam);
    }
  }
}

function miniGrillaUno(can) {
  let mod = width / can;
  let u = 0;
  let i = 0;

  let d = dist( mouseX, mouseY, i*mod/2, i*mod/2);
  let tom = map( d, 0, 10000, mod/2, mod*2);

  for (i = 0; i < can; i++) {
    for (u = 0; u < can; u++) {
      rect(i*tom, u*tom, tom/1.12, tom/1.12);
    }
  }
}

function miniGrillaDos(can) {
  let mod = width / can;
  let u = 0;
  let i = 0;

  let d = dist( mouseX, mouseY, i*mod/2, i*mod/2);
  let tom = map( d, 0, 20000, mod/2, mod*2);

  for (i = 0; i < can; i++) {
    for (u = 0; u < can; u++) {
      rect(i*tom, u*tom, tom/1.27, tom/1.27);
    }
  }
}

function miniGrillaTres(can) {
  let mod = width / can;
  let u = 0;
  let i = 0;

  let d = dist( mouseX, mouseY, i*mod/2, i*mod/2);
  let tom = map( d, 0, 30000, mod/2, mod*2);

  for (i = 0; i < can; i++) {
    for (u = 0; u < can; u++) {
      rect(i*tom, u*tom, tom/1.5, tom/1.5);
    }
  }
}

function miniGrillaCuatro(can) {
  let mod = width / can;
  let u = 0;
  let i = 0;

  let d = dist( mouseX, mouseY, i*mod/2, i*mod/2);
  let tom = map( d, 0, 40000, mod/2, mod*2);

  for (i = 0; i < can; i++) {
    for (u = 0; u < can; u++) {
      rect(i*tom, u*tom, tom/1.76, tom/1.8);
    }
  }
}

//Eliminar stroke
function keyPressed() {
  if (keyIsPressed) {
    if (key == 's' || key == 'S') {
      noStroke();
    }
  }
}

//Reiniciar
function reiniciar() {
  if (keyIsPressed) {
    if (key == 'r' || key == 'R') {
      fill(255);
      stroke(0);
      mouseX = 0;
      mouseY = 0;
    }
  }
}
