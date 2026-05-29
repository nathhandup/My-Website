document.getElementById("msg-form")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const message =
        document.getElementById("message").value;

    await fetch("http://localhost:3000/message", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ name, message })
    });

    alert("Message sent!");
});