//inisialisasi modul http
const http = require('http');

//buat serve 
const server = http.createServer( (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Selamat Pagi');
    res.end();
} );

const port = 3000;
const host = 'localhost';

server.listen(port,host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
} );