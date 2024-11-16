//https://youtu.be/1ok4vOxz4ag
let jueguito;
let imagenes = [7];
let estado;
let esquinaXcred = 20;
let esquinaYcred = 420;
let esquinaXcentro = 260;
let esquinaYcentro = 420;
let ancho = 160;
let alto = 40;
let font;
let song;

function preload(){
  imagenes[1] = loadImage('/data/fondo.png');
  imagenes[2] = loadImage('/data/calam.png');
  imagenes[3] = loadImage('/data/bob.png');
  imagenes[4] = loadImage('/data/nota.png');
  imagenes[5] = loadImage('/data/fondo2.png');
  imagenes[6] = loadImage('/data/fondo3.png');
  imagenes[7] = loadImage('/data/fondo4.png');
  imagenes[8] = loadImage('/data/fondo5.png');
  
  font = loadFont('/data/KrabbyPatty.ttf');
  
  soundFormats('mp3');
  song = loadSound("/data/dancing.mp3");
}

function setup() {
  createCanvas(640, 480);
  jueguito = new Juego(15);  
  estado = "menu";

  textFont(font);
  strokeWeight(4);
}


function draw() {
  
    song.setVolume(0.6);

  if(estado == "menu"){
    image(imagenes[6], 0, 0, 640, 480);
    stroke(139, 10, 10);  //rojo oscuro
    fill( 232, 240, 27 );
    rect( 260, 420, 160, 40);
    fill( 206, 75, 108 );
    rect( esquinaXcred, esquinaYcred, 160, 40);
    textSize(40);
    stroke( 73, 32, 198 ); //azul
    fill( 232, 240, 27 ); //amarillo
    text('El Ultimo dia en Fondo de Bikini:\n            EL VIDEOJUEGO:\n               el minijuego', 45, 100 );
    textSize(30);
    fill(191, 23, 174);
    stroke(216, 204, 250); //celeste
    text('JUGAR', 290, 450);
    text('Creditos', 40, 450);
    textSize(20);
    text('Instrucciones:\nMoverse: W A S D\nDisparar: flechas\n \nTodos los Bobs deben morir para ganar.',50, 280);
  }
  
  if (estado == "creditos") {  //pantalla de créditos
    image( imagenes[7], 0, 0, 640, 480 );
    stroke(216, 204, 250); //celeste
    fill( 73, 32, 198 ); //azul
    textSize(50);
    text('Hecho por:', 30, 60);
    textSize(30);
    fill( 206, 75, 108 ); //rojo
    text('Lucas Gordillo\n 119050/3\n          y\nPablo Bautista\n 121435/8', 30, 130); //nuestros nombres
    textSize(17);
    text('OBRA ORIGINAL:\n Stephen Hillenburg\n nikelodeon', 450, 60);
    textSize(30);
    fill( 206, 75, 108 ); //rojo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcred, esquinaYcred, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Menu', 40, 450);
  }
  
  if(estado == "jueguito"){
    jueguito.dibujar();
  }
  
  if(estado == "gameover"){
    image(imagenes[5], 0, 0, 640, 480);
    stroke(216, 204, 250); //celeste
    fill( 73, 32, 198 ); //azul
    textSize(50);
    text('Game Over', 190, 150);
    textSize(29);
    stroke( 73, 32, 198 ); //azul
    fill(216, 204, 250); //celeste
    text('Calamardo pasara el resto del dia\n             con Bob Esponja', 90, 270);
    //botón reinicio
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    fill( 206, 75, 108 ); // rojo claro
    stroke(139, 10, 10);  //rojo oscuro
    rect( 260, 420, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Creditos', 280, 450);
  }
  
  if(estado == "ganaste"){
    image(imagenes[8], 0, 0, 640, 480);
    stroke(216, 204, 250); //celeste
    fill( 73, 32, 198 ); //azul
    textSize(50);
    text('Ganaste!', 190, 150);
    textSize(29);
    stroke( 73, 32, 198 ); //azul
    fill(216, 204, 250); //celeste
    text('Calamardo esperara a que Bob\n             explote al atardecer', 90, 270);
    //botón reinicio
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    fill( 206, 75, 108 ); // rojo claro
    stroke(139, 10, 10);  //rojo oscuro
    rect( 260, 420, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Creditos', 280, 450);
  }
  
  if(estado == "menu"){ //música se detiene al regresar al menú
    song.stop();
  }
}

function keyPressed(){
  jueguito.teclaPresionada(keyCode);
}

function mousePressed(){
  
  esquinaXcentro = 260;
  esquinaYcentro = 420;
  ancho = 160;
  alto = 40;
  
  if (estado == "menu" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "jueguito"; //menu a estado 1, minijuego
    jueguito = new Juego(15);
    song.play();
  }
  else if (estado == "menu" &&  mouseX > esquinaXcred && mouseX < esquinaXcred + ancho && mouseY > esquinaYcred && mouseY < esquinaYcred + alto) {
    estado = "creditos";  // creditos
  }
  else if (estado == "creditos" && mouseX > esquinaXcred && mouseX < esquinaXcred + ancho && mouseY > esquinaYcred && mouseY < esquinaYcred + alto) {
    estado = "menu";  // vuelta a menu desde creditos
  }
  else if (estado == "gameover" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";
  }
  else if (estado == "ganaste" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";
  }
}
