const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const universitiesSchema = new Schema({
    name: String,
    ubication: String,
    students: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
module.exports = mongoose.model('Universities', universitiesSchema);