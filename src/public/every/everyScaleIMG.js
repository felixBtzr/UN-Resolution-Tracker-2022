document.addEventListener('DOMContentLoaded', function () {
    // Ermittle alle Elemente mit der Klasse "scaleImg" (alle klickbaren Bilder)
    let clickableImages = document.getElementsByClassName("scaleImg");

    // Loop durch jedes klickbare Bild
    for (const image of clickableImages) {
        // Füge jedem Bild ein Klickereignis hinzu, um das Modal zu öffnen
        image.addEventListener("click", function() {
            openModal(this);
        });
    }

    // Abrufen des <span>-Elements, das das modale Fenster schließt
    let span = document.getElementsByClassName("close")[0];

    // Wenn der Benutzer auf <span> (x) klickt, schließe das Modal
    span.onclick = function () {
        closeModal();
    };

    // Abrufen des modalen Hintergrundelements
    let modal = document.getElementById("myModal");

    // Wenn der Benutzer irgendwo außerhalb des modalen Inhalts klickt, schließen Sie das Modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        } else {
            document.body.style.cursor = "pointer";
        }
    });

    /**
     * @function
     * @name openModal
     * @param clickedImage - Das Bild, das vergrößert werden soll.
     * @return void
     *
     * @author Jesko Ayaz
     */
    function openModal(clickedImage) {
        // Holt sich die Modal-Elemente
        let modal = document.getElementById("myModal");
        let modalImg = document.getElementById("modalImg");
        let modalCaption = document.getElementById("modalCaption");

        // Setzt den Modal-Stil auf "block"
        modal.style.display = "block";

        // Setzt das Bild und die Beschriftung des Modals basierend auf dem geklickten Bild
        modalImg.src = clickedImage.src;
        modalCaption.innerHTML = clickedImage.alt;

        // Verhindert das Scrollen des Body-Inhalts, während das Modal geöffnet ist
        document.body.style.overflow = "hidden";
    }

    /**
     * @function
     * @name closeModal
     * @return void
     *
     * @author Jesko Ayaz
     */
    function closeModal() {
        // Holt sich das Modal-Element
        let modal = document.getElementById("myModal");

        // Setzten Modal-Stil auf "none"
        modal.style.display = "none";

        // Ermöglichtas Scrollen des Body-Inhalts, nachdem das Modal geschlossen wurde
        document.body.style.overflow = "auto";

        // Setzt den Mauszeigerstil auf den Standardwert zurück
        document.body.style.cursor = "auto";
    }
});
