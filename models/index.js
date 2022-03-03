const User = require('./User');
const Note = require('./Note');
const Comment = require ('./Comment')

User.hasMany(Note, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Note.belongsTo(User, {
  foreignKey: 'user_id',
});

Note.hasMany(Comment,{
  foreignKey: 'note_id'
})

Comment.belongsTo(Note,{
  foreignKey: 'note_id',
  onDelete:'CASCADE'
})

module.exports = { User, Note };
