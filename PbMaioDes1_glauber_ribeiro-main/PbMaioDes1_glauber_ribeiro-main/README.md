# PbMaioDes1_glauber_ribeiro
Este repositório é referente a atividade proposta (Desafio) durante a quarta semana da Back-end Journey (Node.js) - AWS Cloud Context - Compass UOL

Como utilizar o projeto? 
    Para utilizar todos os elementos contidos dentro deste projeto, é necessário ter instalado Node.js em sua máquina, e se for possível utilizar Visual Studio Code para poder prosseguir. 
    Abra o projeto em seu editor, abra um terminal integrado e execute o seguinte comando: node ./index.js
    Depois disso, sera criado um arquivo chamado "resultado.txt" contendo as 1000 sequências com 4 cores de bolas separadas por vírgula e quebras de linha. No terminal irá aparecer a contagem de quantas vezes cada cor apareceu. 


Explicação sobre a resolução do desafio.
    Foi criado uma 'function' para escolher as bolas aleatoriamente, utilizando um 'array' com todas as bolas que foram representadas no problema, e um 'array' para puxar especificamente uma sequência com 4 bolas aleatórias. 
    Para puxar essas bolas aleatórias, foi necessário utilizar um 'for', em específico puxando apenas as 4 bolas, depois de passar por um 'Math.random()'.
    O segundo pedido era de repetir essa sequência por 1000 vezes e jogar dentro de um arquivo em 'txt'. Para isso foi criado um novo "for" que repetisse o passo anterior por 1000 vezes, e foi utilizado também um módulo 'fs' do Node.js para possibilitar a criação de um arquivo contendo o resultado pedido, com as sequências de bolas separadas apenas por vírgula. 
    Por fim, era necessário ler este arquivo e mostrar no 'console.log()' a quantidade que cada bola aparece no arquivo, para isso foi utilizado novamente o módulo 'fs', contribuindo para a leitura do mesmo, foi necessário fazer uma nova 'function' para extrair apenas os resultados contidos como cores de bolas dentro deste arquivo. Para isso foi necessário eliminar quebras de linha, linhas vazias e vírgulas contidas dentro do arquivo, fazer um contador de cores adicionando um, sempre que a cor da bola se repetisse. Depois desse resultado é mostrado no 'console.log()'.