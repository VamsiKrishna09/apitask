let searchQuery = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let outerDiv = document.createElement("div");
outerDiv.classList.add("outer-div")
searchBtn.addEventListener("click", (onclc) => {
    onclc.preventDefault();

    outerDiv.innerHTML = '';
    let url = searchQuery.value;
    let api = `https://api.tvmaze.com/search/shows?q=${url}`;
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(element => {

                let innerDiv = document.createElement("div");
                innerDiv.classList.add("inner-div");
                let title = document.createElement("h3");
                title.innerText = element.show.name;
                let img = document.createElement("img");
                img.src = element.show.image.medium;
                let genre = document.createElement("p");
                genre.innerText = element.show.genres;
                innerDiv.appendChild(title);
                innerDiv.appendChild(img);
                innerDiv.appendChild(genre);
                outerDiv.appendChild(innerDiv);
                document.body.appendChild(outerDiv);
            });
        })
        .catch((error) => {
            console.log(error);
        })
})