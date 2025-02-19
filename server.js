const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Статическая папка для стилей и других ресурсов
app.use(express.static(path.join(__dirname, 'styles')));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Страница 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
