const sequelize = require('../config/connection');
const { User, Note, } = require('../models');

const userData = require('./userData.json');
const noteData = require('./noteData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
//generates all users 
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
//generates all notes and give a random user_id everytime
  for (const note of noteData) {
    await Note.create({
      ...note,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  process.exit(0);
};

seedDatabase();
