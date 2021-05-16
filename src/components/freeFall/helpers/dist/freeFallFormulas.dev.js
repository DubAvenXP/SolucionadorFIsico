"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inverseVf = exports.tWithY = exports.t = exports.yWithVo = exports.yWithVf = exports.vo = exports.vf = exports.y = void 0;
var GRAVITY = 9.8;
/**
 * Caida libre - Calcular altura (Y)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos 
 * @returns Altura (Y) en metros
 */

var y = function y(vo, vf, t) {
  return (vf + vo) / 2 * t;
};
/**
 * Caida libre - Calcular velocidad final (Vf)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Velocidad final (Vf) en m/s^2
 */


exports.y = y;

var vf = function vf(vo, t) {
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GRAVITY;
  return vo + g * t;
};

exports.vf = vf;

var inverseVf = function inverseVf(vo, t) {
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GRAVITY;
  return vo - g * t;
};
/**
 * Caida libre - Calcular velocidad inicial (Vo)
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Velocidad inicial (Vo) en m/s^2
 */


exports.inverseVf = inverseVf;

var vo = function vo(vf, t) {
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GRAVITY;
  return vf - g * t;
};
/**
 * Caida libre - Calcular Altura (Y) con Velocidad inicial (Vo)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Altura (Y) en metros
 */


exports.vo = vo;

var yWithVo = function yWithVo(t) {
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GRAVITY;
  return 1 / 2 * g * Math.pow(t, 2);
};
/**
 * Caida libre - Calcular Altura (Y) con Velocidad final (Vo)
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Altura (Y) en metros
 */


exports.yWithVo = yWithVo;

var yWithVf = function yWithVf(vf, t) {
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GRAVITY;
  return vf * t - 1 / 2 * g * Math.pow(t, 2);
};
/**
 * Caida libre - Calcular Tiempo con vo y vf
 * @param {number} vo Velocidad final en metros por segundo
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns tiempo (t) en segundos
 */


exports.yWithVf = yWithVf;

var t = function t(vo, vf) {
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GRAVITY;
  return (vf - vo) / g;
};
/**
 * Caida libre - Calcular tiempo con Altura (Y)
 * @param {number} y Altura en metros
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns tiempo (t) en segundos
 */


exports.t = t;

var tWithY = function tWithY(y) {
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GRAVITY;
  return Math.sqrt(2 * y / g);
};

exports.tWithY = tWithY;