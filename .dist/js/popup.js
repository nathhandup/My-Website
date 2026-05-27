function openPopup(content) {

    document.getElementById("popup-text").innerHTML = content;

    document.getElementById("popup-overlay").classList.add("active");
    document.getElementById("page-content").classList.add("blur");
}

function closePopup() {

    document.getElementById("popup-overlay").classList.remove("active");
    document.getElementById("page-content").classList.remove("blur");
}