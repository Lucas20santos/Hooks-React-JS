import React, {useState} from "react";
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosHome, IoIosRadioButtonOn } from "react-icons/io";
import EnvironmentWithAccess from '../Modals/EnvironmentWithAccess';
import EnvironmentWithoutAccess from '../Modals/EnvironmentWithoutAccess';
import MyEnvironment from '../Modals/MyEnvironment';
import EnvironmentAdmin from '../Modals/EnvironmentAdmin';
import Modal from '@material-ui/core/Modal';

const EnvironmentBox = ({environment, tab}) =>  {
    const [modalOpen, setModalOpen] = useState(false);

    function renderModal(){
        let toRender;
        switch (tab){
            case 1: 
                toRender = <EnvironmentWithAccess environment={environment} setModalOpen={setModalOpen}></EnvironmentWithAccess>;
            break;
            case 2: 
                toRender = <EnvironmentWithoutAccess environment={environment} setModalOpen={setModalOpen}></EnvironmentWithoutAccess>;
            break;
            case 3: 
                toRender = <EnvironmentAdmin environment={environment} setModalOpen={setModalOpen}></EnvironmentAdmin>;
            break;
            default:
                toRender = <MyEnvironment environment={environment} setModalOpen={setModalOpen}></MyEnvironment>;
        }
        return toRender;
      }
    
    function handleClose(){
    setModalOpen(false);
    }    
    return (
        <>
        <button style={styles.box} onClick={() => setModalOpen(true)}>
            <IoIosHome style={styles.icon} />
            <div style={styles.column}>
                <h1 style={styles.boxTitle}> {environment?.name}</h1>
                <h1 style={styles.boxSubtitle}> Ocupante: { environment.occupied ? environment?.occupant : 'Sem Ocupantes'} </h1>
            </div>
            <IoIosRadioButtonOn style={{position:'absolute', top:12, right:12,fontSize: '12px', color: environment.occupied ? '#0D698B' : '#949494'}} />
        </button>
        <Modal
            open={modalOpen}
            onClose={handleClose}>
                {renderModal()}
            </Modal>
        </>
    )
}

EnvironmentBox.propTypes = {  
    environment: PropTypes.object,  
    tab: PropTypes.number,
  
}  
EnvironmentBox.defaultProps = {  
    environment: {},
    tab:1,
}  

export default EnvironmentBox;
