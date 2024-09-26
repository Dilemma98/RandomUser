const rndmUsrBtn = document.getElementById("randomUserBtn");
const userInfo = document.getElementById("userInfo");

//Skapar behållare för infon som hämtas
let usrNameHolder = document.createElement("h4");
let usrEmailHolder = document.createElement("h5");
let usrImgHolder = document.createElement("img");

//Skapar en funktion för knappen
function getRndmUsr () {
    fetch("https://randomuser.me/api/")
    .then(function (response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        let user = json.results[0];

        //Visa namn
        usrNameHolder.innerHTML = `Name: ${user.name.first} ${user.name.last}`;
        userInfo.appendChild(usrNameHolder);
        //Visa email
        usrEmailHolder.innerHTML = `Email: ${user.email}`;
        userInfo.appendChild(usrEmailHolder);
        //Visa bild
        usrImgHolder.src = user.picture.large;
        userInfo.appendChild(usrImgHolder);
    })
}

//Kallar sedan på funktionen i själva knappen
rndmUsrBtn.addEventListener("click", function(){
    getRndmUsr();
});

