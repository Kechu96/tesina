const University = require('../models/universities');

exports.getAllUniversities = function(req,res){
    University.find().exec(
        function(err,universities){
            if(err){
                return res.status(422).send({ title: 'Error', details: 'No se pudieron obtener las universidades' });
            } 
            return res.json(universities);
        }
    )
}
