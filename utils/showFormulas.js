
const formulas = {
    freefall: {
        y: (vf, vo, t, result = '?') => `https://latex.codecogs.com/gif.latex?Altura&space;=&space;\\left&space;(&space;\\frac{${vf}&plus;${vo}}{2}\\right&space;)*${t}&space;=&space;${result}`,
        t: (vf, vo, result) => `https://latex.codecogs.com/gif.latex?Tiempo&space;=&space;\\frac{${vf}-${vo}}{9.8}=${result}`,
        vf: (vo, t, result) => `https://latex.codecogs.com/gif.latex?vf&space;=&space;${vo}&space;&plus;&space;(9.8*${t})=${result}`,
        tWithY: (y, result) => `https://latex.codecogs.com/gif.latex?tiempo&space;=&space;(\\frac{2*${y}}{9.8})^{2}=${result}`,
        inverseVf: (vo, t, result) => `https://latex.codecogs.com/gif.latex?vf=${vo}-(9.8*${t})=${result}`
    },
    secondLawOfNewton: {
        accelerationWithVoVfAndTime: (vf, vo, t, result) => `https://latex.codecogs.com/gif.latex?Aceleracion=\\frac{${vf}-${vo}}{${t}}=${result}`,
        accelerationWithTimeAndX_voCero: (x, t, result) => `https://latex.codecogs.com/gif.latex?Aceleracion=\\frac{2*${x}}{${t}^{2}}=${result}`,
        acceleration: (f, m, result) => `https://latex.codecogs.com/gif.latex?Aceleracion=\\frac{${f}}{${m}}=${result}`,
        mass: (f, a, result) => `https://latex.codecogs.com/gif.latex?Masa=\\frac{${f}}{${a}}=${result}`,
        force: (m, a, result) => `https://latex.codecogs.com/gif.latex?Fuerza=${m}*${a}=${result}`,
    }
    
    
}

export {
    formulas
}