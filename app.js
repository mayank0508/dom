// const ul = document.body.firstElementChild.nextElementSibling;

// const li1 = ul.firstElementChild;

// console.log(ul);
// console.log(li1);

const ul = document.querySelector('section');
const button = document.querySelector('button');

// ul.style.backgroundColor = 'red'

ul.className = 'red-bg';

button.addEventListener('click', () => {
    // if (ul.className === 'red-bg visible') {
    //     ul.className = 'red-bg invisible';
    // } else {
    //     ul.className = 'red-bg visible';
    // }

    // ul.classList.toggle('visible');
    ul.classList.toggle('invisible');
});