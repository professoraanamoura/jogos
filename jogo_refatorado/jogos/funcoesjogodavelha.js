      
      var jogadorAtual;
      var totalJogadas;
      var corJogadorAtivo;
      var corJogadorInativo;
      var jogador1, jogador2;
      var jogando;

     function reiniciarPartida(primeiroJogador, idJogador1, idJogador2){
      
      // libera o tabuleiro para uso
      document.getElementById('btn00').innerText="  ";
      document.getElementById('btn01').innerText="  ";
      document.getElementById('btn02').innerText="  ";
      document.getElementById('btn10').innerText="  ";
      document.getElementById('btn11').innerText="  ";
      document.getElementById('btn12').innerText="  ";
      document.getElementById('btn20').innerText="  ";
      document.getElementById('btn21').innerText="  ";
      document.getElementById('btn22').innerText="  ";
      document.getElementById('btn00').disabled=false;
      document.getElementById('btn01').disabled=false;
      document.getElementById('btn02').disabled=false;
      document.getElementById('btn10').disabled=false;
      document.getElementById('btn11').disabled=false;
      document.getElementById('btn12').disabled=false;
      document.getElementById('btn20').disabled=false;
      document.getElementById('btn21').disabled=false;
      document.getElementById('btn22').disabled=false;
      //inicia a partida
      iniciarPartida(primeiroJogador, idJogador1, idJogador2);
     };

     function iniciarPartida(primeiroJogador, idJogador1, idJogador2){
      jogadorAtual=primeiroJogador;
      totalJogadas=0;
      corJogadorAtivo = "color:red;";
      corJogadorInativo = "color:black;";
      jogador1=document.getElementById(idJogador1);
      jogador2=document.getElementById(idJogador2);
      jogador1.style= corJogadorAtivo;
      jogador2.style=corJogadorInativo;
      jogando=true;
     };      

      
      function jogada(id){        
        if(jogadorAtual==1){
          b = document.getElementById(id);
          b.innerText="X";
          b.disabled=true
          jogadorAtual=2;
          jogador1.style=corJogadorInativo;
          jogador2.style=corJogadorAtivo;
        }else  {
          b = document.getElementById(id);
          b.innerText="0";
          b.disabled=true
          jogadorAtual=1;
          jogador1.style=corJogadorAtivo;
          jogador2.style=corJogadorInativo;
        }
        totalJogadas+=1;
        verificaVitoria(totalJogadas);
        
      };
      function verificaVitoria(totalJogadas){
        if(totalJogadas>=5){
          btn00 = document.getElementById('btn00').innerText.trim();
          btn01 = document.getElementById('btn01').innerText.trim();
          btn02 = document.getElementById('btn02').innerText.trim();
          btn10 = document.getElementById('btn10').innerText.trim();
          btn11 = document.getElementById('btn11').innerText.trim();
          btn12 = document.getElementById('btn12').innerText.trim();
          btn20 = document.getElementById('btn20').innerText.trim();
          btn21 = document.getElementById('btn21').innerText.trim();
          btn22 = document.getElementById('btn22').innerText.trim();  
          if(btn00.length>0&&btn00===btn01&&btn00===btn02){
              
              encerrarJogo((btn00==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(btn10.length>0&&btn10===btn11&&btn10===btn12){
            
              encerrarJogo((btn10==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(btn20.length>0&&btn20===btn21&&btn20===btn22){
            
              encerrarJogo((btn20==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(btn00.length>0&&btn00===btn10&&btn00===btn20){
            
              encerrarJogo((btn00==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(btn01.length>0&&btn01===btn11&&btn01===btn21){
            
              encerrarJogo((btn01==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(btn02.length>0&&btn02===btn12&&btn02===btn22){
            
              encerrarJogo((btn02==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(btn00.length>0&&btn00===btn11&&btn00===btn22){
            
              encerrarJogo((btn00==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(btn20.length>0&&btn20===btn11&&btn11===btn02){
            
              encerrarJogo((btn20==="X")?"Vencedor: Jogador 1":"Vencedor: Jogaor 2"); 
          }
          else if(totalJogadas==9){
            encerrarJogo("Empate");
          }
        }
      };
      function encerrarJogo(mensagem){
        alert(mensagem);
        jogando=false;
        // bloqueia o uso do tabuleiro
          document.getElementById('btn00').disabled=true;
          document.getElementById('btn01').disabled=true;
          document.getElementById('btn02').disabled=true;
          document.getElementById('btn10').disabled=true;
          document.getElementById('btn11').disabled=true;
          document.getElementById('btn12').disabled=true;
          document.getElementById('btn20').disabled=true;
          document.getElementById('btn21').disabled=true;
          document.getElementById('btn22').disabled=true;
      };
      