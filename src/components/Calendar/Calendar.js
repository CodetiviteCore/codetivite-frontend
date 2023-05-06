import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';


const CalendarContainer = styled.div`
    
`


export const Calendar = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    console.log(daysInMonth)


    return (
        <CalendarContainer>
            Calendar
        </CalendarContainer>
    )
}
