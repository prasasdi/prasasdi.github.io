$(document).ready(function() {
    $('.thiss').click(function() {
        $("#c-body p:first-of-type").css("margin-bottom", "0px");
        if ($("#c-body p:nth-of-type(2)").html() == undefined)
        {
            $.get("routes/about.html", function(data){
                $("#c-body").append(data);
            });
        }
    });
});