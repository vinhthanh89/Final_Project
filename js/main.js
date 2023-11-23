$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,
        slidesToShow: 1,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-double-left'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-double-right'></i></button>"
    });
});

let brandDropDown = document.getElementById('brand-filter-list');
let priceDropDown = document.getElementById('price-filter-list')
let sizeDropDown = document.getElementById('size-filter-list')
let display = 0;
function hideshow(para) {
    if (display == 1) {
        para.style.display = 'block'
        display = 0;
    } else {
        para.style.display = 'none';
        display = 1;
    }
}

// function loginFunction() {
//     const loginUsername = String(document.getElementById('loginUsername').value);
//     const loginPassword = String(document.getElementById('loginPassword').value);
//     if (loginUsername == "vinhthanh" && loginPassword == "123456") {
//         window.location.href = "https://vinhthanh89.github.io/Final_Project/"
//     } else {
//         alert("Xin đăng nhập lại username và password chính xác")
//     }
// }


document.querySelector(".login-form").addEventListener("submit",
    function (e) {
        e.preventDefault(e)
        console.log(e);
        const loginUsername = String(document.getElementById('loginUsername').value);
        const loginPassword = String(document.getElementById('loginPassword').value);
        if (loginUsername === "vinhthanh" && loginPassword === "123456") {
            window.location.href = "https://vinhthanh89.github.io/Final_Project/"
        } else {
            alert("Xin đăng nhập lại username và password chính xác")
        }
    }
)

