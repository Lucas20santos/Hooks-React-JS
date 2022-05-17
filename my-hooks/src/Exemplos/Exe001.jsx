import React, { useState } from 'react'

const Exe001 = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => {
                if(count === 20)
                {
                    setCount(0);
                }
                else
                {
                    setCount(count + 1)
                }
            }}>
                +
            </button>
            <button onClick={() => {
                if( count === 0)
                {
                    setCount(20);
                }
                else
                {
                    setCount(count - 1)
                }
            }}>
                -
            </button>
        </div>
    )
}
export default Exe001;
