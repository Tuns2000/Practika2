const express = require('express');
const path = require('path');
const app = express();

// Указываем, что папка 'public' будет использоваться для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Обрабатываем главную страницу
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Обрабатываем страницу 404
app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Запускаем сервер на порту 3000
app.listen(3000, () => {
    console.log('Сервер работает на http://localhost:3000');
});
