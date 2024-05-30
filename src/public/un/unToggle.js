/**
 * @function
 * @name toggleTable_About
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für die generellen Informationen
function toggleTable_About() {
    // Das HTML-Element für die Tabelle für die generellen Informationen abrufen
    const toggleTableAbout = document.getElementById('toggleTableAbout');
    // Das HTML-Element für die Bilder in der Tabelle für Informationen abrufen
    const imagesTableAbout = document.getElementById('imagesTableAbout');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für die generellen Informationen abrufen
    const toggleArrow = document.getElementById('toggleArrowAbout');

    // Überprüfen, ob die Tabelle für Informationen die Klasse 'visible' hat
    if (toggleTableAbout.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen, Bilder ausblenden und Pfeil auf 90 Grad drehen
        toggleTableAbout.classList.remove('visible');
        imagesTableAbout.classList.remove('visible');
        toggleArrow.style.transform = 'rotate(90deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen, Bilder einblenden und Pfeil auf 0 Grad drehen
        toggleTableAbout.classList.add('visible');
        imagesTableAbout.classList.add('visible');
        toggleArrow.style.transform = 'rotate(0deg)';
    }
}



/**
 * @function
 * @name toggleTable_History
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für die Geschichte
function toggleTable_History() {
    // Das HTML-Element für die Tabelle für die Geschichte abrufen
    const toggleTableHistory = document.getElementById('toggleTableHistory');
    // Das HTML-Element für die Bilder in der Tabelle für die Geschichte abrufen
    const imagesTableHistory = document.getElementById('imagesTableHistory');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für die Geschichte abrufen
    const toggleArrowHistory = document.getElementById('ToggleArrowHistory');

    // Überprüfen, ob die Tabelle für die Geschichte die Klasse 'visible' hat
    if (toggleTableHistory.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen, Bilder ausblenden und Pfeil auf 0 Grad drehen
        toggleTableHistory.classList.remove('visible');
        imagesTableHistory.classList.remove('visible');
        toggleArrowHistory.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen, Bilder einblenden und Pfeil auf 90 Grad drehen
        toggleTableHistory.classList.add('visible');
        imagesTableHistory.classList.add('visible');
        toggleArrowHistory.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_Charter
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für die Charta
function toggleTable_Charter() {
    // Das HTML-Element für die Tabelle für die Charta abrufen
    const toggleTableCharter = document.getElementById('toggleTableCharter');
    // Das HTML-Element für die Bilder in der Tabelle für die Charta abrufen
    const imagesTableCharter = document.getElementById('imagesTableCharter');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für die Charta abrufen
    const toggleArrowCharter = document.getElementById('ToggleArrowCharter');

    // Überprüfen, ob die Tabelle für die Charta die Klasse 'visible' hat
    if (toggleTableCharter.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen, Bilder ausblenden und Pfeil auf 0 Grad drehen
        toggleTableCharter.classList.remove('visible');
        imagesTableCharter.classList.remove('visible');
        toggleArrowCharter.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen, Bilder einblenden und Pfeil auf 90 Grad drehen
        toggleTableCharter.classList.add('visible');
        imagesTableCharter.classList.add('visible');
        toggleArrowCharter.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_EconomicCouncil
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für den Wirtschaftsrat
function toggleTable_EconomicCouncil() {
    // Das HTML-Element für die Tabelle für den Wirtschaftsrat abrufen
    const table = document.getElementById('toggleTableEconomicCouncil');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für den Wirtschaftsrat abrufen
    const arrow = document.getElementById('ToggleArrowEconomicCouncil');

    // Überprüfen, ob die Tabelle für den Wirtschaftsrat die Klasse 'visible' hat
    if (table.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen und Pfeil auf 0 Grad drehen
        table.classList.remove('visible');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen und Pfeil auf 90 Grad drehen
        table.classList.add('visible');
        arrow.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_GeneralAssembly
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für die Generalversammlung
function toggleTable_GeneralAssembly() {
    // Das HTML-Element für die Tabelle für die Generalversammlung abrufen
    const toggleTableGeneralAssembly = document.getElementById('toggleTableGeneralAssembly');
    // Das HTML-Element für die Bilder in der Tabelle für die Generalversammlung abrufen
    const imagesTableGeneralAssembly = document.getElementById('imagesTableGeneralAssembly');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für die Generalversammlung abrufen
    const toggleArrowGeneralAssembly = document.getElementById('ToggleArrowGeneralAssembly');

    // Überprüfen, ob die Tabelle für die Generalversammlung die Klasse 'visible' hat
    if (toggleTableGeneralAssembly.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen, Bilder ausblenden und Pfeil auf 0 Grad drehen
        toggleTableGeneralAssembly.classList.remove('visible');
        imagesTableGeneralAssembly.classList.remove('visible');
        toggleArrowGeneralAssembly.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen, Bilder einblenden und Pfeil auf 90 Grad drehen
        toggleTableGeneralAssembly.classList.add('visible');
        imagesTableGeneralAssembly.classList.add('visible');
        toggleArrowGeneralAssembly.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_GeneralResolutions
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für allgemeine Resolutionen
function toggleTable_GeneralResolutions() {
    // Das HTML-Element für die Tabelle für allgemeine Resolutionen abrufen
    const toggleTableGeneralResolutions = document.getElementById('toggleTableGeneralResolutions');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für allgemeine Resolutionen abrufen
    const toggleArrowGeneralResolutions = document.getElementById('ToggleArrowGeneralResolutions');

    // Überprüfen, ob die Tabelle für allgemeine Resolutionen die Klasse 'visible' hat
    if (toggleTableGeneralResolutions.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen und Pfeil auf 0 Grad drehen
        toggleTableGeneralResolutions.classList.remove('visible');
        toggleArrowGeneralResolutions.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen und Pfeil auf 90 Grad drehen
        toggleTableGeneralResolutions.classList.add('visible');
        toggleArrowGeneralResolutions.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_InternationalCourt
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für den Internationalen Gerichtshof
function toggleTable_InternationalCourt() {
    // Das HTML-Element für die Tabelle für den Internationalen Gerichtshof abrufen
    const table = document.getElementById('toggleTableInternationalCourt');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für den Internationalen Gerichtshof abrufen
    const arrow = document.getElementById('ToggleArrowInternationalCourt');

    // Überprüfen, ob die Tabelle für den Internationalen Gerichtshof die Klasse 'visible' hat
    if (table.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen und Pfeil auf 0 Grad drehen
        table.classList.remove('visible');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen und Pfeil auf 90 Grad drehen
        table.classList.add('visible');
        arrow.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_Secreatariat
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für das Sekretariat
function toggleTable_Secretariat() {
    // Das HTML-Element für die Tabelle für das Sekretariat abrufen
    const toggleTableSecretariat = document.getElementById('toggleTableSecretariat');
    // Das HTML-Element für die Bilder in der Tabelle für das Sekretariat abrufen
    const imagesTableSecretariat = document.getElementById('imagesTableSecretariat');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für das Sekretariat abrufen
    const toggleArrowSecretariat = document.getElementById('ToggleArrowSecretariat');

    // Überprüfen, ob die Tabelle für das Sekretariat die Klasse 'visible' hat
    if (toggleTableSecretariat.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen, Bilder ausblenden und Pfeil auf 0 Grad drehen
        toggleTableSecretariat.classList.remove('visible');
        imagesTableSecretariat.classList.remove('visible');
        toggleArrowSecretariat.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen, Bilder einblenden und Pfeil auf 90 Grad drehen
        toggleTableSecretariat.classList.add('visible');
        imagesTableSecretariat.classList.add('visible');
        toggleArrowSecretariat.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_SecurityCouncil
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für den Sicherheitsrat
function toggleTable_SecurityCouncil() {
    // Das HTML-Element für die Tabelle für den Sicherheitsrat abrufen
    const table = document.getElementById('toggleTableSecurityCouncil');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für den Sicherheitsrat abrufen
    const arrow = document.getElementById('ToggleArrowSecurityCouncil');
    // Das HTML-Element für die Bilder in der Tabelle für den Sicherheitsrat abrufen
    const imagesTable = document.getElementById('imagesTableSecurityCoucil');
    // Das HTML-Element für die Überschrift "Security Council" abrufen
    const h2Element = document.getElementById('h2SecurityCouncil');

    // Überprüfen, ob die Tabelle für den Sicherheitsrat die Klasse 'visible' hat
    if (table.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen, Pfeil auf 0 Grad drehen, Bilder ausblenden und Überschrift ausblenden
        table.classList.remove('visible');
        arrow.style.transform = 'rotate(0deg)';
        imagesTable.classList.remove('visible');
        h2Element.classList.remove('visible');
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen, Pfeil auf 90 Grad drehen, Bilder einblenden und Überschrift einblenden
        table.classList.add('visible');
        arrow.style.transform = 'rotate(90deg)';
        imagesTable.classList.add('visible');
        h2Element.classList.add('visible');
    }
}



/**
 * @function
 * @name toggleTable_Special
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für Spezialorganisationen
function toggleTable_Special() {
    // Das HTML-Element für die Tabelle für Spezialorganisationen abrufen
    const toggleTableSpecial = document.getElementById('toggleTableSpecial');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für Spezialorganisationen abrufen
    const toggleArrowSpecial = document.getElementById('ToggleArrowSpecial');

    // Überprüfen, ob die Tabelle für Spezialorganisationen die Klasse 'visible' hat
    if (toggleTableSpecial.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen und den Pfeil auf 0 Grad drehen
        toggleTableSpecial.classList.remove('visible');
        toggleArrowSpecial.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen und den Pfeil auf 90 Grad drehen
        toggleTableSpecial.classList.add('visible');
        toggleArrowSpecial.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_TrusteeshipCouncil
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für den Treuhandrat
function toggleTable_TrusteeshipCouncil() {
    // Das HTML-Element für die Tabelle für den Treuhandrat abrufen
    const table = document.getElementById('toggleTableTrusteeshipCouncil');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für den Treuhandrat abrufen
    const arrow = document.getElementById('ToggleArrowTrusteeshipCouncil');

    // Überprüfen, ob die Tabelle für den Treuhandrat die Klasse 'visible' hat
    if (table.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen und den Pfeil auf 0 Grad drehen
        table.classList.remove('visible');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen und den Pfeil auf 90 Grad drehen
        table.classList.add('visible');
        arrow.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_VetoPower
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Umschalten der Sichtbarkeit der Tabelle für das Vetorecht
function toggleTable_VetoPower() {
    // Das HTML-Element für die Tabelle für das Vetorecht abrufen
    const toggleTableVetoPower = document.getElementById('toggleTableVetoPower');
    // Das HTML-Element für die Bilder in der Tabelle für das Vetorecht abrufen
    const imagesTableVetoPower = document.getElementById('imagesTableVetoPower');
    // Das HTML-Element für den Pfeil zum Umschalten der Tabelle für das Vetorecht abrufen
    const toggleArrowVetoPower = document.getElementById('ToggleArrowVetoPower');

    // Überprüfen, ob die Tabelle für das Vetorecht die Klasse 'visible' hat
    if (toggleTableVetoPower.classList.contains('visible')) {
        // Wenn sichtbar, Klasse entfernen, Bilder ausblenden und den Pfeil auf 0 Grad drehen
        toggleTableVetoPower.classList.remove('visible');
        imagesTableVetoPower.classList.remove('visible');
        toggleArrowVetoPower.style.transform = 'rotate(0deg)';
    } else {
        // Wenn nicht sichtbar, Klasse hinzufügen, Bilder einblenden und den Pfeil auf 90 Grad drehen
        toggleTableVetoPower.classList.add('visible');
        imagesTableVetoPower.classList.add('visible');
        toggleArrowVetoPower.style.transform = 'rotate(90deg)';
    }
}
