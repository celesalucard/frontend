var BASE_URL = "http://178.128.104.74/registrasimahasiswabaru"

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function updateJadwal(){
    //console.log(id);
    var putBody = {
        "title": $("#nama-jadwal").val(),
        "description": $("#deskripsi-kegiatan").val(),
        "tglMulai": new Date($("#tanggal-mulai").val()),
        "tglSelesai": new Date($("#tanggal-selesai").val()),
        "allowedLevels": [
            $("#program").val()
        ],
        "allowedDepartments": [
            $("#fakultas").val()
        ]
    }

    $.ajax({
        type: "PUT",
        url: BASE_URL+"/jadwal/"+id,
        data: JSON.stringify(putBody),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(){
            alert("Berhasil melukan pengubahan jadwal!");
        },
        failure: function(){
            alert(errMsg);
        }
    })
}


$(document).ready(function() {
    $("#submit-btn").on("click", function(){
        updateJadwal();
    })
});
