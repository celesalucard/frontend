const BASE_URL = "http://178.128.104.74/registrasimahasiswabaru";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const urlParams = new URLSearchParams(window.location.search);
const nim = urlParams.get('nim');

function getAllDataMhs() {
    $.get(BASE_URL + "/mhs", function(data) {
        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            let tglDaftar = new Date(row.tanggalDaftar).toLocaleDateString('en-ID', options);
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
            $("#tabel-mhs").append(html);
        }
    });
}

function getMhs(nim) {
    $.get(BASE_URL + "/mhs/"+nim, function(data) {
            let tglDaftar = new Date(data.tanggalDaftar).toLocaleDateString('en-ID', options);
            const html =            
            '<tr>\n'+
            '   <td>'+ data.nim +'</td>\n'+
            '   <td>'+ data.ktmUid +'</td>\n'+
            '   <td>'+ data.idPendaftar +'</td>\n'+
            '   <td>'+ data.nama +'</td>\n'+
            '   <td>'+ tglDaftar +'</td>\n'+
            '   <td>'+ data.alamat +'</td>\n'+
            '   <td>'+ data.fakultas +'</td>\n'+
            '   <td>'+ data.tempatTanggalLahir +'</td>\n'+
            '   <td>'+ data.tingkat +'</td>\n'+
            '   <td>'+ data.jalur +'</td>\n'+
            '</tr>\n';
            $("#tabel-mhs-nim").html('').append(html);
            window.setTimeout(function(){window.location.reload()}, 5000);
    }); 
}

// $("#search-btn").click(function() {
//     console.log('audi'); 
//     $.get(BASE_URL+"/mhs/"+encodeURIComponent(document.getElementById('nim').value), function(data) {
//         for (let i = 0; i < data.length; i++) {
//             let row = data[i];
//             let tglDaftar = new Date(row.tanggalDaftar).toLocaleDateString('en-ID', options);
//             const html =            
//             '<tr>\n'+
//             '   <td>'+ row.nim +'</td>\n'+
//             '   <td>'+ row.ktmUid +'</td>\n'+
//             '   <td>'+ row.idPendaftar +'</td>\n'+
//             '   <td>'+ row.nama +'</td>\n'+
//             '   <td>'+ tglDaftar +'</td>\n'+
//             '   <td>'+ row.alamat +'</td>\n'+
//             '   <td>'+ row.fakultas +'</td>\n'+
//             '   <td>'+ row.tempatTanggalLahir +'</td>\n'+
//             '   <td>'+ row.tingkat +'</td>\n'+
//             '   <td>'+ row.jalur +'</td>\n'+
//             '</tr>\n';
//             $("#tabel-mhs-nim").append(html);
//         }
//     });
// });


$(document).ready(function() {
    getAllDataMhs();
})

function hidetabelAllMhs() {
    document.getElementById('tabel-mahasiswa').style.display='none';
    var x = document.getElementById("tabel-mahasiswa-by-nim");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}