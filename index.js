import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

/** import connection file */
import connect from './database/conn.js';

const app = express();

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors({
    origin: [process.env.REACT_APP_SERVER_HOSTNAME],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 3001;

/** routes */
app.use('/api', router) /** apis */

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("cannot connect to the server", error);
    }
}).catch(error => {
    console.log("invalid database connection", error);
})
