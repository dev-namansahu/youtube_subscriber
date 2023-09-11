const mongoose = require('mongoose');
const subscriberModel = require('./models/subscriber');
const data = require('./data')

mongoose.connect('mongodb://127.0.0.1:27017/subsriberdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Database connection error:', error));
db.once('open', async () => {
  console.log('Connected to database');

  // Create a sample subscriber
//   const subscriber = new Subscriber({
//     name: 'John Doe',
//     subscribedChannel: 'Sample Channel',
//   });

//   try {
//     await subscriber.save();
//     console.log('Sample subscriber created');
//   } catch (err) {
//     console.error('Error creating subscriber:', err);
//   }

//   // Close the database connection
//   db.close();
const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()
});
