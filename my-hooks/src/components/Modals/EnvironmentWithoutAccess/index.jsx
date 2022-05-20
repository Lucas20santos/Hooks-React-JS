import React, {useState} from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import TextInput from '../../TextInput';

const user = 'Beatriz Lopes';

function EnvironmentWithAccess({setModalOpen, environment}) {

    const [solicitingAccess, setSolicitingAccess] = useState({
        state: false,
        text: '',
    });
    const action = solicitingAccess.state ? 'Enviar Solicitação' : 'Solicitar Acesso';


    function renderOccupantInfo(){
        if(environment.occupied && environment.occupant != user){
            return(
                <div style={styles.row}>
                    <h1 style={styles.textOccupied}>O ambiente está ocupado por <b>{environment.occupant}</b>.</h1>
                </div>
            )
        }
    }

    function renderInput(){
        if(solicitingAccess.state){
            return(
                <TextInput
                    placeholder="Justifique a solicitação de acesso ao ambiente."
                    name="solicitationText"
                    multiline
                    value={solicitingAccess.text}
                    size="medium"
                    onChange={(value) => {setSolicitingAccess({...solicitingAccess,text:value.target.value})}}
                    rows={3}
              />
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
        {renderInput()}
            <button style={styles.button} onClick={()=> setSolicitingAccess({... setSolicitingAccess, state:true})}>{action}</button>
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
    setModalOpen:()=>{}
}  

export default EnvironmentWithAccess;
