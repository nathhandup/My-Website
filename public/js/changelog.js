async function loadChangelog() {

    try {
        const res = await fetch("./changelog.json");
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        const container =
            document.getElementById("changelog-container");
        container.innerHTML = "";
        data.reverse().forEach(entry => {
            const div = document.createElement("div");
            div.classList.add("update-entry");
            div.innerHTML = `
                <h3>${entry.title}</h3>
                <small>${entry.date}</small>
                <p>${entry.content}</p>
            `;
            container.appendChild(div);
        });
    } catch (err) {
        console.error(err);
        document.getElementById("changelog-container")
            .innerHTML =
            "Failed to load changelog (check JSON + run local server)";
    }
}

/* run when page loads */
window.addEventListener("DOMContentLoaded", loadChangelog);