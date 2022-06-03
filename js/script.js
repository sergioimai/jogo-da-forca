let palavras = ["JAVA", "REACT", "NODE", "PYTHON", "PHP", "ALURA", "ORACLE", "SCRIPT", "HTML", "KOTLIN"];
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let letrasErradas = [];
let letrasCorretas = [];
console.log(palavraSecreta)

document.addEventListener("keydown", (evento) => {
  let codigo = evento.keyCode; 
  if (isLetra(codigo)) {
    let letra = evento.key.toUpperCase();
    if (letrasErradas.includes(letra)) {
      mostrarAvisoLetraRepetida();
    } else {
      if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
});

desenharForca();
mostrarLetrasCertas();

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  let div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "";
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarLetrasCertas() {
  let container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => {
    if (letrasCorretas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else {
      container.innerHTML += `<span>_</span>`;
    }
  });
}

function checarJogo() {
  let mensagem = "";
  let container = document.querySelector(".palavra-secreta-container");
  let partesCorpo = document.getElementById("canvas");

  if (letrasErradas.length === 6) {
    mensagem = "Você perdeu! A palavra era " + palavraSecreta;
  }

  if (palavraSecreta === container.innerText) {
    mensagem = "Parabéns! Você ganhou!";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function desenharForca() {
  let forca = document.getElementById("canvas").getContext('2d');

  forca.lineWidth = 6;
  forca.strokeStyle = "#0A3871";
  forca.lineCap ='round';
  forca.lineJoin = 'round';
  forca.beginPath();
  forca.moveTo(150, 10);
  forca.lineTo(150, 40);
  forca.moveTo(50, 10);
  forca.lineTo(150, 10);
  forca.moveTo(50, 199);
  forca.lineTo(50, 10);
  forca.moveTo(20, 199);
  forca.lineTo(150, 199);
  forca.stroke();

    for (let i = 0; i < letrasErradas.length; i++) {
      if (i==0){
          /* head */
      forca.lineWidth = 5;
      forca.beginPath();
      forca.arc(150, 63, 20, 0, Math.PI * 2);
      forca.stroke();
    }if(i==1) {
          /* body */
      forca.beginPath();
      forca.moveTo(150, 85);
      forca.lineTo(150, 150);
      forca.stroke();
    }if(i==2) {
          /* left arm */
      forca.beginPath();
      forca.moveTo(150, 95);
      forca.lineTo(180,110);
      forca.stroke();
    }if(i==3) {
          /* right arm */
      forca.beginPath();
      forca.moveTo(150, 95);
      forca.lineTo(120, 110 );
      forca.stroke();
    }if(i==4) {
          /* right leg */
      forca.beginPath();
      forca.moveTo(150, 150);
      forca.lineTo(180, 170);
      forca.stroke();
    }if(i==5) {
          /* left leg */
      forca.beginPath();
      forca.moveTo(150, 150);
      forca.lineTo(120, 170);
      forca.stroke();
    }
  }
}

function mostrarAvisoLetraRepetida() {
  let aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000);
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
  window.location.reload();
} 

/* NOVA PALAVRA */

function enviar() {
  let inputPalavra = document.querySelector("#newPalavra"); 
  let novaPalavra = palavras.push(inputPalavra.value);
  window.location.replace('./jogo.html');
  }

/* button */
function cancelar() {
  window.location.replace('./index.html');
}

function desistir() {
  window.location.replace('./index.html');
}

function novoJogo() {
  window.location.reload();
}
function jogar() {
  window.location.replace('./jogo.html');
}

function addPalavra() {
  window.location.replace('./nova_palavra.html');
}