import React, { useContext } from 'react';
import { AppContext } from '../context';

export default function TodoItem() {
  const {taskList, onClickDelete} = useContext(AppContext);
  return (
    <div className='taskListWrap'>
      {taskList[0] && taskList[0].map((task) => (
        <React.Fragment key={task.taskid}>
          <div className='todoItems margin2' >
            <div className='md-font-size margin1'>{task.task}</div>
            <div className='md-font-size margin1'>Complete by: {task.date}</div>
            <div className='descriptionBox'>{task.notes}</div>
            <div>
                <button className='delete margin1 itemButton' onClick={()=> onClickDelete(task.taskid)}>Delete</button>
                <button className='complete margin1 itemButton' onClick={ ()=> onClickDelete(task.taskid)}>Complete</button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
