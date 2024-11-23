$(document).ready(function() {
    $('.thiss').click(function() {
        $("#c-body p:first-of-type").css("margin-bottom", "0px");
        if ($("#c-body p:nth-of-type(2)").html() == undefined && $(this).hasClass('dude'))
        {
            $.get("routes/about.html", function(data){
                $("#c-body p:nth-of-type(2)").html(data);
            });
            $(this).removeClass('dude');

        }
        else{
            $("#c-body p:nth-of-type(2)").html("<p class=\"text-muted\">I mean, why can't i just go HTML and JS and deploy them into static pages? Anyway, i do mainly pretty much in backend using .NET</p>");
            $(this).addClass("dude");
        }
    });
});