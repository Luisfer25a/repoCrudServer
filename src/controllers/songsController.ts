import { Request , Response } from 'express';

let Canciones: any[] = []
class SongsController{
    
    public list (req: Request,res: Response) {
       if (Canciones.length>0){ 
        res.json({Canciones});
        res.json({Response: '200'});
       }
       else{
        res.json({Response: '404 Not found'});
       }

    }
    public listone (req: Request,res: Response) {
        let Cancion:String = "";
        for (let i = 0;i<Canciones.length;i++){
            if (Canciones[i].nombre == req.params.id){
                Cancion += JSON.stringify(Canciones[i]) + ',';
                
            }
        }
        if (Cancion == ""){
            res.json({Response: '404 Not found'});
        }
        else{
            res.json({Cancion});
            res.json({Response: '200'});
        }
        
    }
    public create (req:Request, res:Response){
        console.log(req.body);
        Canciones.push((req.body));
        console.log (Canciones);
        res.json({Response: '201'});
    }
    public delete (req:Request, res:Response){
        let Canciones2: any[] = []
        let count = 0;
        for (let i = 0;i<Canciones.length;i++){
            if (Canciones[i].nombre == req.params.id){
                count++;
            }
            else{
                Canciones2.push(Canciones[i]);
            }
        }
        if (count >0){
            Canciones = Canciones2;
            res.json({Response: '204'});
        }
        else{
            res.json({Response: '404 Not Found'});
        }

    }
    public update (req:Request, res:Response){
        let Canciones2: any[] = []
        let count = 0;
        for (let i = 0;i<Canciones.length;i++){
            if (Canciones[i].nombre == req.params.id){
                count++;
            }
            else{
                Canciones2.push(Canciones[i]);
            }
        }
        if (count >0){
            Canciones = Canciones2;
            console.log(req.body);
            Canciones.push((req.body));
            console.log (Canciones);
            res.json({Response: '204'});
        }
        else{
            res.json({Response: '404 Not Found'});
        }
        
    }

}

const songsController = new SongsController();
export default songsController;