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
//đổi tham số para thành các biến element cần đóng mở

document.querySelector(".login-form").addEventListener("submit", 
    function (e) {
        e.preventDefault()
        const loginUsername = String(document.getElementById('loginUsername').value);
        const loginPassword = String(document.getElementById('loginPassword').value);
        if (loginUsername == "vinhthanh" && loginPassword == "123456") {
            window.location.href  = "../../index.html"
        } else {
            alert("Xin đăng nhập lại username và password chính xác")
        }
    }
)

