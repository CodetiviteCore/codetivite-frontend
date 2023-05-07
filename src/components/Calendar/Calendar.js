import React, { useState } from "react";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  width: 30rem;
  border: 0.5px solid var(--todo-border);
  min-height: 100px;
  padding: 0.5%;
  border-radius: 10px;
  transition: all 0.3s ease;
  color:black !important ;
`;

const CalendarContainer = styled.div`
  background-color: var(--primary-light);
  width: 100%;
  height: 160px;
  position: relative;
  border-radius: 10px;

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    z-index: 0;
    opacity: 0.05;
    color: var(--sidemenu-text);
  }
`;

const MonthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding: 10px 20px;

  button {
    font-size: 0.8rem;
    padding: 2% 3%;
    cursor: ${({ selected }) => (selected ? "pointer" : "not-allowed")} !important;
    border: none;
  }

  p {
    font-size: 1.3rem;
    color: black;
    font-weight: 600;
  }

  h6 {
    font-size: 1rem;
    color: black;
    font-weight: 600;
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 10%;

    p,
    h6 {
      color: var(--sidemenu-text) !important;
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
  margin: 0 10px;
  transition: all 0.3s ease-in;
  border-radius: 20px;

  h6,
  p {
    color: var(--sidemenu-text) !important;
  }

  h6 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
  }

  :hover {
    background-color: var(--primary);
    cursor: pointer;

    h6,
    p {
      color: white !important;
    }
  }

  &.selected {
    background-color: var(--primary);

    h6,
    p {
      color: white !important;
    }
  }
`;

const DateWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: auto;
  height: fit-content;
  margin: 10px auto;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  color: black !important;
  scroll-behavior: smooth;
`;

const Button = styled.button`
  /* Define your button styles here */
`;

const TimeRuler = styled.div`
  position: relative;
  width: 100%;
  height: 600px; /* Adjust the height as needed */
  overflow-y: scroll;
  background-color: #f1f1f1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background-color: white;
    border-bottom: 1px solid #ccc;
    z-index: 1;
}
`;

export const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [reminders, setReminders] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [isAddingReminder, setIsAddingReminder] = useState(false);

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

    const handleAddReminder = () => {
        setIsAddingReminder(true);
    };

    const handleSaveReminder = () => {
        const newReminder = {
            title: title,
            description: description,
            time: time,
        };

        setReminders([...reminders, newReminder]);
        setTitle("");
        setDescription("");
        setTime("");
        setIsAddingReminder(false);
    };

    const hanledSelectDate = (date) => {
        setSelectedDate(date);
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getStartingDayOfWeek = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const startingDayOfWeek = getStartingDayOfWeek(currentYear, currentMonth);
    const dates = [...Array(daysInMonth).keys()].map((day) => day + 1);

    const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const ReminderCard = ({ reminder }) => {
        const topPosition = calculateTopPosition(reminder.time);

        return (
            <div style={{ position: "absolute", top: `${topPosition}px`, left: "0", width: "100%", backgroundColor: "lightblue" }}>
                <h4>{reminder.title}</h4>
                <p>{reminder.description}</p>
                <p>{reminder.time}</p>
            </div>
        );
    };

    const calculateTopPosition = (time) => {
        const [hour, minute] = time.split(":");
        const totalMinutes = parseInt(hour) * 60 + parseInt(minute);
        const topPosition = (totalMinutes / 60) * HOUR_INTERVAL_HEIGHT;
        return topPosition;
    };

    const timeOptions = [
        "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
        "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
        "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM",
    ];

    const HOUR_INTERVAL_HEIGHT = 60;

    const renderTimeIntervals = () => {
        const intervals = [];
        for (let hour = 0; hour < 24; hour++) {
            intervals.push(
                <div
                    key={hour}
                    style={{
                        position: "relative",
                        height: HOUR_INTERVAL_HEIGHT,
                        borderBottom: "1px solid #ccc",
                    }}
                >
                    <span style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: "10px",
                        fontSize: "12px",
                    }}
                    >
                        {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                    </span>
                </div>
            );
        }
        return intervals;
    };

    const renderReminderCards = () => {
        return reminders.map((reminder, index) => <ReminderCard key={index} reminder={reminder} />);
    };

    return (
        <CalendarWrapper>
            <CalendarContainer>
                <h3>{currentYear}</h3>
                <MonthContainer>
                    <div>
                        <h6 onClick={handlePrevMonth} disabled={currentMonth === new Date().getMonth()}>&lt;</h6>
                        <p>{monthName}</p>
                        <h6 onClick={handleNextMonth}>&lt;</h6>
                    </div>
                    <Button primary selected={!!selectedDate} onClick={handleAddReminder}>
                        Add Reminder
                    </Button>
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
                                })
                            }
                        >
                            <h6>{date}</h6>
                            <p>{days[(startingDayOfWeek + date - 1) % 7]}</p>
                        </DateContainer>
                    ))}
                </DateWrapper>
            </CalendarContainer>
            {isAddingReminder && (
                <div>
                    <h4>Add Reminder</h4>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <select value={time} onChange={(e) => setTime(e.target.value)}>
                        <option value="">Select Time</option>
                        {timeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <button onClick={handleSaveReminder}>Save</button>
                </div>
            )}
            <TimeRuler>{renderTimeIntervals()}</TimeRuler>
            {renderReminderCards()}
        </CalendarWrapper>
    );
};