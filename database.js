const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/mean-ObraSocial';

require('dotenv').config({ path: 'variables.env' });


mongoose.connect(process.env.DB_URL)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;