import { TextField } from '@mui/material';
import format from 'date-fns/format';
import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function CalenderComp() {
    const [calender, setCalender] = useState("");
    const [open, setOpen] = useState(false);

    function handelSelect(date) {
        setCalender(format(date, 'dd/MM/yyyy'));
    }
    const refOne = useRef(null);

    function hideOnEscape(e) {
        if (e.key === "Escape") {
            setOpen(false)
        }
    }
    function hideOnClickOutside(e) {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    }
    useEffect(() => {
        setCalender(format(new Date(), 'dd/MM/yyyy'));
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, [])

    return (
        <div style={{ 'textAlign': 'center' }}>
            <TextField
                label="Select Date"
                name="date"
                variant='outlined'
                value={calender}
                onClick={() => setOpen(open => !open)}
            />
            <br />

            {open &&
                <Calendar
                    date={new Date()}
                    onChange={handelSelect} />}
        </div>
    )
}

export default CalenderComp;