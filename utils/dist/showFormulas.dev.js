"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formulas = void 0;
var formulas = {
  freefall: {
    y: function y(vf, vo, t) {
      var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '?';
      return "https://latex.codecogs.com/gif.latex?Altura&space;=&space;\\left&space;(&space;\\frac{".concat(vf, "&plus;").concat(vo, "}{2}\\right&space;)*").concat(t, "&space;=&space;").concat(result);
    },
    t: function t(vf, vo, result) {
      return "https://latex.codecogs.com/gif.latex?Tiempo&space;=&space;\\frac{".concat(vf, "-").concat(vo, "}{9.8}=").concat(result);
    },
    vf: function vf(vo, t, result) {
      return "https://latex.codecogs.com/gif.latex?vf&space;=&space;".concat(vo, "&space;&plus;&space;(9.8*").concat(t, ")=").concat(result);
    },
    tWithY: function tWithY(y, result) {
      return "https://latex.codecogs.com/gif.latex?tiempo&space;=&space;(\\frac{2*".concat(y, "}{9.8})^{2}=").concat(result);
    },
    inverseVf: function inverseVf(vo, t, result) {
      return "https://latex.codecogs.com/gif.latex?vf=".concat(vo, "-(9.8*").concat(t, ")=").concat(result);
    }
  }
};
exports.formulas = formulas;