import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../../ui_elements/Button/Button';


const CalendarWrapper = styled.div`
    width:30rem;
    border:0.5px solid var(--todo-border);
    height:fit-content;
    padding: 0.5% ;
    border-radius:10px ;
    transition: all .3s ease ;
`
const CalendarContainer = styled.div`
    background-color:var(--primary-light);
    width:100%;
    height:160px;
    position:relative;
    border-radius:10px ;

    h3{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size:5rem;
        z-index:0;
        opacity:0.05 ;
        color:var(--sidemenu-text);
    }
`
const MonthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    padding: 10px 20px;
    position:relative;
    button {
        font-size: 0.8rem;
        padding: 2% 3%;
        cursor: ${({ selected }) => (selected ? "pointer" : "not-allowed")} !important;
        border: none;
    }
    p{
        font-size: 1.3rem;
        color: black;
        font-weight: 600;
    }
    h6{
        font-size: 1rem;
        color: black;
        font-weight: 600;
        cursor: pointer;
    }
    div{
        display:flex;
        gap:10% ;
        p,h6{
            color:var(--sidemenu-text) !important ;
        }
        
    }
`;
const DateContainer = styled.div`
    padding: 0.8rem;
    height: fit-content;
    min-width: 50px !important;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 10px ;
    transition: all .3s ease-in ;
    border-radius:20px ;
    h6,p{
        color: var(--sidemenu-text) !important ;
    }
    h6{
        font-size:1.5rem;
    }
    p{
        font-size:0.8rem;
    }
    :hover {
        background-color: var(--primary);
        cursor: pointer;
        h6,p{
            color:white !important;
        }
    }
    &.selected {
        background-color: var(--primary);
        h6,p{
            color:white !important;
        }
    }
`;
const DateWrapper = styled.div`
    position: relative;
    z-index:2 ;
    width: auto;
    height: fit-content;
    margin:10px auto;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    color: black !important ;
    scroll-behavior: smooth;
`;

const ToolTipContainer = styled.div`
    position:absolute;
    top:2rem;
    right:-16rem;
    z-index:3;
    width: 17rem;
    height:fit-content;
    background-color:#f0f5f4 ;
    padding:1rem 1.3rem;
    box-shadow: 0px 3px 13px -6px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 3px 13px -6px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 13px -6px rgba(0,0,0,0.2);
    textArea,select{
        border:none;
        outline:none;
    }
    select{
        height:30px;
        color: rgba(0,0,0,0.5) ;
    }
    textArea{
        padding:4px ;
        font-size:1rem ;
        ::placeholder{
            opacity:0.3;
        }
    }
`

export const Calendar = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    // const [reminders, setReminders] = useState([])
    const [selectedTime] = useState(null)
    const [reminder, setRemider] = useState({
        date: "",
        reminder: "",
        time: ""
    })


    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const hanledSelectDate = (date) => {
        setSelectedDate(date)
        console.log(selectedDate)
    }

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getStartingDayOfWeek = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handleReminderChange = (e) => {
        const { value, name } = e.target
        const reminderDate = selectedDate
        setRemider({
            ...reminder,
            date: reminderDate,
            [name]: value
        })
        console.log(reminder)
    }


    //dropdown time selector generation
    const timeOptions = Array.from({ length: 13 }, (_, index) => {
        const hour = index + 6
        const am_pm = hour >= 12 ? "pm" : "am"
        const hourDisplayFormat = hour > 12 ? hour - 12 : hour

        return {
            value: `${hour}${am_pm}`,
            label: `${hourDisplayFormat}${am_pm}`
        }
    })


    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const startingDayOfWeek = getStartingDayOfWeek(currentYear, currentMonth);
    const dates = [...Array(daysInMonth).keys()].map((day) => day + 1);

    const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thur",
        "Fri",
        "Sat"
    ]


    return (
        <CalendarWrapper>
            <CalendarContainer>
                <h3>{currentYear}</h3>
                <MonthContainer>
                    <div>
                        <h6 onClick={handlePrevMonth} disabled={currentMonth === new Date().getMonth()}>
                            &lt;
                        </h6>
                        <p>{monthName}</p>
                        <h6 onClick={handleNextMonth}>&gt;</h6>
                    </div>
                    <Button primary selected={!!selectedDate}>Add Reminder</Button>
                    <ToolTipContainer>
                        {/* <label>Reminder:</label> */}
                        <textArea
                            type={"text"}
                            placeholder={"Enter reminder"}
                            name={"reminder"}
                            onChange={handleReminderChange}
                        />
                        <select value={selectedTime} onChange={handleReminderChange} name={"time"}>
                            <option value={""}>Time</option>
                            {
                                timeOptions.map((option) =>
                                    <option value={option.value}>
                                        {option.label}
                                    </option>
                                )
                            }
                        </select>
                    </ToolTipContainer>
                </MonthContainer>
                <DateWrapper>
                    {dates.map((date) => (
                        <DateContainer
                            key={date}
                            className={selectedDate && selectedDate.date === date ? "selected" : ""}
                            onClick={() =>
                                hanledSelectDate({
                                    date: date,
                                    day: (startingDayOfWeek + date - 1) % 7,
                                    month: currentMonth
                                })
                            }
                        >
                            <h6>{date}</h6>
                            <p>{days[(startingDayOfWeek + date - 1) % 7]}</p>
                        </DateContainer>
                    ))}


                </DateWrapper>

            </CalendarContainer>
        </CalendarWrapper>
    )
}
