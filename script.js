// Bước 15: Thêm sự kiện onload khi trang được tải xong
window.onload = function initGallery() {
    // 16.1 Thêm thông báo console.log xác nhận sự kiện kích hoạt
    console.log("Trang web đã tải xong. Đang tự động thêm tabindex cho các hình ảnh...");
    
    // Lấy tất cả các hình ảnh có class là preview
    let images = document.querySelectorAll(".preview");
    
    // 16.2 Viết vòng lặp for để lặp qua từng hình ảnh
    for (let i = 0; i < images.length; i++) {
        // 16.3 Thêm thuộc tính tabindex để hỗ trợ điều hướng bằng bàn phím (Tab)
        images[i].setAttribute("tabindex", "0");
    }
    console.log("Đã hoàn tất thêm tabindex cho " + images.length + " hình ảnh.");
};

function update(previewPic) {
    console.log("Sự kiện focus/mouseover đã kích hoạt!");
    console.log("Mô tả ảnh (Alt): " + previewPic.alt);
    console.log("Đường dẫn ảnh (Src): " + previewPic.src);

    let displayDiv = document.getElementById("image");
    displayDiv.textContent = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Sự kiện blur/mouseleave đã kích hoạt!");
    let displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.textContent = "Di chuột hoặc dùng phím Tab để chuyển qua các hình ảnh bên dưới.";
}
