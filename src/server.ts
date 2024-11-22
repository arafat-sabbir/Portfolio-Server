import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
import { seedDatabase } from './app/seeders/seed';

const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    // await seedDatabase();
    console.log('Connected To Database Successfully');
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
