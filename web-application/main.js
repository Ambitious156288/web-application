let form = document.querySelector(".search-form")
let resultShow = document.querySelector(".result-show")
let button = document.querySelector(".search")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let searchText = document.querySelector("#searchname").value

    console.log("searchText", searchText)

    resultShow.textContent = ""

    fetch(`https://itunes.apple.com/search?term=${searchText}`)
        .then(function (data) {
            return data.json()
        })
        .then(function (json) {
            console.log(json)

            for (let i = 0; i < 9; i++) {
                let name = json.results[i].artistName
                let img = json.results[i].artworkUrl100
                let songName = json.results[i].collectionName

                let show = `
                            <div class = "song">
                                <img src="${img}"  alt="">
                                <h3> ${name} </h3>
                                <hr></hr>
                                <h2> ${songName} </h2>
                            </div>
                           `

                resultShow.insertAdjacentHTML("beforeEnd", show)
            }
        })
})
