const formulas = {
    freefall: {
        y: (vf, vo, t, result = '?') => `https://latex.codecogs.com/gif.latex?Altura&space;=&space;\\left&space;(&space;\\frac{${vf}&plus;${vo}}{2}\\right&space;)*${t}&space;=&space;${result}`,
        t: (vf, vo, result) => `https://latex.codecogs.com/gif.latex?Tiempo&space;=&space;\\frac{${vf}-${vo}}{9.8}=${result}`,
        vf: (vo, t, result) => `https://latex.codecogs.com/gif.latex?vf&space;=&space;${vo}&space;&plus;&space;(9.8*${t})=${result}`,
        tWithY: (y, result) => `https://latex.codecogs.com/gif.latex?tiempo&space;=&space;(\\frac{2*${y}}{9.8})^{2}=${result}`,
        inverseVf: (vo, t, result) => `https://latex.codecogs.com/gif.latex?vf=${vo}-(9.8*${t})=${result}`
    }
}

export {
    formulas
}