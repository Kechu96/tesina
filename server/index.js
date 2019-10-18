const express = require('express'),
      mongoose = require('mongoose'),
      config = require('./config/dev'),
      bodyParser = require('body-parser'),
      userRoutes = require('./routes/user'),
      universityRoutes = require('./routes/university'),
      rentalRoutes = require('./routes/rental'),
      multipart = require('connect-multiparty');

//Conexion a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.DB_URL,{ useNewUrlParser: true });

//Inicializando el servidor
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//utilizando endpoints de componentes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/universities', universityRoutes);
app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, function(){
    console.log("server working...");
});