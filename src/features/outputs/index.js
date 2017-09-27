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

router.post('/', (req, res)=>{
    outputsService.create(req.body)
        .then(function(friend){
            return res.json(friend);
        })
})

router.put('/:id', (req,res)=>{
    outputsService.update(req.params.id, req.body)
        .then(function(friend){
            return res.json(friend)
        })
})

router.delete('/:id',(req,res)=>{
    outputsService.remove(req.params.id)
        .then(function(friend){
            return res.json(friend)
        })
});


export default router;