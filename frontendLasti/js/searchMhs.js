



function getMhs(){
    $.ajax({
        type: "GET",
        url: BASE_URL+"/mhs/"+encodeURIComponent(document.getElementById('nim').value,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(){
            const html =            
            '<tr>\n'+
            '   <td>'+ row.nim +'</td>\n'+
            '   <td>'+ row.ktmUid +'</td>\n'+
            '   <td>'+ row.idPendaftar +'</td>\n'+
            '   <td>'+ row.nama +'</td>\n'+
            '   <td>'+ tglDaftar +'</td>\n'+
            '   <td>'+ row.alamat +'</td>\n'+
            '   <td>'+ row.fakultas +'</td>\n'+
            '   <td>'+ row.tempatTanggalLahir +'</td>\n'+
            '   <td>'+ row.tingkat +'</td>\n'+
            '   <td>'+ row.jalur +'</td>\n'+
            '</tr>\n';
            $("#tabel-mhs-nim").append(html);
        },
        failure: function(){
            alert(errMsg);
        }
    })
}



$(document).ready(function() {
    $("#search-btn").on("click", function(){
        getMhs();
    })
});

function hidetabelAllMhs() {
    document.getElementById('tabel-mahasiswa').style.display='none';
    var x = document.getElementById("tabel-mahasiswa-by-nim");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}