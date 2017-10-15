import mongoose from 'mongoose';

export default class OutputsService {
    constructor() {
        this.outputs = mongoose.model('Outputs');
    }

    list() {
        return this.outputs.find({}).populate('friends', 'name').populate({ path: 'place', select: 'name' });
    }

    create(output) {
        return new this.outputs(output).save();
    }

    update(id, output) {
        return this.outputs.findByIdAndUpdate(id, output);
    }

    get(id) {
        return this.outputs.findById(id).populate('friend', 'name').populate('place', 'name');
    }

    cancel(id) {
        return this.get(id)
            .then((output) => {
                output.canceled = true;
                return this.update(output._id, output);
            })
    }

    confirm(id) {
        return this.get(id)
            .then((output) => {
                output.canceled = false;
                return this.update(output._id, output);
            })
    }

    remove(id) {
        return this.outputs.findByIdAndRemove(id)
    }
}