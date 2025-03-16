$(document).ready(function ()
{
    // Preloader
    $(window).on('load', function ()
    {
        if ($('#preloader').length)
        {
            $('#preloader').delay(1000).fadeOut('slow', function ()
            {
                $(this).remove();
            });
        }
    });

    // Country Info API
    $('#btnCountryInfo').click(function ()
    {
        $.ajax({
            url: "libs/php/getCountryInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                country: $('#selCountry').val(),
                lang: $('#selLanguage').val()
            },
            success: function (result)
            {
                if (result.status.name == "ok")
                {
                    $('#txtContinent').html("Continent: " + result['data'][0]['continent']);
                    $('#txtCapital').html("Capital: " + result['data'][0]['capital']);
                    $('#txtLanguages').html("Language: " + result['data'][0]['languages']);
                    $('#txtPopulation').html("Population: " + result['data'][0]['population']);
                    $('#txtArea').html("Area: " + result['data'][0]['areaInSqKm'] + " km²");
                }
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log(errorThrown);
            }
        });
    });

    // Time Zone API
    $('#btnTimeZone').click(function ()
    {
        $.ajax({
            url: "libs/php/getTimeZone.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lat: $('#lat1').val(),
                lng: $('#lng1').val()
            },
            success: function (result)
            {
                if (result.status.name == "ok")
                {
                    $('#txtTimeZone').html("Time Zone: " + result['data']['timezoneId']);
                    $('#txtGMTOffset').html("GMT Offset: " + result['data']['gmtOffset'] + " hours");
                }
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log(errorThrown);
            }
        });
    });

    // Weather API
    $('#btnWeather').click(function ()
    {
        $.ajax({
            url: "libs/php/getWeather.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lat: $('#lat2').val(),
                lng: $('#lng2').val()
            },
            success: function (result)
            {
                if (result.status.name == "ok")
                {
                    $('#txtTemperature').html("Temperature: " + result['data']['main']['temp'] + " °C");
                    $('#txtHumidity').html("Humidity: " + result['data']['main']['humidity'] + " %");
                    $('#txtWindSpeed').html("Wind Speed: " + result['data']['wind']['speed'] + " m/s");
                }
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log(errorThrown);
            }
        });
    });

    // Elevation API
    $('#btnElevation').click(function ()
    {
        $.ajax({
            url: "libs/php/getElevation.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lat: $('#lat3').val(),
                lng: $('#lng3').val()
            },
            success: function (result)
            {
                if (result.status.name == "ok")
                {
                    $('#txtElevation').html("Elevation: " + result['data']['astergdem'] + " meters");
                }
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log(errorThrown);
            }
        });
    });
});