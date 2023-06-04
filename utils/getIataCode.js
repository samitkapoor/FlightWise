// get iata code
// iata code is used in the api to fetch the details of the flights
const getIataCode = async (city, offset) => {
  const api = `http://api.aviationstack.com/v1/cities?access_key=ab946d69a22d85397e0d57c9be6fa6b8&limit=1000&offset=${offset}`;
  var res = null;

  await fetch(api, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      var cities = data["data"];
      cities.forEach((c) => {
        // if entered city is valid then get its iatacode
        if (c["city_name"].toLowerCase().includes(city.toLowerCase())) {
          res = c["iata_code"];
        }
      });
    })
    .catch((err) => console.log(err));

  return res;
};

module.exports = getIataCode;
