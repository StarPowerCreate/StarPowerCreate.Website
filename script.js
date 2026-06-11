document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    const yearContainer = document.getElementById("dynamic-year");

    if (yearContainer) {
        yearContainer.textContent = currentYear;
    }

    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

});