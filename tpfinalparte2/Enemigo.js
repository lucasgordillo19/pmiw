class Enemigo{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.vivo = true;
  }
  
  dibujar(){
    if(this.vivo){
      imagenes[3].resize(50, 90);
      image(imagenes[3], this.posX, this.posY);
      this.correr();
      if(this.posX <= -30){
        this.reciclar();
      }
    } 
  }
  
  estaVivo(){
    return this.vivo;
  }
  
  correr(){
    this.posX-=3;
  }
  
  reciclar(){
    this.posX = random(640, 1500);
   
  }
  
  morir(){
    this.vivo = false;
  }
  
  balaTocadaUp(balaUp){
    if(dist(this.posX, this.posY, balaUp.posX, balaUp.posY) < 30){
      this.morir();
  
    }
  }
  
  balaTocadaDo(balaDo){
    if(dist(this.posX, this.posY, balaDo.posX, balaDo.posY) < 30){
      this.morir();
  
    }
  }
  
  balaTocadaLe(balaLe){
    if(dist(this.posX, this.posY, balaLe.posX, balaLe.posY) < 30){
      this.morir();
  
    }
  }
  
  balaTocadaRi(balaRi){
    if(dist(this.posX, this.posY, balaRi.posX, balaRi.posY) < 30){
      this.morir();
  
    }
  }
}
