const sequelize = require('../config/connection');
const { User, Note, Comment } = require('../models');

const userData = require('./userData.json');
const noteData = require('./noteData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const note of noteData) {
    await Note.create({
      ...note,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  process.exit(0);
};

seedDatabase();
