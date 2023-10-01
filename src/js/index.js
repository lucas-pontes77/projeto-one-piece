// Pegar os botoes no JS pra poder verificar quando o usuario clica nele
const botoes = document.querySelectorAll('.botao');

//pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll('.personagem');

// Adicionar a classe "selecionado" no botao selecionado, verificar e remover a classe "selecionado" se ja existir mais de 1
botoes.forEach ((botao, index) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
//Adicionar a classe "selecionado" no personagem selecionado, verificar e remover a classe "selecionado" caso exista mais de 1
        personagens[index].classList.add("selecionado");
    });
});
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

