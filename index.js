//inisialisasi modul http
const http = require('http');

//buat serve 
const server = http.createServer( (req,res) => {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('Selamat Pagi');

    res.writeHead(200, {'Content-Type': 'application/json'});

    if(req.url === '/dosen'){
        message = 'List data dosen';
        data = ['Ahmad', 'Hafiz', 'Widi'];

    } else if (req.url === '/mahasiswa'){
        message = 'List data mahasiswa';
        data = ['Akbar', 'Rizky', 'Kenny'];

    } else {
        message = 'Tidak Ditemukan';
        data = [];

    }
    res.write(JSON.stringify({
        'message' : message,
        'data' : data,
        'status' : 'success'
    }));
    res.end();
} );

const port = 3000;
const host = 'localhost';

server.listen(port,host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
} );