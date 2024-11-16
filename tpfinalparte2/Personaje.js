class Personaje{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.balaUp = new BalaUp();
    this.balaDo = new BalaDo();
    this.balaLe = new BalaLe();
    this.balaRi = new BalaRi();
  }
  
  dibujar(){
    this.balaUp.dibujar();
    this.balaDo.dibujar();
    this.balaLe.dibujar();
    this.balaRi.dibujar();
    imagenes[2].resize(80, 130);
    image(imagenes[2], this.posX, this.posY);
    if(this.posX < 0 || this.posX > width || this.posY < 0 || this.posY > height){
      this.morir();
    }
  }
  
  
  teclaPresionada(keyCode){
    if(keyCode == 87){
      this.moverUp();
    }else if(keyCode == 83){
      this.moverDo();
    }else if(keyCode == 68){
      this.moverRi();
    }else if(keyCode == 65){
      this.moverLe();
    }else if(keyCode == 38 ){
      this.dispararUp();
    }else if(keyCode == 40 ){
      this.dispararDo();
    }else if(keyCode == 37 ){
      this.dispararLe();
    }else if(keyCode == 39 ){
      this.dispararRi();
    }
  }
  
  moverUp(){
    this.posY -=25;
  }
  
  moverDo(){
    this.posY +=25;
  }
  
  moverLe(){
    this.posX -=25;
  }
  
  moverRi(){
    this.posX +=25;
  }

  morir(){
   if(this.morir){
     estado = "gameover";
    }
  }
   
  
  dispararUp(){
    this.balaUp = new BalaUp(this.posX, this.posY);
    this.balaUp.dispararUp;
  }
  
  dispararDo(){
    this.balaDo = new BalaDo(this.posX, this.posY);
    this.balaDo.dispararDo;
  }
  
  dispararLe(){
    this.balaLe = new BalaLe(this.posX, this.posY);
    this.balaLe.dispararLe;
  }
  
  dispararRi(){
    this.balaRi = new BalaRi(this.posX, this.posY);
    this.balaRi.dispararRi;
  }
  
  haDisparadoUp(){
    return this.balaUp.disparadaUp;
  }
  
  haDisparadoDo(){
    return this.balaDo.disparadaDo;
  }
  
  haDisparadoLe(){
    return this.balaLe.disparadaLe;
  }
  
  haDisparadoRi(){
    return this.balaRi.disparadaRi;
  }
}
