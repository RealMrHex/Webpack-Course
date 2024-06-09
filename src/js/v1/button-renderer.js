import buttons from './../../css/v1/buttons.module.css';

const btn = document.createElement('button');
btn.innerText = import.meta.env.VITE_BUTTON_TEXT;
btn.classList.add(buttons.btn);
btn.classList.add(buttons['btn-danger']);
document.body.appendChild(btn);