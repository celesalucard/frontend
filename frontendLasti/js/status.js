const VINCENT_BASE_URL = "http://178.128.104.74/pengelolaanjalurseleksipmb";
const BASE_URL = "http://178.128.104.74/registrasimahasiswabaru";
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function getCalonMhs(id) {
    $.get(VINCENT_BASE_URL + "/student/" + id, function(data) {
        let dataMhs = data.results[0];
        $("#student-name").text(dataMhs.namapendaftar);
        $("#student-regid").text(dataMhs.idpendaftar);
        $("#student-regdate").text(dataMhs.tanggaldaftar);
        $("#student-address").text(dataMhs.alamat);
        $("#student-dob").text(dataMhs.tempattanggallahir);
        $("#student-fac").text(dataMhs.fakultas);
        $("#student-level").text(dataMhs.tingkat);
        $("#student-sel").text(dataMhs.jalur);
    });
}

function getCalonMhsStatus(id) {
    $.get(BASE_URL + "/calonMhs/" + id, function(data) {
        let dataMhs = data;

        if (!!dataMhs.ktmUid) {
            $("#status-ktm").attr('src', 'img/available.png');
        } else {
            $("#status-ktm").attr('src', 'img/unavailable.png');
        }

        if (!!dataMhs.fileAdministrasi) {
            $("#status-files").attr('src', 'img/available.png');
        } else {
            $("#status-files").attr('src', 'img/unavailable.png');
        }
    });
}

$(document).ready(function() {
    getCalonMhs(Cookies.get("noreg"));
    getCalonMhsStatus(Cookies.get("noreg"));
});
