import React, { Component } from 'react';

import Logo from "../../assets/ctg.jpeg"

import { Form, Container } from "./style"

import api from "../../services/api"

class Signin extends Component
{
   

    handleSignin = async e => 
    {
        e.preventDefault();
    
        const { email, password } = this.state;
    
        if (!email || !password) 
        {
          this.setState({ error: "Preencha todos os dados" });
        } 
        else 
        {
          try 
          {
            await api.post("/users", { email, password });
            this.props.history.push("/");
          } 
          catch (err) 
          {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
          }
        }
      };

    render() 
    {
        return(
            <Container>
                <Form onSubmit={this.handleSignin}>
                    <img src={Logo} alt="UFPE" />

                    <input
                        type="email"
                        placeholder="Nome do usuário"
                        onChance={e => this.setState({username: e.target.value})}
                    />

                    <input
                        type="password"
                        placeholder='senha'
                        onChange={e => this.setState({password: e.target.value})}
                    />

                    <button type='submit'>Entrar</button>

                    {this.state.error && <p>{this.state.error}</p>}
                </Form>
            </Container>

        )
    }

}

export default Signin;
