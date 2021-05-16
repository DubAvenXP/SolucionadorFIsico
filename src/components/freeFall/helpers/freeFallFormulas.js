const GRAVITY = 9.8;

/**
 * Caida libre - Calcular altura (Y)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos 
 * @returns Altura (Y) en metros
 */
const y = (vo, vf, t) => ((vf+vo)/2)*t;

/**
 * Caida libre - Calcular velocidad final (Vf)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Velocidad final (Vf) en m/s^2
 */
const vf = (vo, t, g = GRAVITY) => vo + (g * t);
const inverseVf = (vo, t, g = GRAVITY) => vo - (g * t);

/**
 * Caida libre - Calcular velocidad inicial (Vo)
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Velocidad inicial (Vo) en m/s^2
 */
const vo = (vf, t, g = GRAVITY) => vf - (g * t);

/**
 * Caida libre - Calcular Altura (Y) con Velocidad inicial (Vo)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Altura (Y) en metros
 */
const yWithVo = ( t, g = GRAVITY) => (1/2)*g*Math.pow(t, 2);


/**
 * Caida libre - Calcular Altura (Y) con Velocidad final (Vo)
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns Altura (Y) en metros
 */
const yWithVf = (vf, t, g = GRAVITY) => (vf*t) - ((1/2)*g*Math.pow(t, 2));

/**
 * Caida libre - Calcular Tiempo con vo y vf
 * @param {number} vo Velocidad final en metros por segundo
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns tiempo (t) en segundos
 */
const t = (vo, vf, g = GRAVITY) => (vf-vo)/g;

/**
 * Caida libre - Calcular tiempo con Altura (Y)
 * @param {number} y Altura en metros
 * @param {number} g Gravedad, por defecto sera 9.8
 * @returns tiempo (t) en segundos
 */
const tWithY = (y, g = GRAVITY) => Math.sqrt((2*y)/g);

export {
    y,
    vf,
    vo,
    yWithVf,
    yWithVo,
    t,
    tWithY,
    inverseVf
}