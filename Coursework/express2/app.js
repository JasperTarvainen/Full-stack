import express from 'express';

const app = express();

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/',  (req, res) => {
    res.render('index', {title: 'Welcome', message: 'Hello', people: ['John', 'Jane'], 

    });
});

app.listen(7000, () => console.log('Server started'));