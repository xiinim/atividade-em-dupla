N1 = Number(window.prompt('Digite o primeiro valor: '))
N2 = Number(window.prompt('Digite o segundo valor: '))
Operacao = window.prompt('Qual operação deseja? soma, multiplicação, divisão')

switch (Operacao) {
    case 'soma':
        result = N1 + N2 ; 
        break;
    case 'multiplicação':     
        result = N1 * N2 ; 
        break;
    case 'divisão': 
        result = N1 / N2 ;
        break;
}

alert(`A ${Operacao} dos dois valores é: ${result}`)
