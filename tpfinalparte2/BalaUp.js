class BalaUp{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.disparadaUp = false;
    this.micolor = color(200,150,0);
  }
  
  dibujar(){
    if(this.disparadaUp = true){
      imagenes[4].resize(60, 70);
      image(imagenes[4], this.posX, this.posY);
      this.mover();
    }
  }
  
  mover(){
    this.posY-=15;
  }
  
  dispararUp(){
    this.disparadaUp = true;
  }
}
