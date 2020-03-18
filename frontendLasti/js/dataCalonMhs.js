var BASE_URL = "http://178.128.104.74/registrasimahasiswabaru"

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
            '   <td> <a href="editCalonMhs.html?id='+ row.idPendaftar + '">Edit Data Mahasiswa</a> </td>\n'+
            '</tr>\n';
            $("#tabel-rows").append(html);
        }
    })
}

$(document).ready(function(){
    getCalonMhs();
})