import mongoose from 'mongoose';

export default class OutputsService{
    constructor(){
        this.outputs = mongoose.model('Outputs');
    }

    list(){
        return this.outputs.find().populate('friend','name').populate('place','name');
    }

    create(output){
        return new this.outputs(output).save();
    }

    update(id, output){
        return this.outputs.findByIdAndUpdate(id, output);
    }

    get(id){
        return this.outputs.findById(id).populate('friend','name').populate('place','name');
    }

    remove(id){
        return this.outputs.findByIdAndRemove(id)
    }
}