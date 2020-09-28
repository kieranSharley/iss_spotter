const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation, printPassTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);

  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    console.log('It worked! Returned coords:', coords);


    //const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

    fetchISSFlyOverTimes(coords, (error, passTimes) => {
      if (error) {
        console.log("It didn't work fetchingFlyOverTimes!", error,);
        return;
      }

      console.log('It worked! Returned flyover times:', passTimes);
    });
    nextISSTimesForMyLocation((error, passTimes) => {
      if (error) {
        return console.log("It didn't work!", error);
      }
      // success, print out the deets!
      printPassTimes(passTimes);
    });

  });
});


