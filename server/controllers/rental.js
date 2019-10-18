const Rental = require('../models/rental'), 
      User = require('../models/user');

exports.getUserRentals = function (req, res) {
    Rental.find({ owner: req.params.id })
        .exec(function (err, foundRentals) {
            if (err) {
                return res.status(422).send({ title: 'Error', details: 'No se pudieron obtener los alquileres' });
            }
            return res.json(foundRentals);
        })
}
exports.postRental = function (req, res) {
    const { lane, number, suburb, pc, closeTo, title, description, cost, likes, dislikes, date, features, photos } = req.body;
    const owner = res.locals.user;
    const rental = new Rental({
        lane: lane,
        number: number,
        suburb: suburb,
        pc: pc,
        closeTo: closeTo,
        title: title,
        description: description,
        cost: cost,
        likes: likes,
        dislikes: dislikes,
        date: date,
        features: features,
        photos: photos,
        owner: owner
    });
    rental.save(function (err) {
        if (err) {
            return res.status(422).send({ title: 'Error', details: 'No se pudo realizar la publicacion' });
        } else {
            User.updateOne({_id:owner.id},{$push: { post: rental }}, function(err){});
            return res.json({title:'Alquiler publicado', details:'La publicacion se creo con exito'});
        }
    })
}
