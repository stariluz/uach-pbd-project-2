const http = require('http');
const fs = require(`fs`);

http.createServer((request, response) => {
    if (request.url == '/registro') {
        let data = [];
        request.on("data", value => {
            data.push(value);
        }).on("end", () => {
            let params = Buffer.concat(data).toString();
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write(params);
            response.end();
        });
    } else {
        const file = request.url == '/'
            ? './WWW/index.html'
            : `./WWW${request.url}`;
        fs.readFile(file, (err, data) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/plain" });
                response.write("Not found");
                response.end();
            } else {
                const extension = request.url.split('.').pop();
                switch (extension) {
                    case 'txt':
                        response.writeHead(200, { "Content-Type": "text/plain" });
                        break;
                    case 'html':
                        response.writeHead(200, { "Content-Type": "text/html" });
                        break;
                    case 'css':
                        response.writeHead(200, { "Content-Type": "text/css" });
                        break;
                    case 'png':
                        response.writeHead(200, { "Content-Type": "image/png" });
                        break;
                    case 'jpg':
                        response.writeHead(200, { "Content-Type": "image/jpeg" });
                        break;
                    case 'jpeg':
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        break;
                }
                response.write(data);
                response.end();
            }
        })
    }
}).listen(8888);