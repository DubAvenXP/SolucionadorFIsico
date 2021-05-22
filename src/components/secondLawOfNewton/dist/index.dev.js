"use strict";

var _secondLawOfNewtonFormulas = require("./helpers/secondLawOfNewtonFormulas.js");

var _showFormulas = require("../../../utils/showFormulas.js");

var secondLawOfNewton = _showFormulas.formulas.secondLawOfNewton;
var $formulasContainter = document.getElementById('formulas-container');

var generateFormulaImg = function generateFormulaImg(src) {
  var $figure = document.createElement('figure');
  var $img = document.createElement('img');
  $img.src = src;
  $figure.appendChild($img);
  $figure.className = "p-4";
  $formulasContainter.appendChild($figure);
};

var calculateAcceleration = function calculateAcceleration() {
  var initialSpeed = document.getElementById('initialSpeed').value;
  var finalSpeed = document.getElementById('finalSpeed').value;
  var time = document.getElementById('time').value;

  if (!(isNaN(initialSpeed) && isNaN(finalSpeed) && isNaN(time))) {
    document.getElementById('acceleration').value = (0, _secondLawOfNewtonFormulas.accelerationWithVoVfAndTime)(initialSpeed, finalSpeed, time);
    generateFormulaImg(secondLawOfNewton.accelerationWithVoVfAndTime(finalSpeed, initialSpeed, time, (0, _secondLawOfNewtonFormulas.accelerationWithVoVfAndTime)(initialSpeed, finalSpeed, time)));
  }
};

var calculateAcceleration2 = function calculateAcceleration2() {
  var time = document.getElementById('time').value;
  var distance = document.getElementById('distance').value;

  if (!(isNaN(distance) && isNaN(time))) {
    document.getElementById('acceleration').value = (0, _secondLawOfNewtonFormulas.accelerationWithTimeAndX_voCero)(distance, time);
    generateFormulaImg(secondLawOfNewton.accelerationWithTimeAndX_voCero(distance, time, (0, _secondLawOfNewtonFormulas.accelerationWithTimeAndX_voCero)(distance, time)));
  } else {
    console.log('valores insuficientes');
  }
};

var forceEvent = function forceEvent() {
  document.getElementById('mass').removeEventListener('keyup', massEvent); //===================================================================================

  document.getElementById('acceleration').removeEventListener('keyup', accelerationEvent);
  var forceInput = document.getElementById('force').value;
  var accelerationInput = document.getElementById('acceleration').value;
  document.getElementById('mass').addEventListener('keyup', function () {
    var massInput = document.getElementById('mass').value;
    if (!isNaN(massInput)) document.getElementById('acceleration').value = (0, _secondLawOfNewtonFormulas.acceleration)(forceInput, massInput);
    generateFormulaImg(secondLawOfNewton.acceleration(forceInput, massInput, (0, _secondLawOfNewtonFormulas.acceleration)(forceInput, massInput)));
  });

  if (isNaN(document.getElementById('acceleration').value)) {
    document.getElementById('acceleration').addEventListener('keyup', function () {
      accelerationInput = document.getElementById('acceleration').value;
      if (!isNaN(accelerationInput)) document.getElementById('mass').value = (0, _secondLawOfNewtonFormulas.mass)(forceInput, accelerationInput);
      generateFormulaImg(secondLawOfNewton.mass(forceInput, accelerationInput, (0, _secondLawOfNewtonFormulas.mass)(forceInput, accelerationInput)));
    });
  } else {
    document.getElementById('mass').value = (0, _secondLawOfNewtonFormulas.mass)(forceInput, accelerationInput);
    generateFormulaImg(secondLawOfNewton.mass(forceInput, accelerationInput, (0, _secondLawOfNewtonFormulas.mass)(forceInput, accelerationInput)));
  }
};

var massEvent = function massEvent() {
  //===============================================================================
  document.getElementById('force').removeEventListener('keyup', forceEvent); //===================================================================================

  document.getElementById('acceleration').removeEventListener('keyup', accelerationEvent);
  var massInput = document.getElementById('mass').value;
  var accelerationInput = document.getElementById('acceleration').value;
  document.getElementById('force').addEventListener('keyup', function () {
    var forceInput = document.getElementById('force').value;
    if (!isNaN(forceInput)) document.getElementById('acceleration').value = (0, _secondLawOfNewtonFormulas.acceleration)(forceInput, massInput);
    generateFormulaImg(secondLawOfNewton.acceleration(forceInput, massInput, (0, _secondLawOfNewtonFormulas.acceleration)(forceInput, massInput)));
  });

  if (isNaN(document.getElementById('acceleration').value)) {
    document.getElementById('acceleration').addEventListener('keyup', function () {
      accelerationInput = document.getElementById('acceleration').value;
      if (isNaN(accelerationInput)) document.getElementById('force').value = (0, _secondLawOfNewtonFormulas.force)(massInput, accelerationInput);
      generateFormulaImg(secondLawOfNewton.force(massInput, accelerationInput, (0, _secondLawOfNewtonFormulas.force)(massInput, accelerationInput)));
    });
  } else {
    document.getElementById('force').value = (0, _secondLawOfNewtonFormulas.force)(massInput, accelerationInput);
    generateFormulaImg(secondLawOfNewton.force(massInput, accelerationInput, (0, _secondLawOfNewtonFormulas.force)(massInput, accelerationInput)));
  }
};

var accelerationEvent = function accelerationEvent() {
  //===============================================================================
  document.getElementById('force').removeEventListener('keyup', forceEvent); //===================================================================================

  document.getElementById('mass').removeEventListener('keyup', massEvent);
  var accelerationInput = document.getElementById('acceleration').value;
  document.getElementById('mass').addEventListener('keyup', function () {
    var massInput = document.getElementById('mass').value;
    if (!isNaN(massInput)) document.getElementById('force').value = (0, _secondLawOfNewtonFormulas.force)(massInput, accelerationInput);
    generateFormulaImg(secondLawOfNewton.force(massInput, accelerationInput, (0, _secondLawOfNewtonFormulas.force)(massInput, accelerationInput)));
  });
  document.getElementById('force').addEventListener('keyup', function () {
    var forceInput = document.getElementById('force').value;
    if (!isNaN(forceInput)) document.getElementById('mass').value = (0, _secondLawOfNewtonFormulas.mass)(forceInput, accelerationInput);
    generateFormulaImg(secondLawOfNewton.mass(forceInput, accelerationInput, (0, _secondLawOfNewtonFormulas.mass)(forceInput, accelerationInput)));
  });
}; //===============================================================================


document.getElementById('force').addEventListener('keyup', forceEvent); //===================================================================================

document.getElementById('mass').addEventListener('keyup', massEvent); //===================================================================================

document.getElementById('acceleration').addEventListener('keyup', accelerationEvent);
document.getElementById('initialSpeed').addEventListener('keyup', calculateAcceleration);
document.getElementById('finalSpeed').addEventListener('keyup', calculateAcceleration);
document.getElementById('time').addEventListener('keyup', calculateAcceleration);
document.getElementById('calculateAcceleration').addEventListener('click', calculateAcceleration2);
document.getElementById('calcular').addEventListener('click', function () {
  var velocidadInicial = parseFloat(document.getElementById('velocidadInicial').value);
  var masa = parseFloat(document.getElementById('masa').value);
  var distancia = parseFloat(document.getElementById('distancia').value);
  var aceleracion = (0, _secondLawOfNewtonFormulas.accelerationWithVoAndX)(velocidadInicial, distancia);
  document.getElementById('CoeficienteRozamientoCinetico').value = (0, _secondLawOfNewtonFormulas.coefficientKineticFriction)(aceleracion);
  document.getElementById('fuerzaNormal').value = (0, _secondLawOfNewtonFormulas.normalForce)(masa);
  document.getElementById('fuerzaFriccionCinetica').value = (0, _secondLawOfNewtonFormulas.kineticFrictionForce)(document.getElementById('CoeficienteRozamientoCinetico').value, document.getElementById('fuerzaNormal').value);
});
document.getElementById('reiniciar').addEventListener('click', function () {
  location.reload();
});
document.getElementById('reiniciar2').addEventListener('click', function () {
  location.reload();
});