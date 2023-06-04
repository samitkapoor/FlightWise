module.exports.getPrice = async (req, res, next) => {
  // const source = req.body.source;
  // const destination = req.body.destination;
  // const date = req.body.date;
  // // iata codes for the source and the destination
  // var sourceCode = "";
  // var destinationCode = "";
  // // getting source iata code
  // for (let i = 0; i <= 9; i++) {
  //   var code = await getIataCode(source, i * 1000);
  //   if (code != null) {
  //     sourceCode = code;
  //     break;
  //   }
  // }
  // console.log(sourceCode);
  // code = null;
  // // getting destination iata code
  // for (let i = 0; i <= 9; i++) {
  //   var code = await getIataCode(destination, i * 1000);
  //   if (code != null) {
  //     destinationCode = code;
  //     break;
  //   }
  // }
  // console.log(destinationCode);
  // var result = {};
  // const ticketPriceAPI = `https://skyscanner44.p.rapidapi.com/search?adults=1&origin=${sourceCode}&destination=${destinationCode}&departureDate=${date}&currency=INR&locale=en-GB&market=IN`;
  // await fetch(ticketPriceAPI, {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "4de62a2e69msh2362156bad8cf2bp121ff4jsn5d372142741b",
  //     "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     data["itineraries"]["buckets"].forEach((bucket) => {
  //       var items = bucket["items"];
  //       items.forEach((item) => {
  //         var price = item["price"]["formatted"];
  //         var legs = item["legs"];
  //         legs.forEach((leg) => {
  //           leg["carriers"]["marketing"].forEach((market) => {
  //             result[market["name"]] = price;
  //           });
  //         });
  //       });
  //     });
  //   })
  //   .catch((err) => console.log(err));
  // console.log(result);
  // res.json(result);
  res.json({ Hey: "No" });
};

module.exports.getHomePage = (req, res, next) => {
  const d = new Date();
  var year = d.getFullYear().toString();
  var month = d.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  var date = d.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  res.render("form", {
    today: year + "-" + month + "-" + date
  });
};
