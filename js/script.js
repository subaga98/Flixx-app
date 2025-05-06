const global = { currentPage: window.location.pathname };

async function displayPopularMovies() {
  const { results } = await fetchApi('movie/popular');
  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<a href="movie-details.html?${movie.id}">
      ${
        movie.poster_path
          ? `<img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        class="card-img-top"
        alt="${movie.title}"
      />`
          : `<img
      src="images/no-image.jpg"
      class="card-img-top"
      alt="${movie.title}"
    />`
      }
    </a>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">
        <small class="text-muted">${movie.release_date}</small>
      </p>
    </div>`;
    document.querySelector('#popular-movies').appendChild(div);
  });
}

// Fetch data from TMDB api
async function fetchApi(endpoint) {
  const API_KEY = 'b94304ab58e1024c39b9aad1539be8fe';
  const API_URL = 'https://api.themoviedb.org/3/';
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}

// Hightlight active link
function highlightActiveLink() {
  const link = document.querySelectorAll('.nav-link');
  link.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Initialize app path
function init() {
  switch (global.currentPage) {
    case '/':
      displayPopularMovies();
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie details');
      break;
    case '/tv-details.html':
      console.log('TV details');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }
  highlightActiveLink();
}
document.addEventListener('DOMContentLoaded', init);
