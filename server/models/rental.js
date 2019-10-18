const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    lane: { type: String, required: true }, //calle
    number: { type: Number, required: true },
    suburb: { type: String, required: true }, //colonia
    pc: { type: Number, required: true }, //codigo postal
    closeTo: { type: Schema.Types.ObjectId, ref: 'Universities' },//cerca de
    title: { type: String, required: true, max: [15, 'Titulo demasiado largo'] },
    description: { type: String, required: true, max: [120, 'Descripcion demasiado larga'] },
    cost: { type: Number, required: true },
    likes: { type: Number},
    dislikes: { type: Number},
    date: { type: Date },
    features: [{type:String}],
    photos: [{type:String}],
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('Rental', rentalSchema);