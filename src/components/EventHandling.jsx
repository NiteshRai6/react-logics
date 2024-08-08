import React, { useState } from 'react';


const itens = [
    { id: 1, name: 'john', age: 5 },
    { id: 2, name: 'selena', age: 56 },
    { id: 3, name: 'adam', age: 23 }
]

export default function EventHandling() {
    const [data, setData] = useState();
    const [item, setItem] = useState([]);

    function handleChange(e) {
        const data = e.target.value;
        setData(data);
    }

    function handleList(item) {
        setItem(pre => [...pre, item]);
    }

    console.log(data);
    console.log(item);


    return (

        <div className='grid place-content-center h-96 gap-10'>

            <div>
                <label htmlFor='id1'>Name :</label>
                <input
                    type='text'
                    className='border-2 p-2 text-xl'
                    onChange={handleChange}
                    id='id1'
                />
            </div>

            <div>

                {itens.map(item => (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.age}</li>

                        <button
                            className='p-2 text-[magenta] bg-[pink]'
                            onClick={() => handleList(item.age)}>
                            Submit
                        </button>
                    </ul>
                ))}


            </div>


        </div>
    )
}
