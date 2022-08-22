


let p = document.getElementById( "Oi-Cunt")

let q = document.getElementById( "Totall")






let welcomeEl = document.getElementById("Welcome")
let Myname = "Sam"
let greating = " Welcome Here"




welcomeEl.textContent = greating + " " + Myname




let count = 0




function Add(){

    count += 1

    p.textContent = count

}

function Save(){

    let NewCount = count + " - "
    q.textContent += NewCount
    p.textContent = count = 0 
    
   

}

function Reset(){

    count = 0

p.innerText = count
q.innerText = "Previous Enteries :"


}










