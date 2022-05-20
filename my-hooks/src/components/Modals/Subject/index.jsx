import React from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import WeekDisplay from '../../WeekDisplay';
import { IoIosClose } from "react-icons/io";
import {Link} from 'react-router-dom';


function Subject({setModalOpen, subject}) {
return (
    <div style={styles.box}> 
        <div style={styles.header}>
            <h1 style={styles.title}>{subject?.name}</h1>
            <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                <IoIosClose style={styles.closeIcon} ></IoIosClose>
            </button>
        </div>
        <div style={styles.content}>
            <div style={styles.row}>
                <div style={styles.column}>
                    <h1 style={styles.label}>Professor:</h1>
                    <h1 style={styles.text}>{subject?.teacher}</h1>
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.column}>
                    <h1 style={styles.label}>Código:</h1>
                    <h1 style={styles.text}>{subject?.code}</h1>
                </div>
                <div style={styles.column}>
                    <h1 style={styles.label}>Horário:</h1>
                    <h1 style={styles.text}>{subject?.scheduleTime[0]} - {subject?.scheduleTime[1]} </h1>
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.column100}>
                    <h1 style={styles.label}>Dias da Semana:</h1>
                    <WeekDisplay days={subject.scheduleDays}></WeekDisplay>
                </div>
            </div>
            <Link style={styles.button} to={"/editsubject/" + subject.id} >Editar Disciplina</Link>
        </div>
    </div>
)
}
Subject.propTypes = {  
    subject: PropTypes.object,  
    setModalOpen: PropTypes.func,
  
}  
Subject.defaultProps = {  
    subject: {},
    setModalOpen:()=>{}
}  

export default Subject;
