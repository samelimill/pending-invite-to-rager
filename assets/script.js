
var inputEl = document.querySelector('#search-criteria');
var searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var input = inputEl.value;

    getResults();
});


function getResults() {
    var apiUrl = 'https:www.loc.gov/search/?q=' + input + '&fo=json';

    fetch(apiUrl)
    .then(function (response) {
        console.log(response);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
      alert('Unable to connect to Library of Congress');
    });

}


