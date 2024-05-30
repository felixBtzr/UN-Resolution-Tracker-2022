describe("Text of the error message", () => {

//gültig

    // Testfall gÄK1: Definitionsbereich [0,1418]
    it("Sollte '20' zurückgeben", async () => {
        const value = 20; //Repräsentant '20'
        expect(getFilteredValue(value,'searchPopulationFrom' , 0, 0, 1418)).toBe(value); //Aufruf der Funktion: (inputValue, inputId, defaultValue, minValue, maxValue)
    });

    // Testfall gÄK2: Definitionsbereich [1418<]
    it("Sollte '2000' zurückgeben", async () => {
        const value = 2000; //Repräsentant '2000'
        expect(getFilteredValue(value,'searchPopulationFrom' , 0, 0, 1418)).toBe(value); //Aufruf der Funktion: (inputValue, inputId, defaultValue, minValue, maxValue)
    });



//ungültig

    // Testfall uÄK1: Definitionsbereich [leer]
    it("Sollte '0' zurückgeben", async () => {
        const value = ''; //Repräsentant ''
        expect(getFilteredValue(value,'searchPopulationFrom' , 0, 0, 1418)).toBe(0); //Aufruf der Funktion: (inputValue, inputId, defaultValue, minValue, maxValue)
    });

    // Testfall uÄK2: Definitionsbereich [<0]
    it("Sollte '0' zurückgeben", async () => {
        const value = -50; //Repräsentant '-50'
        expect(getFilteredValue(value,'searchPopulationFrom' , 0, 0, 1418)).toBe(0); //Aufruf der Funktion: (inputValue, inputId, defaultValue, minValue, maxValue)
    });

    // Testfall uÄK3: Definitionsbereich [NaN]
    it("Sollte '0' zurückgeben", async () => {
        const value = 't'; //Repräsentant 't'
        expect(getFilteredValue(value,'searchPopulationFrom' , 0, 0, 1418)).toBe(0); //Aufruf der Funktion: (inputValue, inputId, defaultValue, minValue, maxValue)
    });
});
