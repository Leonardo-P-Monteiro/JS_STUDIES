/* Esse script é para ser executado dentro do console do navegador. Se 
ele for executado aqui no node, vai dar erro. O node não reconhece o objeto Window.*/

let var1 = window.prompt('Forneça o primeiro número: ');
let var2 = window.prompt('Forneça o segundo número: ');

const confirm_my = window.confirm('Vamos executar a operação matemática. Tudo bem?');

if (confirm_my) {
    const result = parseInt(var1) + parseInt(var2);
    console.log(result);
    alert(`O resultado foi ${result}`);
    window.location.reload()

} else {
    alert('A operação foi cancelada.')
    console.log('A operação foi cancelada.')
    window.location.reload()
};
