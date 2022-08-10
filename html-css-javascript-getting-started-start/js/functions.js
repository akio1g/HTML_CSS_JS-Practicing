window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[data-order]");

    orderButtons.forEach(function(btn) {

        btn.addEventListener("click",function(e) {
            const btn = e.currentTarget;
            const container = btn.parentNode; // will be class pie content

            const order = { // order's object
                id: btn.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".description").innerText
            };

            sessionStorage.setItem("order", JSON.stringify(order));

            const url = window.location.href.replace("index.html", "order.html"); // switch the url
            window.location.href = url; // sets the browser location 
        });
    });
});

function openMenu() {
    document.getElementById("menu").classList.toggle("open");
}