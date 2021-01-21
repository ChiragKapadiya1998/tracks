import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = increament => {
  return {
    timeStamp: 1000000,
    coords: {
      altitude: 0,
      accurancy: 0,
      heading: 200,
      speed: 0,
      latitude: 37.33233 + increament * tenMetersWithDegrees,
      longitude: -122.03121 + increament * tenMetersWithDegrees,
      altitudeAcuurancy: 5,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
