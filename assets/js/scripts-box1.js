const btn = document.querySelector('.btn-border-img');
const imgBorder = document.querySelector('.imgBorder');

btn.addEventListener('click', () => {
    if (btn.textContent == 'Mostrar bordes') {
        imgBorder.className = 'conBordes';
        btn.innerHTML = 'Quitar bordes';

    } else {
        imgBorder.className = 'sinBordes';
        btn.innerHTML = 'Mostrar bordes';
    }
})