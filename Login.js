var LowerCaseLetters = /[a-z]/g;
var UpperCaseLetters = /[A-Z]/g;
var Numbers = /[0-9]/g;
var objPeople = [
    {
        username: "Abra",
        password: "Potatochip99!"
    },
    {
        username: "Jason",
        password: "JustABahn99!"
    },
    {
        username: "Iftemon",
        password: "Atheistic1"
    }
]

function getInfo() {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value

        for(i = 0; i < objPeople.length; i++) {
            if(username == objPeople[i].username && password == objPeople[i].password) {
                console.log(username + " is logged in")
                return
            }
        }
        console.log("Incorrect username or password")
}

function registerUser() {
    var registerUser = document.getElementById("newUsername").value
    var registerPassword = document.getElementById("newPassword").value
    var newUser = {
        username: registerUser, 
        password: registerPassword
    }

    for(i = 0; 1 < objPeople.length; i++) {
        if(registerUser == objPeople[i].username) {
            alert("That username is already taken, please try another")
            return
        } else if(registerPassword.length < 10 ) {
            alert("Your password must be at least 10 characters long")
            return
        } else if(!registerPassword.match(UpperCaseLetters)) {
            alert("Your password must contain at least one capital letter")
            return
        } else if(!registerPassword.match(LowerCaseLetters)) {
            alert("Your password must contain at least one lowercase letter")
            return
        } else if(!registerPassword.match(Numbers)) {
            alert("Your password must contain at least one number")
            return
        } objPeople.push(newUser)
          console.log(objPeople)
          return
    }
}