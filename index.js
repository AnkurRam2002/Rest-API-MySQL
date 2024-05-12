import express from 'express';
import appRouter from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/api/v1/products', appRouter)

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:6000');
});



