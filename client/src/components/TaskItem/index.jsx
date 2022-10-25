import './styles.scss';

import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

export function TaskItem({ item, getUpdateTask, handleDeleteTask }) {
   return (
      <li key={item._id} className='task-item'>
         <div className='task-info'>
            <p className='task-title'>{item.title}</p>
            <p className='task-conclusion-date'>
               {item.conclusion_date && item.conclusion_date.substring(0, 10).split('-').reverse().join('/')}
            </p>
         </div>
         <div className="icons-wrapper">
            <RiEdit2Line className='icon' onClick={() => getUpdateTask(item._id, item.title, item.conclusion_date)} />
            <RiDeleteBin6Line className='icon' onClick={() => handleDeleteTask(item._id)} />
         </div>
      </li>
   )
}