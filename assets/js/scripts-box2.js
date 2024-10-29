const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const verificar = document.querySelector('#verificar');
const mensaje = document.querySelector('#mensaje');
verificar.addEventListener('click', () => {
    const total = Number(input1.value) + Number(input2.value) + Number(input3.value);

    if (total) {
        if (total > 10) {
            mensaje.className = "mensajeWarning"
            mensaje.innerHTML = "Llevas demasiados stickers"

        } else {
            mensaje.className = "mensajeSuccess"
            mensaje.innerHTML = 'llevas ' + total + ' stickers'

        }
    }
    else {
        mensaje.className = "mensajeWarning"
        mensaje.innerHTML = "No llevas stickers"

    }

})

input1


