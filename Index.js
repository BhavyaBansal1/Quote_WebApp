const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: true }));
let currentId = 5;

const quotes =[

    {id:1,
        author:'Samarth Vora',
        text:'My name is samart Vora'
    },
    {id:2,
        author:'Kashish Vohra',
        text:'My name is Kasish Vora'
    },
    {id:3,
        author:'Rupesh Kumar',
        text:'My name is Rupesh Kumar.'
    },
    {
        id:4,
        author:'Bhavya Bansal',
        text:'My name is Bhavya Bansal'
    },
    
]

app.get('/', (req, res) => {
  res.render('allQuotes', { quotes: quotes });
});

app.get('/quotes/new', (req, res) => {
  res.render('addQuote');
});



app.get('/quotes/:id', (req, res) => {
  const quoteId = Number(req.params.id);
  const quote = quotes.find(quote => quote.id === quoteId);
  if (!quote) {
    res.status(404).send({ error: 'Quote not found' });
  } else {
    res.render('quote', { quote: quote });
  }
});
app.post('/quotes', (req, res) => {
  const quote = {
    id: currentId++,
    author: req.body.author,
    text: req.body.quote
  };
  quotes.push(quote);
  res.redirect('/quotes/' + quote.id);
});

app.get('/quotes', (req, res) => {
  res.render('allQuotes', { quotes: quotes });
});
app.listen(8080,(res,req)=>{
console.log()
})
