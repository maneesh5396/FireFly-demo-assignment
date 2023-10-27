
const card1 = document.getElementById('card-btn1');
const card2 = document.getElementById('card-btn2');
const card3 = document.getElementById('card-btn3');
const card4 = document.getElementById('card-btn4');
const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');

card1.addEventListener('click', () => {
    modal.style.display = 'flex';
});
card2.addEventListener('click', () => {
    modal.style.display = 'flex';
});
card3.addEventListener('click', () => {
    modal.style.display = 'flex';
});
card4.addEventListener('click', () => {
    modal.style.display = 'flex';
});
modal.style.display = 'none';

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

