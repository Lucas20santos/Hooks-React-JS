import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #0D698B;
`;

export const Form = styled.form`
    width: 450px;
    height: 450px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    img 
    {
        width: 100px;
        margin: 10px 0 40px;
    }

    p 
    {
        color: #0D698B;
        margin-bottom: 15px;
        border: 1px solid #0D698B;
        padding: 10px;
        width: 300px;
        text-align: center;
    }

    input 
    {
        width: 100vw;
        height: 3.5rem;
        margin-bottom: 15px;
        padding: 0px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #fff;
        
        &::placeholder 
        {
            color: #999;
            text-align: center;
        }
    }

    button 
    {
        color: #fff;
        font-size: 16px;
        background: #0D698B;
        height: 3.5rem;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }

    hr 
    {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #0D698B;
        width: 100%;
    }
`;
