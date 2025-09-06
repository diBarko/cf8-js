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
  const colors = ['black', 'red', 'green', 'blue', 'gray', 'fuchsia', 'orange', 'white', 'lime']
  return colors[ Math.floor(Math.random() * colors.length) ]
}

function renderBg() {
  document.getElementById('colorRGB').innerHTML = color
  document.body.style.backgroundColor = color
}