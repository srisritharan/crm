import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serving static files
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => 
    res.send(`Sri's Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Sri's server is running on port ${PORT}`)
);
