import mongoose from 'mongoose';

export default class ChartsService {
    constructor() {
        this.outputs = mongoose.model('Outputs');
    }

    getTopPlaces() {
        return this.outputs.aggregate(
            [
                {
                    $match: { canceled: false }
                },
                {
                    $group: {
                        _id: '$place',
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: { count: -1 }
                },
                {
                    $limit: 5
                },
                {
                    $lookup: {
                        from: "places",
                        localField: "_id",
                        foreignField: "_id",
                        as: 'place'
                    }
                },
                {
                    $project: {
                        '_id': 1,
                        'count': 1,
                        'place.name': 1,
                    }
                }
            ]
        )
    }
}