import express from 'express';
import appRouter from './routes/routes.js';
import { connectToDatabase } from './db/index.js';

const app = express();

app.use(express.json());

app.use('/api/v1/products', appRouter)

const PORT = process.env.PORT || 6000;

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on http://localhost:6000');
});
}).catch((error) => {
    console.log('Error connecting to the database: ', error);
    process.exit(0);
});



