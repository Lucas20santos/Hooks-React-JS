import React from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";


function User({setModalOpen, user}) {
return (
    <div style={styles.box}> 
        <div style={styles.header}>
            <h1 style={styles.title}>{user?.name}</h1>
            <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                <IoIosClose style={styles.closeIcon} ></IoIosClose>
            </button>
        </div>
        <div style={styles.content}>
            <div style={styles.row}>
                <div style={styles.column}>
                    <h1 style={styles.label}>CPF:</h1>
                    <h1 style={styles.text}>{user?.cpf}</h1>
                </div>
                <div style={styles.column}>
                    <h1 style={styles.label}>Tipo:</h1>
                    <h1 style={styles.text}>{user?.type}</h1>
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.column}>
                    <h1 style={styles.label}>Email:</h1>
                    <h1 style={styles.text}>{user?.email}</h1>
                </div>
            </div>
            <button style={styles.button}> Remover Usuário</button>
        </div>
    </div>
)
}
User.propTypes = {  
    user: PropTypes.object,  
    setModalOpen: PropTypes.func,
  
}  
User.defaultProps = {  
    user: {},
    setModalOpen:()=>{}
}  

export default User;
