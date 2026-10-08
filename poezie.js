// Kolik básní má zůstat ve feedu. Změnou tohoto čísla změníš všechno.
var POCET_VE_FEEDU = 3;

function ukazBasen(id) {

    var feed = document.getElementById('feed');

    // Je tahle báseň ve feedu už teď? Pak neděláme nic.
    if (feed.querySelector('[data-basen="' + id + '"]')) {
        return;
    }

    var zdroj = document.getElementById(id);

    // Při prvním kliknutí zmizí úvodní pobídka.
    var navod = document.getElementById('navod');
    if (navod) {
        navod.remove();
    }

    // Vyrobíme novou kartu a nalijeme do ní obsah básně.
    var karta = document.createElement('div');
    karta.className = 'karta';
    karta.dataset.basen = id;
    karta.innerHTML = zdroj.innerHTML;

    // Uřízne prázdné řádky na začátku a na konci básně.
    karta.querySelectorAll('p').forEach(function(odstavec) {
        odstavec.innerHTML = odstavec.innerHTML.trim();
    });

    // prepend = vlož úplně nahoru. (appendChild by to dalo dospodu.)
    feed.prepend(karta);

    // Co přeteče dole, to smažeme.
    while (feed.children.length > POCET_VE_FEEDU) {
        feed.lastElementChild.remove();
    }
}
