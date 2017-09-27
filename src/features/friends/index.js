import express from 'express';
import './friends.model';
import FriendsService from './friends.service';

let router = express.Router();
let friendsService = new FriendsService();

router.get('/', (req,res)=>{
    friendsService.list()
        .then(function(data){
            return res.json(data);
        });
    
})

router.post('/', (req, res)=>{
    friendsService.create(req.body)
        .then(function(friend){
            return res.json(friend);
        })
})

router.put('/:id', (req,res)=>{
    friendsService.update(req.params.id, req.body)
        .then(function(friend){
            return res.json(friend)
        })
})

router.delete('/:id',(req,res)=>{
    friendsService.remove(req.params.id)
        .then(function(friend){
            return res.json(friend)
        })
});


export default router;