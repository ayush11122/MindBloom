import express from 'express';
import router from './Routes/Route';
import Cors from "cors";
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3002;

app.use(express.json());

app.use(Cors());
app.use('/api/v1', router)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});