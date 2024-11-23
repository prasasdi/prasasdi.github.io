$(document).ready(function() {
    $('#btn-about').click(function() {
        $(this).html('<h2>Tentang</h2><p>Isi ini telah diubah ketika diklik!</p>');
    });

    $('.thiss').click(function() {
        $("#c-body p:first-of-type").css("margin-bottom", "0px");
        $.get("routes/about.html", function(data){
            $("#c-body").append(data);
        });
        console.log("iki loh cah");
    });
});