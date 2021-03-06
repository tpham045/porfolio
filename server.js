const express = require('express');
const fs = require('fs');
const app = express();

app.set('port', (3001));
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.set('port', (process.env.PORT || 3001));
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
