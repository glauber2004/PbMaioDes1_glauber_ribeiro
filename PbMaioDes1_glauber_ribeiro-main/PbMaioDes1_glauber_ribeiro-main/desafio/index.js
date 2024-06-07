// fs para criar arquivo txt e ler depois
const fs = require('fs')

//função para escolher as bolas
function escolherBolas(){
    // dois arrays, um para as bolas, e outro pra puxar a sequência com 4 bolas aleatórias
    const bolas = ['verde', 'azul', 'azul', 'amarelo', 'amarelo', 'amarelo', 'vermelho', 'vermelho', 'vermelho', 'vermelho', 'vermelho']
    const sequencia = []

    //for para escolher aleatoriamente 4 bolas 
        for (let a=0; a<4; a++){
            const escolher = bolas[Math.floor(Math.random() * (bolas.length))]
            sequencia.push(escolher)
        }
    return sequencia
}


//repete a execução da função 1000 vezes
let resultado = ''
for (let b=0; b<1000; b++) {
    const arraySuporte = escolherBolas()
    resultado += arraySuporte.join(',') + '\n'
}

// escreve o resultado no arquivo resultado.txt, dentro desse fs tem o fs de ler o arquivo 
fs.writeFileSync('resultado.txt', resultado)

// ler o conteúdo do arquivo e contar quantas bolas de cada cor deu
fs.readFile('resultado.txt', 'utf8', function (err, arquivoResultado) {

    //organizar pra poder retirar a quantidade de cada "cor das bolas"
    //tirando quebra de linhas e vírgulas para conseguir extrair apenas as palavras com as cores
    const linhas = arquivoResultado.split('\n').filter(linha => linha.length)
    const totalContagem = linhas.reduce((acumulador, linha) => {
        const bolas = linha.split(',')
        bolas.forEach(corBola => {
            acumulador[corBola] = (acumulador[corBola] || 0) + 1
        });
        return acumulador
    },{})


    //ordenar e organizar as cores de acordo com o descrito no desafio
    const ordemCores = ['verde', 'azul', 'amarelo', 'vermelho']
    ordemCores.forEach(bola => {
        console.log(`${bola}: ${totalContagem[bola]}`)
    })
})