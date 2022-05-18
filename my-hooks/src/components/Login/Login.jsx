import React from 'react'
import './Login.css'

export default function Login () {
    // const [login, setLogin ] = useState({cpf: "", password: ""});

    return (
        <div className='formulario'>
            <form>
                <label>CPF</label>
                <input type="text" />
                <label>Senha</label>
                <input type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}
