const mongoose = require('mongoose');

const url = "mongodb+srv://shitigopal:1234@cluster0.mplv5.mongodb.net/componentshowcase?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;