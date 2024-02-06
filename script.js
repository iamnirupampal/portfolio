function btnchange() {
    var navbar = document.getElementById("menubtn");
    var lists = document.getElementById('lists2')
    var cross = document.getElementById('menucut')
    lists.style.display = 'flex';
    navbar.style.display = 'none';
    cross.style.display = 'flex';
}
function btnchanger() {
    var navbar = document.getElementById("menubtn");
    var lists = document.getElementById('lists2')
    var cross = document.getElementById('menucut')
    navbar.style.display = 'flex';
    cross.style.display = 'none';
    lists.style.display = 'none';
}
function homehide() {
    var lists = document.getElementById('lists2')
    var cross = document.getElementById('menucut')
    var navbar = document.getElementById("menubtn");
    lists.style.display = 'none';
    cross.style.display = 'none';
    navbar.style.display = 'flex';
}
function emailSend() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}