const createError = require('http-errors');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 4000;
const session = require('express-session');
const flash = require('connect-flash');
const passport = require("passport")
const initializePassport = require("./passportConfig"); // The code you provided
// 
// Initialize Passport
initializePassport(passport);

const usersRouter = require('./routes/users');
const commentRouter = require('./routes/comments');
const recipeRouter = require('./routes/recipes');

initializePassport(passport)

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});  

app.use(flash());

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:4000', 'http://127.0.0.1:4000' ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));


app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).send({ message: "success" });
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  next();
});

// app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', commentRouter);
app.use('/', recipeRouter);

app.post("/users/login", passport.authenticate("local"), (req, res) => {
  res.json({ user: req.user, token: req.user.token });
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/users/register", (req, res) => {
  res.render("register");
});

// app.get("/users/login", (req, res) => {
//   res.render("login");
// });

// app.get("/users/dashboard", (req, res) => {
//   res.render("dashboard", { user: "auran" });
// });


// app.post("/users/login", 
// passport.authenticate("local", {
//   successRedirect: "/users/dashboard",
//   failureRedirect: "/users/login",
//   failureFlash: true
// })
// )

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
}); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow sending cookies

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.status(200).end();
  } else {
    next();
  }
});

app.listen(4000, () => {
  console.log(`Server Running on port ${PORT}`);
});

module.exports = app;