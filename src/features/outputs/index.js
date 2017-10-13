import express from 'express';
import './outputs.model';
import OutputsService from './outputs.service';

let router = express.Router();
let outputsService = new OutputsService();

router.get('/', (req,res)=>{
    outputsService.list()
        .then(function(data){
            return res.json(data);
        });
    
})

router.get('/:id', (req,res)=>{
    outputsService.get(req.params.id)
        .then(function(output){
            return res.json(output);
        });
    
})

router.post('/', (req, res)=>{
    outputsService.create(req.body)
        .then(function(output){
            return res.json(output);
        })
})

router.put('/:id', (req,res)=>{
    outputsService.update(req.params.id, req.body)
        .then(function(output){
            return res.json(output)
        })
})

router.put('/cancel/:id', (req,res)=>{
    outputsService.cancel(req.params.id, req.body)
        .then(function(output){
            return res.json(output)
        })
})


router.put('/confirm/:id', (req,res)=>{
    outputsService.confirm(req.params.id, req.body)
        .then(function(output){
            return res.json(output)
        })
})

router.delete('/:id',(req,res)=>{
    outputsService.remove(req.params.id)
        .then(function(output){
            return res.json(output)
        })
});


export default router;