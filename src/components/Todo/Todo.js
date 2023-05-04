// import React, { useState } from 'react';
// import './Todo.css';

// const Todo = () => {
//     const [tasks, setTasks] = useState([]);
//     const [showAddTask, setShowAddTask] = useState(false);
//     const [taskName, setTaskName] = useState('');
//     const [taskDescription, setTaskDescription] = useState('');
//     const [taskTimeRange, setTaskTimeRange] = useState('');
//     const [taskPriority, setTaskPriority] = useState('');
//     const [completedTasks, setCompletedTasks] = useState(0);

//     const handleAddTask = () => {
//         setShowAddTask(true);
//     };

//     const handleSaveTask = () => {
//         const newTask = {
//             name: taskName,
//             description: taskDescription,
//             timeRange: taskTimeRange,
//             priority: taskPriority,
//             completed: false
//         };
//         setTasks([...tasks, newTask]);
//         setTaskName('');
//         setTaskDescription('');
//         setTaskTimeRange('');
//         setTaskPriority('');
//         setShowAddTask(false);
//     };

//     const handleCheckboxClick = (index) => {
//         const newTasks = [...tasks];
//         newTasks[index].completed = !newTasks[index].completed;
//         setTasks(newTasks);
//         if (newTasks[index].completed) {
//             setCompletedTasks(completedTasks + 1);
//         } else {
//             setCompletedTasks(completedTasks - 1);
//         }
//     };

//     const handleTaskNameChange = (event) => {
//         setTaskName(event.target.value);
//     };

//     const handleTaskDescriptionChange = (event) => {
//         setTaskDescription(event.target.value);
//     };

//     const handleTaskTimeRangeChange = (event) => {
//         setTaskTimeRange(event.target.value);
//     };

//     const handleTaskPriorityChange = (event) => {
//         setTaskPriority(event.target.value);
//     };

//     const handleDragStart = (event, index) => {
//         event.dataTransfer.setData('text/plain', index);
//     };

//     const handleDrop = (event, targetIndex) => {
//         const sourceIndex = event.dataTransfer.getData('text/plain');
//         const newTasks = [...tasks];
//         const [removedTask] = newTasks.splice(sourceIndex, 1);
//         newTasks.splice(targetIndex, 0, removedTask);
//         setTasks(newTasks);
//     };

//     const renderTask = (task, index) => {
//         const taskClass = `Todo__task ${task.completed ? 'Todo__task--completed' : ''}`;
//         return (
//             <div
//                 key={index}
//                 className={taskClass}
//                 draggable
//                 onDragStart={(event) => handleDragStart(event, index)}
//                 onDrop={(event) => handleDrop(event, index)}
//                 onDragOver={(event) => event.preventDefault()}
//             >
//                 <div className="Todo__task-overview">
//                     <div className="Todo__task-name">{task.name}</div>
//                     <div className="Todo__task-time">{task.timeRange}</div>
//                     <input
//                         type="checkbox"
//                         checked={task.completed}
//                         onChange={() => handleCheckboxClick(index)}
//                     />
//                 </div>
//                 <div className="Todo__task-details">
//                     <div className="Todo__task-description">{task.description}</div>
//                     <div className="Todo__task-priority">{task.priority}</div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="Todo">
//             <div className="Todo__header">
//                 <div className="Todo__title">Todo List</div>
//                 <div className="Todo__completed">
//                     Completed: {completedTasks} / {tasks.length}
//                 </div>
//             </div>
//             <div className="Todo__add-task">
//                 <button className="Todo__add-task-button" onClick={handleAddTask}>
//                     Add Task
//                 </button>
//                 {showAddTask && (
//                     <div className="Todo__add-task-container">
//                         <div className="Todo__add-task-inputs">
//                             <label>Name:</label>
//                             <input type="text" value={taskName} onChange={handleTaskNameChange} />
//                             <label>Description:</label>
//                             <textarea
//                                 value={taskDescription}
//                                 onChange={handleTaskDescriptionChange}
//                             ></textarea>
//                             <label>Time Range:</label>
//                             <input type="text" value={taskTimeRange} onChange={handleTaskTimeRangeChange} />
//                             <label>Priority:</label>
//                             <input type="text" value={taskPriority} onChange={handleTaskPriorityChange} />
//                         </div>
//                         <button className="Todo__add-task-save" onClick={handleSaveTask}>
//                             Save Task
//                         </button>
//                     </div>
//                 )}
//             </div>
//             <div className="Todo__task-list">{tasks.map(renderTask)}</div>
//         </div>
//     );
// };

// export default Todo;