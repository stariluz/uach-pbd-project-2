const process = require('process')
const http = require('http');
const fs = require(`fs`);

http.createServer(async (request, response) => {
    if (request.method === 'POST') {
        let body = '';
        const data = await new Promise((resolve, reject) => {
            request.on("data", value => {
                body += value.toString();
            }).on("end", () => {
                const data = JSON.parse(body);
                resolve(data);
            }).on("error", (error) => {
                reject(error);
            });
        });
        if (data) {
            console.log(request.url);
            switch (request.url) {
                case "/contact": {
                    const { name, phone, email } = data;

                    fs.appendFile('contacts.txt', `Name: ${name}, phone: ${phone}, email: ${email}\n`, (err) => {
                        if (err) {
                            response.writeHead(404, { "Content-Type": "text/plain" });
                            response.write("No se pudo enviar la información, intenta denuevo en un rato");
                            response.end();
                        } else {
                            console.log("Data written to file");
                            response.writeHead(200, { "Content-Type": "text/plain" });
                            response.end("Información enviada");
                        }
                    });
                    break;
                }
                case "/rent-car": {
                    const { carName, daysNumber, name, phone, } = data;

                    fs.appendFile('rent-cars.txt', `carName: ${carName}, daysNumber: ${daysNumber}, name: ${name}, phone: ${phone}\n`, (err) => {
                        if (err) {
                            response.writeHead(404, { "Content-Type": "text/plain" });
                            response.write("No se pudo enviar la información, intenta denuevo en un rato");
                            response.end();
                        } else {
                            console.log("Data written to file");
                            response.writeHead(200, { "Content-Type": "text/plain" });
                            response.end("Información enviada");
                        }
                    });
                    break;
                }
                default: {
                    response.writeHead(404, { "Content-Type": "text/plain" });
                    response.write("No se pudo enviar la información, intenta denuevo en un rato");
                    response.end();
                }
            }
        }
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

process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})
