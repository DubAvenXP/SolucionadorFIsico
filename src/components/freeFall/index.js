import { t, y, vf, tWithY, inverseVf, vo } from "./helpers/freeFallFormulas.js";
import { formulas } from "../../../utils/showFormulas.js";
const $formulasContainter = document.getElementById('formulas-container');

const generateFormulaImg = (src, className) => {
    const $imgs = document.getElementsByClassName(className);
    
    for (let i = 0; i < $imgs.length; i++) {
        $imgs.item(i).remove;
    }
    const $figure = document.createElement('figure');
    const $img = document.createElement('img');
    $img.src = src;
    $figure.appendChild($img);
    $figure.className = `p-4 ${className}`
    $formulasContainter.appendChild($figure);
}

const { freefall } = formulas;
const reactiveInputVf = () => {
    const vfInput = parseFloat(document.getElementById("finalSpeed").value);
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    
    document.getElementById('time').value = t(voInput, vfInput);
    generateFormulaImg(freefall.t(vfInput, voInput, t(voInput, vfInput)), 'timeFormula');

    const tInput = parseFloat(document.getElementById("time").value);
    
    document.getElementById('height').value = y(voInput, vfInput, tInput);
    generateFormulaImg(freefall.y(vfInput, voInput, tInput, y(voInput, vfInput, tInput)), 'heightFormula');
}

const reactiveInputVo = () => {
    const direction = document.getElementById('direction').value;
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    document.getElementById("time").addEventListener('keyup', () => {
        const tInput = parseFloat(document.getElementById("time").value);
        if (direction === 'down') {
            document.getElementById('finalSpeed').value = vf(voInput, tInput);
            generateFormulaImg(freefall.vf(voInput, tInput, vf(voInput, tInput)));
        } else {
            document.getElementById('finalSpeed').value = inverseVf(voInput, tInput);
            generateFormulaImg(freefall.inverseVf(voInput, tInput, inverseVf(voInput, tInput)));
        }

        const vfInput = parseFloat(document.getElementById("finalSpeed").value);
        document.getElementById('height').value = y(voInput, vfInput, tInput);
        generateFormulaImg(freefall.y(vfInput, voInput, tInput, y(voInput, vfInput, tInput)));
    });
}

const reactiveInputHeight = () => {
    const yInput = parseInt(document.getElementById("height").value);
    document.getElementById('time').value = tWithY(yInput);
    generateFormulaImg(freefall.tWithY(yInput, tWithY(yInput)));
    
    const tInput = parseFloat(document.getElementById("time").value);
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    document.getElementById('finalSpeed').value = vf(voInput, tInput);
    generateFormulaImg(freefall.vf(voInput, tInput, vf(voInput, tInput)));
}

const reactiveInputTime = () => {
    const tInput = parseFloat(document.getElementById("time").value);
    const voInput = parseFloat(document.getElementById("initialSpeed").value);
    document.getElementById('finalSpeed').value = vf(voInput, tInput);
    generateFormulaImg(freefall.vf(voInput, tInput, vf(voInput, tInput)));
    const vfInput = parseFloat(document.getElementById("finalSpeed").value);
    document.getElementById('height').value = y(voInput, vfInput, tInput);
    generateFormulaImg(freefall.y(vfInput, voInput, tInput, y(voInput, vfInput, tInput)));
}

document.getElementById("height").addEventListener('keyup', reactiveInputHeight);
document.getElementById("time").addEventListener('keyup', reactiveInputTime);
document.getElementById("finalSpeed").addEventListener('keyup', reactiveInputVf);
document.getElementById("initialSpeed").addEventListener('keyup', reactiveInputVo);
document.getElementById("direction").addEventListener('click', reactiveInputVo);