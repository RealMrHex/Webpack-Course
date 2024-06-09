import './../../css/v1/app.css';
import './../../css/v2/tailwind.css';
import './../../css/v3/vazir.css';
import logoDark from '/static/svg/logo-dark.svg';

const logo = document.createElement('img');
logo.src = logoDark;
logo.width = 300;
document.body.appendChild(logo);

console.log('tailwind page initialized');
