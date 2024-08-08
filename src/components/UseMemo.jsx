import React, { useState, useMemo } from 'react';

function factorial(n) {
    console.log('Calculating Factorial...');
    if (n < 0) return undefined;
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

export default function UseMemo() {
    const [number, setNumber] = useState();
    const [increment, setIncrement] = useState(0);

    const factorialResult = useMemo(() => factorial(number), [number]);

    function handleNumberChange(e) {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setNumber(value);
        }
    };

    return (
        <div>
            <h1>Factorial Calculator</h1>

            <label htmlFor='num'>Enter a positive number ?</label>
            <input
                type="number"
                min="0"
                onChange={handleNumberChange}
                className='border'
            />

            <p>Factorial: {factorialResult} </p>


            <p>{increment}</p>
            <button onClick={() => setIncrement(increment + 1)}>Re-render</button>
        </div>
    );
}
