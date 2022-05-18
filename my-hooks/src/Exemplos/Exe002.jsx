import React, { useState ,useEffect} from 'react'

export default function Exe002 () 
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `você clicou ${count} vezes`;
    });
    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
        </div>
    );
}
