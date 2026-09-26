document.addEventListener('DOMContentLoaded', function() {
    var menuHTML = `
        <span class="menu-icon" onclick="toggleMenu()">☰</span>
    <div class="menu" id="menu">
        <a href="index.html">Domů</a>
        <a href="jokesbyblazen.html">Jokes by Blázen</a>
        <a href="texty.html">Texty</a>
        <a href="genealogie.html">Genealogie</a>
        <a href="lingvistika.html">Lingvistické fabulace</a>
        <a href="kontakt.html">Kontakt</a>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
