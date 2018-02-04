var apiKey = "ed5d9a8f03e0df4c6ec1105c93234afa"; // darksky.net api key
var latitude = "39.322308"; // Showing Soda Springs
var longitude = "-120.442098";
var lang = "en"; // too many options.  check here https://darksky.net/dev/docs/forecast
var units = "us"; // auto, ca, uk2, us, si
var degreeSymbol = "F"; // C or F
var rainPrecUnit = "in";
var snowPrecUnit = "in";
var windUnit = "mph"
var forecastNbOfDays = 5; // 0 to 8
var hourlyNbOfHours = 18; // 0-49
var theme = "black"; // "blue", "black", "white"

var showScrollingAlerts = false;
var showCurrentWeather = true;
var showCurrentIcon = true;
var showCurrentSummary = false;
var showCurrentWindBearing = false;
var showCurrentDate = true;
var showCurrentTime = true;
var showForecastIcon = true;
var showForecastSummary = false;
var showForecastMinTemp = true;
var showForecastWind = false;
var showForecastWindBearing = false;
var showForecastAccumulation = true;
var showForecastProbability = true;
var showHourlyIcon = true;
var showHourlyWind = false;
var showHourlyWindBearing = false;
var showHourlyAccumulation = true;
var showHourlyProbability = true;
var showDarkSkyLink = false; // set to true if you have a free darksky api key.

var debugging = false; // will allow showing forecast for past days.  Usefull when playing with sample data

// Set for your language
// English
var todayLabel = "Today";
var windLabel = "wind";
var apparentTempLabel = "feels";
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// French
//var todayLabel = "Aujourd'hui";
//var windLabel = "vent";
//var apparentTempLabel = "ressentie";
//var week = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
//var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

var url = 'https://api.darksky.net/forecast/' + apiKey + '/' + latitude + ',' + longitude + '?lang=' + lang + '&units=' + units;
