
//carasoul
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        spaceBetween: 50,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});

//accordion  
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



const mN = document.getElementsByClassName(".h-full-container")[0];
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById("#h-icon");
    toggleBtn?.addEventListener('click', () => {
        mN.classList.toggle("active");
    });

});






