import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/attendanceRoute";


const app = express();
const port = 4000;

routes(app);


app.get('/', (req, res) => 
{
    res.send('Node and express server running on port ' + port);
}
);

app.listen(port, () =>

   console.log(`Your server is running on port ${port}`)
);


