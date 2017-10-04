import express from 'express';
import './places.model';
import PlacesService  from './places.service';

let router = express.Router();
let placesService = new PlacesService();

router.get('/', (req,res)=>{
    placesService.list()
        .then(function(data){
            return res.json(data);
        })
})

router.get('/:id', (req,res)=>{
    placesService.get(req.params.id)
        .then(function(place){
            return res.json(place);
        })
})

router.post('/', (req,res) => {
    placesService.create(req.body)
        .then(function(place){
            return res.json(place)
        })
})


router.put('/:id', (req,res) =>{
    placesService.update(req.params.id, req.body)
        .then(function(place){
            return res.json(place)
        })
});

router.delete('/:id', (req, res)=>{
    placesService.remove(req.params.id)
        .then(function(place){
            return res.json(place)
        })
})


export default router;