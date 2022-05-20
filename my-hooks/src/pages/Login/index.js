import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import TextInput from '../../components/TextInput';

// Banco de dados
let user = 
{
  type:'Aluno'
}

const Login = () =>
{
  const [login, setLogin] = useState({cpf:'', password:''})
  let route = user.type === 'Admin' ? "/environmentsadmin" : "/environments"
  return (
      <div style={styles.body}>
      <div style={styles.titleArea}>
        <h1 style={styles.title}>Controle de Acesso</h1>
      </div>

      {/* campo do cpf */}
      <TextInput
            label="CPF:"
            placeholder=""
            name="name"
            multiline={false}
            value={login?.cpf}
            size="small"
            // Aqui ele está pegando as mundaças que acontecem no campo do cpf 
            onChange={(value) => {setLogin({...login,cpf:value.target.value})}}
            rows={1}
      />
        {/* campo da senha */}
         <TextInput
            label="Senha:"
            placeholder=""
            name="name"
            multiline={false}
            value={login?.password}
            size="small"
            onChange={(value) => {setLogin({...login,password:value.target.value})}}
            rows={1}
         />
      
      <Link to={route} style={styles.button}>Entrar</Link>
    </div>
  );
}

{/* <Link to="/environments">Sobre</Link> */}


export default React.createElement(Login);