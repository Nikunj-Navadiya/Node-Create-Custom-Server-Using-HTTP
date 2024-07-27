const http = require('http');

const port = 8000;

const fs = require('fs');

const requestHandler = (req, res) => {
    let filename = "";
    switch (req.url) {
        case '/':
            filename = './home.html'
            break;
        case '/about':
            filename = './about.html'
            break;
        case '/product':
            filename = './product.html'
            break;
        case '/contact':
            filename = './contact.html'
            break;
        default:
            filename = '404.html'
    }
    fs.readFile(filename, (err, result) => {
        if (err) {
            console.log("File Not Found");
            return false;
        }
        res.end(result)
    })
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (!err) {
        console.log(`Server is Start on Port :- ${port}`);
    }
})