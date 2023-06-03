function verificaChutePossuiValorValido(chute) {
     const numero = +chute;

     if (chuteForInavalido(numero)) {
          '<div>Valor inválido!</div>'
          return
     }

     if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
          elementoChute.innerHTML += `
               <div>Valor inválido! O número secreto não está entre ${menorValor} e ${maiorValor}</div>
          `;
          return
     }

     if (numero === numeroSecreto) {
          document.body.innerHTML = `
               <h2>Você acertou!</h2>
               <h3>O número secreto era ${numeroSecreto}</h3>
               <button id="jogar-novamente">Jogar novamente!</button>
          `;
          const botaoJogar = document.querySelector('#jogar-novamente');

          botaoJogar.addEventListener('click', () => {
               location.reload();
          })

     } else if (numero > numeroSecreto) {
          elementoChute.innerHTML += `
               <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
          `
     } else {
          elementoChute.innerHTML += `
               <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
          `
     }
}

function chuteForInavalido(numero) {
     return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
     return numero > maiorValor || numero < menorValor;
}

