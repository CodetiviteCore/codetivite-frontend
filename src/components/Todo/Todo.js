import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TooltipContainer = styled.div`
  display: ${({ show }) => show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
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
  height: 100px;
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
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  margin-bottom: 10px;
  cursor: move;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const CardTimeframe = styled.p`
  margin: 0;
  font-size: 16px;
`;

const DetailsContainer = styled.div`
  display: ${({ show }) => show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const DetailItem = styled.p`
  margin: 0;
  font-size: 16px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const CompletedTasks = styled.p`
  margin-top: 20px;
  font-size: 16px;
`;

const Todo = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState(0);

    const handleAddTask = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const newTask = {
            title: formData.get('title'),
            description: formData.get('description'),
            timeframe: formData.get('timeframe'),
            priority: formData.get('priority'),
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setShowTooltip(false);
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
    };

    return (
        <Container>
            <Button onClick={() => setShowTooltip(true)}>Add Task</Button>
            <TooltipContainer show={showTooltip}>
                <Form onSubmit={handleAddTask}>
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
                    <Button type="submit">Add Task</Button>
                </Form>
            </TooltipContainer>
            <CardContainer>
                {tasks.map((task, index) => (
                    <Card key={index} draggable="true" onDragStart={(event) => handleDragStart(event, index)} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, index)}>
                        <div onClick={() => handleCardClick(index)}>
                            <CardTitle>{task.title}</CardTitle>
                            <CardTimeframe>{task.timeframe}</CardTimeframe>
                        </div>
                        <DetailsContainer show={task.showDetails}>
                            <DetailItem>{task.description}</DetailItem>
                            <DetailItem>Priority: {task.priority}</DetailItem>
                            <DetailItem>Completed: <CheckBox type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} /></DetailItem>
                        </DetailsContainer>
                    </Card>
                ))}
            </CardContainer>
            <CompletedTasks>{completedTasks} out of {tasks.length} tasks completed</CompletedTasks>
        </Container>
    );
};

export default Todo;      