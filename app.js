import express from 'express';
import routes from './src/routes';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const isDevMode = process.env.NODE_ENV === 'development';

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

app.use(
    cors({
        ...(isDevMode && { origin: 'localhost:4000' }),
    })
);

app.use('/', express.static(path.join(__dirname, 'client/dist')));
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app routes
app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.listen(port, () => console.log(`Your server is running on port ${port}`));
