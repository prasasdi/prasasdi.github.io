$(document).ready(function() {
    // Menggunakan jQuery untuk mengatur event click pada elemen dengan id "about"
    $('#btn-about').click(function() {
        // Mengubah isi dari elemen dengan id "about"
        $(this).html('<h2>Tentang</h2><p>Isi ini telah diubah ketika diklik!</p>');
    });
});
