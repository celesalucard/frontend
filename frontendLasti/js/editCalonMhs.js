var BASE_URL = "http://178.128.104.74/registrasimahasiswabaru"

const urlParams = new URLSearchParams(window.location.search);
const idPendaftar = urlParams.get('id');

function editDataMhs(){
    //console.log(idPendaftar);
    var putBody = {
        "ktmUid": $("#ktm-uid").val(),
        "fileAdministrasi": $("#file-administrasi").val()
    }

    $.ajax({
        type: "PUT",
        url: BASE_URL+"/calonMhs/"+idPendaftar,
        data: JSON.stringify(putBody),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(){
            alert("Berhasil mengubah data Calon Mahasiswa!");
        },
        failure: function(){
            alert(errMsg);
        }
    })
}

$(document).ready(function(data){
    $("#submit-btn").on("click", function(){
        editDataMhs();
    })
})
