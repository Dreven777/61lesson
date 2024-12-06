const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'John Doe', email: 'Doe@example.com' },
  { id: 2, name: 'Jane Test', email: 'Test@example.com' },
  { id: 3, name: 'Jane Williams', email: 'Williams@example.com' },
  { id: 4, name: 'Jane HelloWorld', email: 'HelloWorld@example.com' }
];

router.get('/', (req, res) => {
  res.render('users/index', { title: 'Список користувачів', users });
});

router.get('/:userId', (req, res) => {
  const user = users.find(u => u.id == req.params.userId);
  if (user) {
    res.render('users/details', { title: `Деталі користувача ${user.name}`, user });
  } else {
    res.status(404).send('Користувач не знайдений');
  }
});

module.exports = router;
