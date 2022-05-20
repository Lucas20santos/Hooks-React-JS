import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import styles from './styles';
import TextInput from '../../components/TextInput';
import Dropdown from '../../components/Dropdown';

// Simulando dados: 

const environment =  {
  id: '0',
  name:'Lab. Eletrônica de Potência',
  capacity:5,
  responsible: '0',
};

const users = [
  { 
      id:'0',
      label:'Márcio Evaristo',
  },
  { 
      id:'1',
      label:'Geraldo Maia',
  }
]


function EditEnvironment() {
  const [environmentInfo, setEnvironmentInfo] = useState({});
  const [loading, setLoading] = useState(true);

  async function getInfo(){
    setLoading(false);
  }

  useEffect(() => {
    setEnvironmentInfo(environment);
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
            <h1 style={styles.title}>Editar Ambiente</h1>
          <h1 style={styles.subtitle}>{environment?.name}</h1>
        </div> 
        <div style={styles.content}>
        <TextInput
                    label="Nome do Ambiente:"
                    placeholder=""
                    name="name"
                    multiline={false}
                    value={environment?.name}
                    size="medium"
                    onChange={(value) => {setEnvironmentInfo({...environmentInfo,name:value.target.value})}}
                    rows={1}
                    />    
                <h1 style={styles.label}>Responsável:</h1>
                <Dropdown
                    placeholder="Responsável"
                    name="responsible"
                    options={users}
                    value={environment?.responsible}
                    onChange={(value) => {setEnvironmentInfo({...environmentInfo,responsible:value.target.value})}}
                />
                <TextInput
                    label="Capacidade de Alunos:"
                    placeholder=""
                    name="capacity"
                    multiline={false}
                    value={environment?.capacity}
                    size="medium"
                    onChange={(value) => {setEnvironmentInfo({...environmentInfo,capacity:value.target.value})}}
                    rows={1}
                    /> 
         <button style={styles.button} onClick={()=> console.log('Salvar')}>Salvar Alterações</button>
        </div>
         <BottomNavBar></BottomNavBar>
      </div>
    ); 
}
 

export default React.createElement(EditEnvironment);
