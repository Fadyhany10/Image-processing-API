
import fs from "fs";
import sharp from "sharp";


interface imagParameters{
    imageFromFile: string;
    imageToFile:string;
    width?: number;
    height?: number;
}

interface parameters {
    filename?: string;
    width?: string;
    height?:string;
}

//check if the image exict 
const theImageExict = ((filename: string): boolean =>{
return fs.existsSync(`images/full/${filename}.jpg`);
});

//check if the images exict in the thump file
const thumpImage = (image:parameters) : boolean | string=>{
    const filename= image.filename;
    const width= image.width;
    const height= image.height;

    return fs.existsSync(`images/thump/${filename}-${width}-${height}.jpg`);
};

const createNewImage = async (query:parameters):Promise<string | boolean> => {
  const  imageFromFile= `images/full/${query.filename}.jpg`;
  const  imageToFile= `images/thump/${query.filename}-${query.width}-${query.height}.jpg`;
   
  return await goCreate({ 
    imageFromFile,
    imageToFile,
    width: parseInt(query.width as string) ,
    height: parseInt(query.height as string)    
});
};

//go create one if it doesn't exict
const goCreate = async( image:imagParameters):Promise<string | boolean> =>{
    try { 
         await sharp(image.imageFromFile)
        .resize(image.width,image.height)
        .jpeg()
        .toFile(image.imageToFile);

        return image.imageToFile;
       
  } catch (error){
    
    return `error`;
      
  }
  };


export {
    theImageExict,
    thumpImage,
    createNewImage
}