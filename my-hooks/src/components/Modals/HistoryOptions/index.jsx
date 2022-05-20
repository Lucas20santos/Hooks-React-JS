import React, {useState} from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import TextInput from '../../TextInput';

function HistoryOptions({setModalOpen, environment}) {

    const [showOptions, setShowOptions] = useState(true);
    const [password, setPassword] = useState('');

    function renderOptions(){
        return(
            <div style={styles.box}> 
            <div style={styles.header}>
                <h1 style={styles.title}>Mais opções</h1>
                <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                    <IoIosClose style={styles.closeIcon} ></IoIosClose>
                </button>
            </div>
            <div style={styles.content}>
            <button style={styles.button} onClick={()=> setModalOpen(false)}>Baixar Histórico (.csv)</button>
            <button style={styles.buttonRemove} onClick={()=> setShowOptions(false)}>Remover Histórico</button>
            </div>
        </div>
        )
    }
    function renderRemoveHistoryConfirmation(){
        return(
            <div style={styles.box}> 
            <div style={styles.header}>
                <h1 style={styles.title}>Apagar Histórico</h1>
                <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                    <IoIosClose style={styles.closeIcon} ></IoIosClose>
                </button>
            </div>
            <div style={styles.content}>
                <h1 style={styles.explanation}>Tem certeza que deseja apagar o histórico do ambiente <b> {environment.name} </b>?</h1>
                <TextInput
                    label="Senha:"
                    placeholder=""
                    name="password"
                    multiline={false}
                    value={password}
                    size="small"
                    onChange={(value) => {setPassword(value.target.value)}}
                    rows={1}
                    type="password"
         />
                <button style={styles.buttonConfirmRemove} onClick={()=> setModalOpen(false)}>Sim, desejo remover o histórico</button>
            </div>
        </div>
        )
    }

console.log(environment);
if(showOptions) return renderOptions();
return renderRemoveHistoryConfirmation();
}
HistoryOptions.propTypes = {  
    environment: PropTypes.object,  
    setModalOpen: PropTypes.func,
  
}  
HistoryOptions.defaultProps = {  
    environment: {},
    setModalOpen:()=>{}
}  

export default HistoryOptions;
