const express = require('express');
const app = express();
const port = 3000;

let orders = [];

app.use(express.json());

// รับข้อมูลคำสั่งซื้อจากเครื่อง A
app.post('/orders', (req, res) => {
    orders.push(req.body);
    res.json({ message: 'Order received!' });
});

// ส่งข้อมูลคำสั่งซื้อไปยังเครื่อง B
app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
