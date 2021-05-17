import { t, y, yWithVf, yWithVo, vf, vo, tWithY, inverseVf } from "./helpers/freeFallFormulas.js";

const reactiveInputVf = () => {
    const vfInput = parseFloat(document.getElementById("finalSpeed").value);
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    document.getElementById('time').value = t(voInput, vfInput);
    const tInput = parseFloat(document.getElementById("time").value);
    document.getElementById('height').value = y(voInput, vfInput, tInput);
}

const reactiveInputVo = () => {
    const direction = document.getElementById('direction');
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    document.getElementById("time").addEventListener('keyup', () => {
        const tInput = parseFloat(document.getElementById("time").value);

        document.getElementById('finalSpeed').value = vf(voInput, tInput);

        const vfInput = parseFloat(document.getElementById("finalSpeed").value);
        document.getElementById('height').value = y(voInput, vfInput, tInput);
    });
}

const reactiveInputHeight = () => {
    const yInput = parseInt(document.getElementById("height").value);
    document.getElementById('time').value = tWithY(yInput);
    const tInput = parseFloat(document.getElementById("time").value);
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    document.getElementById('finalSpeed').value = vf(voInput, tInput);
}

const reactiveInputTime = () => {
    const tInput = parseFloat(document.getElementById("time").value);
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    document.getElementById('finalSpeed').value = vf(voInput, tInput);
    const vfInput = parseFloat(document.getElementById("finalSpeed").value);
    document.getElementById('height').value = y(voInput, vfInput, tInput);
}

document.getElementById("height").addEventListener('keyup', reactiveInputHeight);
document.getElementById("time").addEventListener('keyup', reactiveInputTime);
document.getElementById("finalSpeed").addEventListener('keyup', reactiveInputVf);
document.getElementById("initialSpeed").addEventListener('keyup', reactiveInputVo);
document.getElementById("direction").addEventListener('click', reactiveInputVo);