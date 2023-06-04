// get iata code
const getIataCode = async (city, offset) => {
  const api = `http://api.aviationstack.com/v1/cities?access_key=9779153bacffbdcc5386660859fc93b3&limit=1000&offset=${offset}`;
  var res = null;

  await fetch(api, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      var cities = data["data"];
      cities.forEach((c) => {
        if (c["city_name"].toLowerCase().includes(city.toLowerCase())) {
          res = c["iata_code"];
        }
      });
    })
    .catch((err) => console.log(err));

  return res;
};

module.exports = getIataCode;
