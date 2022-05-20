import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import SolicitationBox from '../../components/SolicitationBox';
import styles from './styles';

// Simulando dados:
const allSolicitations = [
  {
    id: '0',
    user:'Beatriz Lopes',
    environment:'GEPAE',
    message: 'Gostaria de ter acesso!'
  },
  {
    id: '1',
    user:'Márcio Evaristo',
    environment:'Lab. de Redes',
    message: 'Gostaria de ter acesso!'
  },
]

function Solicitations() {
  const [solicitations, setSolicitations] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getInfo(){
    setSolicitations(allSolicitations);
    setLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);


  if(loading || solicitations.length === 0){
    return(
      <h1> Carregando ...</h1>
    )
  }

    return (
      <div style={styles.body}>
        <div style={styles.titleArea}>
          <h1 style={styles.title}>Solicitações</h1>
        </div> 
        <div style={styles.content}>
        {solicitations.map((solicitation) =>{
          return (
            <SolicitationBox key={solicitation.id} solicitation={solicitation}></SolicitationBox>
          )
        })}
        </div>
         <BottomNavBar></BottomNavBar>
      </div>
    ); 
}

export default React.createElement(Solicitations);
