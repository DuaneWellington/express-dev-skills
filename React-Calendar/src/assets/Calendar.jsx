// PATH: 'Calendar.jsx'

import "./Calendar.css"
import React from "react";

const Calendar = ({ days, dates }) => {

    const weekArray = (array, size) => {
        const result = [];
        for (let i=0;i<array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const weeks = weekArray(dates, 7);

    return (
        <div className="calendar">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="week">
              {week.map((date, dateIndex) => (
                <div key={dateIndex} className="day">
                  <div className="day-name">{days[dateIndex].name}</div>
                  <div className="day-date">{date}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };

export default Calendar;
