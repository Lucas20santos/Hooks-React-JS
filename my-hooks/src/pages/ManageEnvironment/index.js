import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import styles from './styles';
import AccessBox from '../../components/AccessBox';
// import { useParams } from 'react-router-dom';

// Simulando dados: 
const environment = {
  name: 'Lab. de Redes',
  access: [
    { 
      id:0,
      user:'Geraldo Maia',
      type:'Permanente',
      expireDate:'',
      subject:'',
     },
     { 
      id:1,
      user:'Márcio Evaristo',
      type:'Provisório',
      expireDate:new Date(),
      subject:'',
     },
     { 
      id:2,
      user:'Beatriz Lopes',
      type:'Disciplina',
      expireDate: '',
      subject:'Microcontroladores',
     },

  ]
}

function ManageEnvironment() {
  // const { id } = useParams();
  const [accessInfo, setAccessInfo] = useState({});
  const [loading, setLoading] = useState(true);

  async function getInfo(){
    setLoading(false);
  }

  useEffect(() => {
    setAccessInfo(environment);
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
          <h1 style={styles.title}>{accessInfo?.name}</h1>
          <h1 style={styles.subtitle}>Gerenciamento de Acesso</h1>
        </div> 
        <div style={styles.content}>
          {accessInfo?.access.map((access)=>{
            return (
              <AccessBox  key={access.id} access={access}></AccessBox>
            )
          })}
        </div>
         <BottomNavBar></BottomNavBar>
      </div>
    ); 
}

export default React.createElement(ManageEnvironment);
