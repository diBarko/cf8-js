const DEFAULT = 0
let counter = DEFAULT

$(function() {
  $('#btnDecr').on('click', () => onDecrClicked())
  $('#btnReset').on('click', () => onResetClicked())
  $('#btnIncr').on('click', () => onIncrClicked())
})

// Controllers-Event Handlers
function onDecrClicked() {
  decreaseCounter()
}

function onResetClicked() {
  resetCounter()
}

function onIncrClicked() {
  increaseCounter()
}

// Model
function decreaseCounter()  {
  counter--
  render()
}

function resetCounter()  {
  counter = DEFAULT
  render()
}

function increaseCounter()  {
  counter++
  render()
}

/**
 * Assigns the state to the corresponding UI element,
 * And gives style accordingly.
 */
function render() {
  const $counter = $('#counter')
  $counter.text(counter)
  styleCounterElement($counter)
}

function styleCounterElement($counter) {
  $counter.toggleClass('color-green', counter > 0)
  $counter.toggleClass('color-red', counter < 0)
  $counter.toggleClass('color-black', counter === 0)
}