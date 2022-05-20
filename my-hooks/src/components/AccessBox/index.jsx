import React, {useState} from "react";
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosLock, IoMdCreate } from "react-icons/io";
import Modal from '@material-ui/core/Modal';
import ManageAccess from '../../../components/Modals/ManageAccess';

const AccessBox = ({access}) =>  {
    const [modalOpen, setModalOpen] = useState(false);
    
    function handleClose(){
    setModalOpen(false);
    }    
    return (
        <>
        <button style={styles.box} onClick={() => setModalOpen(true)}>
            <IoIosLock style={styles.icon} />
            <div style={styles.column}>
                <h1 style={styles.boxTitle}> {access?.user}</h1>
                <h1 style={styles.boxSubtitle}> Tipo:  {access?.type}  </h1>
            </div>
            <IoMdCreate style={styles.iconEdit} />
        </button>
        <Modal
            open={modalOpen}
            onClose={handleClose}>
                <ManageAccess access={access} setModalOpen={setModalOpen}></ManageAccess>
            </Modal>
        </>
    )
}

AccessBox.propTypes = {  
    access: PropTypes.object,  
  
}  
AccessBox.defaultProps = {  
    access: {},
}  

export default AccessBox;
