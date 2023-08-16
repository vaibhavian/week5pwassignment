const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const agreeCheckbox = document.getElementById('agreeCheckbox');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

agreeCheckbox.addEventListener('change', () => {
    if (agreeCheckbox.checked) {
        closeModalBtn.disabled = false;
    } else {
        closeModalBtn.disabled = true;
    }
});
