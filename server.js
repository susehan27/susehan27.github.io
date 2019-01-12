const express = require("express");
//const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//add routes 
//app.use(routes);

//connect to mongoDB
// const db = require("./config/keys").mongoURI;
// mongoose.connect(db, {useNewUrlParser: true})
//     .then(() => console.log("mongoDB successfully connected"))
//     .catch(err => console.log(err));


//start API server

app.listen(PORT, function() {
    console.log(`Server now listening on PORT ${PORT}`);
});

