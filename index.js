import dotenv from 'dotenv';
import models from './models';

dotenv.load();

models.sequelize.sync({ force: false }).then(() => {
  console.log('Database update successful.');
}).catch((err) => {
  console.log(err, 'Database update unsuccessful.');
});
