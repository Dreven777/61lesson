const express = require('express');
const router = express.Router();

const articles = [
  { id: 1, title: 'Перша стаття', content: 'Перша стаття' },
  { id: 2, title: 'Express', content: 'Сервер працює на Express' },
  { id: 3, title: 'Третя стаття', content: 'Третя стаття' },
  { id: 4, title: 'Четверта стаття', content: 'Четверта стаття' },
  { id: 5, title: 'П\`ята стаття', content: 'П\`ята стаття' },
  { id: 6, title: 'Шоста стаття', content: 'Шоста стаття' }
];

router.get('/', (req, res) => {
  res.render('articles/index.ejs', { title: 'Список статей', articles });
});

router.get('/:articleId', (req, res) => {
  const article = articles.find(a => a.id == req.params.articleId);
  if (article) {
    res.render('articles/details.ejs', { title: article.title, article });
  } else {
    res.status(404).send('Стаття не знайдена');
  }
});

module.exports = router;
