import React from 'react';
import { useSelector } from 'react-redux';

export default function Result() {
    const count = useSelector(state => state.count);
    console.log('count', count);
    return (
        <>
            <div>
                <p>Resultado: {count}</p>
            </div>
        </>
    )
}