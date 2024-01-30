import express from 'express';
import events from './events';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server Listening on PORT:', PORT));

const API_ROOT = '/api';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`${API_ROOT}/events`, events);

export default app;
