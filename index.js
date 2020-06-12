// Server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ENV = process.env.ENV || 'development';
const path = require('path');

// Packages
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');

// Middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: [ 'views/partials/' ]
}));
app.use(sass({
  src: path.join(__dirname, 'src', 'stylesheets'),
  dest: path.join(__dirname, 'public', 'stylesheets'),
  response: false, // write output to file, not response object directly
  outputStyle: ENV === 'development' ? 'expanded' : 'compressed',
  debug: ENV === 'development' ? true : false,
  maxAge: ENV === 'development' ? '0' : '604800' // don't cache in dev
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('main', {layout : 'index'});
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
