let scrollToGifs = document.querySelector("#scroll-to-gifs")
let gifs = document.querySelector("#gifs")

scrollToGifs.addEventListener("click", function() {
  gifs.scrollIntoView()
})