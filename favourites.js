// write js code here corresponding to favourites.html

var favDisplay=JSON.parse(localStorage.getItem("favourites"))||[]

favDisplay.forEach(function(elem){

    var row=document.createElement("tr")
    row.id="row"

    var td1=document.createElement("td")
        td1.innerText=elem.matchNumber
    var td2=document.createElement("td")
        td2.innerText=elem.teamA
    var td3=document.createElement("td")
        td3.innerText=elem.teamB
    var td4=document.createElement("td")
        td4.innerText=elem.date
    var td5=document.createElement("td")
        td5.innerText=elem.vanue
    var td6=document.createElement("td")
        td6.innerText="Remove"
        td6.addEventListener("click",function(){
            removerow(elem)
        })

        row.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(row)
})

function removerow(elem){
    // document.querySelector("#row").innerHTML=""
    localStorage.removeItem("favourites")
}