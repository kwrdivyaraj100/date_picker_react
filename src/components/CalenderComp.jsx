import { TextField } from '@mui/material';
import format from 'date-fns/format';
import React, { useState } from 'react'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function CalenderComp() {
    const [calender, setCalender] = useState("");
    const [open, setOpen] = useState(false);

    function handelSelect(date) {
        setCalender(format(date, 'dd/MM/yyyy'));
    }

    return (
        <div>CalenderComp</div>
    )
}

export default CalenderComp;