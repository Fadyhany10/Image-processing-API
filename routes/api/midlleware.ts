import express from "express";
import { theImageExict, thumpImage } from "./checkImages";


const theInfo =async(req: express.Request, res: express.Response, next:express.NextFunction)=> {
const filename= (req.query.filename as unknown) as string ;
const width= parseInt(req.query.width as string);
const height= parseInt(req.query.height as string);

// check if there is a filename
if(!filename){
    return res.send("there is no filename please rewrite it");
}


//check the width and height
if(width<1 || height<1){
    return res.send("please enter numbers greater than 1");
}

//check if the user doesn't write width and the height
if(!width && !height){
    return res.send("please enter the width and the height");
}

//check if the user doesn't write width
if(!width){
    return res.send("please enter the width");
}
//check if the user doesn't write height
if(!height){
    return res.send("please enter the height");
}

if(width>3000 || height>3000){
    return res.send("this numbers are so big please enter number less than 3000");
}

//check if the image doesn't exict
if(!theImageExict(filename)){
    return res.send("the image doesn't exict please choose one of this images : image1/image2/image3/image4/image5");
}

// cashing: check if the image is already exict in the thump folder
if(thumpImage(req.query)){
    return res.sendFile(`thump/${filename}-${width}-${height}.jpg`,{root :'images',});
}


next();

}

export default theInfo;