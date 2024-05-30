//Erzeugt die Sektion der Votes-Tabelle
function createSectionAndHeader() {
    const sectionVoteTable = document.getElementById('sectionVoteTable');
    const subSectionVoteTable = document.createElement('subSectionVoteTable');
    subSectionVoteTable.id = 'subSectionVoteTable';
    sectionVoteTable.appendChild(subSectionVoteTable);

    // Div für die Margin erstellen
    const marginDiv = document.createElement('div');
    marginDiv.className = 'margin-worldmap-worldtable';
    subSectionVoteTable.appendChild(marginDiv);

    // Titel hinzufügen
    const title = document.createElement('h2');
    title.textContent = 'VOTE TABLE OF ALL 193 UNITED NATIONS COUNTRIES';
    subSectionVoteTable.appendChild(title);

    // Tabelle erstellen
    const countriesTable = document.createElement('table');
    countriesTable.id = 'countriesTable';
    countriesTable.setAttribute('aria-hidden', 'true');

    // Verwendung der Funktion für die einzelnen Header-Elemente
    const tableRow = document.createElement('tr');
    tableRow.appendChild(createTableHeader('COUNTRY', 'left'));
    tableRow.appendChild(createTableHeader('3-DIGIT CODE', 'center'));
    tableRow.appendChild(createTableHeader('FLAG', 'center'));

    // Viertes Header-Element: VOTE
    const voteHeader = document.createElement('th');
    voteHeader.style.textAlign = 'center';
    voteHeader.style.cursor = 'pointer';
    const urlParams = new URLSearchParams(window.location.search);
    const sortParam = urlParams.get('sort');    //Nach was ist sortiert (1=Land; 2=Vote)
    voteHeader.onclick = () => sortVoteTable();

    // Label-Element
    const label = document.createElement('label');
    label.id = 'voteHeaderLabel';
    voteHeader.onclick = () => sortVoteTable();

    // Span-Element
    const span = document.createElement('span');
    span.style.paddingLeft = '35%';

    // SVG-Elemente
    const svg1 = createSVG('0,0 10,0 5,10');
    const svg2 = createSVG('5,0 10,10 0,10');
    svg2.style.marginTop = '-10px';

    span.appendChild(svg1);
    span.appendChild(svg2);

    // Textinhalt 'VOTE'
    const voteText = document.createTextNode('VOTE');

    // Span mit den SVGs und VOTE-Text
    label.appendChild(voteText);
    // Label mit dem Span
    label.appendChild(span);

    // Label in das Header-Element einfügen
    voteHeader.appendChild(label);

    // Viertes Header-Element zur Zeile hinzufügen
    tableRow.appendChild(voteHeader);

    // Zeile zur Tabelle hinzufügen
    countriesTable.appendChild(tableRow);

    // Tabelle zur Sektion hinzufügen
    subSectionVoteTable.appendChild(countriesTable);
}

// Funktion zum Erstellen eines Table Headers
function createTableHeader(text, textAlign) {
    const header = document.createElement('th');
    header.style.textAlign = textAlign;
    header.textContent = text;
    return header;
}

// Funktion zum Erstellen eines SVG-Elements mit gegebenen Punkten
function createSVG(points) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '10');
    svg.setAttribute('height', '10');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', points);
    polygon.setAttribute('fill', 'black');

    svg.appendChild(polygon);

    return svg;
}

/**
 * Fügt einen Event-Listener für das DOMContentLoaded-Ereignis hinzu, um die Dropdown-Optionen zu steuern,
 * die obere und untere Resolutionseiten anzuzeigen und das Dropdown-Menü zu handhaben.
 *
 * @author Lenya Peters, Jesko Ayaz
 * @function
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function() {
    let dropdownContainer = document.getElementById("dropdownContainer");
    let dropdown = document.getElementById("dropdownOptions");

    const urlParams = new URLSearchParams(window.location.search);
    const titleParam = urlParams.get('title');
    const resnrParam = urlParams.get('resolutionnr');
    const countriesArray = ["afg", "ago", "alb", "and", "are", "arg", "arm", "atg", "aus", "aus", "aus", "aus", "aus", "aut", "aze", "bdi", "bel", "ben", "bfa", "bgd", "bgr", "bhr", "bhs", "bih", "blr", "blz", "bol", "bra", "brb", "brn", "btn", "bwa", "caf", "can", "che", "chl", "chn", "chn", "chn", "chn", "civ", "cmr", "cod", "cog", "col", "com", "cpv", "cri", "cub", "cyp", "cze", "deu", "dji", "dma", "dnk", "dnk", "dnk", "dom", "dza", "ecu", "egy", "egy", "eri", "esp", "est", "eth", "fin", "fji", "fra", "fra", "fra", "fra", "fra", "fra", "fra", "fra", "fra", "fra", "fsm", "gab", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "gbr", "geo", "gha", "gin", "gmb", "gnb", "gnq", "grc", "grd", "gtm", "guy", "hnd", "hrv", "hti", "hun", "idn", "ind", "irl", "irn", "irq", "isl", "isr", "ita", "jam", "jor", "jpn", "kaz", "ken", "kgz", "khm", "kir", "kna", "kor", "kwt", "lao", "lbn", "lbr", "lby", "lca", "lie", "lka", "lso", "ltu", "lux", "lva", "mar", "mar", "mco", "mda", "mdg", "mdv", "mex", "mhl", "mkd", "mli", "mlt", "mmr", "mne", "mng", "moz", "mrt", "mus", "mwi", "mys", "nam", "ner", "nga", "nic", "nld", "nld", "nld", "nor", "nor", "nor", "npl", "nru", "nzl", "nzl", "nzl", "nzl", "omn", "pak", "pan", "per", "phl", "plw", "png", "pol", "prk", "prt", "prt", "prt", "pry", "qat", "rou", "rus", "rwa", "sau", "sdn", "sdn", "sdn", "sen", "sgp", "slb", "sle", "slv", "smr", "som", "srb", "ssd", "stp", "sur", "svk", "svn", "swe", "swz", "syc", "syr", "tcd", "tgo", "tha", "tjk", "tkm", "tls", "ton", "tto", "tun", "tur", "tuv", "tza", "uga", "ukr", "ury", "usa", "usa", "usa", "usa", "usa", "usa", "usa", "usa", "usa", "uzb", "vct", "ven", "vnm", "vut", "wsm", "yem", "zaf", "zmb", "zwe"];

    let countriesArrayCounter = 0;

    // Initialisiere die Leaflet-Karte
    let map = L.map('map', {
        maxZoom: 11,
        maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))
    });
    // Füge die OpenStreetMap-Kacheln zur Karte hinzu
    L.tileLayer('https://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
        maxZoom: 11,
        minZoom: 1,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    map.on('click', function(e) {
        map.setView(e.latlng, 4);
    });

// Funktion zum Anpassen der Kartenoptionen basierend auf der Bildschirmbreite
    function adjustMapOptions() {
        if (window.innerWidth <= 1400) {
            // Wenn die Bildschirmbreite kleiner oder gleich 800px ist
            map.setView([0, 0], 1).setMaxBounds(L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))).setMinZoom(1);
        } else {
            // Für größere Bildschirme
            map.setView([0, 0], 1.1).setMaxBounds(L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))).setMinZoom(2);
        }
    }

// Rufe die Funktion auf, um die Kartenoptionen zu überprüfen und anzupassen
    adjustMapOptions();

// Füge einen Event Listener für Größenänderungen des Browserfensters hinzu
    window.addEventListener('resize', adjustMapOptions);

    if (titleParam) {       //wenn Titel mitgegeben
                            // obere Resolutionseite befüllen
        fetch(`/specresolution/resolutioninhaltfields/${titleParam}`)
            .then(response => response.json())
            .then(resolutioninhalt => {
                const resolution = resolutioninhalt[0]; // Hier gehe ich davon aus, dass nur eine Auflösung zurückgegeben wird

                const resolutionTitle = document.getElementById('resolutionTitle');
                const dataFieldTableAdopted = document.getElementById('dataFieldTableAdopted');
                const dataFieldTableResNr = document.getElementById('dataFieldTableResNr');
                const dataFieldTableTags = document.getElementById('dataFieldTableTags');
                const dataFieldTableLink = document.getElementById('dataFieldTableLink');
                const dataFieldTableAuthors = document.getElementById('dataFieldTableAuthors');
                const dataFieldTableInformation= document.getElementById('dataFieldTableInformation');

                const votedWithYesResult= document.getElementById('votedWithYesResult');
                const votedWithNoResult= document.getElementById('votedWithNoResult');
                const votedWithAbsentResult= document.getElementById('votedWithAbsentResult');
                const votedWithNVResult= document.getElementById('votedWithNVResult');

                resolutionTitle.textContent = titleParam;
                dataFieldTableAdopted.textContent = resolution.adoptedrejected.toUpperCase();
                dataFieldTableResNr.textContent = resolution.resolutionnr;
                dataFieldTableTags.textContent = resolution.tags;
                const linkElement = document.createElement('a');
                linkElement.href = resolution.link;     //funktioniert bei textcontent
                linkElement.textContent = resolution.link;
                dataFieldTableLink.innerHTML = '';
                dataFieldTableLink.appendChild(linkElement);
                dataFieldTableInformation.textContent = resolution.information_about_res;

                // Autoren mit Flaggen anzeigen
                const authorsArray = resolution.authors.split(' ');
                authorsArray.forEach((author, index) => {
                    const authorElement = document.createElement('span');
                    authorElement.classList.add('emoji'); // CSS-Klasse für Flagge
                    authorElement.textContent = author.trim() + (index < authorsArray.length - 1 ? " " : ""); // Leerzeichen zwischen Emoji und Komma
                    dataFieldTableAuthors.appendChild(authorElement);
                });

                votedWithYesResult.textContent = resolution.countyes;
                votedWithNoResult.textContent = resolution.countno;
                votedWithAbsentResult.textContent = resolution.countabsent;
                votedWithNVResult.textContent = resolution.countnv;
            })
            .catch(error => console.error('Fehler:', error));

        if (resnrParam) {       //immer wenn Titel mitgegeben, aber 'if' um Exception zu vermeiden
            // untere Resolutionseite (Votes-Tabelle) befüllen
            createSectionAndHeader();


            fetch(`/specresolution/resolutioninhalttable/country/${resnrParam}`)
                .then(response => response.json())
                .then(countryVotingResults => {
                    const countriesTable = document.getElementById('countriesTable');
                    countryVotingResults.forEach(country => {
                        const countriesTableRow = document.createElement('tr');

                        const countriesTableCellCountry = document.createElement('td');
                        countriesTableCellCountry.textContent = country.country;

                        const countriesTableCellIso = document.createElement('td');
                        countriesTableCellIso.textContent = country.iso_31661_alpha_3;
                        countriesTableCellIso.style.textAlign = 'center';

                        const countriesTableCellFlag = document.createElement('td');
                        countriesTableCellFlag.textContent = country.emoji_flag;
                        countriesTableCellFlag.style.textAlign = 'center';
                        countriesTableCellFlag.classList.add('flag'); // Füge die Klasse flag hinzu


                        const countriesTableCellvote = document.createElement('td');
                        countriesTableCellvote.textContent = country.votec;
                        countriesTableCellvote.style.textAlign = "center";

                        if (country.votec === "YES") {
                            countriesTableCellCountry.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                        } else if (country.votec === "NO") {
                            countriesTableCellCountry.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                        } else if (country.votec === "N.V.") {
                            countriesTableCellCountry.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                        } else {
                            countriesTableCellCountry.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                        }

                        countriesTableRow.appendChild(countriesTableCellCountry);
                        countriesTableRow.appendChild(countriesTableCellIso);
                        countriesTableRow.appendChild(countriesTableCellFlag);
                        countriesTableRow.appendChild(countriesTableCellvote);

                        countriesTable.appendChild(countriesTableRow);
                    });
                })
                .catch(error => console.error('Fehler:', error));
        }

        //Borders einfügen
        fetch('/specresolution/resolutionmapallborders')			//SELECT geopoint, grenzen, "ISO3countrycode" FROM countryborder;
            .then(response => response.json())
            .then(allborders => {
                let fetchPromises = allborders.map(border => {
                    const borderGrenzen = border.grenzen;		//z.B.: {"coordinates": [[[74.91574000000008, 37.23733000000004], ...

                    // Zeichne die Grenze auf der Karte
                    const geoJsonLayer = L.geoJSON(JSON.parse(borderGrenzen), {
                        color: 'black', // Farbe der Grenzlinie
                        weight: 1, // Dicke der Grenzlinie
                        onEachFeature: onEachBorderFeature // Verwende die onEachBorderFeature-Funktion für die Grenzen-Layer
                    }).addTo(map);

                    const countryISO = countriesArray[countriesArrayCounter];
                    countriesArrayCounter++;

                    fetch(`/specresolution/votesonresnr/${resnrParam}/${countryISO}`)			//SELECT $1 AS countryISO FROM votes4 WHERE resolutionnr = $2;', [countryISOparam, resnrparam]
                        .then(response => response.json())
                        .then(resCountry => {
                            const voting = resCountry[0].countryiso;

                            geoJsonLayer.setStyle(setCountryColor(countryISO,voting));

                            return new Promise(resolve => resolve());
                        })
                        .catch(error => console.error('Fehler bei Fetch für votesonresnr:', error));
                });

                // Warte auf das Ende aller Fetch-Promises
                return Promise.all(fetchPromises);

            })
            .catch(error => console.error('Fehler bei Fetch für resolutionmapallborders:', error));
    }

    dropdown.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const title = event.target.textContent;

            // obere Resolutionseite befüllen
            fetch(`/specresolution/resolutioninhaltfields/${title}`)
                .then(response => response.json())
                .then(resolutioninhalt => {
                    const resolution = resolutioninhalt[0]; // Hier gehe ich davon aus, dass nur eine Auflösung zurückgegeben wird

                    const resolutionTitle = document.getElementById('resolutionTitle');
                    const dataFieldTableAdopted = document.getElementById('dataFieldTableAdopted');
                    const dataFieldTableResNr = document.getElementById('dataFieldTableResNr');
                    const dataFieldTableTags = document.getElementById('dataFieldTableTags');
                    const dataFieldTableLink = document.getElementById('dataFieldTableLink');
                    const dataFieldTableAuthors = document.getElementById('dataFieldTableAuthors');
                    const dataFieldTableInformation= document.getElementById('dataFieldTableInformation');

                    const votedWithYesResult= document.getElementById('votedWithYesResult');
                    const votedWithNoResult= document.getElementById('votedWithNoResult');
                    const votedWithAbsentResult= document.getElementById('votedWithAbsentResult');
                    const votedWithNVResult= document.getElementById('votedWithNVResult');

                    // Ändere die Seiten-URL
                    let resolutionnrClean = (resolution.resolutionnr).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
                    window.location.href = `specResolution.html?title=${title}&resolutionnr=${resolutionnrClean}&sort=1`;

                    resolutionTitle.textContent = title;
                    dataFieldTableAdopted.textContent = resolution.adoptedrejected.toUpperCase();
                    dataFieldTableResNr.textContent = resolution.resolutionnr;
                    dataFieldTableTags.textContent = resolution.tags;
                    const linkElement = document.createElement('a');
                    linkElement.href = resolution.link;     //funktioniert bei textcontent
                    linkElement.textContent = resolution.link;
                    dataFieldTableLink.appendChild(linkElement);
                    dataFieldTableAuthors.textContent = resolution.authors;
                    dataFieldTableInformation.textContent = resolution.information_about_res;

                    dataFieldTableLink.appendChild(linkElement);
                    dataFieldTableAuthors.textContent = resolution.authors;
                    dataFieldTableInformation.textContent = resolution.information_about_res;


                    votedWithYesResult.textContent = resolution.countyes;
                    votedWithNoResult.textContent = resolution.countno;
                    votedWithAbsentResult.textContent = resolution.countabsent;
                    votedWithNVResult.textContent = resolution.countnv;
                })
                .catch(error => console.error('Fehler:', error));

            // untere Resolutionseite (Votes-Tabelle) befüllen

            fetch(`/specresolution/resolutioninhalttable/country/${resnrParam}`)
                .then(response => response.json())
                .then(countryVotingResults => {
                    const countriesTable = document.getElementById('countriesTable');
                    countryVotingResults.forEach(country => {
                        const countriesTableRow = document.createElement('tr');
                        countriesTableRow.classList.add('votesTableRow');

                        const countriesTableCellCountry = document.createElement('td');
                        countriesTableCellCountry.textContent = country.country;

                        const countriesTableCellIso = document.createElement('td');
                        countriesTableCellIso.textContent = country.iso_31661_alpha_3;

                        const countriesTableCellFlag = document.createElement('td');
                        countriesTableCellFlag.textContent = country.emoji_flag;


                        const countriesTableCellvote = document.createElement('td');
                        countriesTableCellvote.textContent = country.votec;
                        countriesTableCellvote.style.textAlign = "center";

                        if (country.votec === "YES") {
                            countriesTableCellCountry.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                        } else if (country.votec === "NO") {
                            countriesTableCellCountry.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                        } else if (country.votec === "N.V.") {
                            countriesTableCellCountry.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                        } else {
                            countriesTableCellCountry.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                            countriesTableCellIso.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                            countriesTableCellFlag.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                            countriesTableCellvote.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                        }

                        countriesTableRow.appendChild(countriesTableCellCountry);
                        countriesTableRow.appendChild(countriesTableCellIso);
                        countriesTableRow.appendChild(countriesTableCellFlag);
                        countriesTableRow.appendChild(countriesTableCellvote);

                        countriesTable.appendChild(countriesTableRow);
                    });
                })
                .catch(error => console.error('Fehler:', error));

            dropdownContainer.classList.remove("show");
        }
    });

    dropdownButton.addEventListener("click", function() {
        dropdownContainer.classList.toggle("show");
    });

    // Schließe das Dropdown-Menü, wenn irgendwo außerhalb davon geklickt wird
    document.addEventListener("click", function(event) {
        if (!dropdownContainer.contains(event.target) && event.target !== dropdownButton) {
            dropdownContainer.classList.remove("show");
        }
    });

    // Schließe das Dropdown-Menü, wenn eine Option ausgewählt wird
    dropdown.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            setTimeout(function() {
                dropdownContainer.classList.remove("show");
            }, 0);
        }
    });
});

//##################### EINFÄRBEN DER WELTKARTE   ################################
// Funktion zum Farben ändern in der Weltkarte
function setCountryColor(country, voteResult) {
    const style = {};

    if (voteResult === "YES") {
        style.color = 'green'
        style.fillOpacity=0.3;
    } else if (voteResult === "NO") {
        style.color = 'red'
        style.fillOpacity=0.3;
    } else if (voteResult === "N.V.") {
        style.color = 'orange'
        style.fillOpacity=0.3;
    } else {
        style.color = 'grey'
        style.fillOpacity=0.3;
    }

    return style;
}
//########################### HOVER-EFFEKT AUF DER WELTKARTE ###################################

// Variable, um den zuletzt gehoverten Grenz-Layer zu verfolgen
let lastHoveredBorderLayer = null;

// Dies hebt die Grenzebene beim Hovern hervor
function highlightBorder(e) {
    let layer = e.target;

    // Zurücksetzen des Stils der letzten hovernden Grenzebene, falls vorhanden
    if (lastHoveredBorderLayer && lastHoveredBorderLayer !== layer) {
        lastHoveredBorderLayer.setStyle({
            weight: 1, // Zurücksetzen auf die Standarddicke der Grenzlinie
            fillOpacity:0.3
        });
    }

    // Hervorhebungsstil auf die aktuelle Grenzebene anwenden
    layer.setStyle({
        weight: 5, // Erhöhe die Dicke der Grenzlinie auf 4
        fillOpacity:0.6

    });

    // Aktualisieren der letzten hovernden Grenzebene
    lastHoveredBorderLayer = layer;
}

// Dies setzt die Hervorhebung auf der Grenzebene zurück, nachdem sich der Mauszeiger entfernt hat
function resetBorderHighlight() {
    // Zurücksetzen des Stils der letzten hovernden Grenzebene, falls vorhanden
    if (lastHoveredBorderLayer) {
        lastHoveredBorderLayer.setStyle({
            weight: 1, // Zurücksetzen auf die Standarddicke der Grenzlinie
            fillOpacity:0.3
        });
    }
}

// Dies weist die Funktionen zum Hervorheben und Zurücksetzen bei der Hover-Bewegung für Grenzebene an
function onEachBorderFeature(feature, layer) {
    layer.on({
        mouseover: highlightBorder,
        mouseout: resetBorderHighlight
    });
}




//####### sortieren-Funktion der Votes-Tabelle ###################################################
function sortVoteTable() {
    const urlParams = new URLSearchParams(window.location.search);
    const titleParam = urlParams.get('title');
    const resnrParam = urlParams.get('resolutionnr');
    const sortParam = parseFloat(urlParams.get('sort'));


    //Alte Sektion löschen
    const subSectionVoteTable = document.getElementById('subSectionVoteTable');
    subSectionVoteTable.remove();

    //neue Sektion erstellen
    createSectionAndHeader();

    fetch(`/specresolution/resolutioninhalttable/country/${resnrParam}`)
        .then(response => response.json())
        .then(countryVotingResults => {


            if (sortParam === 1) {
                countryVotingResults.sort((a, b) => b.votec.localeCompare(a.votec));
                urlParams.set('sort', '2');
                const neueURL = `${window.location.pathname}?${urlParams.toString()}`;
                history.pushState(null, '', neueURL);
            } else {
                urlParams.set('sort', 1);
                const neueURL = `${window.location.pathname}?${urlParams.toString()}`;
                history.pushState(null, '', neueURL);
            }


            countryVotingResults.forEach(country => {
                //Neue Tabelle erstellen
                const countriesTableRow = document.createElement('tr');
                countriesTableRow.classList.add('votesTableRow');

                const countriesTableCellCountry = document.createElement('td');
                countriesTableCellCountry.textContent = country.country;

                const countriesTableCellIso = document.createElement('td');
                countriesTableCellIso.textContent = country.iso_31661_alpha_3;
                countriesTableCellIso.style.textAlign = 'center';

                const countriesTableCellFlag = document.createElement('td');
                countriesTableCellFlag.textContent = country.emoji_flag;
                countriesTableCellFlag.style.textAlign = 'center';
                countriesTableCellFlag.classList.add('flag'); // Füge die Klasse flag hinzu


                const countriesTableCellvote = document.createElement('td');
                countriesTableCellvote.textContent = country.votec;
                countriesTableCellvote.style.textAlign = "center";

                if (country.votec === "YES") {
                    countriesTableCellCountry.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                    countriesTableCellIso.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                    countriesTableCellFlag.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                    countriesTableCellvote.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
                } else if (country.votec === "NO") {
                    countriesTableCellCountry.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                    countriesTableCellIso.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                    countriesTableCellFlag.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                    countriesTableCellvote.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                } else if (country.votec === "N.V.") {
                    countriesTableCellCountry.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                    countriesTableCellIso.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                    countriesTableCellFlag.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                    countriesTableCellvote.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
                } else {
                    countriesTableCellCountry.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                    countriesTableCellIso.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                    countriesTableCellFlag.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                    countriesTableCellvote.style.backgroundColor = "rgba(105, 105, 105, 0.2)";
                }

                countriesTableRow.appendChild(countriesTableCellCountry);
                countriesTableRow.appendChild(countriesTableCellIso);
                countriesTableRow.appendChild(countriesTableCellFlag);
                countriesTableRow.appendChild(countriesTableCellvote);

                countriesTable.appendChild(countriesTableRow);
            });
        })
        .catch(error => console.error('Fehler:', error));

}
