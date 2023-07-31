import './style.css';
import gmail from './assets/gmail.png';

const paragraph = document.createElement('p');
paragraph.textContent = 'Capstone project';

const link = document.createElement('a');
link.textContent = 'See project';
link.href = '#';

const image = document.createElement('img');
image.src = gmail;

document.body.appendChild(paragraph);
document.body.appendChild(link);
document.body.appendChild(image);
