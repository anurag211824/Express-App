// We need to install multer for handling multipart/form-data
import multer from "multer";
// For saving the file received from the form
export const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+ "-"+Date.now()+file.originalname)
    }
})