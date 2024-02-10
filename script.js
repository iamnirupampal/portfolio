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

var gs = gsap.timeline();
gs.from("nav h1",{
    y : -200,
    opacity: 0,
    delay: .5,
    duration:.2,

})
gs.from("#lists li",{
    y : -100,
    stagger: .2,
    duration: .2,
    opacity: 0,
})
gs.from(".image",{
    x: 300,
    opacity: 0,
    duration: .3,
})
gs.from("#firsth1, #secondh1, #thirdpara, #forthh1",{
    x : -100,
    stagger: .2,
    duration: .3,
    opacity : 0, 
})
gs.from("#facbooklogo, #instalogo, #githublogo, #linkdlogo ,.right",{
    stagger: .2,
    duration: .3,
    opacity: 0,
})