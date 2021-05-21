"use strict";

var _freeFallFormulas = require("./helpers/freeFallFormulas.js");

var _showFormulas = require("../../../utils/showFormulas.js");

var $formulasContainter = document.getElementById('formulas-container');

var generateFormulaImg = function generateFormulaImg(src, className) {
  var $imgs = document.getElementsByClassName(className);

  for (var i = 0; i < $imgs.length; i++) {
    $imgs.item(i).remove;
  }

  var $figure = document.createElement('figure');
  var $img = document.createElement('img');
  $img.src = src;
  $figure.appendChild($img);
  $figure.className = "p-4 ".concat(className);
  $formulasContainter.appendChild($figure);
};

var freefall = _showFormulas.formulas.freefall;

var reactiveInputVf = function reactiveInputVf() {
  var vfInput = parseFloat(document.getElementById("finalSpeed").value);
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById('time').value = (0, _freeFallFormulas.t)(voInput, vfInput);
  generateFormulaImg(freefall.t(vfInput, voInput, (0, _freeFallFormulas.t)(voInput, vfInput)), 'timeFormula');
  var tInput = parseFloat(document.getElementById("time").value);
  document.getElementById('height').value = (0, _freeFallFormulas.y)(voInput, vfInput, tInput);
  generateFormulaImg(freefall.y(vfInput, voInput, tInput, (0, _freeFallFormulas.y)(voInput, vfInput, tInput)), 'heightFormula');
};

var reactiveInputVo = function reactiveInputVo() {
  var direction = document.getElementById('direction').value;
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById("time").addEventListener('keyup', function () {
    var tInput = parseFloat(document.getElementById("time").value);

    if (direction === 'down') {
      document.getElementById('finalSpeed').value = (0, _freeFallFormulas.vf)(voInput, tInput);
      generateFormulaImg(freefall.vf(voInput, tInput, (0, _freeFallFormulas.vf)(voInput, tInput)));
    } else {
      document.getElementById('finalSpeed').value = (0, _freeFallFormulas.inverseVf)(voInput, tInput);
      generateFormulaImg(freefall.inverseVf(voInput, tInput, (0, _freeFallFormulas.inverseVf)(voInput, tInput)));
    }

    var vfInput = parseFloat(document.getElementById("finalSpeed").value);
    document.getElementById('height').value = (0, _freeFallFormulas.y)(voInput, vfInput, tInput);
    generateFormulaImg(freefall.y(vfInput, voInput, tInput, (0, _freeFallFormulas.y)(voInput, vfInput, tInput)));
  });
};

var reactiveInputHeight = function reactiveInputHeight() {
  var yInput = parseInt(document.getElementById("height").value);
  document.getElementById('time').value = (0, _freeFallFormulas.tWithY)(yInput);
  generateFormulaImg(freefall.tWithY(yInput, (0, _freeFallFormulas.tWithY)(yInput)));
  var tInput = parseFloat(document.getElementById("time").value);
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById('finalSpeed').value = (0, _freeFallFormulas.vf)(voInput, tInput);
  generateFormulaImg(freefall.vf(voInput, tInput, (0, _freeFallFormulas.vf)(voInput, tInput)));
};

var reactiveInputTime = function reactiveInputTime() {
  var tInput = parseFloat(document.getElementById("time").value);
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById('finalSpeed').value = (0, _freeFallFormulas.vf)(voInput, tInput);
  generateFormulaImg(freefall.vf(voInput, tInput, (0, _freeFallFormulas.vf)(voInput, tInput)));
  var vfInput = parseFloat(document.getElementById("finalSpeed").value);
  document.getElementById('height').value = (0, _freeFallFormulas.y)(voInput, vfInput, tInput);
  generateFormulaImg(freefall.y(vfInput, voInput, tInput, (0, _freeFallFormulas.y)(voInput, vfInput, tInput)));
};

document.getElementById("height").addEventListener('keyup', reactiveInputHeight);
document.getElementById("time").addEventListener('keyup', reactiveInputTime);
document.getElementById("finalSpeed").addEventListener('keyup', reactiveInputVf);
document.getElementById("initialSpeed").addEventListener('keyup', reactiveInputVo);
document.getElementById("direction").addEventListener('click', reactiveInputVo);