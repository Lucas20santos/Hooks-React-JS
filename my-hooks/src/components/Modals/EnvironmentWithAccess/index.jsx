import React from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";

const user = 'Beatriz Lopes';

function EnvironmentWithAccess({setModalOpen, environment}) {

let action = 'Abrir Porta';

if(environment.occupied){
    if(environment.occupant === user){
        action = 'Registrar Saída';
    } else {
        action = "Ok, entendi";
    }
}

function renderOccupantInfo(){
    if(environment.occupied && environment.occupant !== user){
        return(
            <div style={styles.row}>
            <h1 style={styles.textOccupied}>O ambiente já está ocupado por <b>{environment.occupant}</b>.</h1>
    </div>
        )
    }
}

return (
    <div style={styles.box}> 
        <div style={styles.header}>
            <h1 style={styles.title}>{environment?.name}</h1>
            <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                <IoIosClose style={styles.closeIcon} ></IoIosClose>
            </button>
        </div>
        <div style={styles.content}>
            <div style={styles.row}>
                <div style={styles.column}>
                    <h1 style={styles.label}>Tipo:</h1>
                    <h1 style={styles.text}>Laboratório</h1>
                </div>
                <div style={styles.column}>
                    <h1 style={styles.label}>Capacidade:</h1>
                    <h1 style={styles.text}>5 alunos</h1>
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.column}>
                    <h1 style={styles.label}>Responsável:</h1>
                    <h1 style={styles.text}>Márcio Evaristo</h1>
                </div>
            </div>
       {renderOccupantInfo()}
        <button style={styles.button} onClick={()=> setModalOpen(false)}>{action}</button>
        </div>
    </div>
)
}
EnvironmentWithAccess.propTypes = {  
    environment: PropTypes.object,  
    setModalOpen: PropTypes.func,
  
}  
EnvironmentWithAccess.defaultProps = {  
    environment: {},
    setModalOpen: () => {}
}  

export default EnvironmentWithAccess;
