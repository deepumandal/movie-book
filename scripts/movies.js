// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//          https://api.themoviedb.org/3/search/movie?api_key=42d17252b63c338b0b851066926f6981&language=en-US&query=${movie_name}v&page=1&include_adult=false
//       42d17252b63c338b0b851066926f6981

// step 1

document.querySelector("#wallet").innerHTML = +localStorage.getItem("amount")


//step 2

let id;
function search(func,delay){
  if(id){
      clearTimeout(id)
  }

   id =  setTimeout(function(){
        main()
    },delay)
}
// step 3

function main(){
        let movie_name = document.querySelector("#search").value

   let url = `https://api.themoviedb.org/3/search/movie?api_key=42d17252b63c338b0b851066926f6981&language=en-US&query=${movie_name}&page=1&include_adult=false`
   document.querySelector("#search").value = null
   let request = fetch(url)
.then(function(res){
             return res.json()
}).then(function(res){
    // step 4
        redirect_to_append(res.results)
})

}




// step 4




function redirect_to_append(data){
console.log(data)

data.forEach(function(e,i){

    let movies = document.querySelector("#movies")
    let box = document.createElement("div")
    box.setAttribute("class","box")

    let img = document.createElement("img")
    img.setAttribute("class","image")
    img.src =  `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${e.poster_path}`                

    let head = document.createElement("h3")
    head.setAttribute("class","head")
    head.innerHTML = e.title

    let btn = document.createElement("button")
    btn.setAttribute("class","book_now")
    btn.innerText =  "book now"
    btn.addEventListener('click',function(){
        booking(e,i)
    })

      box.append(head,img,btn)

      movies.append(box)


    
});

function booking(e,i){
    console.log(e,i)
let getobj = e

    localStorage.setItem("movie",JSON.stringify(getobj))
    window.location.href = 'checkout.html'


}














}









