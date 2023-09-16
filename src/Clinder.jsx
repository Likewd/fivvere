import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';
const Clinder = () => {
    const disabledDates = ["tomorrow", "in3Days", "in5Days"];
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
    }
    function tileDisabled({ date, view }) {
        // Disable tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of disabled dates
            return disabledDates.find(dDate => isSameDay(dDate, date));
        }
    }
    function isSameDay(a, b) {
        return differenceInCalendarDays(a, b) === 0;
    }
    return (
        <div>
          <Calendar
      onChange={onChange}
                value={value}
      tileDisabled={tileDisabled}
            />
        </div>
    )
}

export default Clinder