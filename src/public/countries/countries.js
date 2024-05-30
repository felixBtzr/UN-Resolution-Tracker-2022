/**
 * @function
 * @name toggleTable_Filter
 * @return void
 *
 * @author Lenya Peters
 */
function toggleTable_Filter() {
    const toggleTableFilter = document.getElementById('filterSection');
    const toggleArrowFilter = document.getElementById('ToggleArrow_Filter');

    if (toggleTableFilter.classList.contains('visible')) {
        toggleTableFilter.classList.remove('visible');
        toggleArrowFilter.style.transform = 'rotate(0deg)';
    } else {
        toggleTableFilter.classList.add('visible');
        toggleArrowFilter.style.transform = 'rotate(90deg)';
    }
}



/**
 * @function
 * @name setColourField
 * @return void
 *
 * @author Lenya Peters
 */
function setColourField(inputId) {
    const inputValueField = document.getElementById(inputId);
    const noValidValueText = document.getElementById('noValidValueText');

    noValidValueText.style.color = '#9F1818FF';
    noValidValueText.innerText = 'No valid value';
    inputValueField.style.backgroundColor = 'rgb(255,162,162)'
    inputValueField.style.borderColor = '#FF0000FF';
}



/**
 * @function
 * @name resetColourFields
 * @return void
 *
 * @author Lenya Peters
 */
function resetColourFields() {
    const fieldIds = [
        'searchPopulationFrom', 'searchPopulationTo',
        'searchGDPFrom', 'searchGDPTo',
        'searchAreaFrom', 'searchAreaTo'
    ];

    const noValidValueText = document.getElementById('noValidValueText');
    noValidValueText.innerText = '';

    fieldIds.forEach(fieldId => {
        const inputValueField = document.getElementById(fieldId);
        inputValueField.style.backgroundColor = 'rgb(253,253,254)';
        inputValueField.style.borderColor = '#fdfdfe';
    });
}


/**
 * @function
 * @name getFilteredValue
 * @param inputValue
 * @param inputId
 * @param defaultValue
 * @param minValue
 * @param maxValue
 * @return {number|*}
 *
 * @author Lenya Peters
 */
function getFilteredValue(inputValue, inputId, defaultValue, minValue, maxValue) {
    inputValue = ' ' + inputValue;

    if (inputValue.trim() === '') {
        console.log('Leer oder Leerzeichen');
        return defaultValue;
    }
    else {
        if (/[a-zA-Z]/.test(inputValue)) {
            console.log('Buchstaben oder Sonderzeichen in der Zahl');
            setColourField(inputId);
            return defaultValue;
        }

        const inputValueAsNumber = parseFloat(inputValue.trim());

        if (isNaN(inputValueAsNumber)) {
            console.log('Keine gültige Zahl');
            setColourField(inputId);
            return defaultValue;
        }
        else if (inputValueAsNumber < minValue) {
            console.log('Zahl zu klein');
            setColourField(inputId);
            return minValue;
        }
        else if (inputValueAsNumber > maxValue) {
            console.log('Zahl zu groß');
            setColourField(inputId);
            return maxValue;
        }
        else {
            console.log('Zahl gültig');
            return inputValueAsNumber;
        }
    }
}


/**
 * @function
 * @name filterOutPerimeter
 * @return {{populationSmaller: number, gdpBigger: number, populationBigger: number, areaBigger: number, gdpSmaller: number, areaSmaller: number, typeOfGovernment: *}}
 *
 * @author Lenya Peters
 */
function filterOutPerimeter() {
    const typeOfGovernment = document.querySelector('#selectTypeOfGovernment').value;

    const populationSmaller = getFilteredValue((document.querySelector('#searchPopulationFrom').value.trim()),'searchPopulationFrom', 0, 0, 1418);
    const populationBigger = getFilteredValue((document.querySelector('#searchPopulationTo').value.trim()),'searchPopulationTo', 1418, 0, 1418);

    const gdpSmaller = getFilteredValue((document.querySelector('#searchGDPFrom').value.trim()),'searchGDPFrom', 0, 0, 25462701);
    const gdpBigger = getFilteredValue((document.querySelector('#searchGDPTo').value.trim()),'searchGDPTo', 25462701, 0, 25462701);

    const areaSmaller = getFilteredValue((document.querySelector('#searchAreaFrom').value.trim()),'searchAreaFrom', 0, 0, 17098243);
    const areaBigger = getFilteredValue((document.querySelector('#searchAreaTo').value.trim()),'searchAreaTo', 17098243, 0, 17098243);

    return {
        typeOfGovernment,
        populationSmaller,
        populationBigger,
        gdpSmaller,
        gdpBigger,
        areaSmaller,
        areaBigger
    };
}



/**
 * @function
 * @name createTableRow
 * @param continent
 * @return {HTMLTableRowElement}
 *
 * @author Lenya Peters
 */
function createTableRow(continent) {
    const tableRow = document.createElement('tr');
    tableRow.classList.add('tableRow');

    const createTableCell = (text, align = 'left') => {
        const cell = document.createElement('td');
        const cellA = document.createElement('a');
        cellA.textContent = text;
        cellA.style.textAlign = align;
        if (continent.country === 'UNITED STATES') {
            cellA.href = `../votingStatistics/votingStatistics.html?country1=${continent.country}&country2=RUSSIAN FEDERATION&tag=War`;
        } else {
            cellA.href = `../votingStatistics/votingStatistics.html?country1=${continent.country}&country2=UNITED STATES&tag=War`;
        }        cellA.classList.add('table-link');
        cell.appendChild(cellA);
        return cell;
    };

    tableRow.appendChild(createTableCell(continent.country));   //continent.country=UNITED STATES
    tableRow.appendChild(createTableCell(continent.capital_city));
    tableRow.appendChild(createTableCell(continent.type_of_government));
    tableRow.appendChild(createTableCell(new Intl.NumberFormat('de-DE').format(continent.population_in_millions), 'center'));
    tableRow.appendChild(createTableCell(new Intl.NumberFormat('de-DE').format(continent.gdp_in_billion$), 'center'));
    tableRow.appendChild(createTableCell(new Intl.NumberFormat('de-DE').format(continent.area_in_m2), 'center'));
    tableRow.appendChild(createTableCell(continent.yes, 'center'));
    tableRow.appendChild(createTableCell(continent.no, 'center'));
    tableRow.appendChild(createTableCell(continent.absent, 'center'));
    tableRow.appendChild(createTableCell(continent.nv, 'center'));

    return tableRow;
}



/**
 * @function
 * @name fetchAndPopulateTableAndSection
 * @param continent
 * @param typeOfGovernmentValue
 * @param populationSmallerValue
 * @param populationBiggerValue
 * @param gdpSmallerValue
 * @param gdpBiggerValue
 * @param areaSmallerValue
 * @param areaBiggerValue
 * @return void
 *
 * @author Lenya Peters
 */
function fetchAndPopulateTableAndSection(continent, typeOfGovernmentValue, populationSmallerValue, populationBiggerValue, gdpSmallerValue, gdpBiggerValue, areaSmallerValue, areaBiggerValue) {
    const fetchData = (url) => {
        return fetch(url)
            .then(response => response.json())
            .then(filteredCountries => {
                if (filteredCountries.length > 0) {
                    createContinentSection(continent);

                    const table = document.getElementById('continentTable' + continent.replace(/\s/g, ''));
                    filteredCountries.forEach(country => {
                        const tableRow = createTableRow(country);
                        table.appendChild(tableRow);
                    });
                }
            })
            .catch(error => console.error('Fehler:', error));
    };

    const url = (typeOfGovernmentValue === "all") ?
        `/countries/countriesfilterALL/${continent}/${populationSmallerValue}/${populationBiggerValue}/${gdpSmallerValue}/${gdpBiggerValue}/${areaSmallerValue}/${areaBiggerValue}` :
        `/countries/countriesfilter/${continent}/${typeOfGovernmentValue}/${populationSmallerValue}/${populationBiggerValue}/${gdpSmallerValue}/${gdpBiggerValue}/${areaSmallerValue}/${areaBiggerValue}`;

    console.log(typeOfGovernmentValue === "all" ? 'all' : 'nicht all');
    fetchData(url);
}


/**
 * @function
 * @name deleteContinentSection
 * @param continent
 * @return void
 *
 * @author Lenya Peters
 */
function deleteContinentSection(continent) {
    if (document.getElementById('section' + continent.replace(/\s/g, ''))) {
        const continentSection = document.getElementById('section' + continent.replace(/\s/g, ''));
        continentSection.remove();
    }
}



/**
 * @function
 * @name createContinentSection
 * @param continent
 * @return void
 *
 * @author Lenya Peters
 */
function createContinentSection(continent) {
// Erstellt die Continent-Section
    const continentSection = document.createElement('section');
    continentSection.className = 'continentSection';
    continentSection.id = 'section' + continent.replace(/\s/g, '');


    const continentHeader = document.createElement('h2');
    continentHeader.className = 'continentHeader';
    continentHeader.textContent = continent;

    const continentTable = document.createElement('table');
    continentTable.className = 'continentTable';
    continentTable.id = 'continentTable' + continent.replace(/\s/g, '');
    continentTable.setAttribute('aria-hidden', 'true');

    const tableHeaderRow = document.createElement('tr');
    const tableHeaderIds = ['tcCountry', 'tcCapitalCity', 'tcTypeOfGovernment', 'tcPopulation', 'tcGDP', 'tcArea', 'tcYes', 'tcNo', 'tcAbsent', 'tcNotVoted'];
    const tableHeader = ['COUNTRY', 'CAPITAL CITY', 'TYPE OF GOVERNMENT', 'POPULATION IN MILLION', 'GDP IN MILLION $', 'AREA IN KM²', 'YES', 'NO', 'ABSENT', 'NOT VOTED'];
    let column  = 0;

    tableHeaderIds.forEach(headerId => {
        const th = document.createElement('th');
        th.textContent = tableHeader[column];
        th.id = headerId;
        th.className = 'resolutionTable-header';
        tableHeaderRow.appendChild(th);
        column++;
    });

    continentTable.appendChild(tableHeaderRow);

    continentSection.appendChild(continentHeader);
    continentSection.appendChild(continentTable);

    const countriesContentSection = document.getElementById('countriesContentSection');
    countriesContentSection.appendChild(continentSection);
}


/**
 * @function
 * @name applyFilter
 * @return void
 *
 * @author Lenya Peters
 */
function applyFilter() {
    const continents = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania'];

    resetColourFields();

    continents.forEach(continent => {
        deleteContinentSection(continent);
    });

    const filterResults = filterOutPerimeter();
    const typeOfGovernmentValue = filterResults.typeOfGovernment;
    const populationSmallerValue = filterResults.populationSmaller;
    const populationBiggerValue = filterResults.populationBigger;
    const gdpSmallerValue = filterResults.gdpSmaller;
    const gdpBiggerValue = filterResults.gdpBigger;
    const areaSmallerValue = filterResults.areaSmaller;
    const areaBiggerValue = filterResults.areaBigger;

    continents.forEach(continent => {
        fetchAndPopulateTableAndSection(continent, typeOfGovernmentValue, populationSmallerValue, populationBiggerValue, gdpSmallerValue, gdpBiggerValue, areaSmallerValue, areaBiggerValue);
    });
}



/**
 * @function
 * @name resetAll
 * @return void
 *
 * @author Lenya Peters
 */
function resetAll() {
    const continents = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania'];

    resetColourFields();

    continents.forEach(continent => {
        deleteContinentSection(continent);
    });

    document.querySelectorAll('.searchInput').forEach(input => {
        input.value = ' ';
    });
    document.querySelector('#selectTypeOfGovernment').selectedIndex = 0;

    continents.forEach(continent => {
        fetchAndPopulateTableAndSection(continent, 'all', 0, 1418, 0, 25462701, 0, 17098243);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    applyFilter();

    document.querySelector('#applyButton').addEventListener('click', applyFilter);
    document.querySelector('#resetButton').addEventListener('click', resetAll);
});