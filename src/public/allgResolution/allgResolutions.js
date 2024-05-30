// Sende eine GET-Anfrage an den '/algrestable'-Endpunkt der Server-API
fetch('/allgResolution/algrestable')
    .then(response => response.json()) // Extrahiere die JSON-Daten aus der Antwort
    .then(indextable => {
        // Hole das HTML-Element mit der ID 'tableindex'
        const tableindex = document.getElementById('tableindex');

        // Iteriere durch jede Resolution im indextable
        indextable.forEach(resolution => {
            // Erstelle eine neue Zeile für die Tabelle
            const tableResolutionRow = document.createElement('tr');
            tableResolutionRow.classList.add('tableResolution'); // Füge CSS-Klassen hinzu
            tableResolutionRow.classList.add('tableRow');

            // Erstelle eine Zelle für die Resolutionnummer
            const tableResolutionCellResNr = document.createElement('td');
            const linkResNr = document.createElement('a');
            let resolutionnrClean = (resolution.resolutionnr).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            linkResNr.href = `../specResolution/specResolution.html?title=${resolution.title}&resolutionnr=${resolutionnrClean}&sort=1`;
            linkResNr.textContent = resolution.resolutionnr;
            linkResNr.classList.add('table-link'); // Füge CSS-Klassen hinzu
            tableResolutionCellResNr.appendChild(linkResNr);

            // Erstelle eine Zelle für den Titel
            const tableResolutionCellTitle = document.createElement('td');
            const linkTitle = document.createElement('a');
            linkTitle.href = `../specResolution/specResolution.html?title=${resolution.title}&resolutionnr=${resolutionnrClean}&sort=1`;
            linkTitle.textContent = resolution.title;
            linkTitle.classList.add('table-link'); // Füge CSS-Klassen hinzu
            tableResolutionCellTitle.appendChild(linkTitle);

            // Erstelle eine Zelle für die Tags
            const tableResolutionCellTags = document.createElement('td');
            tableResolutionCellTags.textContent = resolution.tags;

            // Füge die Zellen zur Zeile hinzu
            tableResolutionRow.appendChild(tableResolutionCellResNr);
            tableResolutionRow.appendChild(tableResolutionCellTitle);
            tableResolutionRow.appendChild(tableResolutionCellTags);

            // Füge die Zeile zur Tabelle hinzu
            tableindex.appendChild(tableResolutionRow);

            // Füge einen Event-Listener zur Zeile hinzu
            tableResolutionRow.addEventListener('click', function() {
                // Navigiere zur gewünschten Seite, wenn die Zeile geklickt wird
                window.location.href = `../specResolution/specResolution.html?title=${resolution.title}&resolutionnr=${resolutionnrClean}&sort=1`;
            });
        });
    })
    .catch(error => console.error('Fehler:', error)); // Behandele Fehler bei der Anfrage
