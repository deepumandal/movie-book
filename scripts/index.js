// Store the wallet amount to your local storage with key "amount"

document.querySelector("#wallet").innerHTML = +localStorage.getItem("amount")
function addmoney(){
    

    
    let money = +localStorage.getItem("amount") || []

let request_money = +document.querySelector("#amount").value

//alert(request_money)
console.log(typeof money)
let total_item = request_money+money

localStorage.setItem("amount", total_item)
document.querySelector("#amount").value=null

document.querySelector("#wallet").innerHTML = +localStorage.getItem("amount")
}













