// Primary File for the API


// Importing Modules & declaring constants
const http = require('http');
const url = require('url');
const portAddress = 3000;

// The server should respond to all the requests that are sent to it with a string
const server = http.createServer( (request, response) => {

    //Create a URL and parse it
    let parsedURL = url.parse(request.url, true);
    console.log(parsedURL);

    //Get the path from the URL
    let URLPath = parsedURL.pathname;
    console.log(URLPath);

    //Send the response to the conjugate request


    //Log the response

    response.end('hello world \n' + request.url);
});

// The server should listen on port 3000
server.listen(portAddress, () => {
    console.log('the server is listening on port ' + portAddress);
});