const Mongoos = require('mongoose');



const userSchema = new Mongoos.Schema({
  email: String,
  password: String,
})

const UserModel = Mongoos.model('User', userSchema);

module.exports = UserModel;
