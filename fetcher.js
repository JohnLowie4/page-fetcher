const fs = require('fs');
const request = require('request');
const args = process.argv;
const url = args[2];
const writeTo = args[3];

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the homepage.
  fs.writeFile(`${writeTo}`, body, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
  console.log(body.length); 
});