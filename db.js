let mongoose = require('mongoose');


let connect = mongoose.connect(`mongodb+srv://abhinav:abhinav@cluster0.jxq2tkf.mongodb.net/dineout?retryWrites=true&w=majority`);



module.exports ={
    connect
}