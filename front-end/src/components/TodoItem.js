import React, { useContext } from 'react';
import { AppContext } from '../context';

export default function TodoItem() {
  const {taskList, onClickDelete} = useContext(AppContext);
  
  return (
    <div className='taskListWrap'>
      {taskList.map((task, index) => (
        <React.Fragment key={task.taskid}>
          <div className='todoItems margin2' >
            <div className='md-font-size margin1'>{task.title}</div>
            <div className='md-font-size margin1'>Complete by: {task.date}</div>
            <div className='descriptionBox'>{task.notes}</div>
            <div>
                <button className='delete margin1 itemButton' onClick={()=> onClickDelete(task.taskid, index)}>Delete</button>
                <button className='complete margin1 itemButton' onClick={ ()=> onClickDelete(task.taskid, index)}>Complete</button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
