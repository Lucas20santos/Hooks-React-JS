import React, {useState} from "react";
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoMdNotifications } from "react-icons/io";
import Modal from '@material-ui/core/Modal';
import Solicitation from '../Modals/Solicitation';

const SolicitationBox = ({solicitation}) =>  {
    const [modalOpen, setModalOpen] = useState(false);
    
    function handleClose(){
    setModalOpen(false);
    }    
    return (
        <>
        <button style={styles.box} onClick={() => setModalOpen(true)}>
            <IoMdNotifications style={styles.icon} />
            <div style={styles.column}>
                <h1 style={styles.boxTitle}> {solicitation?.user}</h1>
                <h1 style={styles.boxSubtitle}> Ambiente: {solicitation?.environment} </h1>
            </div>
        </button>
        <Modal
            open={modalOpen}
            onClose={handleClose}>
                <Solicitation solicitation={solicitation} setModalOpen={setModalOpen}></Solicitation>
            </Modal>
        </>
    )
}

SolicitationBox.propTypes = {  
    solicitation: PropTypes.object,  
  
}  
SolicitationBox.defaultProps = {  
    solicitation: {},
}  

export default SolicitationBox;
