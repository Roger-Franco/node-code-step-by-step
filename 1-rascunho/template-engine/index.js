const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')
// console.log(publicPath);

app.set('view engine', 'ejs')

// app.use(express.static(publicPath));
app.get('', (req, res) => {
  res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (req, res) => {
  const user = {
    name: 'roger',
    email: 'roger@roger.com',
    country: 'BR',
  }
  res.render('profile', {user})
})

app.get('', (req, res) => {
  res.sendFile(`${publicPath}/index.html`)
})
app.get('/about', (req, res) => {
  res.sendFile(`${publicPath}/about.html`)
})
app.get('/help', (req, res) => {
  res.sendFile(`${publicPath}/help.html`)
})
app.get('*', (req, res) => {
  res.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5500);