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
    });

    function updateLocation(location) {
        var placeSet = {
        "async": true,
        "crossDomain": true,
        "url": "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial",
        "method": "GET"
        };
        $.ajax(placeSet).done(function (response) {
            $('#middle').html('The current weather in ' + location + ' is ' + response.weather[0].description + ' with a current temperature of ' + response.main.temp + ' degrees.');
            console.log(response);
        });
    }


});