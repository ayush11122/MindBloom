import express from 'express';
import router from './Routes/Route';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3002;

app.use(express.json());

app.use('/api/v1', router)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});