
var searchBar = document.querySelector('#search-criteria');
var searchBtn = document.querySelector('.btn');

var dropDown = document.getElementById('search-format'); 

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var search = searchBar.value;
    var category = dropDown.options[dropDown.selectedIndex].getAttribute('data-format');
    
    if(category) {
        getFilteredResults(search, category);
    } else {
        getResults(search);
    }

});

function getResults(search) {
    var apiUrl = 'https://www.loc.gov/search/?q=' + search + '&fo=json&at=results'; 
    
    fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(apiUrl);
    })

}

function getFilteredResults(search, category) {
    var apiUrl = 'https://www.loc.gov/' + category + '?q=' + search + '&fo=json&at=results';

    fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(apiUrl);
    })

}





