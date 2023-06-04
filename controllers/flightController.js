const getIataCode = require("../utils/getIataCode");
const getToday = require("../utils/getToday");

module.exports.getPrice = async (req, res, next) => {
  const source = req.body.source;
  const destination = req.body.destination;
  const date = req.body.date;

  // iata codes for the source and the destination
  var sourceCode = "";
  var destinationCode = "";

  // getting source iata code
  // as the api used here to get the iata code of the city entered by the user only shows 1000 documents per call (for free subscription users)
  // i have to call the api 9 times by changing the offset (think of it as a page number) to check the city in the api dictionary to fetch the iata code
  for (let i = 0; i <= 9; i++) {
    var code = await getIataCode(source, i * 1000);
    if (code != null) {
      sourceCode = code;
      break;
    }
  }
  console.log(sourceCode);

  // if sourceCode is empty, then it means there is some error in the city entered by the user so we go back to the form page with the error
  if (sourceCode == "") {
    res.render("form.ejs", {
      today: getToday(),
      sourceStyle: "display:block;",
      sourceError: "Please enter correct source city",
      destinationStyle: "",
      destinationError: "",
    });
  }

  code = null;
  // getting destination iata code
  // same logic applied in fetching the source city iata code is applied here to fetch the destination city iata code
  for (let i = 0; i <= 9; i++) {
    var code = await getIataCode(destination, i * 1000);
    if (code != null) {
      destinationCode = code;
      break;
    }
  }
  console.log(destinationCode);

  if (destinationCode == "") {
    res.render("form.ejs", {
      today: getToday(),
      sourceStyle: "",
      sourceError: "",
      destinationStyle: "display:block;",
      destinationError: "Please enter correct destination city",
    });
  }

  var result = {};
  // getting the actual details of the flight
  const ticketPriceAPI = `https://skyscanner44.p.rapidapi.com/search?adults=1&origin=${sourceCode}&destination=${destinationCode}&departureDate=${date}&currency=INR&locale=en-GB&market=IN`;
  await fetch(ticketPriceAPI, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4de62a2e69msh2362156bad8cf2bp121ff4jsn5d372142741b",
      "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // destructuring the complex data provided by the api to get only the details required by our application
      data["itineraries"]["buckets"].forEach((bucket) => {
        var items = bucket["items"];
        items.forEach((item) => {
          var price = item["price"]["formatted"];
          var legs = item["legs"];
          legs.forEach((leg) => {
            leg["carriers"]["marketing"].forEach((market) => {
              result[market["name"]] = price;
            });
          });
        });
      });
    })
    .catch((err) => console.log(err));
  console.log(result);

  if (result != {}) {
    res.render("result.ejs", {
      source: sourceCode,
      destination: destinationCode,
      today: date,
      result: result,
      error: false,
    });
  } else {
    // if the program reaches to this point then it means that the result object is empty, which is possible when there were no flights present
    // from source to destination at given date, this is possible when the date is way ahead of today and the flights are maybe not scheduled for that day yet.
    res.render("result.ejs", {
      source: sourceCode,
      destination: destinationCode,
      today: date,
      result: result,
      error: true,
    });
  }
};

module.exports.getHomePage = (req, res, next) => {
  res.render("form.ejs", {
    today: getToday(),
    sourceStyle: "",
    sourceError: "",
    destinationStyle: "",
    destinationError: "",
  });
};
