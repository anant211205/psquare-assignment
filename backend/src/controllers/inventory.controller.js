import { asyncHandler } from "../utils/asyncHandler.js";
import { apiresponse } from "../utils/apiResponse.js";
import { HTTP_STATUS } from "../utils/statusCodes.js";
import { Inventory } from "../models/inventory.models.js";

const addNewInventory = asyncHandler(async (req, res) => {
    try {
        const {itemName , category , price , popular , description} = req.body ;
        
        if(!itemName || !category || !price || !description){
            return res.json(
                new apiresponse(HTTP_STATUS.BAD_REQUEST , null , "All fields are required")
            )
        }

        
        const itemAlreadyExists = await Inventory.findOne({
            itemName: itemName
        });  
        
        if(itemAlreadyExists){
            return res.json(
                new apiresponse(HTTP_STATUS.BAD_REQUEST , null , "Item with this name already exists")
            )
        }
        
        let imagePath = null;
        if (req.file) {
            imagePath = `/uploads/images/${req.file.filename}`;
        }
        // console.log(filePath);

        const newItem = await Inventory.create({
            itemName, 
            category, 
            price, 
            popular: popular || false, 
            description, 
            image: imagePath
        })
        
        if(newItem){
            return res.json(
                new apiresponse(HTTP_STATUS.CREATED , newItem , "New item added successfully")
            )
        }
    }catch(error) {
        console.log("error in add inventory",error);
        return res.json(
            new apiresponse(HTTP_STATUS.INTERNAL_SERVER_ERROR , null , "Internal server error")
        )
    }
})

export { addNewInventory };