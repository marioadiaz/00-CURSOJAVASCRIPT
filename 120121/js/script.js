var vars;
var temp_c;
var temp_f;
 
$.ajax({
type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=San Juan, PR&APPID={4a27186104313d32ef6faa0f7d8cefcf}",
dataType: "json",
success: function (data) {
vars = data.main;
temp_c = vars.temp - 273.15;
temp_f = 1.8 * (vars.temp - 273.15) + 32;
},
error: function (jqXHR, textStatus, errorThrown) {
alert(errorThrown);
}
});