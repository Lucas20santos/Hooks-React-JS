import React, {useState} from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import Dropdown from '../../Dropdown';
import TextInput from '../../TextInput';
import WeekDisplay from '../../WeekDisplay';


// Simulando dados:
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

const emptySubject = {
name:'',
code:'0',
teacher:'0',
scheduleTime:["00:00","00:00"],
scheduleDays:[false,false,false,false,false,false,false]
}

function AddSubject({setModalOpen}) {

    const [newSubject,setNewSubject] = useState(emptySubject);

    return (
        <div style={styles.box}> 
            <div style={styles.header}>
                <h1 style={styles.title}>Nova Disciplina</h1>
                <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                    <IoIosClose style={styles.closeIcon} ></IoIosClose>
                </button>
            </div>
            <div style={styles.content}>
                <TextInput
                    label="Nome da Disciplina:"
                    placeholder=""
                    name="name"
                    multiline={false}
                    value={newSubject?.name}
                    size="small"
                    onChange={(value) => {setNewSubject({...newSubject,name:value.target.value})}}
                    rows={1}
                    />    
                    <TextInput
                    label="Código da Disciplina:"
                    placeholder=""
                    name="code"
                    multiline={false}
                    value={newSubject?.code}
                    size="small"
                    onChange={(value) => {setNewSubject({...newSubject,code:value.target.value})}}
                    rows={1}
                    /> 
                <h1 style={styles.label}>Professor:</h1>
                <Dropdown
                    placeholder="Professor"
                    name="teacher"
                    options={users}
                    value={newSubject?.teacher}
                    onChange={(value) => {setNewSubject({...newSubject,teacher:value.target.value})}}
                />
                    <TextInput
                        label="Horário de Início:"
                        placeholder=""
                        name="name"
                        multiline={false}
                        value={newSubject?.scheduleTime[0]}
                        size="small"
                        onChange={(value) => {setNewSubject({...newSubject,teacher:value.target.value})}}
                        rows={1}
                    />
                    <TextInput
                    label="Horário de Fim:"
                    placeholder=""
                    name="name"
                    multiline={false}
                    value={newSubject?.scheduleTime[1]}
                    size="small"
                    onChange={(value) => {setNewSubject({...newSubject,teacher:value.target.value})}}
                    rows={1}
                />
                <div style={{width:'80%', marginTop:16}}>
                <WeekDisplay days={newSubject?.scheduleDays}></WeekDisplay>
                </div>
            <button style={styles.button} onClick={()=> setModalOpen(false)}>Adicionar Disiciplina</button>
            </div>
        </div>
    )
}
AddSubject.propTypes = {  
    setModalOpen: PropTypes.func,
  
}  
AddSubject.defaultProps = {  
    setModalOpen:()=>{}
}  

export default AddSubject;
