import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import UserBox from '../../components/UserBox';
import styles from './styles';
import { IoMdAdd } from "react-icons/io";
import Modal from '@material-ui/core/Modal';
import AddUser from '../../components/Modals/AddUser';

// Simulando dados:
const allUsers = [
  {
    id:'0',
    name:'Beatriz Lopes',
    cpf:'702.556.444-66',
    type:'Aluno',
    email:'beatriz@hotmail.com',
  },
  {
    id:'1',
    name:'Márcio Evaristo',
    cpf:'702.556.444-66',
    type:'Professor',
    email:'marcio@hotmail.com',
  },
  {
    id:'2',
    name:'Geraldo Maia',
    cpf:'702.556.444-66',
    type:'Administrador',
    email:'geraldo@hotmail.com',
  }
]

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  function handleClose(){
    setModalOpen(false);
  } 


  async function getInfo(){
    setUsers(allUsers);
    setLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);


  if(loading || users.length === 0){
    return(
      <h1> Carregando ...</h1>
    )
  }

    return (
      <div style={styles.body}>
        <div style={styles.titleArea}>
          <h1 style={styles.title}>Usuários</h1>
          <IoMdAdd style={styles.icon} onClick={()=>setModalOpen(true)}/>
        </div> 
        <div style={styles.content}>
        {users.map((user) =>{
          return (
            <UserBox key={user.id} user={user}></UserBox>
          )
        })}
        </div>
         <BottomNavBar></BottomNavBar>
         <Modal
            open={modalOpen}
            onClose={handleClose}>
                <AddUser setModalOpen={setModalOpen}></AddUser>
            </Modal>
      </div>
    ); 
}

export default React.createElement(Users);
