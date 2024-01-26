import express from 'express';
import events from './events';
import tickets from './tickets';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server Listening on PORT:', PORT));

const API_ROOT = '/api';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`${API_ROOT}/events`, events);
app.use(`${API_ROOT}/tickets`, tickets);

export default app;
