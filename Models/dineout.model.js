const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const dineoutSchema = mongoose.Schema({
   rating:Number,
   image : String,
   name : String,
   location1 :String,
   location2 :String,
   location3 :String,
   discription1 :String,
   category :String,
   tags :String,
   discription1 :String,
   discription2 :String,
   discription3 :String,
   discription4 :String,
   discription5 :String,
});

const blogSchema = mongoose.Schema({
    img : String,
    title :String,
    description :String,
    data :String,
    author : String
})

// const bottemSchema = mongoose.Schema({
//     img:String,
//     title : String,
//     date :String,
//     "blog-categories 2": String,
//     "blog-categories 3" : String,
//     "blog-categories 4" : String,
//     "blog-categories 5" : String,
//     "blog-categories 18" : String,
//     "blog-categories 19" : String,
//     "blog-categories 20" : String,
//     "blog-categories 21" : String,
//     "blog-categories 22" : String,
//     author :String,
//     discription : String,
//     img2 : String

// })

const ModelDineout = mongoose.model('products',dineoutSchema);
const ModelBlog = mongoose.model('blog-TopData',blogSchema);
// const ModelData = mongoose.model('blog-BottemData',bottemSchema);

module.exports={
    ModelDineout,
    ModelBlog,
    // ModelData
}
