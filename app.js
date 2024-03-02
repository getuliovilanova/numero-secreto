alert('Bem vindo ao jogo do número secreto!');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Se o chute for igual ao numero secreto
    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

