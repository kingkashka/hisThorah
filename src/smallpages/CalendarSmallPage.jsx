import '/src/css/calendar.css';
import React, { useState, useContext } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { ThemeContext } from '../components/themeContext';
import CalenderBody from '../components/CalenderBody';

function CalendarSmallPage() {
    const context = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();
    const [month, setMonth] = useState(new Date().getMonth());

    function addMonth() {
        setMonth((prevMonth) => (prevMonth + 1) % 12);
    }

    function subMonth() {
        setMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
    }

    const months = [
        "חדש יא - חודש י", "חודש יב - חודש יא", "חודש א - חודש יב", "חודש ב - חודש א", "חודש ג - חודש ב", "חודש ד - חודש ג", "חודש ה - חודש ד", "חודש ו - חודש ה", "חודש ז - חודש ו", "חודש ח - חודש ז", "חודש ט - חודש ח", "חודש י - חודש ט"
    ];
    const gregMonths = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const daysOfWeek = ["יום א", "יום ב", "יום ג", "יום ד", "יום ה", "יום ו", "שבת"];

    const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, month, 1).getDay();

    const markedDays = [
        { month: 2, day: 20, type: 'holyday', description: 'New Year - ראש השנה' },
        { month: 3, day: 2, type: 'holyday', description: 'Pesach - פסח' },
        { month: 3, startDay: 3, endDay: 9, type: 'festival', description: `Chag Ha'Matzoth - חג המצות` },
        { month: 8, day: 18, type: 'holyday', description: 'Yom Tharuah - יום תרועה' },
        { month: 8, startDay: 26, endDay: 27, type: 'holyday', description: 'Yom Kipurim - יום כפרים' },
        { month: 9, startDay: 2, endDay: 9, type: 'festival', description: 'Succoth - חג הסוכות' }
        // Add more marked days as needed
    ];

    const secondaryDays = {
        0: [null, ' / 13',' / 14',' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',' / 15'],
        1: [null,' / 14',' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17'],
        2: [' / 12',' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31', ' / 1',' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',],
        3: [' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1',' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        4: [' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        5: [ ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        6: [' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        7: [' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        8: [null, ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        9: [null, ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',],
        10: [null,' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',],
        11: [null, ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31',' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',]
        // Add more mappings for other months as needed
    };

    return (
        <div className={`calendar--smallPage--${context.color}`}>
            <div className={`calendar--${context.color}`}>
                <div className='calenderTitle'>
                <h1>The Calender - לוח הימים</h1>
                </div>
                <div className="calendar-header">
                    <FaArrowLeft className='buttonLeft' onClick={subMonth} />
                    <div className="header-text">
                        <h2 className='year'>{currentYear}</h2>
                        <h2 className='greg--month'>{gregMonths[month]}</h2>
                        <h2 className='month'>{months[month]}</h2>
                    </div>
                    <FaArrowRight className='buttonRight' onClick={addMonth} />
                </div>
                <ul className='days'>
                    {daysOfWeek.map((day, index) => (
                        <li key={index}>{day}</li>
                    ))}
                </ul>
                <div className='evenDay--container'>
                    {[...Array(firstDayOfMonth).keys()].map((emptyDay) => (
                        <div key={`empty-${emptyDay}`} className={`empty-day--${context.color}`}></div>
                    ))}
                    {[...Array(daysInMonth).keys()].map((day) => {
                        const currentDay = day + 1;
                        const date = new Date(currentYear, month, currentDay);
                        const isSaturday = date.getDay() === 6;

                        const markedDay = markedDays.find(d => d.month === month && d.day === currentDay);
                        const markedWeek = markedDays.find(d => d.month === month && d.startDay <= currentDay && d.endDay >= currentDay);
                        const secondaryDay = secondaryDays[month] ? secondaryDays[month][currentDay] : null;
                        
                        const isToday = new Date().getDate() === currentDay && new Date().getMonth() === month && new Date().getFullYear() === currentYear;
                        
                        return (
                            <div key={currentDay} className={`day--${context.color} ${markedDay ? markedDay.type : ''} ${markedWeek ? markedWeek.type : ''} ${isSaturday ? 'sabbath' : ''} ${isToday ? 'today' : ''}`}>
                                <div className="day-number">
                                    <span className="gregorian-day">{currentDay}</span>
                                    {secondaryDay && <span className="secondary-day">{secondaryDay}</span>}
                                </div>
                                {markedDay && <span className="tooltip">{markedDay.description}</span>}
                                {markedWeek && <span className="tooltip">{markedWeek.description}</span>}
                            </div>
                        );
                    })}
                    {[...Array(42 - firstDayOfMonth - daysInMonth).keys()].map((emptyDay) => (
                        <div key={`fill-${emptyDay}`} className={`empty-day--${context.color}`}></div>
                    ))}
                </div>
            </div>
            {/* <CalenderBody /> */}
        </div>
    );    
}

export default CalendarSmallPage;
