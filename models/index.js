const User = require('./User');
const Note = require('./Note');
const Comment = require ('./Comment')

User.hasMany(Note, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment,{
  foreignKey: 'user_id',
  onDelete:'CASCADE'
})

Note.belongsTo(User, {
  foreignKey: 'user_id',
});

Note.hasMany(Comment,{
  foreignKey: 'note_id',
  onDelete:'CASCADE'
})

Comment.belongsTo(Note,{
  foreignKey: 'note_id',
  
})

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Note, Comment };
