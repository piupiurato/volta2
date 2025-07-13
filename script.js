const frases = [
  "E quando eu prometi que nunca ia te magoar?",
  "Hoje só quero dizer: desculpa por tudo, eu te amo."
];

let index = 0;

function mostrarFrase() {
  const fraseElement = document.getElementById("frase-extra");
  if (index === 0) {
    document.getElementById("audio").play(); // Inicia a música com o primeiro clique
  }
  if (index < frases.length) {
    fraseElement.innerText = frases[index];
    index++;
  } else {
    fraseElement.innerText = "Cada lembrança me faz querer você ainda mais.";
  }
}


function mostrarMensagemFinal() {
  const final = document.getElementById("mensagem-final");
  final.innerText = "Eu amo você mais do que consigo mostrar. Me perdoa?";
}
