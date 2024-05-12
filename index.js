import express from 'express';

const app = express();

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:6000');
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send(req.method + ' request received');
});

app.post('/', (req, res) => {
    res.send(req.method + ' request received');
    console.log(req.body);
});