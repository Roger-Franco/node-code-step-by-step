const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send(`
    <h1>Welcome to Home Page</h1>
    <a href="/about">Go to About page</a>
    `);
});

app.get("/about", (req, resp) => {
    resp.send(`
    <input type="text"placeholder="User name" value="${req.query.name}" />
    <button>Click</button>
    <a href="/">Go to Home page</a>
    `);
    // http://localhost:5500/about/?name=Roger
});

app.get("/help", (req, resp) => {
    resp.send([
      {
        name: 'Roger',
        email: 'roger@roger.com',
      },
      {
        name: 'Thu',
        email: 'thu@thu.com',
      }
    ]);
});


app.listen(5500);

//  http://localhost:5500/?name=roger