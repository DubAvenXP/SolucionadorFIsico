"use strict";

var _freeFallFormulas = require("./helpers/freeFallFormulas.js");

var reactiveInputVf = function reactiveInputVf() {
  var vfInput = parseFloat(document.getElementById("finalSpeed").value);
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById('time').value = (0, _freeFallFormulas.t)(voInput, vfInput);
  var tInput = parseFloat(document.getElementById("time").value);
  document.getElementById('height').value = (0, _freeFallFormulas.y)(voInput, vfInput, tInput);
};

var reactiveInputVo = function reactiveInputVo() {
  var direction = document.getElementById('direction');
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById("time").addEventListener('keyup', function () {
    var tInput = parseFloat(document.getElementById("time").value);
    direction === 'down' ? document.getElementById('finalSpeed').value = (0, _freeFallFormulas.vf)(voInput, tInput) : document.getElementById('finalSpeed').value = (0, _freeFallFormulas.inverseVf)(voInput, tInput);
    var vfInput = parseFloat(document.getElementById("finalSpeed").value);
    document.getElementById('height').value = (0, _freeFallFormulas.y)(voInput, vfInput, tInput);
  });
};

var reactiveInputHeight = function reactiveInputHeight() {
  var yInput = parseInt(document.getElementById("height").value);
  document.getElementById('time').value = (0, _freeFallFormulas.tWithY)(yInput);
  var tInput = parseFloat(document.getElementById("time").value);
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById('finalSpeed').value = (0, _freeFallFormulas.vf)(voInput, tInput);
};

var reactiveInputTime = function reactiveInputTime() {
  var tInput = parseFloat(document.getElementById("time").value);
  var voInput = parseFloat(document.getElementById("initialSpeed").value);
  document.getElementById('finalSpeed').value = (0, _freeFallFormulas.vf)(voInput, tInput);
  var vfInput = parseFloat(document.getElementById("finalSpeed").value);
  document.getElementById('height').value = (0, _freeFallFormulas.y)(voInput, vfInput, tInput);
};

document.getElementById("height").addEventListener('keyup', reactiveInputHeight);
document.getElementById("time").addEventListener('keyup', reactiveInputTime);
document.getElementById("finalSpeed").addEventListener('keyup', reactiveInputVf);
document.getElementById("initialSpeed").addEventListener('keyup', reactiveInputVo);
document.getElementById("direction").addEventListener('click', reactiveInputVo);