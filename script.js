document.addEventListener("DOMContentLoaded", function () {
    const botaoMenu = document.querySelector(".cabecalho_menu_botao");
    const menu = document.querySelector(".cabecalho_menu");

    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});