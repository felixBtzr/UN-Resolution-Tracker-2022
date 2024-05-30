const { Client } = require('pg');
const express = require('express');
const app = express();
const path= require('node:path')

// Ordner festlegen, in dem die statischen Dateien wie HTML, CSS und Bilder dargestellt werden
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json());

app.disable('x-powered-by');


// Versuch, eine Route für den Wurzelpfad ("/") zu definieren
try {
    // Handler-Funktion für GET-Anfragen auf dem Wurzelpfad
    app.get('/', (req, res) => {
        // Sendet die HTML-Datei als Antwort, die sich im 'public/index'-Verzeichnis befindet
        res.sendFile(path.join(__dirname, 'public', 'index', 'index.html'));
    });
} catch (error) {
    // Wenn ein Fehler auftritt, wird er hier abgefangen
    console.error(error);
}



// Erstellen eines neuen PostgreSQL-Clients mit den Verbindungsinformationen
const client = new Client({
    host: 'dl-datenbank',
    database: 'm15_22_2204_group2',
    user: 'm15_22_2204_group2',
    password: 'ZhjnZEMVx4KVXdQuV8JP',
    port: 5432
});

client.connect();



app.get('/specresolution/title', (req, res) => {
    // Führe eine SQL-Abfrage aus, um den 'title' aus der 'resolution_metadata'-Tabelle abzurufen
    client.query('SELECT title FROM resolution_metadata;', (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/resolutioninhaltfields/:title'
app.get('/specresolution/resolutioninhaltfields/:title', (req, res) => {
    // Extrahiere die dynamische 'title'-Parameter aus der URL
    const title = req.params.title;

    // Führe eine SQL-Abfrage aus, um bestimmte Felder aus der 'resolution_metadata2'-Tabelle abzurufen
    client.query('SELECT adoptedrejected, resolutionnr, tags, link, authors, information_about_res, countyes, countno, countabsent, countnv FROM resolution_metadata2 WHERE title = $1;', [title], (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});


// Definiere eine Route für GET-Anfragen auf dem Pfad '/resolutionmapallborders'
app.get('/specresolution/resolutionmapallborders', (req, res) => {
    // Führe eine SQL-Abfrage aus, um geopoint, grenzen und ISO3countrycode aus der 'countryborder'-Tabelle abzurufen
    // Die Ergebnisse werden nach "ISO3countrycode" sortiert
    client.query('SELECT geopoint, grenzen, "ISO3countrycode" FROM countryborder ORDER BY "ISO3countrycode";', (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votesonresnr/:resnr/:countryISO'
app.get('/specresolution/votesonresnr/:resnr/:countryISO', (req, res) => {
    // Extrahiere die Parameter 'resnr' und 'countryISO' aus der URL
    const resnrparam = req.params.resnr;
    const countryISOparam = req.params.countryISO;

    // Führe eine SQL-Abfrage aus, um Abstimmungsinformationen für das angegebene Land und die Resolution abzurufen
    client.query(`SELECT "${countryISOparam}" AS countryISO FROM votes4 WHERE resolutionnr = \'${resnrparam}\';`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/resolutioninhalttable/country/:resnr'
app.get('/specresolution/resolutioninhalttable/country/:resnr', (req, res) => {
    // Extrahiere die Parameter 'resnr' aus der URL
    const resnr = req.params.resnr;

    // Führe eine SQL-Abfrage aus, um Abstimmungsinformationen für die angegebene Resolution und Länder abzurufen
    client.query(`SELECT ${resnr} AS voteC, statelist2.country, statelist2.iso_31661_alpha_3, statelist2.emoji_flag FROM votes JOIN statelist2 ON statelist2.country = votes.land ORDER BY statelist2.country;`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/countriesfilter/:continent/:typeOfGovernment/:populationSmaller/:populationBigger/:gdpSmaller/:gdpBigger/:areaSmaller/:areaBigger'
app.get('/countries/countriesfilter/:continent/:typeOfGovernment/:populationSmaller/:populationBigger/:gdpSmaller/:gdpBigger/:areaSmaller/:areaBigger', (req, res) => {
    // Extrahiere die verschiedenen Filterkriterien aus der URL
    const continent = req.params.continent;
    const typeOfGovernment = req.params.typeOfGovernment;
    const populationSmaller = parseFloat(req.params.populationSmaller);
    const populationBigger = parseFloat(req.params.populationBigger);
    const gdpSmaller = parseFloat(req.params.gdpSmaller);
    const gdpBigger = parseFloat(req.params.gdpBigger);
    const areaSmaller = parseFloat(req.params.areaSmaller);
    const areaBigger = parseFloat(req.params.areaBigger);

    // Erstelle eine parameterisierte SQL-Abfrage mit einer Prepared Statement und verschiedenen Filterkriterien
    const query = {
        text: 'SELECT country, capital_city, type_of_government, population_in_millions, gdp_in_billion$, area_in_m2, yes, no, absent, nv FROM statelist2 WHERE continent = $1 AND type_of_government = $2 AND population_in_millions BETWEEN $3 AND $4 AND gdp_in_billion$ BETWEEN $5 AND $6 AND area_in_m2 BETWEEN $7 AND $8 ORDER BY country;;',
        values: [continent, typeOfGovernment, populationSmaller, populationBigger, gdpSmaller, gdpBigger, areaSmaller, areaBigger]
    };

    // Führe die parameterisierte SQL-Abfrage aus
    client.query(query, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/countriesfilterALL/:continent/:populationSmaller/:populationBigger/:gdpSmaller/:gdpBigger/:areaSmaller/:areaBigger'
app.get('/countries/countriesfilterALL/:continent/:populationSmaller/:populationBigger/:gdpSmaller/:gdpBigger/:areaSmaller/:areaBigger', (req, res) => {
    // Extrahiere die verschiedenen Filterkriterien aus der URL
    const continent = req.params.continent;
    const populationSmaller = parseFloat(req.params.populationSmaller);
    const populationBigger = parseFloat(req.params.populationBigger);
    const gdpSmaller = parseFloat(req.params.gdpSmaller);
    const gdpBigger = parseFloat(req.params.gdpBigger);
    const areaSmaller = parseFloat(req.params.areaSmaller);
    const areaBigger = parseFloat(req.params.areaBigger);

    // Erstelle eine parameterisierte SQL-Abfrage mit einer Prepared Statement und verschiedenen Filterkriterien
    const query = {
        text: 'SELECT country, capital_city, type_of_government, population_in_millions, gdp_in_billion$, area_in_m2, yes, no, absent, nv FROM statelist2 WHERE continent = $1 AND population_in_millions BETWEEN $2 AND $3 AND gdp_in_billion$ BETWEEN $4 AND $5 AND area_in_m2 BETWEEN $6 AND $7 ORDER BY country;',
        values: [continent, populationSmaller, populationBigger, gdpSmaller, gdpBigger, areaSmaller, areaBigger]
    };

    // Führe die parameterisierte SQL-Abfrage aus
    client.query(query, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/algrestable'
app.get('/allgResolution/algrestable', (req, res) => {
    // Führe eine SQL-Abfrage aus, um resolutionnr, title und tags aus der 'resolution_metadata2'-Tabelle abzurufen
    // Die Ergebnisse werden nach dem Datum absteigend sortiert
    client.query('SELECT resolutionnr, title, tags FROM resolution_metadata2 ORDER BY date DESC;', (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



app.get('/votingstatistic/tags', (req, res) => {
    client.query(`SELECT tags FROM resolution_metadata;`, (err, results) => {
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }

        const allTags = results.rows.flatMap(row => (row.tags || '').split(',').map(tag => tag.trim()));
        const uniqueTags = [...new Set(allTags)];
        res.json({ tags: uniqueTags });
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStats/dropdown'
app.get('/votingstatistics/countrydropdown', (req, res) => {
    // Führe eine SQL-Abfrage aus, um Länder aus der 'statelist2'-Tabelle abzurufen
    // Die Ergebnisse werden alphabetisch nach Ländernamen sortiert
    client.query(`SELECT country FROM statelist2 ORDER BY country ASC;`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



app.get('/votingstatistics/piechart/:country', (req, res) => {
    // Extrahiere den Parameter 'country' aus der URL und wandele ihn in Kleinbuchstaben um
    const country = req.params.country.toLowerCase();

    // Führe eine SQL-Abfrage aus, um die Anzahl der verschiedenen Abstimmungsergebnisse für das angegebene Land zu erhalten
    client.query(`SELECT "${country}" AS vote, count("${country}") AS voteTotal FROM votes3  GROUP BY "${country}";`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStatistics/barchartTag/:country/:tag'
app.get('/votingstatistics/barchartTag/:country/:tag', (req, res) => {
    // Extrahiere die Parameter 'country' und 'tag' aus der URL und wandele 'country' in Kleinbuchstaben um
    const country = req.params.country.toLowerCase();
    const tag = req.params.tag;

    // Führe eine SQL-Abfrage aus, um die Anzahl der verschiedenen Abstimmungsergebnisse für das angegebene Land und Tag zu erhalten
    client.query(`SELECT "${country}" AS vote, count("${country}") AS voteTotal FROM votes3 WHERE "Tags" LIKE '%${tag}%' GROUP BY "${country}";`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStatistics/tagtext/:tag'
app.get('/votingstatistics/tagtext/:tag', (req, res) => {
    // Extrahiere den Parameter 'tag' aus der URL
    const tag = req.params.tag;

    // Führe eine SQL-Abfrage aus, um die Anzahl der Vorkommen des angegebenen Tags in der Spalte 'Tags' zu erhalten
    client.query('SELECT count("Tags") AS tagCount FROM votes3 WHERE "Tags" LIKE $1', [`%${tag}%`], (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStatistics/barchartcompareyes/:country1/:country2'
app.get('/votingstatistics/barchartcompareyes/:country1/:country2', (req, res) => {
    // Extrahiere die Parameter 'country1' und 'country2' aus der URL und wandele sie in Kleinbuchstaben um
    const country1 = req.params.country1.toLowerCase();
    const country2 = req.params.country2.toLowerCase();

    // Führe eine SQL-Abfrage aus, um die Anzahl der 'YES'-Abstimmungsergebnisse für das erste Land im Vergleich zum zweiten Land zu erhalten
    client.query(`SELECT "${country2}" AS vote, count("${country2}") AS voteTotal FROM votes3 WHERE "${country1}"='YES' GROUP BY "${country2}";`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStatistics/barchartcompareno/:country1/:country2'
app.get('/votingstatistics/barchartcompareno/:country1/:country2', (req, res) => {
    // Extrahiere die Parameter 'country1' und 'country2' aus der URL und wandele sie in Kleinbuchstaben um
    const country1 = req.params.country1.toLowerCase();
    const country2 = req.params.country2.toLowerCase();

    // Führe eine SQL-Abfrage aus, um die Anzahl der 'NO'-Abstimmungsergebnisse für das erste Land im Vergleich zum zweiten Land zu erhalten
    client.query(`SELECT "${country2}" AS vote, count("${country2}") AS voteTotal FROM votes3 WHERE "${country1}"='NO' GROUP BY "${country2}";`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStatistics/barchartcompareabsent/:country1/:country2'
app.get('/votingstatistics/barchartcompareabsent/:country1/:country2', (req, res) => {
    // Extrahiere die Parameter 'country1' und 'country2' aus der URL und wandele sie in Kleinbuchstaben um
    const country1 = req.params.country1.toLowerCase();
    const country2 = req.params.country2.toLowerCase();

    // Führe eine SQL-Abfrage aus, um die Anzahl der 'ABSENT'-Abstimmungsergebnisse für das erste Land im Vergleich zum zweiten Land zu erhalten
    client.query(`SELECT "${country2}" AS vote, count("${country2}") AS voteTotal FROM votes3 WHERE "${country1}"='ABSENT' GROUP BY "${country2}";`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStatistics/barchartComparenv/:country1/:country2'
app.get('/votingstatistics/barchartComparenv/:country1/:country2', (req, res) => {
    // Extrahiere die Parameter 'country1' und 'country2' aus der URL und wandele sie in Kleinbuchstaben um
    const country1 = req.params.country1.toLowerCase();
    const country2 = req.params.country2.toLowerCase();

    // Führe eine SQL-Abfrage aus, um die Anzahl der 'N.V.' (nicht teilgenommen) Abstimmungsergebnisse für das erste Land im Vergleich zum zweiten Land zu erhalten
    client.query(`SELECT "${country2}" AS vote, count("${country2}") AS voteTotal FROM votes3 WHERE "${country1}"='N.V.' GROUP BY "${country2}";`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Route für GET-Anfragen auf dem Pfad '/votingStatistics/infoscountry/:country1/:country2'
app.get('/votingstatistics/infoscountry/:country1/:country2', (req, res) => {
    // Extrahiere die Parameter 'country1' und 'country2' aus der URL
    const country1 = req.params.country1;
    const country2 = req.params.country2;

    // Führe eine SQL-Abfrage aus, um Informationen zu den beiden Ländern aus der 'statelist2'-Tabelle abzurufen
    client.query(`SELECT country, continent, capital_city, sincewheninun, emoji_flag, alliance FROM statelist2 WHERE country = '${country1}' OR country = '${country2}';`, (err, results) => {
        // Überprüfe auf Fehler während der Datenbankabfrage
        if (err) {
            console.error('Fehler bei der Abfrage: ', err);
            // Bei einem Fehler sende einen Serverfehler-Status (500) und eine Fehlermeldung zurück
            res.status(500).send('Fehler bei der Abfrage');
            return;
        }
        // Wenn die Abfrage erfolgreich war, sende die Ergebnisdaten als JSON zurück
        res.json(results.rows);
    });
});



// Definiere eine Konstante für den Port, der entweder durch die Umgebungsvariable PORT oder standardmäßig auf Port 80 festgelegt wird
const PORT = process.env.PORT || 80;

// Starte den Express.js-Server und lasse ihn auf dem angegebenen Port lauschen
app.listen(PORT, () => {
    // Gib eine Meldung in der Konsole aus, um anzuzeigen, dass der Server gestartet wurde und auf welchem Port er lauscht
    console.log(`Port ${PORT} is now listening`);
});