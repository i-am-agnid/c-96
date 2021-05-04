function adduser() {
    u_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", u_name);
    window.location = "kwitter_room.html";
}