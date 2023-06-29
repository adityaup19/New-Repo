const http = require('http');

const server = http.createServer((req, res) =>{  // Req is the request recieved and Res is the response
if(req.url=== '/'){
res.end('Welcome to out homepage');

}
if (req.url === '/about'){              //If I Mistype URL to ULR it will show "Oops ! cant seem to find page"
    res.end('Here is our short history')
}
res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for </p>`)

})

server.listen(3000)  //Random Port

//So this just created a website  


//So NPM (Node Package Manager) is automatically installed when I installed Node I
 