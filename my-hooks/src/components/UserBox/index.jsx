import React, {useState} from "react";
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoMdPerson } from "react-icons/io";
import Modal from '@material-ui/core/Modal';
import User from '../Modals/User';

const UserBox = ({user}) =>  {
    const [modalOpen, setModalOpen] = useState(false);
    
    function handleClose(){
    setModalOpen(false);
    }    
    return (
        <>
        <button style={styles.box} onClick={() => setModalOpen(true)}>
            <IoMdPerson style={styles.icon} />
            <div style={styles.column}>
                <h1 style={styles.boxTitle}> {user?.name}</h1>
                <h1 style={styles.boxSubtitle}> Tipo: {user?.type} </h1>
            </div>
        </button>
        <Modal
            open={modalOpen}
            onClose={handleClose}>
                <User user={user} setModalOpen={setModalOpen}></User>
            </Modal>
        </>
    )
}

UserBox.propTypes = {  
    user: PropTypes.object,  
  
}  
UserBox.defaultProps = {  
    user: {},
}  

export default UserBox;
