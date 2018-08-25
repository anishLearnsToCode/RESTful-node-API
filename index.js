// Primary File for the API


// Importing Modules & declaring constants
const http = require('http');
const url = require('url');
const portAddress = 3000;

// The server should respond to all the requests that are sent to it with a string
const server = http.createServer( (request, response) => {

    //Create a URL and parse it
    let parsedURL = url.parse(request.url, true);


    //Get the path from the URL
    let URLPath = parsedURL.pathname.replace(/^\/+|\/+$/g, '');


    //Send the response to the conjugate request
    response.end('hello world');


    //Logging the response
    //Logging the response URL Path
    console.log('The URL path requested is : ' + URLPath );

    // Logging the request headers
    console.log('The request headers sent to the server is ');
    console.log(request.headers);

    // Logging teh request method
    console.log(request.method);
    console.log('--------------------------');

});

// The server should listen on port 3000
server.listen(portAddress, () => {
    console.log('the server is listening on port ' + portAddress + '\n');
});