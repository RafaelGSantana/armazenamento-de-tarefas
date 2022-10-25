const tasksModel = require('../models/tasksModel');

// Function to list all database tasks
module.exports.getTasks = async (req, res) => {
   const tasks = await tasksModel.find().sort({conclusion_date: 1});
   res.status(200).json(tasks);
}

// Function to create a task in database tasks
module.exports.createTask = async (req, res) => {
   const { title, date } = req.body;

   const formattedDate = date && date.split('-').reverse().join('/');
   console.log(typeof formattedDate, formattedDate)

   const task = await tasksModel.create({
      title,
      conclusion_date: date
   });

   res.status(200).json(task);
}

// Function to update a task in database tasks
module.exports.updateTask = async (req, res) => {
   try {
      const { title, date } = req.body;
      const { _id } = req.query;

      const updatedTask = await tasksModel.findByIdAndUpdate(_id, {
         title,
         conclusion_date: date
      });

      console.log('Success', updatedTask);

      res.status(200).send();
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
   }
}

// Function to delete a task in database tasks
module.exports.deleteTask = async (req, res) => {
   try {
      const { _id } = req.query;

      const deletedTask = await tasksModel.findByIdAndDelete(_id);

      console.log('Success', deletedTask);

      res.status(200).json(deletedTask);
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
   }
}

