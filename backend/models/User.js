// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,  
    required: true
  },
  goal: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0
  },
  height: {
    type: Number, 
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);