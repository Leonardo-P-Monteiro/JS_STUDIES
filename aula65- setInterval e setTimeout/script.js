//Defino a expressão de exibir a hora atual quando executada.
const showHour = () => {
  let h = new Date().toLocaleTimeString("pt-BR", {
    hour12: false,
  });

  return h; // Está retornando apenas o valor string de horas. Não imprimindo.
};

//Defino o "timer" que vai executar a expressão de showHour a cada X tempo decorrido.
let time = setInterval(function () {
  console.log(showHour());
}, 1000);

//Defino o "stop" do time. Nele indico "Execuite essa função anônima '() => {}'
// depois de Y tempo decorrido".
let timeStop = setTimeout(() => {
  clearInterval(time);
}, 4000);
