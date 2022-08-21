const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

// morgan('tiny')

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now(); 
    // req.method= 'GET';
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

// app.use((req, res, next) => {
//     if(req.path === '/secret'){}
const verifyPassword = (req, res, next) =>{
   const { password } =  req.query;
   if (password === 'chickennugget') {
    next();
   }
   res.send('SORRY YOU NEED A PASSWORD!!! ')
}

// app.use((req, res, next) => {
//     console.log('THIS IS MY FIRST MIDDLEWARE!!!')
//     // res.send('Hello World')
//     return next();
//     console.log('THIS IS MY FIRST MIDDLEWARE-AFTER CALLING NEXT()')
// })
// app.use((req, res, next) => {
//     console.log('THIS IS MY SECOND MIDDLEWARE!!!')
//     // res.send('Hello World')
//     return next();
// })    
// app.use((req, res, next) => {
//     console.log('THIS IS MY THIRD MIDDLEWARE!!!')
//     // res.send('Hello World')
//     return next();
// })                                                                              

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('Home page!');
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOf WOOf');
})
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: sometimes i wear headphone in public so i')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!')
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});