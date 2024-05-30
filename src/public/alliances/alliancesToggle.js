/**
 * @function
 * @name toggleTable_NATO
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der NATO-Tabelle
function toggleTable_NATO() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableNATO = document.getElementById('toggleTableNATO');
    const toggleTableNATO2 = document.getElementById('toggleTableNATO2');
    const toggleTableNATO3 = document.getElementById('toggleTableNATO3');
    const toggleTableNATO4 = document.getElementById('toggleTableNATO4');
    const imagesTableNATO = document.getElementById('imagesTableNATO');
    const toggleArrowNATO = document.getElementById('toggleArrowNATO');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableNATO.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableNATO.classList.add('visible');
        toggleTableNATO2.classList.add('visible');
        toggleTableNATO3.classList.add('visible');
        toggleTableNATO4.classList.add('visible');
        imagesTableNATO.classList.add('visible');
        // Drehe den Pfeil um 0 Grad
        toggleArrowNATO.style.transform = 'rotate(0deg)';
    } else {
        // wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableNATO.classList.remove('visible');
        toggleTableNATO2.classList.remove('visible');
        toggleTableNATO3.classList.remove('visible');
        toggleTableNATO4.classList.remove('visible');
        imagesTableNATO.classList.remove('visible');
        // Drehe den Pfeil um 90 Grad
        toggleArrowNATO.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name toggleTable_EU
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der EU-Tabelle
function toggleTable_EU() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableEU = document.getElementById('toggleTableEU');
    const toggleTableEU2 = document.getElementById('toggleTableEU2');
    const toggleTableEU3 = document.getElementById('toggleTableEU3');
    const toggleTableEU4 = document.getElementById('toggleTableEU4');
    const imagesTableEU = document.getElementById('imagesTableEU');
    const toggleArrowEU = document.getElementById('toggleArrowEU');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableEU.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableEU.classList.add('visible');
        toggleTableEU2.classList.add('visible');
        toggleTableEU3.classList.add('visible');
        toggleTableEU4.classList.add('visible');
        imagesTableEU.classList.add('visible');
        toggleArrowEU.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableEU.classList.remove('visible');
        toggleTableEU2.classList.remove('visible');
        toggleTableEU3.classList.remove('visible');
        toggleTableEU4.classList.remove('visible');
        imagesTableEU.classList.remove('visible');
        toggleArrowEU.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_AU
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der AU-Tabelle
function toggleTable_AU() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableAU = document.getElementById('toggleTableAU');
    const toggleTableAU1 = document.getElementById('toggleTableAU1');
    const toggleTableAU2 = document.getElementById('toggleTableAU2');
    const toggleTableAU3 = document.getElementById('toggleTableAU3');
    const toggleTableAU4 = document.getElementById('toggleTableAU4');
    const toggleTableAU5 = document.getElementById('toggleTableAU5');
    const imagesTableAU = document.getElementById('imagesTableAU');
    const toggleArrowAU = document.getElementById('toggleArrowAU');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableAU.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableAU.classList.add('visible');
        toggleTableAU1.classList.add('visible');
        toggleTableAU2.classList.add('visible');
        toggleTableAU3.classList.add('visible');
        toggleTableAU4.classList.add('visible');
        toggleTableAU5.classList.add('visible');
        imagesTableAU.classList.add('visible');
        toggleArrowAU.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableAU.classList.remove('visible');
        toggleTableAU1.classList.remove('visible');
        toggleTableAU2.classList.remove('visible');
        toggleTableAU3.classList.remove('visible');
        toggleTableAU4.classList.remove('visible');
        toggleTableAU5.classList.remove('visible');
        imagesTableAU.classList.remove('visible');
        toggleArrowAU.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_AL
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der AL-Tabelle
function toggleTable_AL() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableAL = document.getElementById('toggleTableAL');
    const toggleTableAL1 = document.getElementById('toggleTableAL1');
    const toggleTableAL2 = document.getElementById('toggleTableAL2');
    const toggleTableAL3 = document.getElementById('toggleTableAL3');
    const toggleTableAL4 = document.getElementById('toggleTableAL4');
    const toggleTableAL5 = document.getElementById('toggleTableAL5');
    const imagesTableAL = document.getElementById('imagesTableAL');
    const toggleArrowAL = document.getElementById('toggleArrowAL');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableAL.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableAL.classList.add('visible');
        toggleTableAL1.classList.add('visible');
        toggleTableAL2.classList.add('visible');
        toggleTableAL3.classList.add('visible');
        toggleTableAL4.classList.add('visible');
        toggleTableAL5.classList.add('visible');
        imagesTableAL.classList.add('visible');
        toggleArrowAL.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableAL.classList.remove('visible');
        toggleTableAL1.classList.remove('visible');
        toggleTableAL2.classList.remove('visible');
        toggleTableAL3.classList.remove('visible');
        toggleTableAL4.classList.remove('visible');
        toggleTableAL5.classList.remove('visible');
        imagesTableAL.classList.remove('visible');
        toggleArrowAL.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_SADC
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der SADC-Tabelle
function toggleTable_SADC() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableSADC = document.getElementById('toggleTableSADC');
    const toggleTableSADC1 = document.getElementById('toggleTableSADC1');
    const toggleTableSADC2 = document.getElementById('toggleTableSADC2');
    const toggleTableSADC3 = document.getElementById('toggleTableSADC3');
    const imagesTableSADC = document.getElementById('imagesTableSADC');
    const toggleArrowSADC = document.getElementById('toggleArrowSADC');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableSADC.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableSADC.classList.add('visible');
        toggleTableSADC1.classList.add('visible');
        toggleTableSADC2.classList.add('visible');
        toggleTableSADC3.classList.add('visible');
        imagesTableSADC.classList.add('visible');
        toggleArrowSADC.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableSADC.classList.remove('visible');
        toggleTableSADC1.classList.remove('visible');
        toggleTableSADC2.classList.remove('visible');
        toggleTableSADC3.classList.remove('visible');
        imagesTableSADC.classList.remove('visible');
        toggleArrowSADC.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_ECOWAS
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der ECOWAS-Tabelle
function toggleTable_ECOWAS() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableECOWAS = document.getElementById('toggleTableECOWAS');
    const toggleTableECOWAS1 = document.getElementById('toggleTableECOWAS1');
    const toggleTableECOWAS2 = document.getElementById('toggleTableECOWAS2');
    const toggleTableECOWAS3 = document.getElementById('toggleTableECOWAS3');
    const toggleTableECOWAS4 = document.getElementById('toggleTableECOWAS4');
    const imagesTableECOWAS = document.getElementById('imagesTableECOWAS');
    const toggleArrowECOWAS = document.getElementById('toggleArrowECOWAS');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableECOWAS.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableECOWAS.classList.add('visible');
        toggleTableECOWAS1.classList.add('visible');
        toggleTableECOWAS2.classList.add('visible');
        toggleTableECOWAS3.classList.add('visible');
        toggleTableECOWAS4.classList.add('visible');
        imagesTableECOWAS.classList.add('visible');
        toggleArrowECOWAS.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableECOWAS.classList.remove('visible');
        toggleTableECOWAS1.classList.remove('visible');
        toggleTableECOWAS2.classList.remove('visible');
        toggleTableECOWAS3.classList.remove('visible');
        toggleTableECOWAS4.classList.remove('visible');
        imagesTableECOWAS.classList.remove('visible');
        toggleArrowECOWAS.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_UNASUR
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der UNASUR-Tabelle
function toggleTable_UNASUR() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableUNASUR = document.getElementById('toggleTableUNASUR');
    const toggleTableUNASUR1 = document.getElementById('toggleTableUNASUR1');
    const toggleTableUNASUR2 = document.getElementById('toggleTableUNASUR2');
    const toggleTableUNASUR3 = document.getElementById('toggleTableUNASUR3');
    const toggleTableUNASUR4 = document.getElementById('toggleTableUNASUR4');
    const toggleTableUNASUR5 = document.getElementById('toggleTableUNASUR5');
    const imagesTableUNASUR = document.getElementById('imagesTableUNASUR');
    const toggleArrowUNASUR = document.getElementById('toggleArrowUNASUR');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableUNASUR.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableUNASUR.classList.add('visible');
        toggleTableUNASUR1.classList.add('visible');
        toggleTableUNASUR2.classList.add('visible');
        toggleTableUNASUR3.classList.add('visible');
        toggleTableUNASUR4.classList.add('visible');
        toggleTableUNASUR5.classList.add('visible');
        imagesTableUNASUR.classList.add('visible');
        toggleArrowUNASUR.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableUNASUR.classList.remove('visible');
        toggleTableUNASUR1.classList.remove('visible');
        toggleTableUNASUR2.classList.remove('visible');
        toggleTableUNASUR3.classList.remove('visible');
        toggleTableUNASUR4.classList.remove('visible');
        toggleTableUNASUR5.classList.remove('visible');
        imagesTableUNASUR.classList.remove('visible');
        toggleArrowUNASUR.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_CELAC
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der CELAC-Tabelle
function toggleTable_CELAC() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableCELAC = document.getElementById('toggleTableCELAC');
    const toggleTableCELAC1 = document.getElementById('toggleTableCELAC1');
    const toggleTableCELAC2 = document.getElementById('toggleTableCELAC2');
    const toggleTableCELAC3 = document.getElementById('toggleTableCELAC3');
    const imagesTableCELAC = document.getElementById('imagesTableCELAC');
    const toggleArrowCELAC = document.getElementById('toggleArrowCELAC');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableCELAC.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableCELAC.classList.add('visible');
        toggleTableCELAC1.classList.add('visible');
        toggleTableCELAC2.classList.add('visible');
        toggleTableCELAC3.classList.add('visible');
        imagesTableCELAC.classList.add('visible');
        toggleArrowCELAC.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableCELAC.classList.remove('visible');
        toggleTableCELAC1.classList.remove('visible');
        toggleTableCELAC2.classList.remove('visible');
        toggleTableCELAC3.classList.remove('visible');
        imagesTableCELAC.classList.remove('visible');
        toggleArrowCELAC.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_ASEAN
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der ASEAN-Tabelle
function toggleTable_ASEAN() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableASEAN = document.getElementById('toggleTableASEAN');
    const toggleTableASEAN1 = document.getElementById('toggleTableASEAN1');
    const toggleTableASEAN2 = document.getElementById('toggleTableASEAN2');
    const toggleTableASEAN3 = document.getElementById('toggleTableASEAN3');
    const toggleTableASEAN4 = document.getElementById('toggleTableASEAN4');
    const imagesTableASEAN = document.getElementById('imagesTableASEAN');
    const toggleArrowASEAN = document.getElementById('toggleArrowASEAN');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableASEAN.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableASEAN.classList.add('visible');
        toggleTableASEAN1.classList.add('visible');
        toggleTableASEAN2.classList.add('visible');
        toggleTableASEAN3.classList.add('visible');
        toggleTableASEAN4.classList.add('visible');
        imagesTableASEAN.classList.add('visible');
        toggleArrowASEAN.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableASEAN.classList.remove('visible');
        toggleTableASEAN1.classList.remove('visible');
        toggleTableASEAN2.classList.remove('visible');
        toggleTableASEAN3.classList.remove('visible');
        toggleTableASEAN4.classList.remove('visible');
        imagesTableASEAN.classList.remove('visible');
        toggleArrowASEAN.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_SCO
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der SCO-Tabelle
function toggleTable_SCO() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableSCO = document.getElementById('toggleTableSCO');
    const toggleTableSCO1 = document.getElementById('toggleTableSCO1');
    const toggleTableSCO2 = document.getElementById('toggleTableSCO2');
    const toggleTableSCO3 = document.getElementById('toggleTableSCO3');
    const imagesTableSCO = document.getElementById('imagesTableSCO');
    const toggleArrowSCO = document.getElementById('toggleArrowSCO');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableSCO.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableSCO.classList.add('visible');
        toggleTableSCO1.classList.add('visible');
        toggleTableSCO2.classList.add('visible');
        toggleTableSCO3.classList.add('visible');
        imagesTableSCO.classList.add('visible');
        toggleArrowSCO.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableSCO.classList.remove('visible');
        toggleTableSCO1.classList.remove('visible');
        toggleTableSCO2.classList.remove('visible');
        toggleTableSCO3.classList.remove('visible');
        imagesTableSCO.classList.remove('visible');
        toggleArrowSCO.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_PIF
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der PIF-Tabelle
function toggleTable_PIF() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTablePIF = document.getElementById('toggleTablePIF');
    const toggleTablePIF1 = document.getElementById('toggleTablePIF1');
    const toggleTablePIF2 = document.getElementById('toggleTablePIF2');
    const toggleTablePIF3 = document.getElementById('toggleTablePIF3');
    const imagesTablePIF = document.getElementById('imagesTablePIF');
    const toggleArrowPIF = document.getElementById('toggleArrowPIF');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTablePIF.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTablePIF.classList.add('visible');
        toggleTablePIF1.classList.add('visible');
        toggleTablePIF2.classList.add('visible');
        toggleTablePIF3.classList.add('visible');
        imagesTablePIF.classList.add('visible');
        toggleArrowPIF.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTablePIF.classList.remove('visible');
        toggleTablePIF1.classList.remove('visible');
        toggleTablePIF2.classList.remove('visible');
        toggleTablePIF3.classList.remove('visible');
        imagesTablePIF.classList.remove('visible');
        toggleArrowPIF.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_G7
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der G7-Tabelle
function toggleTable_G7() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableG7 = document.getElementById('toggleTableG7');
    const toggleTableG71 = document.getElementById('toggleTableG71');
    const toggleTableG72 = document.getElementById('toggleTableG72');
    const toggleTableG73 = document.getElementById('toggleTableG73');
    const imagesTableG7 = document.getElementById('imagesTableG7');
    const toggleArrowG7 = document.getElementById('toggleArrowG7');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableG7.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableG7.classList.add('visible');
        toggleTableG71.classList.add('visible');
        toggleTableG72.classList.add('visible');
        toggleTableG73.classList.add('visible');
        imagesTableG7.classList.add('visible');
        toggleArrowG7.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableG7.classList.remove('visible');
        toggleTableG71.classList.remove('visible');
        toggleTableG72.classList.remove('visible');
        toggleTableG73.classList.remove('visible');
        imagesTableG7.classList.remove('visible');
        toggleArrowG7.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}



/**
 * @function
 * @name toggleTable_G20
 * @return void
 *
 * @author Jesko Ayaz
 */
// Funktion zum Ein- und Ausblenden der G20-Tabelle
function toggleTable_G20() {
    // Holen Sie sich die HTML-Elemente, die bearbeitet werden sollen
    const toggleTableG20 = document.getElementById('toggleTableG20');
    const toggleTableG201 = document.getElementById('toggleTableG201');
    const toggleTableG202 = document.getElementById('toggleTableG202');
    const toggleTableG203 = document.getElementById('toggleTableG203');
    const imagesTableG20 = document.getElementById('imagesTableG20');
    const toggleArrowG20 = document.getElementById('toggleArrowG20');

    // Überprüfen, ob die Tabelle sichtbar ist oder nicht
    if (!toggleTableG20.classList.contains('visible')) {
        // Wenn die Tabelle nicht sichtbar ist, füge die 'visible'-Klasse hinzu, um sie anzuzeigen
        toggleTableG20.classList.add('visible');
        toggleTableG201.classList.add('visible');
        toggleTableG202.classList.add('visible');
        toggleTableG203.classList.add('visible');
        imagesTableG20.classList.add('visible');
        toggleArrowG20.style.transform = 'rotate(90deg)'; // Drehe den Pfeil um 90 Grad
    } else {
        // Wenn die Tabelle sichtbar ist, entferne die 'visible'-Klasse, um sie auszublenden
        toggleTableG20.classList.remove('visible');
        toggleTableG201.classList.remove('visible');
        toggleTableG202.classList.remove('visible');
        toggleTableG203.classList.remove('visible');
        imagesTableG20.classList.remove('visible');
        toggleArrowG20.style.transform = 'rotate(0deg)'; // Drehe den Pfeil um 0 Grad
    }
}
