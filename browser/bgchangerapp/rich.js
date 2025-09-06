let color = undefined

// Adding handler
window.addEventListener('DOMContentLoaded', function() {
  this.document.querySelector('#btn').addEventListener('click', function() {
    onClickMeClicked()
  })
})

// Controller
function onClickMeClicked () {
  updateBg()
}

// Model
function updateBg() {
  color = getBgColor()
  renderBg()
}

function getBgColor() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const hexChars = [...letters, ...digits]

  let randomColor = '#'
  for (let i = 1; i <= 6; i++) {
    randomColor += hexChars[Math.floor(Math.random() * hexChars.length)]
  }
  return randomColor
}

function renderBg() {
  document.getElementById('colorHEX').innerHTML = color
  document.body.style.backgroundColor = color
}