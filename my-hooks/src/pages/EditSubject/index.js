import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import styles from './styles';
import TextInput from '../../components/TextInput';
import WeekDisplay from '../../components/WeekDisplay';

// Simulando dados: 

const subject =  {
  id: '0',
  name:'Microcontroladores',
  code:'EL564',
  teacher:'Márcio Evaristo',
  scheduleDays:[false,true,false,true,false,false, false],
  scheduleTime:['14:00','16:00'],
};

function EditSubject() {
  const [subjectInfo, setSubjectInfo] = useState({});
  const [loading, setLoading] = useState(true);

  async function getInfo(){
    setLoading(false);
  }

  useEffect(() => {
    setSubjectInfo(subject);
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
            <h1 style={styles.title}>Editar Disciplina</h1>
          <h1 style={styles.subtitle}>{subject?.name}</h1>
        </div> 
        <div style={styles.content}>
        <TextInput
            label="Nome da Disciplina:"
            placeholder=""
            name="name"
            multiline={false}
            value={subjectInfo?.name}
            size="small"
            onChange={(value) => {setSubjectInfo({...subjectInfo,name:value.target.value})}}
            rows={1}
         />
          <TextInput
            label="Código da Disciplina:"
            placeholder=""
            name="code"
            multiline={false}
            value={subjectInfo?.code}
            size="small"
            onChange={(value) => {setSubjectInfo({...subjectInfo,code:value.target.value})}}
            rows={1}
         />
         <TextInput
            label="Professor:"
            placeholder=""
            name="teacher"
            multiline={false}
            value={subjectInfo?.teacher}
            size="small"
            onChange={(value) => {setSubjectInfo({...subjectInfo,teacher:value.target.value})}}
            rows={1}
         />
           <TextInput
            label="Horário de Início:"
            placeholder=""
            name="name"
            multiline={false}
            value={subjectInfo?.scheduleTime[0]}
            size="small"
            onChange={(value) => {setSubjectInfo({...subjectInfo,teacher:value.target.value})}}
            rows={1}
         />
            <TextInput
            label="Horário de Fim:"
            placeholder=""
            name="name"
            multiline={false}
            value={subjectInfo?.scheduleTime[1]}
            size="small"
            onChange={(value) => {setSubjectInfo({...subjectInfo,teacher:value.target.value})}}
            rows={1}
         />
         <div style={{width:'80%', marginTop:16}}>
         <WeekDisplay days={subjectInfo?.scheduleDays}></WeekDisplay>
         </div>
         <button style={styles.button} onClick={()=> console.log('Salvar')}>Salvar Alterações</button>
        </div>
         <BottomNavBar></BottomNavBar>
      </div>
    ); 
}
 

export default React.createElement(EditSubject);
