const btnsPlusMinus = document.querySelectorAll('.activate');

function displayText(e) {
    const btnPlusMinus = e.currentTarget;
    const text = btnPlusMinus.closest('.faqs__question').querySelector('.faqs__text');
    btnPlusMinus.classList.toggle('active--true');
    if (btnPlusMinus.classList.contains('active--true')) {
        btnPlusMinus.src = './assets/images/icon-minus.svg';
        text.style.display = 'block';
    } else {
        btnPlusMinus.src = './assets/images/icon-plus.svg';
        text.style.display = 'none';
    }
}

btnsPlusMinus.forEach(btn => {
    btn.addEventListener('click', displayText);
})