class Movie {
    constructor(name, description, review, checked){

    this.name = name;
    this.description = description;
    this.review = review;
    this.checked = false;

    this.returnname = function() {
        return `${this.name}`;
    }
    this.returndescription = function() {
        return `${this.description}`;
    }
    this.returnreview = function() {
        return `${this.review}`;
    }
    this.check = function() {
        this.checked = true;
    }
    this.uncheck = function() {
        this.checked = false;
    }
}  
}

class Book {
    constructor(name, description, review, checked){

    this.name = name;
    this.description = description;
    this.review = review;
    this.checked = false
    
    this.returnname = function() {
        return `${this.name}`;
    }
    this.returndescription = function() {
        return `${this.description}`;
    }
    this.returnreview = function() {
        return `${this.review}`;
    }
    this.check = function() {
        this.checked = true;
    }
    this.uncheck = function() {
        this.checked = false;
    }
}  
}
function openMovieTab(event) {
    event.preventDefault();
    window.location.href="AddMovie.htm"
}
function openBookTab(event) {
    event.preventDefault();
    window.location.href="AddBook.htm"
}
function newMovie() {
    let storedMovies = localStorage.getItem("moviesList");

    let moviesList = storedMovies ? JSON.parse(storedMovies) : [];

    const name = document.getElementById("movieName").value
    const description = document.getElementById("description").value
    const review = document.getElementById("review").value

   moviesList.push({
    name: name,
    description: description,
    review: review
   })

    
    localStorage.setItem("moviesList", JSON.stringify(moviesList))
    window.location.href = "index.html"
}
function newBook() {
    let storedBooks = localStorage.getItem("booksList");

    let booksList = storedBooks ? JSON.parse(storedBooks) : [];

    const name = document.getElementById("bookName").value
    const description = document.getElementById("description").value
    const review = document.getElementById("review").value

   booksList.push({
    name: name,
    description: description,
    review: review
   })

    
    localStorage.setItem("booksList", JSON.stringify(booksList))
    window.location.href = "index.html"
}
function removeMovie() {
    let storedMovies = localStorage.getItem("moviesList");

    let moviesList = storedMovies ? JSON.parse("moviesList") : [];

    const row = document.querySelectorAll('#myTable tr');

    for(let i = row.length - 1; i >= 0; i--) {
        const checkboxchecked = row[i].querySelector('input[type="checkbox"]');

        if(checkboxchecked && checkboxchecked.checked) {
            moviesList.splice(i, 1);
        }
    }
    localStorage.setItem("moviesList", JSON.stringify(moviesList));

}



const checkboxes = document.querySelectorAll('input[type:"checkbox"][name="checkbox"]:checked') != null;
if(checkboxes) {
    removeMovie.removeAttribute(hidden);
}


     
document.addEventListener("DOMContentLoaded", function() {
        
    let storedMovies = localStorage.getItem("moviesList");
    let storedBooks = localStorage.getItem("booksList");

    let moviesList = storedMovies ? JSON.parse(storedMovies) : [];

    let movieTable = document.getElementById("mTableBody");

    moviesList.forEach(item => {
        const tr = document.createElement("tr");

        const tdn = document.createElement("td");
        tdn.textContent = item.name;
        tr.appendChild(tdn);

        const tdd = document.createElement("td");
        tdd.textContent = item.description;
        tr.appendChild(tdd);

        const tdr = document.createElement("td");
        tdr.textContent = item.review;
        tr.appendChild(tdr);

        tr.appendChild(checkbox);
        
        movieTable.appendChild(tr)
    });
});