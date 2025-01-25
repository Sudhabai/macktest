const mangoose = require('mangoose');
const blogSchems = new mangoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mangoose.Schema.Types.ObjectID, ref: 'User', required: true },
});
module.exports = mangoose.model('User', userSchema);
