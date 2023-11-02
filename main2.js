// console.log(document);

// const h1s = document.querySelectorAll('h1');

// console.log(h1s)

// const divs = document.querySelectorAll('.box');

// console.log(divs);

// divs.forEach(div => {
//     console.log(div.innerHTML)
// })

// const divs = document.getElementsByClassName('box');

// console.log(divs);

// console.log(divs.length);

// divs.forEach(div => {
//     console.log(div.innerHtml);
// })

// for (let index = 0; index < divs.length; index++) {
//     console.log(divs[index]);
// }

// const divs = document.querySelectorAll('.box');

// // divs[1].className = 'active';
// divs[1].classList.add('active');
// divs[1].classList.remove('box');

// console.log(divs);

// divs.forEach(div => {
//     console.log(div)
// })

const topBar = document.querySelector('.topBar');
const words = document.querySelector('.words');
const spans = document.querySelectorAll('.words span');

spans.forEach(span => {
    span.addEventListener('click', () => {
        if (!span.classList.contains('yuxaridayam')) {
            span.classList.add('yuxaridayam');
            topBar.appendChild(span);
        } else {
            span.classList.remove('yuxaridayam');
            topBar.removeChild(span);
            words.appendChild(span);
        }
    })
});

console.log('Sefa kod yazdi');