import { useEffect, useState } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskItem } from './components/TaskItem';

import api from './services/api';

import './styles/global.scss';   

function App() {
   const [tasks, setTasks] = useState([]);
   const [title, setTitle] = useState("");
   const [date, setDate] = useState("");
   const [idTask, setIdTask] = useState("");
   const [isUpdating, setIsUpdating] = useState(false);


   // Hook to load the tasks from database
   useEffect(() => {
      loadData();
   }, []);

   // Function to load the tasks from database
   const loadData = async () => {
      const response = await api.get('/');

      setTasks(response.data)
   }

   // Function to create a task
   async function handleCreateTask(e) {
      e.preventDefault();
      try {
         if (date === "" || title === "") {
            alert("Todos os campos são obrigatórios.")
         } else {
            const response = await api.post('/create', {
               title,
               date
            });

            setTasks([...tasks, response.data])
            setTitle("");
            setDate("");
            loadData();
         }
      } catch (error) {
         console.log(error)
      }
   }

   // Function to set task information in state
   function getUpdateTask(id, title, date) {
      setIsUpdating(true);
      setTitle(title);
      setDate(date);
      setIdTask(id);
   }

   // Function to update a task
   async function handleUpdateTask(e) {
      e.preventDefault();
      try {
         await api.patch(`/update/?_id=${idTask}`, {
            title,
            date
         });

         const taskToUpdate = tasks.findIndex((task) => {
            return task._id === idTask;
         });

         const tempTasks = [...tasks];
         tempTasks[taskToUpdate].title = title;
         tempTasks[taskToUpdate].conclusion_date = date;

         setTasks(tempTasks);

         setTitle("");
         setDate("");
         setIsUpdating(false);
         alert("Tarefa atualizada!");
      } catch (error) {
         console.log(error);
      }
   }

   // Function to delete a task
   async function handleDeleteTask(id) {
      try {
         await api.delete(`/delete/?_id=${id}`);

         const taskToDelete = tasks.findIndex((task) => {
            return task._id === id;
         });
         console.log(taskToDelete);
         if (taskToDelete !== -1) {
            setTasks([
               ...tasks.slice(0, taskToDelete),
               ...tasks.slice(taskToDelete + 1)
            ]);
         }
          alert("Tarefa removida!");
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div className="App">
         <header className="header">
            <div className="container">
               <h2 className="app-title">Gerenciador de tarefas</h2>
            </div>
         </header>

         <section className="form-tasks">
            <div className="container">
               <TaskForm
                  title={title}
                  setTitle={setTitle}
                  date={date}
                  setDate={setDate}
                  isUpdating={isUpdating}
                  handleUpdateTask={handleUpdateTask}
                  handleCreateTask={handleCreateTask}
               />
            </div>
         </section>

         <section className="tasks">
            <div className="container">
               <div className='legend-task'>
                  <p className='legend-title'> Título da tarefa</p>
                  <div>
                     <p className='legend-date'>Data de conclusão</p>
                  </div>
               </div>

               <ul className='tasks-list'>
                  {
                     tasks.map((item) => (
                        <TaskItem
                           key={item._id}
                           item={item}
                           getUpdateTask={getUpdateTask}
                           handleDeleteTask={handleDeleteTask}
                        />
                     ))
                  }
               </ul>
            </div>
         </section>
      </div>
   );
}

export default App;
