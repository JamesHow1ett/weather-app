export default function getCompassPoint (deg = 0) {
  if (deg >= 331.875 && deg < 16.875) {
    return "N";
  } else if (deg >= 16.875 && deg < 61.875) {
    return "NE";
  } else if (deg >= 61.875 && deg < 106.875) {
    return "E";
  } else if (deg >= 106.875 && deg < 151.875) {
    return "SE";
  } else if (deg >= 151.875 && deg < 196.875) {
    return "S";
  } else if (deg >= 196.875 && deg < 241.875) {
    return "SW";
  } else if (deg >= 241.875 && deg < 286.875) {
    return "W";
  } else if (deg >= 286.875 && deg < 331.875) {
    return "NW";
  }  
}