//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBb7bg53eLhlVnNLpevBbm5ScNobzDGZqg",
    authDomain: "kwitter-project-a976d.firebaseapp.com",
    databaseURL: "https://kwitter-project-a976d-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-a976d",
    storageBucket: "kwitter-project-a976d.appspot.com",
    messagingSenderId: "673904162575",
    appId: "1:673904162575:web:a4d8623b037bdbad49b07a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("User_name").innerHTML = "welcome " + user_name

function add_room() {
    room_name = document.getElementById("room_name").value
    localStorage.setItem("r_name", "room_name")
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    })
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("roomname-" + Room_names)
            row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>" + Room_names + "</div> <hr>"
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirecttoroomname(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}