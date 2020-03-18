var BASE_URL = "http://178.128.104.74/registrasimahasiswabaru"

function updateAdminCalonMhs(id){
    var updateBody = {
        "ktmUid": $("#uidKTM").val(),
        "fileAdministrasi": $("#filekelengkapan").val()
    };
    //console.log($("#uidKTM").val());
    
    $.ajax({
        type:"PUT",
        url: BASE_URL+"/calonMhs/"+id,
        data: JSON.stringify(updateBody),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(){
            alert("Berhasil mengubah data Calon Mahasiswa!");
        },
        failure: function(){
            alert(errMsg);
        }
    });
}

$(document).ready(function(){
    $("#submit-btn").on("click",function(){
        updateAdminCalonMhs(Cookies.get("noreg"));
    })
})