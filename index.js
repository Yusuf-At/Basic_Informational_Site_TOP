const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    let path = "./";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/contact-me":
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }
    
    // send an html file
    fs.readFile(path , (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.write(data); // kalau data cuma 1 res.end(data) bisa juga
            res.end();
        }
    })
});

server.listen(port, 'localhost', () => {
  console.log(`run`);
});
