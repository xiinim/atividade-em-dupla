Produto = Number(window.prompt('Digite o valor do produto: '))
Parcela = Number(window.prompt('Parcelar em 3 ou 5 vezes?'))

if(Parcela == 3){
    Produto = (10 / 100 * Produto) + Produto
}

if(Parcela == 5){
    Produto = (20 / 100 * Produto) + Produto
}
