import express from 'express';
import ChartsService from './charts.service';

let router = express.Router();
let chartsService = new ChartsService();

router.get('/topPlaces', (req,res)=>{
    chartsService.getTopPlaces()
        .then((data) => res.json(data));
})


export default router;

