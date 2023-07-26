const express = require('express');
const cors = require('cors');
const orderRouter = require('./routerjs/router');

const app = express();

const PORT = process.env.PORT || 5000;

// Добавляем middleware для установки заголовков CORS
app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    message: 'hello from backend'
  });
});

// Маршрут для обработки заказов
app.use('/api/orders', orderRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
