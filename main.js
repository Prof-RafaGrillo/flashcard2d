function criarCartao(pergunta, resposta){
    let conteudo = document.getElementById("conteudo")
    let cartao = document.createElement('article')
    cartao.classList = 'cartao'

    cartao.innerHTML = `
        <div class="cartao--conteudo">
                    <div class="cartao--pergunta"><p>Quando foi lançado o One Piece?</p></div>
                    <div class="cartao--resposta"><p>O One Piece foi lançado em 1997<p></p></div>
                </div>
    `

    conteudo.appendChild(cartao)
}

criarCartao(1,2)
criarCartao(1,2)