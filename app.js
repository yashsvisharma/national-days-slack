const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const request = require('request');

// server config
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

// change days to title case
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};


var url = 'https://nationaldaycalendar.com/what-day-is-it/'

buildText = "";

// get today's date
var d = new Date();

getResponse = ""

//get html of site
axios.get(url).then((response) => {
  const $ = cheerio.load(response.data)

  let days = []; // parse html and place days in array
  $('.evcal_desc2.evcal_event_title').each(function (i, e) {
    days[i] = $(this).text().toProperCase();
  });

  buildText = "National Days for " + d.toDateString() + "\n" //header

  days.forEach(element => buildText = buildText + "-" + element + "\n") //days

  var obj = {}  //build object
  obj.text = buildText //add text
  obj.response_type = "in_channel"; //send to channel

  console.log(JSON.stringify(obj))
  getResponse = obj
})

// handle get requests
app.post('/', (req, res) => {
  res.json(getResponse); //send as JSON payload
});

//start web server
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))