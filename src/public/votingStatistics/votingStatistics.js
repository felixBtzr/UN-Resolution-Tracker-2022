// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Hier werden verschiedene DOM-Elemente durch ihre IDs abgerufen
    const dropdownCountry1Div = document.getElementById("dropdownCountry1Div");
    const dropdownCountry2Div = document.getElementById("dropdownCountry2Div");
    const dropbtnCountry1 = document.getElementById("dropbtnCountry1");
    const dropbtnCountry2 = document.getElementById("dropbtnCountry2");
    const dropdownCountry1Content = document.getElementById("dropdownCountry1Content");
    const dropdownCountry2Content = document.getElementById("dropdownCountry2Content");
    const dropdownTagContent = document.getElementById("dropdownTagContent");
    const dropdownTagDivId = document.getElementById("dropdownTagDivId");
    const dropbtnTag = document.getElementById("dropbtnTag");

    // Hier werden Variablen für die ausgewählten Länder und Tags initialisiert
    let country1Param, country2Param, tagParam;

    // Hier werden die Parameter aus der URL abgerufen oder Standardwerte gesetzt
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('country1')) {
        country1Param = urlParams.get('country1');
        country2Param = urlParams.get('country2');
        tagParam = urlParams.get('tag');
    } else {
        country1Param = 'RUSSIAN FEDERATION';
        country2Param = 'UNITED STATES';
        tagParam = 'War';
    }

    // Hier werden Tags von einer bestimmten API abgerufen und in eine Dropdown-Liste eingefügt
    fetch('/votingstatistic/tags')
        .then(response => response.json())
        .then(data => {
            const uniqueTags = data.tags;

            uniqueTags.forEach(tag => {
                const dropdownOptionTag = document.createElement('div');

                // Die Dropdown-Optionen werden erstellt und konfiguriert
                dropdownOptionTag.textContent = tag;
                dropdownOptionTag.value = tag;
                dropdownOptionTag.className = 'dropdownOption';

                if (tag !== tagParam) {
                    dropdownTagContent.appendChild(dropdownOptionTag);
                }

                // Event-Listener für Klick und Mausereignisse werden hinzugefügt
                dropdownOptionTag.addEventListener('click', function () {
                    dropdownTagContent.classList.remove('show');
                });

                dropdownOptionTag.addEventListener('mouseenter', function () {
                    dropdownOptionTag.classList.add('hoveredOption');
                });

                dropdownOptionTag.addEventListener('mouseleave', function () {
                    dropdownOptionTag.classList.remove('hoveredOption');
                });
            });
        })
        .catch(error => console.error('Fehler:', error));

    // Event-Listener für den Klick auf den Tag-Dropdown-Button
    dropbtnTag.addEventListener('click', function () {
        dropdownTagDivId.classList.toggle('show');
    });

    // Event-Listener für Klicks außerhalb der Dropdown-Elemente
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownCountry1Div.classList.contains('show')) {
                dropdownCountry1Div.classList.remove('show');
            }
            if (dropdownCountry2Div.classList.contains('show')) {
                dropdownCountry2Div.classList.remove('show');
            }
            if (dropdownTagDivId.classList.contains('show')) {
                dropdownTagDivId.classList.remove('show');
            }
        }
    });

    // Event-Listener für Klicks im Tag-Dropdown-Bereich
    dropdownTagDivId.addEventListener('click', function (event) {
        dropdownTagContent.classList.toggle('show');

        if (event.target.tagName === 'DIV') {
            const urlParams = new URLSearchParams(window.location.search);
            country1Param = urlParams.get('country1');
            country2Param = urlParams.get('country2');
            tagParam = event.target.textContent;
            populateTag(tagParam);
        }
    });

    // Hier werden Länder von einer bestimmten API abgerufen und in Dropdown-Listen eingefügt
    fetch('/votingstatistics/countrydropdown')
        .then(response => response.json())
        .then(countries => {
            countries.forEach(data => {
                // Erste Dropdown-Liste für Country1
                const dropdownOptionCountry1 = document.createElement('div');

                dropdownOptionCountry1.textContent = data.country;
                dropdownOptionCountry1.value = data.country;
                dropdownOptionCountry1.className = 'dropdownOption';

                if (data.country !== country2Param) {
                    dropdownCountry1Content.appendChild(dropdownOptionCountry1);
                }

                dropdownOptionCountry1.addEventListener('click', function () {
                    dropdownCountry1Div.classList.remove('show');
                });

                dropdownOptionCountry1.addEventListener('mouseenter', function () {
                    dropdownOptionCountry1.classList.add('hoveredOption');
                });

                dropdownOptionCountry1.addEventListener('mouseleave', function () {
                    dropdownOptionCountry1.classList.remove('hoveredOption');
                });

                // Zweite Dropdown-Liste für Country2
                const dropdownOptionCountry2 = document.createElement('div');

                dropdownOptionCountry2.textContent = data.country;
                dropdownOptionCountry2.value = data.country;
                dropdownOptionCountry2.className = 'dropdownOption';

                if (data.country !== country1Param) {
                    dropdownCountry2Content.appendChild(dropdownOptionCountry2);
                }

                dropdownOptionCountry2.addEventListener('click', function () {
                    dropdownCountry2Div.classList.remove('show');
                });

                dropdownOptionCountry2.addEventListener('mouseenter', function () {
                    dropdownOptionCountry2.classList.add('hoveredOption');
                });

                dropdownOptionCountry2.addEventListener('mouseleave', function () {
                    dropdownOptionCountry2.classList.remove('hoveredOption');
                });
            });
        })
        .catch(error => console.error('Fehler:', error));

    // Event-Listener für Klicks auf die Country1- und Country2-Dropdown-Buttons
    dropbtnCountry1.addEventListener('click', function () {
        dropdownCountry1Div.classList.toggle('show');
    });

    dropbtnCountry2.addEventListener('click', function () {
        dropdownCountry2Div.classList.toggle('show');
    });

    // Event-Listener für Klicks im Country1- und Country2-Dropdown-Bereich
    dropdownCountry1Div.addEventListener('click', function (event) {
        dropdownTagContent.classList.toggle('show');

        if (event.target.tagName === 'DIV') {
            const urlParams = new URLSearchParams(window.location.search);
            country1Param = event.target.textContent;
            country2Param = urlParams.get('country2');
            tagParam = urlParams.get('tag');
            populateSite(country1Param, country2Param, tagParam)
        }
    });

    dropdownCountry2Div.addEventListener('click', function (event) {
        dropdownTagContent.classList.toggle('show');

        if (event.target.tagName === 'DIV') {
            const urlParams = new URLSearchParams(window.location.search);
            country1Param = urlParams.get('country1');
            country2Param = event.target.textContent;
            tagParam = urlParams.get('tag');
            populateSite(country1Param, country2Param, tagParam)
        }
    });

    // Funktion zum Initialisieren der Seite basierend auf den ausgewählten Parametern
    populateSite(country1Param, country2Param, tagParam);
});



/**
 * Befüllt die Webseite basierend auf den ausgewählten Länder- und Tag-Parametern.
 * Aktualisiert die URL, um die ausgewählten Parameter wiederzuspiegeln.
 *
 * @function
 * @name populateSite
 * @param {string} country1Param - Der Wert des ersten ausgewählten Landes.
 * @param {string} country2Param - Der Wert des zweiten ausgewählten Landes.
 * @param {string} tagParam - Der Wert des ausgewählten Tags.
 *
 * @author Felix Bitzer
 */
function populateSite(country1Param, country2Param, tagParam) {
    // Füllt die Informationen zu den ausgewählten Ländern auf der Seite
    fillCountryInfos(country1Param, country2Param);

    // Initialisiert und zeichnet das Tortendiagramm für das erste ausgewählte Land
    initialisePieChart(country1Param);

    // Initialisiert und zeichnet das Balkendiagramm für den ausgewählten Tag
    initialiseBarChartTag(country1Param, tagParam);

    // Füllt den Text basierend auf dem ausgewählten Tag
    fillTagText(tagParam);

    // Initialisiert und zeichnet die Balkendiagramme für Ja-, Nein-, Abwesend- und NV-Stimmen
    initialiseBarChartYes(country1Param, country2Param);
    initialiseBarChartNo(country1Param, country2Param);
    initialiseBarChartAbsent(country1Param, country2Param);
    initialiseBarChartNV(country1Param, country2Param);

    // Aktualisiert die URL mit den neuen Parametern
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('country1', country1Param);
    urlParams.set('country2', country2Param);
    urlParams.set('tag', tagParam);
    const neueURL = `${window.location.pathname}?${urlParams.toString()}`;
    history.pushState(null, '', neueURL);
}

function populateTag(tagParam) {
    const urlParams = new URLSearchParams(window.location.search);
    initialiseBarChartTag(urlParams.get('country1'), tagParam);
    fillTagText(tagParam);
}

/**
 * Initialisiert das Tortendiagramm basierend auf den abgegebenen Stimmen für das ausgewählte Land.
 *
 * @function
 * @name initialisePieChart
 * @param {string} country1 - Der Name des ausgewählten Landes.
 * @return void
 *
 * @author Felix Bitzer
 */
function initialisePieChart(country1) {
    // Holen des DIV-Elements, in dem das Tortendiagramm erstellt werden soll
    const tableFieldPiechartDIV = document.getElementById('tableFieldPiechartDIV');

    // Überprüfen, ob bereits ein Canvas-Element für das Tortendiagramm vorhanden ist
    if (document.getElementById('canvasPie')) {
        // Wenn vorhanden, leere das DIV-Element
        tableFieldPiechartDIV.innerHTML = '';
    }

    // Erstellen eines neuen Canvas-Elements und Hinzufügen zu DOM
    let canvasPie = document.createElement('canvas');
    canvasPie.id = 'canvasPie';
    let piechart = canvasPie.getContext('2d');
    tableFieldPiechartDIV.appendChild(canvasPie);

    // Abrufen der Daten für das Tortendiagramm vom Server
    fetch(`/votingstatistics/piechart/${country1}`)
        .then(response => response.json())
        .then(votes => {
            // Initialisieren eines Arrays für die Werte des Tortendiagramms (YES, NO, ABSENT, N.V.)
            let piechartValues = [0, 0, 0, 0];

            // Iterieren durch die abgegebenen Stimmen und Aktualisieren der Werte im Array
            votes.forEach(draftingResult => {
                const vote = draftingResult.vote;
                if (vote === 'YES') {
                    piechartValues[0] = draftingResult.votetotal;
                } else if (vote === 'NO') {
                    piechartValues[1] = draftingResult.votetotal;
                } else if (vote === 'ABSENT') {
                    piechartValues[2] = draftingResult.votetotal;
                } else if (vote === 'N.V.') {
                    piechartValues[3] = draftingResult.votetotal;
                }
            });

            // Erstellung eines neuen Chart-Objekts mit den erhaltenen Daten
            window.piechartTotalVotesCanvas = new Chart(piechart, {
                type: 'doughnut',
                data: {
                    labels: ['Yes', 'No', 'Absent', 'Not voted'],
                    datasets: [{
                        data: [piechartValues[0], piechartValues[1], piechartValues[2], piechartValues[3]],
                        backgroundColor: [
                            colorYES, colorNO, colorABSENT, colorNV
                        ],
                        borderColor: [
                            'rgba(0, 0, 0, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Fehler:', error));
}



/**
 * Initialisiert das Balkendiagramm basierend auf den abgegebenen Stimmen für das ausgewählte Land und Tag.
 *
 * @function
 * @name initialiseBarChartTag
 * @param {string} country - Der Name des ausgewählten Landes.
 * @param {string} tag - Der ausgewählte Tag.
 * @return void
 *
 * @author Felix Bitzer
 */
function initialiseBarChartTag(country, tag) {
    // Holen des DIV-Elements, in dem das Balkendiagramm erstellt werden soll
    const tableFieldBarchartTagDIV = document.getElementById('tableFieldBarchartTagDIV');
    // Holen des Felds, in dem der ausgewählte Tag angezeigt wird
    const tagNameField = document.getElementById('tagNameField');
    // Setzen des Textinhalts des Tag-Namens
    tagNameField.textContent = tag;

    // Überprüfen, ob bereits ein Canvas-Element für das Balkendiagramm vorhanden ist
    if (document.getElementById('canvasBarTag')) {
        // Wenn vorhanden, leere das DIV-Element
        tableFieldBarchartTagDIV.innerHTML = '';
    }

    // Erstellen eines neuen Canvas-Elements und Hinzufügen zu DOM
    let canvasBarchart = document.createElement('canvas');
    canvasBarchart.id = 'canvasBarTag';
    let barchart = canvasBarchart.getContext('2d');
    tableFieldBarchartTagDIV.appendChild(canvasBarchart);

    // Abrufen der Daten für das Balkendiagramm vom Server
    fetch(`/votingstatistics/barchartTag/${country}/${tag}`)
        .then(response => response.json())
        .then(data => {
            // Initialisieren eines Arrays für die Werte des Balkendiagramms (YES, NO, ABSENT, N.V.)
            let barchartValues = [0, 0, 0, 0];

            // Iterieren durch die abgegebenen Stimmen und Aktualisieren der Werte im Array
            data.forEach(draftingResult => {
                const vote = draftingResult.vote;
                if (vote === 'YES') {
                    barchartValues[0] = draftingResult.votetotal;
                } else if (vote === 'NO') {
                    barchartValues[1] = draftingResult.votetotal;
                } else if (vote === 'ABSENT') {
                    barchartValues[2] = draftingResult.votetotal;
                } else if (vote === 'N.V.') {
                    barchartValues[3] = draftingResult.votetotal;
                }
            });

            // Balkenbreite und Abstand zwischen Balken
            const barWidth = canvasBarchart.width / data.length;
            const barSpacing = 10;

            // Maximaler Datenwert für die Skalierung
            const maxDataValue = Math.max(...data);

            // Zeichnen der Balken
            barchartValues.forEach((value, index) => {
                const barHeight = (value / maxDataValue) * canvasBarchart.height;
                const x = index * (barWidth + barSpacing);
                const y = canvasBarchart.height - barHeight;

                barchart.fillRect(x, y, barWidth, barHeight);
            });

            // Erstellung eines neuen Chart-Objekts mit den erhaltenen Daten
            window.barchartTotalVotesCanvas = new Chart(barchart, {
                type: 'bar',
                data: {
                    labels: ['Yes', 'No', 'Absent', 'Not voted'],
                    datasets: [
                        {
                            data: [barchartValues[0], barchartValues[1], barchartValues[2], barchartValues[3]],
                            backgroundColor: [colorYES, colorNO, colorABSENT, colorNV], // Array von Farben
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            // y-Achse beginnt bei 0
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            // Deaktiviere die Anzeige der Legende
                            display: false
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Fehler:', error));

    // URL aktualisieren
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('tag', tag);
    const neueURL = `${window.location.pathname}?${urlParams.toString()}`;
    history.pushState(null, '', neueURL);
}



/**
 * Initialisiert und rendert ein Balkendiagramm für die Vergleichsstatistik von Zustimmung (YES) zwischen zwei Ländern.
 * @function
 * @name initialiseBarChartYes
 * @param {string} country1 - Der Name des ersten Landes.
 * @param {string} country2 - Der Name des zweiten Landes.
 * @return void
 *
 * @author Felix Bitzer
 */
function initialiseBarChartYes(country1, country2) {
    // Holen Sie sich das DOM-Element für das Tabellenfeld 'YES' im Vergleich
    let tableFieldComparisonYES = document.getElementById('tableFieldComparisonYES');

    // Überprüfen Sie, ob das Canvas-Element 'canvasBarYes' bereits existiert, und löschen Sie es bei Bedarf
    if (document.getElementById('canvasBarYes')) {
        tableFieldComparisonYES.innerHTML = '';
    }

    // Erstellen Sie ein Canvas-Element für das Balkendiagramm
    let canvasBarchart = document.createElement('canvas');
    canvasBarchart.id = 'canvasBarYes';
    let barchartYes = canvasBarchart.getContext('2d');
    tableFieldComparisonYES.appendChild(canvasBarchart);

    // Daten über AJAX abrufen und das Balkendiagramm erstellen
    fetch(`/votingstatistics/barchartcompareyes/${country1}/${country2}`)
        .then(response => response.json())
        .then(data => {
            // Initialisieren Sie ein Array für die Werte des Balkendiagramms [YES, NO, ABSENT, N.V.]
            let barchartYesValues = [0, 0, 0, 0];

            // Iterieren Sie durch die Daten und füllen Sie das Array basierend auf den Abstimmungsergebnissen
            data.forEach(draftingResult => {
                const vote = draftingResult.vote;
                if (vote === 'YES') {
                    barchartYesValues[0] = draftingResult.votetotal;
                } else if (vote === 'NO') {
                    barchartYesValues[1] = draftingResult.votetotal;
                } else if (vote === 'ABSENT') {
                    barchartYesValues[2] = draftingResult.votetotal;
                } else if (vote === 'N.V.') {
                    barchartYesValues[3] = draftingResult.votetotal;
                }
            });

            // Erstellen Sie das Balkendiagramm mit den abgerufenen Daten
            window.comparisonYes = new Chart(barchartYes, {
                type: 'bar',
                data: {
                    labels: ['Yes', 'No', 'Absent', 'Not voted'],
                    datasets: [
                        {
                            data: [barchartYesValues[0], barchartYesValues[1], barchartYesValues[2], barchartYesValues[3]],
                            backgroundColor: [colorYES, colorNO, colorABSENT, colorNV], // Array von Farben
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            // y-Achse beginnt bei 0
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            // Deaktiviere die Anzeige der Legende
                            display: false
                        },
                    }
                }
            });
        })
        .catch(error => console.error('Fehler:', error));
}



/**
 * Initialisiert das Balkendiagramm für die Ablehnung (NO) im Vergleich zwischen zwei ausgewählten Ländern.
 * @function
 * @name initialiseBarChartNo
 * @param {string} country1 - Der Name des ersten ausgewählten Landes.
 * @param {string} country2 - Der Name des zweiten ausgewählten Landes.
 * @return void
 *
 * @author Felix Bitzer
 */
function initialiseBarChartNo(country1, country2) {
    // Holen des DIV-Elements, in dem das Balkendiagramm für die Ablehnung erstellt werden soll
    let tableFieldComparisonNO = document.getElementById('tableFieldComparisonNO');

    // Überprüfen, ob bereits ein Canvas-Element für das Balkendiagramm vorhanden ist
    if (document.getElementById('canvasBarNo')) {
        // Wenn vorhanden, leere das DIV-Element
        tableFieldComparisonNO.innerHTML = '';
    }

    // Erstellen eines neuen Canvas-Elements und Hinzufügen zu DOM
    let canvasBarchart = document.createElement('canvas');
    canvasBarchart.id = 'canvasBarNo';
    let barchartNo = canvasBarchart.getContext('2d');
    tableFieldComparisonNO.appendChild(canvasBarchart);

    // Abrufen der Daten für das Balkendiagramm vom Server
    fetch(`/votingstatistics/barchartcompareno/${country1}/${country2}`)
        .then(response => response.json())
        .then(data => {
            // Initialisieren eines Arrays für die Werte des Balkendiagramms (YES, NO, ABSENT, N.V.)
            let barchartNoValues = [0, 0, 0, 0];

            // Iterieren durch die abgegebenen Stimmen und Aktualisieren der Werte im Array
            data.forEach(draftingResult => {
                const vote = draftingResult.vote;
                if (vote === 'YES') {
                    barchartNoValues[0] = draftingResult.votetotal;
                } else if (vote === 'NO') {
                    barchartNoValues[1] = draftingResult.votetotal;
                } else if (vote === 'ABSENT') {
                    barchartNoValues[2] = draftingResult.votetotal;
                } else {
                    barchartNoValues[3] = draftingResult.votetotal;
                }
            });

            // Erstellung eines neuen Chart-Objekts mit den erhaltenen Daten
            window.comparisonNo = new Chart(barchartNo, {
                type: 'bar',
                data: {
                    labels: ['Yes', 'No', 'Absent', 'Not voted'],
                    datasets: [
                        {
                            data: [barchartNoValues[0], barchartNoValues[1], barchartNoValues[2], barchartNoValues[3]],
                            backgroundColor: [colorYES, colorNO, colorABSENT, colorNV], // Array von Farben
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            // y-Achse beginnt bei 0
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            // Deaktiviere die Anzeige der Legende
                            display: false
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Fehler:', error));
}



/**
 * Initialisiert das Balkendiagramm für die Abwesenheit (ABSENT) im Vergleich zwischen zwei ausgewählten Ländern.
 * @function
 * @name initialiseBarChartAbsent
 * @param {string} country1 - Der Name des ersten ausgewählten Landes.
 * @param {string} country2 - Der Name des zweiten ausgewählten Landes.
 * @return void
 *
 * @author Felix Bitzer
 */
function initialiseBarChartAbsent(country1, country2) {
    // Holen des DIV-Elements, in dem das Balkendiagramm für die Abwesenheit erstellt werden soll
    let tableFieldComparisonABSENT = document.getElementById('tableFieldComparisonABSENT');

    // Überprüfen, ob bereits ein Canvas-Element für das Balkendiagramm vorhanden ist
    if (document.getElementById('canvasBarAbsent')) {
        // Wenn vorhanden, leere das DIV-Element
        tableFieldComparisonABSENT.innerHTML = '';
    }

    // Erstellen eines neuen Canvas-Elements und Hinzufügen zu DOM
    let canvasBarchart = document.createElement('canvas');
    canvasBarchart.id = 'canvasBarAbsent';
    let barchartAbsent = canvasBarchart.getContext('2d');
    tableFieldComparisonABSENT.appendChild(canvasBarchart);

    // Abrufen der Daten für das Balkendiagramm vom Server
    fetch(`/votingstatistics/barchartcompareabsent/${country1}/${country2}`)
        .then(response => response.json())
        .then(data => {
            // Initialisieren eines Arrays für die Werte des Balkendiagramms (YES, NO, ABSENT, N.V.)
            let barchartAbsentValues = [0, 0, 0, 0];

            // Iterieren durch die abgegebenen Stimmen und Aktualisieren der Werte im Array
            data.forEach(draftingResult => {
                const vote = draftingResult.vote;
                if (vote === 'YES') {
                    barchartAbsentValues[0] = draftingResult.votetotal;
                } else if (vote === 'NO') {
                    barchartAbsentValues[1] = draftingResult.votetotal;
                } else if (vote === 'ABSENT') {
                    barchartAbsentValues[2] = draftingResult.votetotal;
                } else if (vote === 'N.V.') {
                    barchartAbsentValues[3] = draftingResult.votetotal;
                }
            });

            // Erstellung eines neuen Chart-Objekts mit den erhaltenen Daten
            window.comparisonAbsent = new Chart(barchartAbsent, {
                type: 'bar',
                data: {
                    labels: ['Yes', 'No', 'Absent', 'Not voted'],
                    datasets: [
                        {
                            data: [barchartAbsentValues[0], barchartAbsentValues[1], barchartAbsentValues[2], barchartAbsentValues[3]],
                            backgroundColor: [colorYES, colorNO, colorABSENT, colorNV], // Array von Farben
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            // y-Achse beginnt bei 0
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            // Deaktiviere die Anzeige der Legende
                            display: false
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Fehler:', error));
}



/**
 * Initialisiert das Balkendiagramm für "Nicht abgestimmt" (N.V.) im Vergleich zwischen zwei ausgewählten Ländern.
 * @function
 * @name initialiseBarChartNV
 * @param {string} country1 - Der Name des ersten ausgewählten Landes.
 * @param {string} country2 - Der Name des zweiten ausgewählten Landes.
 * @return void
 *
 * @author Felix Bitzer
 */
function initialiseBarChartNV(country1, country2) {
    // Holen des DIV-Elements, in dem das Balkendiagramm für "Nicht abgestimmt" erstellt werden soll
    let tableFieldComparisonNV = document.getElementById('tableFieldComparisonNV');

    // Überprüfen, ob bereits ein Canvas-Element für das Balkendiagramm vorhanden ist
    if (document.getElementById('canvasBarNv')) {
        // Wenn vorhanden, leere das DIV-Element
        tableFieldComparisonNV.innerHTML = '';
    }

    // Erstellen eines neuen Canvas-Elements und Hinzufügen zu DOM
    let canvasBarchart = document.createElement('canvas');
    canvasBarchart.id = 'canvasBarNv';
    let barchartNV = canvasBarchart.getContext('2d');
    tableFieldComparisonNV.appendChild(canvasBarchart);

    // Abrufen der Daten für das Balkendiagramm vom Server
    fetch(`/votingstatistics/barchartComparenv/${country1}/${country2}`)
        .then(response => response.json())
        .then(data => {
            // Initialisieren eines Arrays für die Werte des Balkendiagramms (YES, NO, ABSENT, N.V.)
            let barchartNVValues = [0, 0, 0, 0];

            // Iterieren durch die abgegebenen Stimmen und Aktualisieren der Werte im Array
            data.forEach(draftingResult => {
                const vote = draftingResult.vote;
                if (vote === 'YES') {
                    barchartNVValues[0] = draftingResult.votetotal;
                } else if (vote === 'NO') {
                    barchartNVValues[1] = draftingResult.votetotal;
                } else if (vote === 'ABSENT') {
                    barchartNVValues[2] = draftingResult.votetotal;
                } else if (vote === 'N.V.') {
                    barchartNVValues[3] = draftingResult.votetotal;
                }
            });

            // Erstellung eines neuen Chart-Objekts mit den erhaltenen Daten
            window.comparisonNV = new Chart(barchartNV, {
                type: 'bar',
                data: {
                    labels: ['Yes', 'No', 'Absent', 'Not voted'],
                    datasets: [
                        {
                            data: [barchartNVValues[0], barchartNVValues[1], barchartNVValues[2], barchartNVValues[3]],
                            backgroundColor: [colorYES, colorNO, colorABSENT, colorNV], // Array von Farben
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            // y-Achse beginnt bei 0
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            // Deaktiviere die Anzeige der Legende
                            display: false
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Fehler:', error));
}



/**
 * Füllt den Textbereich mit Informationen über die Anzahl der Resolutionen mit einem bestimmten Tag.
 * @function
 * @name fillTagText
 * @param {string} tag - Der Tag, für den die Informationen abgerufen werden sollen.
 * @return void
 *
 * @author Felix Bitzer
 */
function fillTagText(tag) {
    // Holen des DIV-Elements, in dem der Text eingefügt werden soll
    let tableFieldTagTextDIV = document.getElementById('tableFieldTagTextDIV');

    // Abrufen der Daten für den Tagtext vom Server
    fetch(`/votingstatistics/tagtext/${tag}`)
        .then(response => response.json())
        .then(data => {
            // Iterieren durch die abgerufenen Daten und Aktualisieren des Textbereichs
            data.forEach(count => {
                tableFieldTagTextDIV.textContent = 'There were a total of ' + count.tagcount + ' resolutions with the tag "' + tag + '" in 2022.';
            });
        })
        .catch(error => console.error('Fehler:', error));
}



/**
 * Füllt die Informationen zu den beiden Ländern auf der Seite.
 * @function
 * @name fillCountryInfos
 * @param {string} country1 - Der Name des ersten Landes.
 * @param {string} country2 - Der Name des zweiten Landes.
 * @return void
 *
 * @author Felix Bitzer
 */
function fillCountryInfos(country1, country2) {
    // Referenziert die DOM-Elemente für das erste Land
    const country1Name = document.getElementById('country1Name');
    const comparisonCountry1 = document.getElementById('comparisonCountry1');
    const country1Yes = document.getElementById('country1Yes');
    const country1No = document.getElementById('country1No');
    const country1Absent = document.getElementById('country1Absent');
    const country1NV = document.getElementById('country1NV');

    // Setzt den Textinhalt für die DOM-Elemente des ersten Landes
    country1Name.textContent = comparisonCountry1.textContent = country1Yes.textContent = country1No.textContent = country1Absent.textContent = country1NV.textContent = country1;

    // Referenziert die DOM-Elemente für das zweite Land
    const country2Name = document.getElementById('country2Name');
    const comparisonCountry2 = document.getElementById('comparisonCountry2');

    // Setzt den Textinhalt für die DOM-Elemente des zweiten Landes
    country2Name.textContent = comparisonCountry2.textContent = country2;

    // Referenziert die DOM-Elemente für die Tabellenzellen der Länderinformationen
    const countryInfoTableContinentCountry1 = document.getElementById('countryInfoTableContinentCountry1');
    const countryInfoTableCapitalCityCountry1 = document.getElementById('countryInfoTableCapitalCityCountry1');
    const countryInfoTableSinceWhenUNCountry1 = document.getElementById('countryInfoTableSinceWhenUNCountry1');
    const countryInfoTableFlagCountry1 = document.getElementById('countryInfoTableFlagCountry1');
    const countryInfoTableAllianceCountry1 = document.getElementById('countryInfoTableAllianceCountry1');

    if (countryInfoTableFlagCountry1) {
        countryInfoTableFlagCountry1.classList.add('flag');
    }

    const countryInfoTableContinentCountry2 = document.getElementById('countryInfoTableContinentCountry2');
    const countryInfoTableCapitalCityCountry2 = document.getElementById('countryInfoTableCapitalCityCountry2');
    const countryInfoTableSinceWhenUNCountry2 = document.getElementById('countryInfoTableSinceWhenUNCountry2');
    const countryInfoTableFlagCountry2 = document.getElementById('countryInfoTableFlagCountry2');
    const countryInfoTableAllianceCountry2 = document.getElementById('countryInfoTableAllianceCountry2');

    if (countryInfoTableFlagCountry2) {
        countryInfoTableFlagCountry2.classList.add('flag');
    }

    let count = 0;

    // Ruft Daten über AJAX ab und füllt die Tabellenzellen
    fetch(`/votingstatistics/infoscountry/${country1}/${country2}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(continents => {
                if (continents.country === country1) {
                    count = 0;
                } else if (continents.country === country2) {
                    count = 1;
                }

                const fieldArray = [[countryInfoTableContinentCountry1,countryInfoTableCapitalCityCountry1,countryInfoTableSinceWhenUNCountry1,countryInfoTableFlagCountry1,countryInfoTableAllianceCountry1],[countryInfoTableContinentCountry2,countryInfoTableCapitalCityCountry2,countryInfoTableSinceWhenUNCountry2,countryInfoTableFlagCountry2,countryInfoTableAllianceCountry2]];
                // Füllt die Tabellenzellen mit den entsprechenden Informationen
                fieldArray[count][0].textContent = continents.continent;
                fieldArray[count][1].textContent = continents.capital_city;
                fieldArray[count][2].textContent = continents.sincewheninun;
                fieldArray[count][3].textContent = continents.emoji_flag;
                fieldArray[count][4].textContent = continents.alliance;
            });
        })
        .catch(error => console.error('Fehler:', error));

    // Aktualisiert die URL-Parameter und die Browser-History
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('country2', country2);
    const neueURL = `${window.location.pathname}?${urlParams.toString()}`;
    history.pushState(null, '', neueURL);
}



/**
 * Ein Array von Objekten, das RGBA-Farbwerte für verschiedene Diagrammfarben enthält.
 * @type {Array}
 */
const diagramColors = [
    { r: 0, g: 128, b: 0, a: 1 },
    { r: 255, g: 0, b: 0, a: 1 },
    { r: 105, g: 105, b: 105, a: 1 },
    { r: 255, g: 165, b: 0, a: 1 }
];



/**
 * Konvertiert ein RGBA-Farbwertobjekt in einen CSS-String im 'rgba(r, g, b, a)'-Format.
 * @function
 * @name rgbaToString
 * @param {Object} rgbaObj - Ein Objekt mit RGBA-Farbwerten.
 * @param {number} rgbaObj.r - Der Rote-Wert (0-255).
 * @param {number} rgbaObj.g - Der Grün-Wert (0-255).
 * @param {number} rgbaObj.b - Der Blau-Wert (0-255).
 * @param {number} rgbaObj.a - Der Alpha-Wert (0-1).
 * @return {string} - Der CSS-String im 'rgba(r, g, b, a)'-Format.
 *
 * @author Felix Bitzer
 */
function rgbaToString({ r, g, b, a }) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}



/**
 * Ein Array von CSS-Farbwert-Strings, die für verschiedene Diagrammoptionen stehen.
 * @type {Array}
 */
const [colorYES, colorNO, colorABSENT, colorNV] = diagramColors.map(rgbaToString);
