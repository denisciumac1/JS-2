//modulul principal -logica de ebaza a retelei
//lista utilizatorilor din Fg
var users = []

// functie care genereaza multi utilizatori
function generateUsers(number = 10){
    while( users.length!= number ){
        users.push(new User())
    }
}


//functia care afiseaza lista utilizatorilor
function showUsers(){
    var user_div = document.getElementById("user-list")

    users.forEach(user =>
        user_div.appendChild(user.render()))

}
generateUsers()
users[0].addFriend(users[1])
users[0].addFriend(users[1])
users[0].addFriend(users[1])
users[0].addFriend(users[1])
users[0].addFriend(users[2])
users[0].addFriend(users[2])
users[0].addFriend(users[3])
users[0].addFriend(users[3])
showUsers()
// var u = new User ("Ilie iliescu", "1.jpg", "m", "1919-01-01", "Maldiva")
//
// var ue = new User()
// console.log( u )
// console.log( ue )
