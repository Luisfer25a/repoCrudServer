import { Request , Response } from 'express';

class SongsController{

    public list (req: Request,res: Response) {
        res.json({text: 'enlistando canciones'});
    }
    public listone (req: Request,res: Response) {
        res.json({text: 'enlistando cancion' + req.params.id});
    }
    public create (req:Request, res:Response){
        console.log(req.body);
        localStorage.setItem(req.body.nombre, req.body);
        res.json({text: 'creada cancion'});
    }
    public delete (req:Request, res:Response){
        res.json({text: 'eliminando cancion'+ req.params.id});
    }
    public update (req:Request, res:Response){
        res.json({text: 'actualizando cancion'+ req.params.id});
    }

}

const songsController = new SongsController();
export default songsController;