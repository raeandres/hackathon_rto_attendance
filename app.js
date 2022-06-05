import express from "express";
import routes from "./src/routes/attendanceRoute";
import session from "express-session";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const { v4: uuidv4 } = require("uuid"); // to make session id unique

const app = express();
const port = process.env.PORT || 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then()
.catch(err => {
    console.log("MongoDB connection error:", err);
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: uuidv4(), 
    resave: false,
    saveUninitialized: true,
}));


// app routes
routes(app);

app.get('/', (req, res) => 
{
    res.send('Node and express server running on port ' + port);
}
);

app.listen(port, () =>

   console.log(`Your server is running on port ${port}`)
);


