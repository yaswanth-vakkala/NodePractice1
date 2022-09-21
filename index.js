// const http = require("http");
// require("dotenv").config();
// const axios = require("axios");

// const port = process.env.PORT;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello world</h1>");
// });

// server.listen(port, () => {
//   console.log(`server running at port ${port}`);
// });

// axios
//   .get('https://localhost:3000/t1')
//   .then(res => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch(error => {
//     console.error(error);
//   });

const fs = require("fs");

const content = "Hello world";

fs.writeFile("sample.txt", content, { flag: "w+" }, (err) => {
  if (err) {
    console.log(err);
  }
});

fs.appendFile("sample.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
});

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
