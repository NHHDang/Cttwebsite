function init() {
    if (localStorage.getItem("portraitsrc"))
        document.getElementById('myimg').src = localStorage.getItem("portraitsrc");
}
function handleimg() {
    let img = document.getElementById('myimg');
    let input = document.getElementById('imgchooser');
    var file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => img.src = e.target.result;
    reader.readAsDataURL(file);
}
function updateInfo() {
    let id = ["name", "idstudent", "yearstart", "edulevel", "spec", "department", "stat", "class", "session", "email"];
    id.forEach(element => {
        localStorage.setItem(element, document.getElementById(element).value);   
    });
    let select = document.getElementsByName("gender");
    for (var i=0; i< select.length; i++) {
        if(select[i].checked) {
            localStorage.setItem("gender", select[i].value);
            break;
        }
    }
    localStorage.setItem('portraitsrc', document.getElementById('myimg').src);
    alert("Bạn đã cập nhật thông tin thành công!");
    window.open("index.html","_parent");
}
function resetInfo() {
    localStorage.clear();
    window.location = 'index.html';
}