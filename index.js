import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
    res.send(`Sri's Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Sri's server is running on port ${PORT}`)
);
