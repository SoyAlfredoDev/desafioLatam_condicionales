const parrafo = document.querySelector('.parrafo_respuesta');
const boton = document.querySelector('.btn-validad-box-3')
let contador = 0;

function validarPassword() {
    contador++
    const select1 = document.querySelector('.select1');
    const select2 = document.querySelector('.select2');
    const select3 = document.querySelector('.select3');
    if (select1.value == 9 && select2.value == 1 && select3.value == 1) {
        parrafo.innerHTML = 'contraseña correcta'
    }
    else {
        parrafo.innerHTML = 'contraseña nro: ' + contador + ' incorrecta'

    }
}

boton.addEventListener('click', validarPassword)