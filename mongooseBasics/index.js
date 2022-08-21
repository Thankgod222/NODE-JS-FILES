const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to database')
})
.catch(err =>{
    console.log('Connection failed')
    console.log(err)
})
// {
//     title : 'Amadeus',  
//     year : 1984,
//     score : 9.2,
//     rating: 'R',
// }
const movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
    score : Number,
    rating: String
});
const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1984, score: 9.2, rating: 'R' })

// const blah = new Movie();
// blah.save()

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'The Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.8, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.1, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.6, rating: 'PG-13' },

// ])

// .then(data => {
//     console.log('Inserted')
//     console.log(data)
// })
