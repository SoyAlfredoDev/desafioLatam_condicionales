const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')
/*
box1.hidden = false;
box2.hidden = true;
box3.hidden = true;
*/

item1.addEventListener('click', () => {
    box1.hidden = false;
    box2.hidden = true;
    box3.hidden = true;
})

item2.addEventListener('click', () => {
    box1.hidden = true;
    box2.hidden = false;
    box3.hidden = true;
})

item3.addEventListener('click', () => {
    box1.hidden = true;
    box2.hidden = true;
    box3.hidden = false;
})