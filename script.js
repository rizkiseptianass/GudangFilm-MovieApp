const searchButton = document.querySelector('.buttonSearch');
searchButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=9f2cc53b&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = ``;
            movies.forEach(m => {
                cards += `<div class="col-md-3">
                <div class="card">
                  <img src="${m.Poster}" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                  <a href="#" class="btn btn-dark">Detail</a>
                  </div>
                </div>
              </div>`;
            const moviesContainer = document.querySelector('.movie-container');
            moviesContainer.innerHTML = cards;
            })
        })
});