import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import styles from './styles';
// import { useParams } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import HistoryTable from '../../components/HistoryTable';
import { IoIosMore } from "react-icons/io";
import HistoryOptions from "../../components/Modals/HistoryOptions";
import Modal from '@material-ui/core/Modal';

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

function History() {
  // const { id } = useParams();
  const [accessInfo, setAccessInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);


  async function getInfo(){
    setLoading(false);
  }

  useEffect(() => {
    setAccessInfo(environment);
    getInfo();
  }, []);
   
  function handleClose(){
    setModalOpen(false);
    }  

  if(loading){
    return(
      <h1>Carregando ...</h1>
    )
  }

    return (
      <div style={styles.body}>
        <div style={styles.titleArea}>
            <h1 style={styles.title}>{accessInfo?.name}</h1>
            <IoIosMore style={styles.iconMoreOptions} onClick={()=>setModalOpen(true)} />
          <h1 style={styles.subtitle}>Histórico de Acesso</h1>
        </div> 
        <div style={styles.content}>
        <TextInput
          placeholder="Pesquisar Data..."
          name="search"
          multiline
          value={search}
          size="small"
          onChange={(value) => {setSearch(value)}}
          rows={1}
              />
        <HistoryTable></HistoryTable>
        </div>
         <BottomNavBar></BottomNavBar>
         <Modal
            open={modalOpen}
            onClose={handleClose}>
                <HistoryOptions environment={environment} setModalOpen={setModalOpen}></HistoryOptions>
            </Modal>
      </div>
    ); 
}

export default React.createElement(History);
