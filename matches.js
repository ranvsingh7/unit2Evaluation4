// write js code here corresponding to matches.html
// console.log(matchData)
var displayData=JSON.parse(localStorage.getItem("schedule"))||[]
console.log(displayData)

var fevInput=JSON.parse(localStorage.getItem("favourites"))||[]

displayData.forEach(function(elem){

    var row=document.createElement("tr")

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
        td6.innerText="favourite"
        td6.addEventListener("click",function(){
            favourite(elem)
        })

        row.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(row)
})

function favourite(elem){
    console.log("hi")
    var fevData={
        matchNumber:elem.matchNumber,
        teamA:elem.teamA,
        teamB:elem.teamB,
        date:elem.date,
        vanue:elem.vanue
    }
    fevInput.push(fevData)
    localStorage.setItem("favourites",JSON.stringify(fevInput))
    // console.log(fevData)


}