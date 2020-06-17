// Server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ENV = process.env.ENV || 'development';
const path = require('path');

// Packages
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');

// Handlebars configuration
const hbs = handlebars.create({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: [ 'views/partials/' ]
});
hbs.getPartials().then(function (partials) {
  console.log("Available partials: ", partials);
});

// Middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(sass({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public', 'stylesheets'),
  response: false, // write output to file, not response object directly
  outputStyle: ENV === 'development' ? 'expanded' : 'compressed',
  debug: ENV === 'development' ? true : false,
  maxAge: ENV === 'development' ? '0' : '604800', // don't cache in dev
  prefix: '/stylesheets'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('main', {layout : 'index'});
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
