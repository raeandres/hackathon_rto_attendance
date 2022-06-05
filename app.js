import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/attendanceRoute";
import session from "express-session";
const { v4: uuidv4 } = require("uuid"); // to make session id unique

const app = express();
const port = process.env.PORT || 4000;

routes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: uuidv4(), 
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => 
{
    res.send('Node and express server running on port ' + port);
}
);

app.listen(port, () =>

   console.log(`Your server is running on port ${port}`)
);


