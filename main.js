//var randPict = Math.floor(Math.random() * 20);

// window.jsonFlickrFeed = function(data){
//     var pictUrl = data.items[randPict].media.m;
//     var bigPic = pictUrl.replace('m.jpg', 'h.jpg');
//     console.log(bigPic);
//     $('html').css('backgroundImage', 'url('+ bigPic +')');
//     // console.log(data.items[randPict].media.m);
// }

$(document).ready(function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://freegeoip.net/json/",
        "method": "GET"
    }
    $.ajax(settings).done(function (response) {
        $('p.ip').append('<span>' + response.ip + '</span>');
        $('p#latitude').append('<span>' + response.latitude + '</span>');
        $('p#longitude').append('<span>' + response.longitude + '</span>');
        console.log('IP: ' + response.ip + 'Lat: ' + response.latitude + 'Long:' + response.longitude);
    });

    var location = $('#location').val();

    updateLocation(location);


    $('#submit').on('click', function(event) {
        event.preventDefault();
        location = $('#location').val();
        updateLocation(location);
        // changeBackground();
    });

    // function changeBackground() {
    //     var url = 'http://www.flickr.com/services/feeds/photos_public.gne?tags=clouds&format=json'
    //     var background = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": url,
    //         dataType: 'jsonp',
    //         "method": "GET",
    //         success: function(response){
    //             console.log(response);
    //         }
    //     };
    //     $.ajax(background)

    //     console.log(randPict);
    // }

    function updateLocation(location) {
        var placeSet = {
        "async": true,
        "crossDomain": true,
        "url": "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=514cac9abe5e183af31ad4f472b1a330&units=imperial",
        "method": "GET"
        };
        $.ajax(placeSet).done(function (response) {
            //var weatherDesc = response.weather[0].description;
            $('#middle').html('The current weather in ' + location + ' is ' + Math.round(response.main.temp) + '°.  The high today is ' + Math.round(response.main.temp_max) + '° and the low today is ' + Math.round(response.main.temp_min) + '°.');
            console.log(response);
        });
    }


});