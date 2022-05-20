import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import styles from './styles';
import TextInput from '../../components/TextInput';
import {Link} from 'react-router-dom';

// Simulando dados
const userInfo = {
  name:'Beatriz Lopes',
  cpf:'702.679.644-55',
  email:'beatriz.allopes@hotmail.com',
  password:'123',
};

function Settings() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  async function getInfo(){
    setUser(userInfo);
    setLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);

 

  if(loading){
    return(
      <h1>Carregando ...</h1>
    )
  }

    return (
      <div style={styles.body}>
        <div style={styles.titleArea}>
          <h1 style={styles.title}>Configurações</h1>
        </div> 
        <div style={styles.content}>
        <TextInput
            label="Nome:"
            placeholder=""
            name="name"
            multiline={false}
            value={user?.name}
            size="small"
            onChange={(value) => {setUser({...user,name:value.target.value})}}
            rows={1}
         />
           <TextInput
            label="CPF:"
            placeholder=""
            name="cpf"
            multiline={false}
            value={user?.cpf}
            size="small"
            onChange={(value) => {setUser({...user,cpf:value.target.value})}}
            rows={1}
         />
          <TextInput
            label="Email:"
            type="email"
            placeholder=""
            name="email"
            multiline={false}
            value={user?.email}
            size="small"
            onChange={(value) => {setUser({...user,email:value.target.value})}}
            rows={1}
         />
         <TextInput
            label="Senha:"
            type="password"
            placeholder=""
            name="password"
            multiline={false}
            value={user?.password}
            size="small"
            onChange={(value) => {setUser({...user,password:value.target.value})}}
            rows={1}
         />
         <button style={styles.button} >Salvar Alterações</button>
         <Link style={styles.buttonLogout} to="/">Sair</Link>

        </div>
         <BottomNavBar></BottomNavBar>
      </div>
    ); 
}

export default React.createElement(Settings);
