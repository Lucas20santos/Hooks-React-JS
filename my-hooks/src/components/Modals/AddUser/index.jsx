import React, {useState} from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import Dropdown from '../../Dropdown';
import TextInput from '../../TextInput';

// Simulando dados:
const types = [
    { 
        id:'0',
        label:'Aluno',
    },
    { 
        id:'1',
        label:'Professor',
    },
    { 
        id:'2',
        label:'Administrador',
    },

]

const emptyUser = {
name:'',
email:'',
type:0,
}

function AddUser({setModalOpen}) {

    const [newUser,setNewUser] = useState(emptyUser);

    return (
        <div style={styles.box}> 
            <div style={styles.header}>
                <h1 style={styles.title}>Novo Usuário</h1>
                <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                    <IoIosClose style={styles.closeIcon} ></IoIosClose>
                </button>
            </div>
            <div style={styles.content}>
                <TextInput
                    label="Nome:"
                    placeholder=""
                    name="name"
                    multiline={false}
                    value={newUser?.name}
                    size="medium"
                    onChange={(value) => {setNewUser({...newUser,name:value.target.value})}}
                    rows={1}
                    />    
                 <TextInput
                    label="Email:"
                    placeholder=""
                    name="email"
                    multiline={false}
                    value={newUser?.email}
                    size="medium"
                    onChange={(value) => {setNewUser({...newUser,email:value.target.value})}}
                    rows={1}
                    /> 
                <h1 style={styles.label}>Tipo:</h1>
                <Dropdown
                    placeholder="Tipo"
                    name="type"
                    options={types}
                    value={newUser?.type}
                    onChange={(value) => {setNewUser({...newUser,type:value.target.value})}}
                />
           
            <button style={styles.button} onClick={()=> setModalOpen(false)}>Adicionar Usuário</button>
            </div>
        </div>
    )
}
AddUser.propTypes = {  
    setModalOpen: PropTypes.func,
  
}  
AddUser.defaultProps = {  
    setModalOpen:()=>{}
}  

export default AddUser;
