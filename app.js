import express from 'express';
import routes from './src/routes';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import createError from 'http-errors';

const app = express();
const port = process.env.PORT || 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://localhost/attendance', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then()
    .catch(err => {
        console.log('MongoDB connection error:', err);
    });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app routes
app.use(routes);
app.get('/', (req, res) => {
    res.send('Node and express server running on port ' + port);
});

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.listen(port, () => console.log(`Your server is running on port ${port}`));
