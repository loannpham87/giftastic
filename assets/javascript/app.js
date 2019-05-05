$(document).ready(function () {

    //function for existing buttons
    $(document).on("click", ".existing", function () {
        $("#pop-gifs").empty()
        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=caUXL8fwGwuoChfEtrkOWsYnE6mAsbfm&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div id='pop-gifs'>");
                var rating = results[i].rating;
                var popRatings = $("<p class='rating'>").text("Rating: " + rating);
                var gifs = $("<img>")
                var animate = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;
                gifs.attr("src", still);
                gifs.attr("data-still", still);
                gifs.attr("data-animate", animate);
                gifs.attr("data-state", "still");
                gifs.addClass("existing");
                gifDiv.append(popRatings);
                gifDiv.append(gifs);
                $("#pop-gifs").prepend(gifDiv);
            }
        });
    });

    // function to add user's buttons
    function newButton() {

        var userAdd = $("<button>");
        userAdd.addClass("existing");
        userAdd.attr("data-type");
        userAdd.text("user button"); //how to add text to the button using the user input
        $(".buttons-section").append(userAdd);

    }

    $(".add-button").on("click", function () {
        newButton();
        $("#pop-gifs").empty()
        var type = $(".user-button").attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=qXf9cVvLHIlxjF4i7zNFUpH1uUFAj8Dl&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div id='pop-gifs'>");
                var rating = results[i].rating;
                var popRatings = $("<p class='rating'>").text("Rating: " + rating);
                var animate = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;
                var gifs = $("<img>")
                gifs.attr("src", still);
                gifs.attr("data-still", still);
                gifs.attr("data-animate", animate);
                gifs.attr("data-state", "still");
                gifs.addClass("existing");
                gifDiv.append(popRatings);
                gifDiv.append(gifs);
                $("#pop-gifs").prepend(gifDiv);
            }
        });
    });

});