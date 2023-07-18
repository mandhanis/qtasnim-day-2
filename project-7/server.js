const express = require('express')
const app = express()
const port = 3000

app.get('', (req, res) => {
    res.send('Selamat Datang Di Server Express!')
})

app.get('/about', (req, res) => {
    res.send('Halaman About')
})

app.use('', (req, res, next) => {
    console.log('Middlewere yang pertama')
    next()
})

app.get('/info', (req, res) => {
    res.send('Informasi')
})

app.use('', (req, res, next) => {
    console.log('Middlewere yang kedua')
    next()
})

app.get('/user/:id', (req, res) => {
    res.send('Anda Mengakses Pengguna dengan ID:{id}')
})

app.listen(port, () => {
    console.log("server berjalan di port http://localhost:3000/");
})