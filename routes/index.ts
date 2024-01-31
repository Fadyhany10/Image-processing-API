import express  from "express";
import { createNewImage } from "./api/checkImages";
import theInfo from "./api/midlleware";


const routes = express.Router();


routes.get('/', theInfo ,async (req,res)=> {
    const fady = await createNewImage(req.query);
    const filename= (req.query.filename as unknown) as string ;
    const width= parseInt(req.query.width as string);
    const height= parseInt(req.query.height as string);
    
   
    
    if( fady ){
        return res.sendFile(`thump/${filename}-${width}-${height}.jpg`,{root :'images',});
    }

});
    
export default routes;

