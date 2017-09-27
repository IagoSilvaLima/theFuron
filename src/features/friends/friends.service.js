import mongoose from 'mongoose';

export default class FriendsService{
    constructor(){
        this.friends = mongoose.model('Friends');
    }

    list(){
        return this.friends.find();
    }

    create(friend){
        return new this.friends(friend).save();
    }

    update(id, friend){
        return this.friends.findByIdAndUpdate(id, friend);
    }

    remove(id){
        return this.friends.findByIdAndRemove(id)
    }
}