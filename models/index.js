const User = require('./User');
const Comment = require('./Comments');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

Post.hasMany(Comment, {
  foreignKey: 'post-id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

User.hasMany(Comment, {
  foreignKey: 'post_id'
})

module.exports = { User, Comment, Post };