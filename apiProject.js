const baseURL = 'http://www.songsterr.com/a/wa/artist?id';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    e.preventDefault();
    url=`${baseURL} `; //this is the starting point for a new api 
    console.log('URL:', url)
    
    fetch(url)
        .then(function(result) {
            console.log(result)
            return result.json();
        })
        .then(function(json) {
            console.log(json);
            displayResults(json);
        })
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    
    let music = json.response.docs;

    if (music.length === 0) {
        console.log('No results');
    } else {
        for (let i = 0; i < music.length; i++) {
            let song = document.createElement('song');
            let title = document.createElement('h2');
            let artist = document.createElement('h3');
            let nameWithoutThePrefix = document.createElement('p');
            let useThePrefix = document.createElement('p');
            let name = document.createElement('name');
            let clearfix = document.createElement('div');
            let current = music[i];
            console.log('Current', current);
            link.href = current.web_url;
            console.log(link);
            artist.textContent = current.thisSong.main


        }
    }
}