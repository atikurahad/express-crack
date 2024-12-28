const mongoose = require('mongoose');



const DataSchema= mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    },  
    Email:{
        type:String,
        required:true
    },  


},{timestamps:true})   //timestamps:true will automatically add the created_at and updated_at fields to the schema

const DeveloperModel =mongoose.model('developers',DataSchema)  //developers is the collection name in the database
module.exports=DeveloperModel