var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {

    var url = request.url;

    if (url == '/') {
        response.writeHead('200', {'Content-Type': 'text/html'});
        fs.readFile('index1.html', function (error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });
    } else if (url == '/show') {
        fs.readFile('test.txt', function (error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });

    } else if (url == '/insert') {
        fs.writeFile('test.txt',
            'Thong tin muon gi vao!!',
            function (error) {
                if (error == null) {
                    response.end("Tao file thanh cong");
                } else {
                    response.end(error);
                }
            });

    } else if (url == '/append') {
        fs.appendFile('test.txt',
            ' \n Thong tin muon gi vao!!',
            function (error) {
                if (error == null) {
                    response.end("Update file thanh cong");
                } else {
                    response.end(error);
                }
            });
    } else if (url == '/unlink') {
        fs.unlink('test.txt',
            function (error) {
                if (error == null) {
                    response.end("Xoa file thanh cong");
                } else {
                    response.end(error);
                }
            });
    } else if (url == '/rename') {
        fs.rename('test.txt', 'test2.txt',
            function (error) {
                if (error == null) {
                    response.end("Xoa file thanh cong");
                } else {
                    response.end(error);
                }
            });
    } else response.end('404 Not Found');

}).listen(process.env.port || 8080);