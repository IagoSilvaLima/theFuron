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

    remove(id){
        return this.outputs.findByIdAndRemove(id)
    }
}