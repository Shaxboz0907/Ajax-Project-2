$(document).ready(function () {

    $("#getPhoto").click(function () {

        let photo = [];

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            type: "GET",
            success: function (data) {
                photo = data ;
            },
            error: function (err) {
                console.log(err);
            },
            beforeSend: function () {
                $("#getPhoto").attr("disabled", "disabled");
                $("#getPhoto .spinner-border").toggleClass("d-none");
            },
            complete: function () {
                $("#getPhoto").removeAttr("disabled");
                $("#getPhoto .spinner-border").toggleClass("d-none");
            },
            async: false ,

        });

        for( var p of photo) {

            var col = "<div class='col-md-3'>" + 
                        "<img src='"+ p.thumbnailUrl + "' class='img-fluid'>" +
                        "<p class='text-uppercase'>" + p.title + "</p>" +
                      "</div>" ;
            
            $("#row").append(col);
        }
        console.log(photo);

    });
});