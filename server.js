//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static( './dist/angdemo'));

app.get('/*', function(req,res) {
/*  __dirname+ */
res.sendFile(path.join('./dist/angdemo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);