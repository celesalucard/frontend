var BASE_URL = "http://178.128.104.74/registrasimahasiswabaru"
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


function deleteJadwal(id){
    //console.log(id);
    $.ajax({
        url: BASE_URL+"/jadwal/"+id,
        type: "DELETE",
        success: function(){
            alert("Berhasil hapus!");
        }
    })

}


function getAllJadwal(){
    $.get(BASE_URL + "/jadwal", function(data){
        console.log(data);
        //$("#tabel-rows").html('').append(html);
        for(let i=0; i < data.length; i++){
            let row = data[i];
            let tglMulai = new Date(row.tglMulai).toLocaleDateString('en-ID', options);
            let tglSelesai = new Date(row.tglSelesai).toLocaleDateString('en-ID', options);
            console.log(row.title);
            const html =            
            '<tr>\n'+
            '   <td>'+ row.id +'</td>\n'+
            '   <td>'+ tglMulai +'</td>\n'+
            '   <td>'+ tglSelesai +'</td>\n'+
            '   <td>'+ row.title +'</td>\n'+
            '   <td>'+ row.description +'</td>\n'+
            '   <td> <a href="editJadwalForm.html?id='+ row.id + '">Edit jadwal</a> \n'+
            '        || \n'+
            '        <a href="#" onclick="deleteJadwal('+ row.id +')">Delete Jadwal</a> </td>\n'+
            '</tr>\n';
            $("#tabel-rows").append(html);
        }
        //$("#tabel-rows").html('').append(html);
    });

}

$(document).ready(function() {
    getAllJadwal();
})