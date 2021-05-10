import { unit, translate } from "./helpers/measurementUnits.js";

const $unitSelected = document.getElementById("unit");
const $convertedUnit = document.getElementById("convertedUnit");
const $unitToConvert = document.getElementById("unitToConvert");
const $valueToConvert = document.getElementById("valueToConvert");
const $convertedValue = document.getElementById("convertedValue");
const randomText = "Seleccione...";

const clearSelects = (selectsToClear = []) => {
    selectsToClear.forEach((selectToClear) => {
        for (let i = selectToClear.options.length; i >= 0; i--) {
            selectToClear.remove(i);
        }
    });
};

const clearInputs = () => {
    $convertedValue.value = "";
    $valueToConvert.value = "";
};

const createOptions = (translatedOptions = [], options = [], HTMLSelect) => {
    translatedOptions.forEach((option, i) => {
        const opt = document.createElement("option");
        opt.value = options[i];
        opt.innerHTML = option;
        HTMLSelect.appendChild(opt);
    });
};

const getUnitsToConvert = () => {
    const unitToLoad = $unitSelected.value;
    const convertedUnit = $convertedUnit.value;
    const unitToConvert = $unitToConvert.value;
    if (convertedUnit === unitToConvert) {
        $convertedValue.value = 1;
        $valueToConvert.value = 1;
    }
    if (
        convertedUnit !== randomText &&
        unitToConvert !== randomText &&
        convertedUnit !== unitToConvert
    ) {
        console.log(unitToConvert, "to", convertedUnit);
        const equivalent = unit[unitToLoad][convertedUnit][unitToConvert];
        reactiveConversor(equivalent);
    }
};

const reactiveConversor = (equivalent) => {
    $valueToConvert.value = 1;
    $convertedValue.value = equivalent;
    $valueToConvert.addEventListener("keyup", (e) => {
        const keycode = e.key;
        if ((keycode >= 0 && keycode <= 9) || keycode === "Backspace") {
            const result = $valueToConvert.value * equivalent;
            $convertedValue.value = result;
        }
    });
    $convertedValue.addEventListener("keyup", (e) => {
        const keycode = e.key;
        if ((keycode >= 0 && keycode <= 9) || keycode === "Backspace") {
            const result = $convertedValue.value / equivalent;
            $valueToConvert.value = result;
        }
    });
};

$unitSelected.addEventListener("change", () => {
    const unitToLoad = $unitSelected.value;
    clearInputs();
    clearSelects([$convertedUnit, $unitToConvert]);
    if (unitToLoad !== randomText) {
        let options = Object.keys(unit[unitToLoad]);
        const translatedOptions = options.map((option) => {
            const temp = translate[unitToLoad];
            return (option = temp[option]);
        });
        options.unshift(randomText);
        translatedOptions.unshift(randomText);
        createOptions(translatedOptions, options, $unitToConvert);
        createOptions(translatedOptions, options, $convertedUnit);
    }
});

$unitToConvert.addEventListener("change", getUnitsToConvert);
$convertedUnit.addEventListener("change", getUnitsToConvert);
