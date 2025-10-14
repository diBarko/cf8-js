$(function() {
  let debounceTimeout = null
  $('#searchInput').on('input', function() {   // triggered on text change
    const searchValue = this.value.trim()
    clearTimeout(debounceTimeout)
    
    if (!searchValue) {
      resetUI()
    } else {
      debounceTimeout = setTimeout(() => getMovie(searchValue), 1500)
    }
  })

  $('#showMore').on('click', function(e) {
    e.preventDefault()
    onShowMoreClicked()
  })
})

async function loadConfig() {
  const response = await fetch('./config.json');
  const config = await response.json();
  return config;
}

function getMovie(title) {
  if (!title) {
    resetUI()
    return
  }

  onBeforeSend()
  fetchMovieFromApi(title)
}

async function fetchMovieFromApi(title) {
  const config = await loadConfig();
  axios.get(`https://www.omdbapi.com/?t=${title}&plot=full&apikey=${config.APIKey}`)
    .then(response => {        
        handleResults(response.data)
    })
    .catch ( error => {
      console.error('Error: ' + error)
      onApiError()
    })
}

function handleResults(data) {
    hideComponent('#waiting')
  if (data.Response === 'True') {
    render(data)
  } else if (data.Response === 'False') {
    showComponent('#notFound')
  }
}

function onBeforeSend() {
  showComponent('#waiting')
  hideComponent('#movie')
  hideComponent('#notFound')
  hideComponent('#error')
}

function onApiError() {
  hideComponent('#waiting')
  showComponent('#error')
}

function onShowMoreClicked() {
  $('.extended').slideToggle(700)
}

function showComponent(component) {
  return $(component).removeClass('hidden')
}

function hideComponent(component) {
  return $(component).addClass('hidden')
}

function render(data) {
  const imdbURL = `https://imdb.com/title/${data.imdbID}`
  const imdbLink = document.getElementById('imdbId')
  imdbLink.href = imdbURL

  document.getElementById('title').textContent = data.Title
  document.getElementById('year').textContent = `Έτος Παραγωγής: ${data.Year}`
  document.getElementById('runtime').textContent = `Διάρκεια: ${data.Duration}`
  document.getElementById('genre').textContent = `Κατηγορία: ${data.Genre}`
  document.getElementById('imdbRating').textContent = data.imdbRating
  document.getElementById('plot').textContent = data.Plot
  document.getElementById('director').querySelector('span').textContent = data.Director
  document.getElementById('actors').querySelector('span').textContent = data.Actors
  document.getElementById('production').querySelector('span').textContent = data.Production
  document.getElementById('boxOffice').querySelector('span').textContent = data.BoxOffice
  document.getElementById('language').querySelector('span').textContent = data.Language
  document.getElementById('rated').querySelector('span').textContent = data.Rated

  const poster = document.getElementById('image')
  poster.src = data.Poster
  poster.alt = data.Title

  document.querySelector('#movie').classList.remove('hidden')

}

function resetUI() {
  hideComponent('#waiting')
  hideComponent('#movie')
  hideComponent('#notFound')
  hideComponent('#error')
}