// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

document.querySelector("#wallet").innerHTML = +localStorage.getItem("amount")


let data = JSON.parse(localStorage.getItem("movie"))

console.log(data)
    
    let movies = document.querySelector("#movies")
    let box = document.createElement("div")
    box.setAttribute("class","box")

    let img = document.createElement("img")
    img.setAttribute("class","image")
    img.src =  `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${data.poster_path}`                

    let head = document.createElement("h3")
    head.setAttribute("class","head")
    head.innerHTML = data.title

    

      box.append(head,img)

     movie.append(box)




     function laststep(){
         
let username = document.querySelector("#user_name").value
let seats = document.querySelector("#number_of_seats").value


if(username!=="" && seats!==""){
    
let Balance = +localStorage.getItem("amount")-100*seats
console.log(Balance)

    if(Balance>=0){
        alert("Booking successful!")

        localStorage.setItem("amount",Balance)
        document.querySelector("#wallet").innerHTML = +localStorage.getItem("amount")

    }else{
        alert("Insufficient Balance!")
    }





}





     }














