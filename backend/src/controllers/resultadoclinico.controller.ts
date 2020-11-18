import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import ResultadoClinico from "../models/resultadoclinico"


function getAll (req:Request, res:Response): void {
    ResultadoClinico.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function getResultadoClinico (req:Request, res:Response): void {
    ResultadoClinico.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function newResultadoClinico (req:Request, res:Response): void {
    const resultado = new ResultadoClinico({
        "nombrepaciente": req.body.nombrepaciente,
        "id": req.body.id,
        "fecharesultado": req.body.fecharesultado,
        "resultado": req.body.resultado,
        "test": req.body.test
    });
    
    console.log(req.body);
    resultado.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function updateResultadoClinico (req:Request, res:Response): void {
    const nombrepaciente: String = req.body.nombrepaciente;
    const id = req.params.id;
    const nuevaid = req.body.id;
    const fecharesultado: String = req.body.fecharesultado;
    const resultado: String = req.body.resultado;
    const test: String = req.body.test;

    ResultadoClinico.update({"id": id}, {$set: {"nombrepaciente": nombrepaciente, "id": nuevaid, "fecharesultado": fecharesultado, "resultado": resultado, "test": test}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getAll, getResultadoClinico, newResultadoClinico, updateResultadoClinico };