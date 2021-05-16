"use strict";

var _measurementUnits = require("./helpers/measurementUnits.js");

var $unitSelected = document.getElementById("unit");
var $convertedUnit = document.getElementById("convertedUnit");
var $unitToConvert = document.getElementById("unitToConvert");
var $valueToConvert = document.getElementById("valueToConvert");
var $convertedValue = document.getElementById("convertedValue");
var randomText = "Seleccione...";

var clearSelects = function clearSelects() {
  var selectsToClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  selectsToClear.forEach(function (selectToClear) {
    for (var i = selectToClear.options.length; i >= 0; i--) {
      selectToClear.remove(i);
    }
  });
};

var clearInputs = function clearInputs() {
  $convertedValue.value = "";
  $valueToConvert.value = "";
};

var createOptions = function createOptions() {
  var translatedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var HTMLSelect = arguments.length > 2 ? arguments[2] : undefined;
  translatedOptions.forEach(function (option, i) {
    var opt = document.createElement("option");
    opt.value = options[i];
    opt.innerHTML = option;
    HTMLSelect.appendChild(opt);
  });
};

var getUnitsToConvert = function getUnitsToConvert() {
  var unitToLoad = $unitSelected.value;
  var convertedUnit = $convertedUnit.value;
  var unitToConvert = $unitToConvert.value;

  if (convertedUnit === unitToConvert) {
    $convertedValue.value = 1;
    $valueToConvert.value = 1;
  }

  if (convertedUnit !== randomText && unitToConvert !== randomText && convertedUnit !== unitToConvert) {
    console.log(unitToConvert, "to", convertedUnit);
    var equivalent = _measurementUnits.unit[unitToLoad][convertedUnit][unitToConvert];
    reactiveConversor(equivalent);
  }
};

var reactiveConversor = function reactiveConversor(equivalent) {
  $valueToConvert.value = 1;
  $convertedValue.value = equivalent;
  $valueToConvert.addEventListener("keyup", function (e) {
    var keycode = e.key;

    if (keycode >= 0 && keycode <= 9 || keycode === "Backspace") {
      var result = $valueToConvert.value * equivalent;
      $convertedValue.value = result;
    }
  });
  $convertedValue.addEventListener("keyup", function (e) {
    var keycode = e.key;

    if (keycode >= 0 && keycode <= 9 || keycode === "Backspace") {
      var result = $convertedValue.value / equivalent;
      $valueToConvert.value = result;
    }
  });
};

$unitSelected.addEventListener("change", function () {
  var unitToLoad = $unitSelected.value;
  clearInputs(); //clearSelects([$convertedUnit, $unitToConvert]);

  if (unitToLoad !== randomText) {
    var options = Object.keys(_measurementUnits.unit[unitToLoad]);
    var translatedOptions = options.map(function (option) {
      var temp = _measurementUnits.translate[unitToLoad];
      return option = temp[option];
    });
    options.unshift(randomText);
    translatedOptions.unshift(randomText);
    createOptions(translatedOptions, options, $unitToConvert);
    createOptions(translatedOptions, options, $convertedUnit);
  }
});
$unitToConvert.addEventListener("change", getUnitsToConvert);
$convertedUnit.addEventListener("change", getUnitsToConvert);