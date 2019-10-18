const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true, max: [35, 'Nombre demasiado largo'] },
    lastName: { type: String, required: true, max: [30, 'Apellido paterno demasiado largo'] },
    lastName2: { type: String, max: [30, 'Apellido materno demasiado largo'] },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    school: { type:Schema.Types.ObjectId, ref: 'Universities'},
    photo: { type: String},
    review: [ {type: Schema.Types.ObjectId, ref: 'Review'}],
    message: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    wishList: [{type: Schema.Types.ObjectId, ref: 'Rental'}],
    post: [{type: Schema.Types.ObjectId, ref: 'Rental'}],
    rentalHistory: [{type: Schema.Types.ObjectId, ref: 'Rental'}]
});
//funcion para verificar la contrasena encriptada
userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
//funcion para encriptar la contrasena
userSchema.pre('save', function(next){
    const user = this;
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, function(err, hash){
            user.password = hash;
            next();
        })
    })
})


module.exports = mongoose.model('User', userSchema);