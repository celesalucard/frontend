var BASE_URL = "http://178.128.104.74/registrasimahasiswabaru"

function postJadwal (){

    var postBody = {
        "title" : $("#nama-jadwal").val(),
        "description" : $("#deskripsi-kegiatan").val(),
        "tglMulai" : new Date($("#tanggal-mulai").val()),
        "tglSelesai" : new Date($("#tanggal-selesai").val()),
        "allowedLevels" : [
            $("#program").val()
        ],
        "allowedDepartments" : [
            $("#fakultas").val()
        ]
    }

    $.ajax({
        type: "POST",
        url: BASE_URL+"/jadwal",
        data: JSON.stringify(postBody),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(){
            alert("Berhasil menambahkan jadwal!");
        },
        failure: function(errMsg){
            alert(errMsg);
        }
    })

}

$(document).ready(function() {
    $("#submit-btn").on("click",function(){
        postJadwal();
    })
})