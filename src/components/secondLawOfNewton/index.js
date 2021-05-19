import { 
    acceleration, 
    force, 
    mass, 
    accelerationWithTimeAndX_voCero, 
    accelerationWithVoVfAndTime,
    coefficientKineticFriction,
    normalForce,
    accelerationWithVoAndX,
    kineticFrictionForce,
} from "./helpers/secondLawOfNewtonFormulas.js";

const calculateAcceleration = () => {
    const initialSpeed = document.getElementById('initialSpeed').value;
    const finalSpeed = document.getElementById('finalSpeed').value;
    const time = document.getElementById('time').value;
    if (!(isNaN(initialSpeed) && isNaN(finalSpeed) && isNaN(time))) {
        document.getElementById('acceleration').value = accelerationWithVoVfAndTime(initialSpeed, finalSpeed, time);
    }

}

const calculateAcceleration2 = () => {
    const time = document.getElementById('time').value;
    const distance = document.getElementById('distance').value;
    console.log(accelerationWithTimeAndX_voCero(distance, time));
    if (!(isNaN(distance) && isNaN(time))) {
        document.getElementById('acceleration').value = accelerationWithTimeAndX_voCero(distance, time);
    } else {
        console.log('valores insuficientes');
    }
}

document.getElementById('force').addEventListener('keyup', () => {
    const forceInput = document.getElementById('force').value;
    let accelerationInput = document.getElementById('acceleration').value;
    document.getElementById('mass').addEventListener('keyup', () => {
        const massInput = document.getElementById('mass').value;
        if (!isNaN(massInput)) document.getElementById('acceleration').value = acceleration(forceInput, massInput);
    });
    if (isNaN(document.getElementById('acceleration').value)) {
        document.getElementById('acceleration').addEventListener('keyup', () => {
            accelerationInput = document.getElementById('acceleration').value;
            if (!isNaN(accelerationInput)) document.getElementById('mass').value = mass(forceInput, accelerationInput);
        });
    } else {
        document.getElementById('mass').value = mass(forceInput, accelerationInput);
    }
});

document.getElementById('mass').addEventListener('keyup', () => {
    const massInput = document.getElementById('mass').value;
    let accelerationInput = document.getElementById('acceleration').value;
    document.getElementById('force').addEventListener('keyup', () => {
        const forceInput = document.getElementById('force').value;
        if (!isNaN(forceInput)) document.getElementById('acceleration').value = acceleration(forceInput, massInput);
    });
    if (isNaN(document.getElementById('acceleration').value)) {
        document.getElementById('acceleration').addEventListener('keyup', () => {
            accelerationInput = document.getElementById('acceleration').value;
            if (isNaN(accelerationInput)) document.getElementById('force').value = force(massInput, accelerationInput);
        })
    } else {
        document.getElementById('force').value = force(massInput, accelerationInput);
    }
});

document.getElementById('acceleration').addEventListener('keyup', () => {
    const accelerationInput = document.getElementById('acceleration').value;
    document.getElementById('mass').addEventListener('keyup', () => {
        const massInput = document.getElementById('mass').value;
        if (!isNaN(massInput)) document.getElementById('force').value = force(massInput, accelerationInput);
    });
    document.getElementById('force').addEventListener('keyup', () => {
        const forceInput = document.getElementById('force').value;
        if (!isNaN(forceInput)) document.getElementById('mass').value = mass(forceInput, accelerationInput);
    });

});

document.getElementById('initialSpeed').addEventListener('keyup', calculateAcceleration);
document.getElementById('finalSpeed').addEventListener('keyup', calculateAcceleration);
document.getElementById('time').addEventListener('keyup', calculateAcceleration);
document.getElementById('calculateAcceleration').addEventListener('click', calculateAcceleration2);

document.getElementById('calcular').addEventListener('click', () => {
    
    const velocidadInicial = parseFloat(document.getElementById('velocidadInicial').value);
    const masa = parseFloat(document.getElementById('masa').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const aceleracion = accelerationWithVoAndX(velocidadInicial, distancia);
    document.getElementById('CoeficienteRozamientoCinetico').value = coefficientKineticFriction(aceleracion);
    document.getElementById('fuerzaNormal').value = normalForce(masa);
    document.getElementById('fuerzaFriccionCinetica').value = kineticFrictionForce(document.getElementById('CoeficienteRozamientoCinetico').value, document.getElementById('fuerzaNormal').value);

})