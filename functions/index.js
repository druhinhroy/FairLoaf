const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const ConvertTiff = require('tiff-to-png');

const app = express();

app.use(cors);
app.get('/', (req, res) => {
  res.send(`Hello there!`);
});

app.get('/gmap', (req, res) => {
  res.send("gmap");
});

app.get('/overlay', (req, res) => {
  res.send("pollen sense");
});

function toDataURL(src, callback, outputFormat) {
  let image = new Image();
  image.crossOrigin = 'Anonymous';
  image.onload = function () {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  image.src = src;
  if (image.complete || image.complete === undefined) {
    image.src = "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    image.src = src;
  }
}

function conversion(type) {
  var options = {
    logLevel: 1
  };
 
  var converter = new ConvertTiff(options);

  axios
  .get('https://model.pollensense.com/api/region?key=' + process.env.PS_API_SECRET + '&starting=' + getTheDay() + '&region=NA&category=' +  + '&agg=A&format=tiff&unit=PPM3')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
 
  var tiffs = [
    '/home/tiffs/document_one.tif',
    '/home/tiffs/document_two.tif'
  ];
  var location = '/overlays';
 
  converter.convertArray(tiffs, location);
  
  toDataURL('https://www.gravatar.com/avatar/0c6523b4d3f60hj548962bfrg2350',
  function (dataUrl) {
    console.log('RESULT:', dataUrl)
  }
)
}

function getTheDay() {
  const d = new Date();
  const day = d.getDay()

  if (day == 0) {
    return "2020-06-07";
  }
  else if (day == 1) {
    return "2020-06-01";
  }
  else if (day == 2) {
    return "2020-06-02";
  }
  else if (day == 3) {
    return "2020-06-03";
  }
  else if (day == 4) {
    return "2020-06-04";
  }
  else if (day == 5) {
    return "2020-06-05";
  }
  else {
    return "2020-06-06"
  }
}

exports.request = functions.https.onRequest(app);
