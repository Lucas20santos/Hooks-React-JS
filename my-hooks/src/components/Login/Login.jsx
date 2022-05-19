import React from 'react'
import './styles.css'

export default function Login()
{
    return (
        <div className='login-wrapper'>
            <h1>Plase Log In</h1>
            <form>
                <label>
                    <p>CPF</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Senha</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
