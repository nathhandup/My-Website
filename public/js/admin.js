window.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:3000/messages")
        .then(res => res.json())
        .then(data => {

            console.log("Messages:", data);

        })
        .catch(err => {

            console.error("Failed to load messages:", err);

        });

});