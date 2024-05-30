// Dieses Event-Listener-Block wird aktiviert, wenn auf der Seite gescrollt wird.
document.addEventListener("scroll", function () {

    // Das DOM-Element mit der ID "scroll-to-top" wird in der Variable "scrollButton" gespeichert.
    let scrollButton = document.getElementById("scroll-to-top");

    // Überprüfen, ob der vertikale Scrollwert des Body-Elements größer als 20 ist
    // oder der vertikale Scrollwert des HTML-Elements größer als 20 ist.
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        // Wenn die Bedingung erfüllt ist, wird der Stil des "scrollButton" auf "block" gesetzt,
        // um den Scroll-to-Top-Button anzuzeigen.
        scrollButton.style.display = "block";
    } else {

        // Wenn die Bedingung nicht erfüllt ist, wird der Stil des "scrollButton" auf "none" gesetzt,
        // um den Scroll-to-Top-Button auszublenden.
        scrollButton.style.display = "none";
    }
});



// Ein Klick-Event-Listener wird dem DOM-Element mit der ID "scroll-to-top" hinzugefügt.
document.getElementById("scroll-to-top").addEventListener("click", function () {

    // Der vertikale Scrollwert des Body-Elements wird auf 0 gesetzt, um an den Anfang der Seite zu scrollen.
    document.body.scrollTop = 0; // Für Safari

    // Der vertikale Scrollwert des HTML-Elements wird auf 0 gesetzt, um an den Anfang der Seite zu scrollen.
    document.documentElement.scrollTop = 0; // Für andere Browser
});
