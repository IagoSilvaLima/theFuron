import mongoose from 'mongoose';

export default class PlacesService{
    constructor(){
        this.places = mongoose.model('Places');
    }

    list(){
        return this.places.find();
    }

    create(place){
        return new this.places(place).save();
    }

    update(id, place){
        return this.places.findOneAndUpdate(id ,place);
    }

    remove(id) {
        return this.places.findByIdAndRemove(id);
    }
}