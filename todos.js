let input =document.querySelector("input")
const button=document.querySelector("#button")
const uli =document.querySelector("ul")
const h5 = document.querySelector("h5")

button.addEventListener("click", function(e){

const li =document.createElement("li")
li.innerText=input.value;
uli.append(li)
uli.appendChild(li)

input.value =""
})



uli.addEventListener("click",function(ex){
    ex.target.nodeName==="LI" && ex.target.remove()
})