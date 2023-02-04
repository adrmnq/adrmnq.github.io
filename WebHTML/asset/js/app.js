// Filter Js
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide("1000");
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });
    // Add active to btn
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});
// Header Background Change on Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Link it
fetch("../asset/json/linkit.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            $(".linkit").linkIt({
                link: {
                    word: data[i].word,
                    url: data[i].url,
                },
            });
        }
    })
    .catch(function (err) {
        console.log(err);
    });