const dino = document.querySelector('.dino');
const background = document.querySelector('.background')

let taPulando = false;
let posicao = 0;

function adicionaKeyup(event){
   if (event.keyCode === 32){
       if(!taPulando){
        pulo();/*quando aperta a tela 32 a função será acionada.*/
       }
   }
}

function pulo(){
    taPulando = true;

    let upInterval = setInterval(() => {/*função para movimento do elelmento a cada 20 milessimo*/
    if (posicao >= 150) {
      clearInterval(upInterval);

      //descendo
      let downInterval = setInterval(() => {
          if( posicao <= 0){
           clearInterval(downInterval);
           taPulando = false;
          }
          posicao -= 20;
          dino.style.bottom = posicao + 'px';
      }, 20);
    } else {
      //subindo
      posicao += 20;
      dino.style.bottom = posicao + 'px';
    }
 }, 20);
}

function criarCactos(){
    const cactos = document.createElement('div');
    let cactosPosicao = 1000;
    let tempoAleatorio = Math.random() * 6000;


     cactos.classList.add('cactos');
     cactos.style.left = 1000 + 'px';
     background.appendChild(cactos);

     let ladoEsquerdo = setInterval(() => {

        if(cactosPosicao < -60){
            clearInterval(ladoEsquerdo);
            background.removeChild(cactos);
        } else if(cactosPosicao > 0 && cactosPosicao < 60 && posicao < 60){
            //Gamer over
            clearInterval(ladoEsquerdo);
            document.body.innerHTML = '<h1 class="game-over">Fim do Jogo</h1>';
        } else {
            cactosPosicao -= 5;
            cactos.style.left = cactosPosicao + 'px';
        }
     }, 20);

 setTimeout(criarCactos, tempoAleatorio);
}

criarCactos();
document.addEventListener('keyup', adicionaKeyup);