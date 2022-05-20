import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import EnvironmentBox from '../../components/EnvironmentBox';
import styles from './styles';
import { IoMdAdd } from "react-icons/io";
import Modal from '@material-ui/core/Modal';
import AddEnviroment from '../../components/Modals/AddEnviroment';

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

function EnvironmentsAdmin() {
  const [environments, setEnvironments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  function handleClose(){
      setModalOpen(false);
    } 

  async function getInfo(){
    setEnvironments(allEnvironments);
    setLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);


 

  if(loading || environments.length === 0){
    return(
      <h1> Carregando ...</h1>
    )
  }

    return (
      <div style={styles.body}>
        <div style={styles.titleArea}>
          <h1 style={styles.title}>Ambientes</h1>
          <IoMdAdd style={styles.icon} onClick={()=>setModalOpen(true)}/>
        </div> 
        <div style={styles.environments}>
          {environments?.map((environment)=>{
            return <EnvironmentBox key={environment.id} environment={environment} tab={3}></EnvironmentBox>
          })}
        </div>
         <BottomNavBar></BottomNavBar>
         <Modal
            open={modalOpen}
            onClose={handleClose}>
                <AddEnviroment setModalOpen={setModalOpen}></AddEnviroment>
            </Modal>
      </div>
    ); 
}

export default React.createElement(EnvironmentsAdmin);
