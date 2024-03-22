import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskItem from '../components/taskItem';
import { server } from '../main';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${server}/allTasks`).then(res => {
      setTasks(res.data.task);
    }).catch(error => {
      console.error('Error fetching tasks:', error);
    });
  }, []);

  const updateTaskHandler = (id) => {
    navigate(`/updateTask/${id}`, {state: {id, }});
  }

  const deleteTaskHandler = (id) => {
    axios.delete(`${server}/${id}`)
    .then(() => {
      setTasks(tasks.filter(task => task._id !== id));
    })
    .catch(error => {
      console.error('Error deleting task:', error);
    });
  }

  return (
    <section>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <TaskItem price={task.price} volume={task.volume} />
              <button className='buttonTask' onClick={() => updateTaskHandler(task._id)}>Update Task</button>
              <div style={{padding: '2rem'}}></div>
              <button className='buttonTask' onClick={() => deleteTaskHandler(task._id)}>Delete Task</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
