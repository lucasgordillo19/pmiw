class BalaRi{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.disparadaRi = false;
    this.micolor = color(200,150,0);
  }
  
  dibujar(){
    if(this.disparadaRi = true){
      imagenes[4].resize(60, 70);
      image(imagenes[4], this.posX, this.posY);
      this.mover();
    }
  }
  
  mover(){
    this.posX+=15;
  }
  
  dispararRi(){
    this.disparadaRi = true;
  }
}
