console.log("Hello");
/**
 * Biến
 */
//Number string
var username = "Nguyen Brandon Tuan";
var address = "112 Cao Thắng";
//Number
var age = 18;
//Boolean
var status = true;
var status1 = false;
//Null
var numberStudent = null;
//undefined
var people;
console.log(people);
// console.log("ten la: " + username);
// console.log("dia chi: " + address);;
// console.log("ten la: " + username, "dia chi: " + address);

//Hoisting
// var fullName;
console.log("fullname: " + fullName);
var fullName = "Nguyen Van A";

isLogin = true;
console.log("isLogin", isLogin);



const PI = 3.14;

/**
 *  Câu lệnh điều kiện
 */
// == so sanh giá trị
//so sánh 3 dấu bằng so sánh luôn kiểu dữ liệu
if (1 === "1") {
    console.log("Điều kiện đúng");
} else {
    console.log("Điều kiện sai");
}

//Toán tử 3 ngôi 
//ĐK ? "Dung" : "Sai"

(1 === 1 ? console.log("Điều kiện đúng") : console.log("Điều kiện sai"));

var btA = true;
var btB = false;
console.log("Ket qua &&:", btA && btB);
console.log("Ket qua ||: ", btA || btB);
console.log("Phu dinh cua btA:", !btA);

switch (5) {
    case 0:
        console.log("Day la so 0");
        break;
    case 1:
        console.log("Day la so 1");
        break;
    case 2:
        console.log("Day la so 2");
        break;




    default:
        console.log("Khong xac dinh");
        break;
}

var list = ["Nguyen", "Brandon", "Tuan", "Nam"];
/**
 * Vòng lặp
 */
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);

}

var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;

var total = number_1 + number_2;
console.log(total);
var total2 = number_3 + number_4;
console.log("tong la:", total2);

/**
 * Hàm
 */

function tongHaiSo(number_1, number_2) {
    var sum = number_1 + number_2;
    console.log("sum la:", sum);
}

tongHaiSo(12, 3);
tongHaiSo(20, 50);
tongHaiSo(number_1, number_2);

//Hàm có giá trị trả về
function tongHaiSoK(number_1, number_2) {
    var sum = number_1 + number_2;
    return sum;
}

var total2 = tongHaiSoK(50, 50);
console.log("Tổng hai số của hàm có giá trị trả về cộng thêm 7 là :", tongHaiSoK(50, 50) + 7);
console.log("tong la", total2);

/**
 * Bài tập tính điểm trung bình: toan , ly , hoa
 * dtb=(toan+ly+hoa)/3
 * Xếp loại
 * +9-10 => xuất sắc
 * +8-9 Gioi
 * +7-8 khá
 * +5-6 trung bình
 * +Yếu
 */

function dtb(toan, ly, hoa) {
    var kq = (toan + ly + hoa) / 3;
    return kq;
}

function xepLoai(kq) {
    if (kq >= 9 && kq <= 10) {
        console.log("Xuat sac");
    } else if (kq >= 8 && kq < 9) {
        console.log("Gioi");
    } else if (kq >= 7 && kq < 8) {
        console.log("Kha");
    } else if (kq >= 5 && kq < 7) {
        console.log("Trung bình");
    } else {
        console.log("Yeu");
    }
}



var kq1 = dtb(8, 8, 8);
xepLoai(kq1);

/**
 * DOM
 */

var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);

var _pText = document.getElementById("pText").innerHTML;
console.log(_pText);

/**
 * Event
 */
//Cách 1
// function eventClick() {

//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

//Cách 2
// document.getElementById("btnClick").onclick = function() {
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// };

//Cách 3 -  call back function                                                                                                      
document.getElementById("btnClick").addEventListener("click", function() {
    var txtValue = document.getElementById("txtInput").value;
    console.log(txtValue);
});

document.getElementById("btnNhanEmDi").addEventListener("click", function() {
    document.getElementById("divContent").innerHTML = "Thay doi roi nhe";
    document.getElementById("divContent").style.backgroundColor = "blue";
});
document.getElementById("hide").addEventListener("click", function() {
    document.getElementById("divContent").style.display = "none";

});
document.getElementById("show").addEventListener("click", function() {
    document.getElementById("divContent").style.display = "block";

});

document.getElementById("btnDis").addEventListener("click", function() {
    document.getElementById("btnNhanEmDi").disabled = "true";
});

document.getElementById("btnOpen").addEventListener("click", function() {
    document.getElementById("btnNhanEmDi").removeAttribute("disabled");
});

document.getElementById("btnOn").addEventListener("click", function() {
    document.getElementById("imgBulb").src = "./imgs/pic_bulbon.gif";
});

document.getElementById("btnOff").addEventListener("click", function() {
    document.getElementById("imgBulb").src = "./imgs/pic_bulboff.gif";
});
document.getElementById("log").addEventListener("click", function() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (user == "cyber" && pass == "cyber") {
        document.getElementById("succes").style.display = "block";
    } else if (user != "cyber" || pass != "cyber") {
        document.getElementById("fail").style.display = "block";
    }
})

/**
 * DOM Tagname
 */
var tagName = document.getElementsByTagName("button")[0];
console.log(tagName);
/**
 * DOM Class Name
 */

var _className = document.getElementsByClassName("btn")[1];
console.log(_className);

/**
 * DOM querySelector
 */
var _query = document.querySelector(".container #succes");
console.log(_query);

/**
 * DOM querySelectorAll
 */

var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
console.log(_querySelectorAll);


document.getElementById("btn_TinhTien").addEventListener("click", function() {
    var tienThanhToan = document.getElementById("txtTongTien").value;
    var phanTranTip = document.getElementById("slPhanTramTip").value;
    var numbShare = document.getElementById("txtSoNguoi").value;
    var kq = tienThanhToan * phanTranTip / 100 / numbShare;
    document.getElementById("txtThongBaoTienTip").innerHTML = "Số tiền tip mỗi người là: " + kq;
    document.getElementById("txtThongBaoTienTip").className = "alert alert-success d-block";
})

function themNguoiDung() {
    console.log("Tuan Nguyen");
}