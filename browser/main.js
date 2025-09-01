// const h1DOM = document.getElementById('helloTxt').innerHTML = '<strong>Hello, Coding!</strong>'

const h1DOM = document.getElementById('helloTxt');
// h1DOM.innerHTML = '<strong>Hello, Coding!</strong>'
h1DOM.innerHTML += '<strong>Hello, Coding!</strong>'

// Styling
h1DOM.style.backgroundColor = '#ff0000'
h1DOM.style.color = '#ffffff'
h1DOM.style.fontSize = '24px'
h1DOM.style.padding = '10px'

// Insert a paragraph
const pDOM = document.createElement('p')
pDOM.textContent = 'This is a paragraph.'
document.body.appendChild(pDOM)
pDOM.classList.add('borderBlack')