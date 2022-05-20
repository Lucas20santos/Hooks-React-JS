import React from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import {Link} from 'react-router-dom';


function EnvironmentAdmin({setModalOpen, environment}) {

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
            <Link style={styles.button} to={"/editenvironment/" + environment.id} >Editar Ambiente</Link>
            <Link style={styles.button} to={"/manageenvironment/" + environment.id} >Gerenciar Acesso</Link>
            <Link style={styles.button} to={"/environmenthistory/" + environment.id} >Histórico</Link>
            <button style={styles.buttonRemove} onClick={()=> setModalOpen(false)}>Remover Ambiente</button>
            </div>
        </div>
    )
}
EnvironmentAdmin.propTypes = {  
    environment: PropTypes.object,  
    setModalOpen: PropTypes.func,
  
}  
EnvironmentAdmin.defaultProps = {  
    environment: {},
    setModalOpen:()=>{}
}  

export default EnvironmentAdmin;
