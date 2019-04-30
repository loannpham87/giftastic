//function for tastic swoop on window load
function tastic() {
    $("#tastic").animate({
        right: '900px',
        height: '100px',
        width: '150px'
    });
};

// array of buttons populate at the top of the page for specific searches, need a loop, when a button is clicked, that is when the 10 gifs will populate

//event listener for buttons
$("button").on("click", function () {
    var thankunext = $(this).attr("data-thank-u-next");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=caUXL8fwGwuoChfEtrkOWsYnE6mAsbfm&q=thank u, next&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
})

    .then(function (response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i] !== "pg-13") {
                var popGifs = $("#pop-gifs");
                var rating = results[i].rating;
                var ratingTag = $("#rating").text("Rating: " + rating);
                popGifs.append(ratingTag);
                $("pop-gifs").prepend(popGifs);
            }
        }
    });

    