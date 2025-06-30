class Movie {
    constructor(name, description, review){

    this.name = name;
    this.description = description;
    this.review = review;
    
    this.returnname = function() {
        return `${this.name}`;
    }
    this.returndescription = function() {
        return `${this.description}`;
    }
    this.returnreview = function() {
        return `${this.review}`;
    }
}  
}

function Book(name, description, review) {
    this.name = name;
    this.description = description;
    this.review = review;
    this.returnname = function() {
        return this.name;
    };
    this.returndescription = function() {
        return this.description;
    };
    this.returnreview = function() {
        return this.review;
    };
    toString = function() {
        this.returnname + ";" + this.returndescription + ";" + this.returnreview
    }
}
function openMovieTab(event) {
    event.preventDefault();
    window.location.href="AddMovie.htm";
}
function openBookTab(event) {
    event.preventDefault();
    window.open(
        'AddBook.htm', '_blank', 'width=600,height=400'
    )
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
    window.location.href = "Project.htm"
}
function newBook() {
    booksList[booksList.length] = Book(document.getElementById("bookName").innerHTML, 
                                              document.getElementById("description").innerHTML,
                                              document.getElementById("review").innerHTML);
    window.close()
}
function initializeMovies() {
    moviesNamesList
}       
let moviesList = [["Heat", "1995", "Good"]];
const booksList = [];
    document.addEventListener("DOMContentLoaded", function() {

        let storedMovies = localStorage.getItem("moviesList");

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
        
            movieTable.appendChild(tr)
        });
    });