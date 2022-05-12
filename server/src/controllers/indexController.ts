import  { Request,Response} from 'express';

class IndexController{
    public index (req:Request,res:Response){
        res.json({text:"nose que poner"});
    }
}

export const indexController = new IndexController();