import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {useDispatch } from 'react-redux';

export default function Calculate() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const add = () => {
        dispatch({type: 'SUM', value: parseInt(value)});
    }
    const sub = () => {
        dispatch({type: 'SUB', value: parseInt(value)});
    }
    return (
        <>
            <TextField value={value} label={"Valor"} onChange={(e) => setValue(e.target.value)} />
            <button type="button" onClick={() => add()}>+</button>
            <button type="button" onClick={() => sub()}>-</button>
        </>
    )
}