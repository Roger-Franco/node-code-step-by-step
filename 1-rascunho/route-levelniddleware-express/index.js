const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();


// app.use(reqFilter); // => esse middleware é aplicado em toda a aplicação
route.use(reqFilter) // => middleware para um grupo de routes

app.get('/', (req, resp) => {
    resp.send('Welcome to Home page')
});

// app.get('/users', reqFilter, (req, resp) => {
//     resp.send('Welcome to Users page')
// });
route.get('/users', (req, resp) => {
    resp.send('Welcome to Users page')
});
route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact page')
});

app.get('/about', (req, resp) => {
  resp.send('Welcome to About page')
});

app.use('/', route)

app.listen(5500)