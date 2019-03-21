const express = require('express');
const path = require('path');
const app = express();

// cra works is, when webpack runs, it creates a build folder
// which contains the index.html and the bundle.js
const pathToBuildFolder = path.join(__dirname, 'build')
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

// 2- allow static assets to be served off of this folder (build)!!
app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.listen(process.env || 4000);
