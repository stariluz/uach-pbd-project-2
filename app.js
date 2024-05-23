const http = require('http');
const fs = require(`fs`);

http.createServer((request, response) => {
    const file = request.url == '/' ? './WWW/indext.html' : `./WWW/${request.url}` ;       
if(request.url == '/registro'){
    let data = [];
    request.on("data", value => {
        data.push(value);
    }).on("end", () => {
        let params = Buffer.concat(data).toString();
        response.write(params);
        response.end();
    });
}
    fs.readFile(file, (err, data)  => {     
        if(err){
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("Not found");
            response.end();
        } else{
            const extencion = request.url.split('.').pop();
            switch(extencion) {
                case 'txt':
                    response.writeHead(200, {"Content-Type":"text/plain"});
                break;
                case 'html':
                    response.writeHead(200, {"Content-Type":"text/html"});
                break;
                case 'png':
                    response.writeHead(200, {"Content-Type":"image/png"});
                break;
                case 'jpg':
                    response.writeHead(200, {"Content-Type":"image/jpeg"});
                break;
                case 'jpeg':
                    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                break;
            }
            response.write(data);
            response.end();
        }
    })
}).listen(8888);