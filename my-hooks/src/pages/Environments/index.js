import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import EnvironmentBox from '../../components/EnvironmentBox';
import styles from './styles';

// Simulando dados: 
const user = {
  name:'Beatriz Lopes',
  type:'Teacher',
};

const allEnvironments = [
  {
    id: '0',
    name:'Lab. Eletrônica de Potência',
    occupied: true,
    occupant:'Márcio Evaristo',
    hasAccess: true,
    responsible: 'Beatriz Lopes',
  },
  {
    id: '1',
    name:'Lab. IoT',
    occupied: false,
    occupant:'',
    hasAccess: true,
    responsible: 'Beatriz Lopes',
  },
  {
    id: '2',
    name:'Lab. Redes',
    occupied: true,
    occupant:'Beatriz Lopes',
    hasAccess: true,
    responsible: 'Márcio Evaristo',

  },
  {
    id: '3',
    name:'GEPAE',
    occupied: true,
    occupant:'Fabríscio B.',
    hasAccess: false,
    responsible: 'Márcio Evaristo',
  },
  {
    id: '4',
    name:'Lab. IoT',
    occupied: false,
    occupant:'',
    hasAccess: false,
    responsible: 'Geraldo Maia',
  },
]

function Environments() {
  const [tab, setTab] = useState(1); // 0 = Meus Ambientes, 1 = Acesso Permitido , 2 = Sem Acesso
  const [environments, setEnvironments] = useState([]);
  const [loading, setLoading] = useState(true);

  let environmentsToShow = [];

  switch (tab){
    case 1:
      environmentsToShow = environments.filter(element => element.hasAccess);
      break
    case 2:
      environmentsToShow = environments.filter(element => !element.hasAccess);
      break
    default:
      environmentsToShow = environments.filter(element => element.responsible === user.name );
      break
  }


  async function getInfo(){
    setEnvironments(allEnvironments);
    setLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, [tab]);

  function renderTabs() {
    if(user.type === 'Teacher'){
      return (
        <div style={styles.tabsSmall}>
        <button style={tab === 0 ? styles.tabActiveSmall: styles.tabInactiveSmall} onClick={()=>setTab(0)}> Meus <br/> Ambientes</button>
        <button style={tab === 1 ? styles.tabActiveSmall: styles.tabInactiveSmall} onClick={()=>setTab(1)}> Acesso <br/> Permitido</button>
        <button style={tab === 2 ? styles.tabActiveSmall: styles.tabInactiveSmall} onClick={()=>setTab(2)}> Sem <br/>Acesso</button>
      </div>
      )
    } else {
      return ( 
      <div style={styles.tabs}>
        <button style={tab === 1 ? styles.tabActive: styles.tabInactive} onClick={()=>setTab(1)}> Acesso Permitido</button>
        <button style={tab === 2 ? styles.tabActive: styles.tabInactive} onClick={()=>setTab(2)}> Sem Acesso</button>
      </div>
      )  
    }
  }

 

  if(loading || environmentsToShow.length === 0){
    return(
      <h1> Carregando ...</h1>
    )
  }

    return (
      <div style={styles.body}>
        <div style={styles.titleArea}>
          <h1 style={styles.title}>Ambientes</h1>
        </div> 
        {renderTabs()}
        <div style={styles.environments}>
          {environmentsToShow?.map((environment)=>{
            return <EnvironmentBox key={environment.id} environment={environment} tab={tab}></EnvironmentBox>
          })}
        </div>
         <BottomNavBar></BottomNavBar>
      </div>
    ); 
}

export default React.createElement(Environments);
