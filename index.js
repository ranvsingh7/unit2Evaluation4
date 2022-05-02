// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunction)

var matchInput=JSON.parse(localStorage.getItem("schedule"))||[]
function myFunction(){
    event.preventDefault()


    var matchData={
        matchNumber:document.querySelector("#matchNum").value,
        teamA:document.querySelector("#teamA").value,
        teamB:document.querySelector("#teamB").value,
        date:document.querySelector("#date").value,
        vanue:document.querySelector("#venue").value
    }
    matchInput.push(matchData)
    localStorage.setItem("schedule",JSON.stringify(matchInput))



  

}
//   console.log(matchInput)