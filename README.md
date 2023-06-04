# FlightWISE

A Node.js application that provides you the prices of the flights from source city to destination city at a given date

# Preview 

https://github.com/samitkapoor/FlightWise/assets/77121931/827c778e-49d5-424e-af2b-a72353ff21c6

This project used 2 APIs to fetch the details of the flights between two cities
- Skyscanner API : 
  - It is the actual API that fetches us the details of the flights between the two cities at a given date.
  - This API requires IATA codes of the cities as parameters.
- AviationStack API : 
  - This API helps application to fetch those precious IATA codes.
  - This API only provides 100 requests per month for free subscription users. So, the project can stop working if requests exceed 100 over a month.

## Follow the steps below to run this project
- Clone this repository by following the steps mentioned
  - Click the green color Code button first.
  - Now copy the link displaying in your screen.

![image](https://github.com/samitkapoor/to-do/assets/77121931/4a67f2b1-65fe-48d4-ac9e-45443de2eaae)

  - Open command prompt and navigate to the path where you want to clone this repository.
  - Type `git clone <Paste the link you copied in the above step>` and hit enter!
  - Congratulations, you have successfully cloned this repository in your computer.
- Open the project in your terminal
- Run command `npm install` to install all the necessary packages
- Run command `npm start` to run the project
- Go to the http://localhost:3000 to interact with the project.

---

- Here's my [portfolio](https://samitkapoor.netlify.app) to know more about me!
- If you liked this project, then do leave a star on this repository and feel free to check my other repositories! :wink:
