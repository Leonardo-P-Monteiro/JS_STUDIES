const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
let seconds = 0;
let timer;

const hourFromSeconds = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
};

function startClock() {
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = hourFromSeconds(seconds);
  }, 1000);
}

document.addEventListener("click", (e) => {
  el = e.target;

  if (el.classList.contains("pause")) {
    clearInterval(timer);
    clock.classList.add("paused");
  } else if (el.classList.contains("reset")) {
    clearInterval(timer);
    clock.innerHTML = hourFromSeconds(0);
    seconds = 0;
    timer = undefined;
    clock.classList.remove("paused");
  } else if (el.classList.contains("start")) {
    clearInterval(timer); // Precisamos garantir que não haja processos rodando.
    // Do contrário isso faria nossa variável "seconds" se adicionada várias vezes
    // e o cronômetro rodar mais rápido.
    clock.classList.remove("paused");
    startClock();
  }
});

// start.addEventListener("click", (e) => {
//     clearInterval(timer) // Precisamos garantir que não haja processos rodando.
//     // Do contrário isso faria nossa variável "seconds" se adicionada várias vezes
//     // e o cronômetro rodar mais rápido.
//     clock.classList.remove('paused')
//     startClock();
// });

// pause.addEventListener("click", (e) => {
//     clearInterval(timer);
//     clock.classList.add('paused')
// });

// reset.addEventListener("click", (e) => {
//     clearInterval(timer);
//     clock.innerHTML = hourFromSeconds(0);
//     seconds = 0
//     timer = undefined
//     clock.classList.remove('paused')
// });
