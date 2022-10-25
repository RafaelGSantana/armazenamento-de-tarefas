const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   title: {
      type: String,
      require: true
   },
   conclusion_date: {
      type: Date,
      // min: Date(),
      require: true
   }
});

module.exports = mongoose.model('Tasks', taskSchema);