/**
 * @function
 * @name toggleTableOversea
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für Übersee
function toggleTable_Oversea() {
    // Das HTML-Element für die Tabelle für Übersee abrufen
    const toggleTableOversea = document.getElementById('toggleTableOversea');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für Übersee abrufen
    const toggleArrowOversea = document.getElementById('ToggleArrowOversea');

    // Überprüfen, ob die Tabelle für Übersee die Klasse 'visible' hat
    if (toggleTableOversea.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen und den Pfeil auf 0 Grad drehen
        toggleTableOversea.classList.remove('visible');
        toggleArrowOversea.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen und den Pfeil auf 90 Grad drehen
        toggleTableOversea.classList.add('visible');
        toggleArrowOversea.style.transform = 'rotate(90deg)';
    }
}
