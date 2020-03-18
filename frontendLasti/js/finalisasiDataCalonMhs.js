var BASE_URL = "http://178.128.104.74/registrasimahasiswabaru"


function finalisasiMhs(idPendaftar){
    console.log(idPendaftar);
    $.ajax({
        url: BASE_URL+"/calonMhs/"+idPendaftar+"/finalisasi",
        type: "POST",
        success: function(){
            alert("Berhasil Finalisasi Data Mahasiswa!");
        }
    })
}

function getCalonMhs(){
    $.get(BASE_URL + "/calonMhs", function(data){
        console.log(data);
        for(let i=0; i < data.length; i++){
            let row = data[i];
            const html = 
            '<tr>\n'+
            '   <td>'+ row.idPendaftar + '</td>\n'+
            '   <td>'+ row.ktmUid + '</td>\n'+
            '   <td>'+ row.fileAdministrasi + '</td>\n'+
            '   <td> <a href="#" onclick="finalisasiMhs(\'' + row.idPendaftar + '\')">Generate Nim</a> </td>\n'+
            '</tr>\n';
            $("#table-rows").append(html);
        }
    })
}

$(document).ready(function(){
    getCalonMhs();
})