let highestZ = 1000;

/* OPEN WINDOW */
function openWindow(id) {

    const win = document.getElementById(id);

    win.style.display = "block";
    win.style.zIndex = highestZ++;

    if (!win.dataset.opened) {

        win.style.left = "50%";
        win.style.top = "50%";
        win.style.transform = "translate(-50%, -50%)";

        win.dataset.opened = "true";
    }
}

/* CLOSE WINDOW */
function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}

/* DRAG SYSTEM */
window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".desktop-window").forEach(win => {

        const header = win.querySelector(".window-header");

        let dragging = false;
        let offsetX = 0;
        let offsetY = 0;

        header.addEventListener("mousedown", (e) => {

            dragging = true;

            win.style.zIndex = highestZ++;

            if (win.style.transform) {

                const rect = win.getBoundingClientRect();

                win.style.left = rect.left + "px";
                win.style.top = rect.top + "px";
                win.style.transform = "none";
            }

            offsetX = e.clientX - win.offsetLeft;
            offsetY = e.clientY - win.offsetTop;
        });

        document.addEventListener("mousemove", (e) => {

            if (!dragging) return;

            win.style.left = `${e.clientX - offsetX}px`;
            win.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener("mouseup", () => {
            dragging = false;
        });
    });

});