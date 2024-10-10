const express = require('express');

const ports = [80, 8080, 8880, 2052, 2082, 2086, 2095, 443, 2053, 2083, 2087, 2096, 8443];

const startHTTPServer = (port) => {
  const app = express();
  
  app.get('/', (req, res) => {
    res.status(200).send(`${port}`);
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

  app.on('error', (err) => {
    console.error(`Error occurred on port ${port}: ${err.message}`);
  });
};

ports.forEach(port => {
  startHTTPServer(port);
});
