const btnModalOpen = document.getElementById('btn-modal');
const btnModalClose = document.getElementById('btn-close');
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');
const form = document.getElementById('form');
const inputEmail = document.getElementById('email');
const textError = document.querySelector('.text__error');


function resertForm() {
    const fromContainer = document.getElementById('form');

    fromContainer.reset();
}

form.addEventListener('submit', (e) => {

if(form.checkValidity()) {
        e.preventDefault(e);
        modalContainer.classList.add('contenedor--show');
        modalContent.classList.add('content__end--show');
    }
});

btnModalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.classList.remove('contenedor--show');
    modalContent.classList.remove('content__end--show');

    resertForm();
});
