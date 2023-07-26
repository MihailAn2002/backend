// Маршрут для обработки заказов
const express = require('express');
const router = express.Router(); 


// Здесь хранятся ваши заказы
const orders = [];
let lastOrderNumber = 0; // Initialize the last order number

router.get('/', (req, res) => {
  // Возвращаем массив заказов
  res.status(200).json(orders);
});

router.post('/', (req, res) => {
  const orderData = req.body;
  console.log(orderData); // Выводим данные в консоль

  // Increment the last order number and assign it to the order
  lastOrderNumber++;
  orderData.orderNumber = lastOrderNumber; // Присваиваем номер заказа

  // Добавляем новый заказ в массив orders
  orders.push(orderData);

  // Отправляем успешный ответ
  res.status(200).json({ message: 'Ваш заказ принят' });
});

// Маршрут для удаления заказа по номеру заказа
router.delete('/:orderNumber', (req, res) => {
  const orderNumber = parseInt(req.params.orderNumber); // Преобразуем в число, так как параметры URL передаются строками

  // Find the index of the order with the given orderNumber in the 'orders' array
  const orderIndex = orders.findIndex((order) => order.orderNumber === orderNumber);

  if (orderIndex !== -1) {
    // If the order with the given orderNumber is found, remove it from the 'orders' array
    orders.splice(orderIndex, 1);
    res.status(200).json({ message: 'Заказ удален' });
  } else {
    // If the order with the given orderNumber is not found, return a 404 Not Found error
    res.status(404).json({ message: 'Заказ не найден' });
  }
});

module.exports = router;
