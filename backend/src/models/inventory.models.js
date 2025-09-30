import mongoose, { Schema } from "mongoose";

const inventorySchema = new Schema({    
    itemName : {
        type : String , 
        required : true , 
        unique : true
    },
    category : {
        type : String , 
        required : true
    },
    price : {
        type : Number , 
        required : true
    },
    popular : {
        type : Boolean , 
        default : false
    },
    description : {
        type : String , 
        required : true
    },
    image : {
        type : String , 
        required : true
    },
},{
    timestamps : true
})

export const Inventory = mongoose.model("Inventory" , inventorySchema) ;