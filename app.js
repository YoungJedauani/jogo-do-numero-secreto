
 let listaDosNumerosSecretos = []
 let numeroLimite = 100
 let numeroSecreto = gerarNumeroSecreto()
 let tentativa = 1
 console.log (numeroSecreto)
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector (tag)
  campo.innerHTML = texto
   if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    } 
}
   function exibirMensagemNaTela(){
    exibirTextoNaTela ('h1','Bem vindo ao jogo do número secreto')
   exibirTextoNaTela ('p','Escolha um número de 1 a 100')
   }
   exibirMensagemNaTela()
  
  
   function verificarChute(){
   let chute = document.querySelector('input').value
  
    let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa'
   let mensagemTentativa = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}`
   if (chute == numeroSecreto){
   exibirTextoNaTela ('p', mensagemTentativa)
   document.getElementById ('reiniciar').removeAttribute ('disabled')
  
  } else {
    if (chute > numeroSecreto){
      exibirTextoNaTela ('p', 'O número secreto é menor')
    } else{
      exibirTextoNaTela ('p', 'O número secreto é maior')
    }
    tentativa ++
    limparCampo()
    
   }
  }
   
 
 


 function gerarNumeroSecreto(){
 let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1)
 let numeroSorteado = listaDosNumerosSecretos.length
 if (numeroSorteado == numeroLimite ){
  listaDosNumerosSecretos = []
 }
 if (listaDosNumerosSecretos.includes(numeroEscolhido)){
  console.log ( listaDosNumerosSecretos)
  return gerarNumeroSecreto()
 } else {
  listaDosNumerosSecretos.push ( numeroEscolhido)
   return numeroEscolhido
 }
  

 } 
 
 
 function limparCampo(){
  campo = document.querySelector('input')
  campo.value = '';
 }

function reiniciarJogo(){
   numeroSecreto = gerarNumeroSecreto()
   tentativa = 1;
   limparCampo ();
   exibirMensagemNaTela()
   document.getElementById('reiniciar').setAttribute('disabled', true)
   }

 