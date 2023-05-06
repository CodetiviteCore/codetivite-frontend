import React, { useState } from 'react';
import styled from 'styled-components';
import { Delete } from '../../assets/svgs';
import { Button } from '../../ui_elements/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  max-width:fit-content ;
  min-width:24rem !important;
  border:1px solid var(--todo-border);
  border-radius:10px;
  background-color:var(--white) ;
  transition: all .3s ease ;
`;

const TileContainer = styled.div`
  display:flex;
  position:relative;
  width:90%;
  justify-content:space-between;
  margin-top:1rem ;
  h3{
    font-size: 1.3rem;
    font-weight:400;
  }
`

// const Button = styled.button`
//   padding: 10px;
//   background-color: var(--primary);
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

const AddButton = styled.button`
  padding: 10px;
  background-color: var(--primary);
  display:flex;
  align-items:center;
  justify-content:center;
  width:2rem;
  height:2rem;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight:400;
  border-radius:50%;
`;

const DeleteIcon = styled(Delete)`
 width:18px;
 height:18px;
 justify-self:flex-end;
 :hover{
  cursor:pointer;
 }
`

const TooltipContainer = styled.div`
  display: ${({ show }) => show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position:absolute;
  top:1rem;
  right:-14rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13rem;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  p{
    color: black !important;
    font-size:1.6rem ;
    align-self:flex-end;
    :hover{
      cursor:pointer;
    }
  }
  button{
    font-size:0.8rem;
    padding:10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #4CAF50;
  font-size: 16px;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 3rem;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #4CAF50;
  font-size: 16px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #4CAF50;
  font-size: 16px;
  outline: none;
`;

const Option = styled.option`
  font-size: 16px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width:24rem;
  padding: 1rem;
  /* background-color: var(--primary-light); */
  border-bottom:1px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 100px rgba(0,0,0,0.06);
  margin-bottom: 10px;
  transition:all .3s ease ;
  cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'grab')};

  :hover {
    background-color: var(--primary-light);
    cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'grab')};
  }
`;

const CardTitleContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  button{
    font-size:0.7rem;
    padding:1% 2%;
  }

`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight:600;
`;

const CardTimeframe = styled.p`
  margin: 0;
  font-size: 1rem !important;
  color:gray !important;
  span{
    font-weight:700;
    color:var(--sidemenu-text);
    font-size:1rem;
  }

`;

const DetailsContainer = styled.div`
  display: ${({ show }) => show ? 'flex' : 'none'};
  max-height: ${({ show }) => show ? '1000px' : '0px'};
  flex-direction: column;
  margin-top: 10px;
  overflow: hidden;
  transition: all .5s ease;
  p{
    color:var(--sidemenu-text) ;
    font-size:0.8rem ;
  }
`;

const DetailItem = styled.p`
  margin-left:-30px;
  font-size: 1rem !important;
  font-weight:700;
  color: ${({priority})=>priority ? `${priority}` : "black"} !important;
`;

const CheckBox = styled.input`
  margin-left: 10px;
  color:var(--primary);
  height:12px;
  width:12px;
`;

const CompletedTasks = styled.p`
  margin-top: 20px;
  font-size: 0.8rem !important;
  color:gray !important;
`;

const TaskPriority = styled.div`
  display:flex;
  gap:10%;
  justify-content:space-between ;
  width:100%;
  margin-top:5px;
  p{
    font-size:0.9rem !important;
  }
`

const Todo = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isDragging, setIsDragging] = useState(false)

const handleAddTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    let newTask = {
      title: formData.get('title'),
      description: formData.get('description'),
      timeframe: formData.get('timeframe'),
      priority: formData.get('priority'),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setShowTooltip(false);
    event.target.reset()
  };
  const handleCardClick = (index) => {
    const newTasks = [...tasks];
    newTasks[index].showDetails = !newTasks[index].showDetails;
    setTasks(newTasks);
  };

  const handleCheckboxChange = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    setCompletedTasks(completedTasks + (newTasks[index].completed ? 1 : -1));
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
    event.currentTarget.setAttribute('data-dragging', 'true');
    setIsDragging(true)
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const dragIndex = event.dataTransfer.getData('text');
    const newTasks = [...tasks];
    const [draggedTask] = newTasks.splice(dragIndex, 1);
    newTasks.splice(index, 0, draggedTask);
    setTasks(newTasks);
    setIsDragging(false)
  };
  const handleDragEnd = (event) => {
    event.currentTarget.setAttribute('data-dragging', 'false');
  };
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Container>
      <TileContainer>
        <h3>Assignments</h3>
        <AddButton onClick={() => setShowTooltip(true)}>+</AddButton>
        <TooltipContainer show={showTooltip}>
          <Form onSubmit={handleAddTask}>
            <p onClick={()=>setShowTooltip(false)}>&#215;</p>
            <Input name="title" placeholder="Title" required />
            <TextArea name="description" placeholder="Description" required />
            <Select name="timeframe" required>
              <Option value="" disabled selected hidden>Timeframe</Option>
              <Option value="Today">Today</Option>
              <Option value="This Week">This Week</Option>
              <Option value="This Month">This Month</Option>
            </Select>
            <Select name="priority" required>
              <Option value="" disabled selected hidden>Priority</Option>
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
            <Button primary type="submit">Add Task</Button>
          </Form>
        </TooltipContainer>
      </TileContainer>

      <CardContainer>
        {tasks.map((task, index) => (
          <Card
            key={index}
            draggable="true"
            data-dragging={isDragging ? 'true' : 'false'}
            onDragStart={(event) => handleDragStart(event, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
            isDragging={isDragging}
          >
            <div>
              <CardTitleContainer>
                <CardTitle>{task.title}</CardTitle>
                <Button primary onClick={() => handleCardClick(index)} >View</Button>
              </CardTitleContainer>
              <CardTimeframe>Timeline: <span>{task.timeframe}</span></CardTimeframe>
            </div>
            <DetailsContainer show={task.showDetails}>
              <p>"{task.description}"</p>
              <TaskPriority>
                Priority:
                {
                  task.priority === "High" ? <DetailItem priority="var(--danger)">{task.priority}</DetailItem>
                    :
                    task.priority === "Medium" ? <DetailItem priority="var(--footer-blue)">{task.priority}</DetailItem>
                      :
                      task.priority === "Low" ? <DetailItem priority="var(--primary)">{task.priority}</DetailItem>
                        :
                        null
                }
                Completed:
                <DetailItem>
                  <CheckBox
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </DetailItem>
                <DeleteIcon onClick={()=>handleDeleteTask(index)}/>
              </TaskPriority>
            </DetailsContainer>
          </Card>
        ))}
      </CardContainer>
      <CompletedTasks>{completedTasks} out of {tasks.length} tasks completed</CompletedTasks>
    </Container>
  );
};

export default Todo;      