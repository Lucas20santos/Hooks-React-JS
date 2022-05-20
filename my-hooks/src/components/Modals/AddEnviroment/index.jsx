import React, {useState} from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import Dropdown from '../../Dropdown';
import TextInput from '../../TextInput';

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

const emptyEnvironment = {
name:'',
responsible:'0',
capacity:0,
}

function AddEnvironment({setModalOpen}) {

    const [newEnvironment,setNewEnvironment] = useState(emptyEnvironment);

    return (
        <div style={styles.box}> 
            <div style={styles.header}>
                <h1 style={styles.title}>Novo Ambiente</h1>
                <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                    <IoIosClose style={styles.closeIcon} ></IoIosClose>
                </button>
            </div>
            <div style={styles.content}>
                <TextInput
                    label="Nome do Ambiente:"
                    placeholder=""
                    name="name"
                    multiline={false}
                    value={newEnvironment?.name}
                    size="medium"
                    onChange={(value) => {setNewEnvironment({...newEnvironment,name:value.target.value})}}
                    rows={1}
                    />    
                <h1 style={styles.label}>Responsável:</h1>
                <Dropdown
                    placeholder="Responsável"
                    name="responsible"
                    options={users}
                    value={newEnvironment?.responsible}
                    onChange={(value) => {setNewEnvironment({...newEnvironment,responsible:value.target.value})}}
                />
                <TextInput
                    label="Capacidade de Alunos:"
                    placeholder=""
                    name="capacity"
                    multiline={false}
                    value={newEnvironment?.capacity}
                    size="medium"
                    onChange={(value) => {setNewEnvironment({...newEnvironment,capacity:value.target.value})}}
                    rows={1}
                    /> 
            <button style={styles.button} onClick={()=> setModalOpen(false)}>Adicionar Ambiente</button>
            </div>
        </div>
    )
}
AddEnvironment.propTypes = {  
    setModalOpen: PropTypes.func,
  
}  
AddEnvironment.defaultProps = {  
    setModalOpen:()=>{}
}  

export default AddEnvironment;
