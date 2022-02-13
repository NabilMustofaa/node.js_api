const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {getApi} = require('./utils/api')

const app = express()
const port = 3000




//ejs view engine setup
app.set('view engine','ejs')
app.use(expressLayouts);
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.get('/', async (req, res) => {
    res.render('index',
    {
        title: 'halaman utama',
        layout: 'layout/main',
        nama :'nabil m',
    });
})
app.get('/lecture', async (req, res) => {
    res.render('lecture',
    {
        title: 'halaman utama',
        layout: 'layout/main',
        nama :'nabil m'
    });
})

app.get('/lecture/:nama', async (req, res) => {
    const data = await getApi(req.params.nama)
    console.log(data)
    res.render('detail',
    {
        title: 'halaman utama',
        layout: 'layout/main',
        nama :req.params.nama,
        data: data,
    });
})

app.listen(port,()=>{
    console.log(`web services listinenig at https://nabilmustofaa.github.io/scoupus-api-webiste-test`)
})