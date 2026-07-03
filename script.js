
let bookButton = document.getElementById("btnBook");

bookButton.onclick = function () {
    alert("Your booking request has been received!");
};

let sendButton = document.getElementById("btnSend");

sendButton.onclick = function (event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
};



let topBtn = document.getElementById("topBtn");

topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};