const express = require('express');
const path = require('path');

const app = express();

const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');
const mainpages = require('./routes/main');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 
app.engine('ejs', require('ejs').renderFile); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainpages);
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
