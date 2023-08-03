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

const initializePassport = require("./passportConfig")
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const commentRouter = require('./routes/comments');
const recipeRouter = require('./routes/recipes');

initializePassport(passport)

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

app.use(flash());

app.use(cors({
  origin: 'http://127.0.0.1:4000/'
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/users/register", (req, res) => {
  res.render("register");
});

app.get("/users/login", (req, res) => {
  res.render("login");
});

app.get("/users/dashboard", (req, res) => {
  res.render("dashboard", { user: "auran" });
});


app.post("/users/login", 
passport.authenticate("local", {
  successRedirect: "/users/dashboard",
  failureRedirect: "/users/login",
  failureFlash: true
})
)

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
}); 


app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

module.exports = app;