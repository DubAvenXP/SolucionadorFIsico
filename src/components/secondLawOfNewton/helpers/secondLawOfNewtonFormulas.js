const GRAVITY = 9.8;

const force = (mass, acceleration) => mass*acceleration;
const acceleration = (force, mass) => force/mass;
const mass = (force, acceleration) => force/acceleration;

const accelerationWithTimeAndX_voCero = (x, t) => (2 * x)/Math.pow(t, 2);
const accelerationWithVoVfAndTime = (vo, vf, t) => (vf - vo)/t;

const w = (mass, g = GRAVITY) => mass*g; 
const kineticFrictionForce = (kFCoeffient, normalForce) => kFCoeffient*normalForce;
const normalForce = (mass, g = GRAVITY) => mass * g;
const negativekineticFrictionForce = (mass, acceleration) => mass * acceleration;
const coefficientKineticFriction = (acceleration, g = GRAVITY) => (-(acceleration)/g);

const accelerationWithVoAndX = (vo, x) => -(Math.pow(vo, 2)/(2*x));

/**
 * MRUV - Calcular distancia (X)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos
 * @returns distancia (X) en metros
 */
const x = (vo, vf, t) => ((vf+vo)/2)*t;

/**
 * MRUV - Calcular velocidad final (Vf)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} a aceleracion en metros por segundo cuadrados
 * @returns Velocidad final (Vf) en m/s^2
 */
const vf = (vo, t, a) => vo + (a * t);


const inverseVf = (vo, t, a) => vo - (a * t);

/**
 * MRUV - Calcular velocidad inicial (Vo)
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} a aceleracion en metros por segundo cuadrados
 * @returns Velocidad inicial (Vo) en m/s^2
 */
const vo = (vf, t, a) => vf - (a * t);

/**
 * MRUV - Calcular Distancia (X) con Velocidad inicial (Vo)
 * @param {number} vo Velocidad inicial en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} a aceleracion en metros por segundo cuadrados
 * @returns Distancia (X) en metros
 */
const xWithVo = ( t, a, vo) => (vo*t) + (1/2)*a*Math.pow(t, 2);


/**
 * MRUV - Distancia (X) con Velocidad final (Vo)
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} t Tiempo en segundos
 * @param {number} a aceleracion en metros por segundo cuadrados
 * @returns Distancia (X) en metros
 */
const xWithVf = (vf, t, a) => (vf*t) - ((1/2)*a*Math.pow(t, 2));

/**
 * MRUV - Calcular Tiempo con vo y vf
 * @param {number} vo Velocidad final en metros por segundo
 * @param {number} vf Velocidad final en metros por segundo
 * @param {number} a aceleracion en metros por segundo cuadrados
 * @returns tiempo (t) en segundos
 */
const t = (vo, vf, a) => (vf-vo)/a;

export {
    acceleration,
    accelerationWithTimeAndX_voCero,
    coefficientKineticFriction,
    force,
    normalForce,
    mass,
    accelerationWithVoVfAndTime,
    w,
    kineticFrictionForce,
    negativekineticFrictionForce,
    accelerationWithVoAndX
}