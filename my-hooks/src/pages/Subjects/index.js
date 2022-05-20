import React, {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottomNavBar';
import SubjectBox from '../../components/SubjectBox';
import styles from './styles';

// Simulando dados:
const allSubjects = [
  {
    id: '0',
    name:'Microcontroladores',
    code:'EL564',
    teacher:'Márcio Evaristo',
    scheduleDays:[false,true,false,true,false,false, false],
    scheduleTime:['14:00','16:00'],
  },
  {
    id: '1',
    name:'Redes Industriais',
    code:'EL564',
    teacher:'Geraldo Maia',
    scheduleDays:[false,false,true,false,true,false, false],
    scheduleTime:['13:00','15:00'],
  },
]

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getInfo(){
    setSubjects(allSubjects);
    setLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);


  if(loading || subjects.length === 0){
    return(
      <h1> Carregando ...</h1>
    )
  }

    return (
      <div style={styles.body}>
        <div style={styles.titleArea}>
          <h1 style={styles.title}>Disciplinas</h1>
        </div> 
        <div style={styles.content}>
        {subjects.map((subject) =>{
          return (
            <SubjectBox key={subject.id} subject={subject}></SubjectBox>
          )
        })}
        </div>
         <BottomNavBar></BottomNavBar>
      </div>
    ); 
}

export default React.createElement(Subjects);
