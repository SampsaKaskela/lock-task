const express = require('express');

const app = express();
const port = process.env.PORT;

const code = '1234';

app.use(express.json());

app.post('/api/check', (req, res) => {
    if (!req.body.code) {
        res.status(400).json({
            success: false,
            message: 'Missing code from payload'
        });
    }
    if (req.body.code === code) {
        res.status(200).json({
            success: true
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Wrong code'
        });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
