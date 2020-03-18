const BASE_URL = "http://178.128.104.74/registrasimahasiswabaru";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function getJadwal() {
    $.get(BASE_URL + "/jadwal", function(data) {
        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            let tglMulai = new Date(row.tglMulai).toLocaleDateString('en-ID', options);
            let tglSelesai = new Date(row.tglSelesai).toLocaleDateString('en-ID', options);
            const html = '<div class="row">\n' +
                '                    <div id="information-2" class="col-11">\n' +
                '                        <div>\n' +
                '                            <p style="margin-top: 5px; margin-bottom: 0px">' + tglMulai + ' - ' + tglSelesai + '</p>\n' +
                '                            <p class="font-weight-bold" style="color: #007bff; font-size: 20px">' + row.title + '</p>\n' +
                '                            <p>' + row.description + '</p>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>';

            $("#jadwal-rows").append(html);
        }
    });
}

$(document).ready(function() {
    getJadwal();
});
