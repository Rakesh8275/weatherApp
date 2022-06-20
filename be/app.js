// const axios = require("axios");
// const fetch = require("node-fetch");

// const options = {
//   method: "GET",
//   url: "https://hotels4.p.rapidapi.com/locations/v2/search",
//   params: { query: "new york", locale: "en_US", currency: "USD" },
//   headers: {
//     "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
//     "X-RapidAPI-Key": "fcb3abc189msh3d031ccfdf98426p1db312jsn1ef375ac16cc",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// import fetch from "node-fetch";

// const url =
//   "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "fcb3abc189msh3d031ccfdf98426p1db312jsn1ef375ac16cc",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error("error:" + err));
// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search",
//   params: {
//     checkin_date: "2022-03-26",
//     checkout_date: "2022-03-27",
//     sort_order: "STAR_RATING_HIGHEST_FIRST",
//     destination_id: "1708350",
//     adults_number: "1",
//     locale: "en_US",
//     currency: "USD",
//     children_ages: "4,0,15",
//     price_min: "10",
//     star_rating_ids: "3,4,5",
//     accommodation_ids: "20,8,15,5,1",
//     price_max: "500",
//     page_number: "1",
//     theme_ids: "14,27,25",
//     amenity_ids: "527,2063",
//     guest_rating_min: "4",
//   },
//   headers: {
//     "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
//     "X-RapidAPI-Key": "9c7bf3a971msh775ef610df1e221p1cd47fjsnf37bd1d02f07",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://hotels4.p.rapidapi.com/locations/v2/search",
//   params: { query: "karnataka", locale: "en_US", currency: "USD" },
//   headers: {
//     "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
//     "X-RapidAPI-Key": "9c7bf3a971msh775ef610df1e221p1cd47fjsnf37bd1d02f07",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby",
//   params: {
//     latitude: "51.509865",
//     currency: "USD",
//     longitude: "-0.118092",
//     checkout_date: "2022-03-27",
//     sort_order: "STAR_RATING_HIGHEST_FIRST",
//     checkin_date: "2022-03-26",
//     adults_number: "1",
//     locale: "en_US",
//     guest_rating_min: "4",
//     star_rating_ids: "3,4,5",
//     children_ages: "4,0,15",
//     page_number: "1",
//     price_min: "10",
//     accommodation_ids: "20,8,15,5,1",
//     theme_ids: "14,27,25",
//     price_max: "500",
//     amenity_ids: "527,2063",
//   },
//   headers: {
//     "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
//     "X-RapidAPI-Key": "fcb3abc189msh3d031ccfdf98426p1db312jsn1ef375ac16cc",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
//   params: { query: "eiffel tower", lang: "en_US", units: "km" },
//   headers: {
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "9c7bf3a971msh775ef610df1e221p1cd47fjsnf37bd1d02f07",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// const axios = require("axios");

// const options = {
//   method: "POST",
//   url: "https://travel-advisor.p.rapidapi.com/locations/v2/search",
//   params: { currency: "USD", units: "km", lang: "en_US" },
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "9c7bf3a971msh775ef610df1e221p1cd47fjsnf37bd1d02f07",
//   },
//   data: '{"query":"chiang mai","updateToken":""}',
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const axios = require("axios");

// const options = {
//   method: "POST",
//   url: "https://travel-advisor.p.rapidapi.com/hotel-filters/v2/list",
//   params: { lang: "en_US", units: "km", currency: "USD" },
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "9c7bf3a971msh775ef610df1e221p1cd47fjsnf37bd1d02f07",
//   },
//   data: '{"geoId":293928,"checkIn":"2021-07-03","checkOut":"2021-07-05","sort":"PRICE_LOW_TO_HIGH","sortOrder":"asc","filters":[{"id":"deals","value":["1","2","3"]},{"id":"price","value":["31","122"]},{"id":"type","value":["9189","9201"]},{"id":"amenity","value":["9156","9658","21778","9176"]},{"id":"distFrom","value":["2227712","25.0"]},{"id":"rating","value":["40"]},{"id":"class","value":["9572"]}],"rooms":[{"adults":2,"childrenAges":[2]},{"adults":2,"childrenAges":[3]}]}',
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
const options = {
  method: "POST",
  url: "https://travel-advisor.p.rapidapi.com/locations/v2/list-nearby",
  params: { currency: "USD", units: "km", lang: "en_US" },
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "9c7bf3a971msh775ef610df1e221p1cd47fjsnf37bd1d02f07",
  },
  data: '{"contentId":"cc8fc7b8-88ed-47d3-a70e-0de9991f6604","contentType":"restaurant","filters":[{"id":"placetype","value":["hotel","attraction","restaurant"]},{"id":"minRating","value":["30"]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}}}',
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.AppPresentation_queryNearToALocation);
  })
  .catch(function (error) {
    console.error(error);
  });
