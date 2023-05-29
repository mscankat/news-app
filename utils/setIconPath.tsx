export function setIconPath(code: number, isday: number) {
  let source = "";
  switch (String(code)) {
    case "1000":
      isday === 1
        ? (source = "/public/images/1530392_weather_sun_sunny_temperature.svg")
        : (source = "/public/images/1530382_weather_night_moon_moonlight.svg");
      break;
    case "1003":
      isday === 1
        ? (source = "/public/images/1530391_clouds_sun_sunny_weather.svg")
        : (source = "/public/images/1530383_moon_weather_clouds_cloudy.svg");
      break;
    case "1006":
      source = "/public/images/1530369_cloudy_weather_clouds_cloud.svg";
      break;
    case "1009":
      source = "/public/images/1530369_cloudy_weather_clouds_cloud.svg";
      break;
    case "1030":
      source = "/public/images/1530368_foggy_weather_fog_clouds_cloudy.svg";
      break;
    case "1114":
      source = "/public/images/1530370_hail_weather_hailstone_clouds_snow.svg";
      break;
    case "1117":
      source = "/public/images/1530371_winter_snow_clouds_weather.svg";
      break;
    case "1183":
      source = "/public/images/1530365_rain_cloud_drizzel_weather.svg";
      break;
    case "1186":
      source = "/public/images/1530364_rain_storm_shower_weather.svg";
      break;
    case "1189":
      source = "/public/images/1530364_rain_storm_shower_weather.svg";
      break;
    case "1192":
      source = "/public/images/1530362_cloudy_weather_forecast_rain_clouds.svg";
      break;
    case "1195":
      source = "/public/images/1530362_cloudy_weather_forecast_rain_clouds.svg";
      break;
    case "1213":
      source = "/public/images/1530370_hail_weather_hailstone_clouds_snow.svg";
      break;
    case "1219":
      source = "/public/images/1530370_hail_weather_hailstone_clouds_snow.svg";
      break;
    case "1225":
      source = "/public/images/1530371_winter_snow_clouds_weather.svg";
      break;
    case "1240":
      source = "/public/images/1530364_rain_storm_shower_weather.svg";
      break;
    default:
      source = "";
      break;
  }
  return source;
}
