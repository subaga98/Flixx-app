const global = { currentPage: window.location.pathname };

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
      console.log('Home');
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
