let currentColor = "black";
let brushSize = 3;

function setColor(color) {
    currentColor = color;
}

/* ERASER */
function clearCanvas() {

    const canvas =
        document.getElementById("drawing-canvas");

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* restore white background */

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("DOMContentLoaded", () => {

    const canvas =
        document.getElementById("drawing-canvas");

    const ctx = canvas.getContext("2d");
    /* white background */
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    let drawing = false;

    /* smoother lines */
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    canvas.addEventListener("mousedown", (e) => {

        drawing = true;

        draw(e);
    });

    canvas.addEventListener("mouseup", () => {

        drawing = false;

        ctx.beginPath();
    });

    canvas.addEventListener("mouseleave", () => {

        drawing = false;

        ctx.beginPath();
    });

    canvas.addEventListener("mousemove", draw);

    function draw(e) {

        if (!drawing) return;

        /*
            FIXED COORDINATE SYSTEM
        */

        const rect =
            canvas.getBoundingClientRect();

        const scaleX =
            canvas.width / rect.width;

        const scaleY =
            canvas.height / rect.height;

        const x =
            (e.clientX - rect.left) * scaleX;

        const y =
            (e.clientY - rect.top) * scaleY;

        ctx.lineWidth = brushSize;
        ctx.strokeStyle = currentColor;

        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y);
    }

});