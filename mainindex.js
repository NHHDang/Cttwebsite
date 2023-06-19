const orgTTSV = {
    'name': 'Ngô Hoàng Hải Đăng',
    'idstudent': 20204639,
    'yearstart': 2020,
    'edulevel': 'Đại học đại trà',
    'spec': 'Khoa học máy tính 2020',
    'department': 'Trường Công nghệ thông tin và Truyền thông',
    'stat': 'Học',
    'gender': 'Nam',
    'class': 'Khoa học máy tính 03',
    'session': 65,
    'email': 'dang.nhh204639@sis.hust.edu.vn'
    }
    let id = ["name", "idstudent", "yearstart", "edulevel", "spec", "department", "stat", "gender", "class", "session", "email"];
    let TTSV = orgTTSV;
    if (localStorage) {
        id.forEach(element => {
            if (localStorage.getItem(element))
            TTSV[element] = localStorage.getItem(element);
        });
    }
    function init() {
        if (localStorage.getItem("portraitsrc")) {
            let imgs = document.getElementsByClassName("portraitsrc");
            for (var i = 0; i<imgs.length; i++) imgs[i].src = localStorage.getItem("portraitsrc");
        }
        id.forEach(element => {
            if (localStorage.getItem(element))
            document.getElementById(element).innerHTML = localStorage.getItem(element);
        });
        if (localStorage.getItem("name"))
        document.getElementById("name1").innerHTML = localStorage.getItem("name");
        console.log(TTSV);
    }

    function openEditPage() {
        window.open("edit.html", "_parent");
    }
