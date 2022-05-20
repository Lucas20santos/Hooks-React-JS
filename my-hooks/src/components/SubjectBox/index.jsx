import React, {useState} from "react";
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosSchool } from "react-icons/io";
import Modal from '@material-ui/core/Modal';
import Subject from '../Modals/Subject';

const SubjectBox = ({subject}) =>  {
    const [modalOpen, setModalOpen] = useState(false);
    
    function handleClose(){
    setModalOpen(false);
    }    
    return (
        <>
        <button style={styles.box} onClick={() => setModalOpen(true)}>
            <IoIosSchool style={styles.icon} />
            <div style={styles.column}>
                <h1 style={styles.boxTitle}> {subject?.name}</h1>
                <h1 style={styles.boxSubtitle}> Professor: {subject?.teacher} </h1>
            </div>
        </button>
        <Modal
            open={modalOpen}
            onClose={handleClose}>
                <Subject subject={subject} setModalOpen={setModalOpen}></Subject>
            </Modal>
        </>
    )
}

SubjectBox.propTypes = {  
    subject: PropTypes.object,  
  
}  
SubjectBox.defaultProps = {  
    subject: {},
}  

export default SubjectBox;
