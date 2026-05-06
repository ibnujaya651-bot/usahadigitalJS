function showPage(pageId) {
    let pages = document.querySelectorAll(".container");
    pages.forEach(p => p.classList.add("hidden"));

    document.getElementById(pageId).classList.remove("hidden");
}

function kirimData(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;

    document.getElementById("hasil").innerHTML =
        "<h3>Data Terkirim</h3>" +
        "<p>Nama: " + nama + "</p>" +
        "<p>Email: " + email + "</p>";
}
