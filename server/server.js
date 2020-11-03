const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config").get(process.env.NODE_ENV);

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get("/", (req, res) => {
    res.json({hi: "hello"})
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Running on port: " + port);
});