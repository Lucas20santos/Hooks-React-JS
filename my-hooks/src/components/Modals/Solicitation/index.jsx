import React, {useState} from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import Dropdown from '../../Dropdown';

const types = 
    [
    {
        id: '0',
        label: 'Permanente',
        text:"A permissão do tipo Permanente permite que o usuário tenha acesso, em qualquer horário, ao ambiente até que o usuário responsável pelo ambiente revogue o acesso."
    },
    {
        id: '1',
        label: 'Provisório',
        text:"A permissão do tipo Provisório permite que o usuário tenha acesso, em qualquer horário, ao ambiente até a data escolhida."
    },
    {
        id: '2',
        label: 'Disciplina',
        text:"A permissão do tipo Disciplina permite que o usuário tenha acesso, apenas nos horários da disciplina, ao ambiente até que o usuário responsável pelo ambiente revogue o acesso."
    },
];

function Solicitation({setModalOpen, solicitation}) {
const [solicitationInfo, setSolicitationInfo] = useState({...solicitation,type:'0'});
const [acceptMode, setAcceptMode] = useState(false);

function renderSolicitationOptions(){
    return(
        <>
        <button style={styles.button} onClick={() => setAcceptMode(true)}  >Aceitar Solicitação</button>
        <button style={styles.buttonRefuse} >Recusar Solicitação</button>
        </>
    )
}

function renderAcceptOptions(){
    return(
        <>
            <h1 style={styles.label}>Tipo:</h1>
                <Dropdown
                    label=""
                    placeholder="Tipo"
                    name="type"
                    options={types}
                    value={solicitationInfo?.type}
                    onChange={(value) => {setSolicitationInfo({...solicitationInfo,type:value.target.value})}}
                />
        </>
    )
}



return (
    <div style={styles.box}> 
        <div style={styles.header}>
            <h1 style={styles.title}>Solicitação de Acesso</h1>
            <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                <IoIosClose style={styles.closeIcon} ></IoIosClose>
            </button>
        </div>
        <div style={styles.content}>
            <div style={styles.row}>
                <div style={styles.column100}>
                    <h1 style={styles.label}>Usuário:</h1>
                    <h1 style={styles.text}>{solicitation?.user}</h1>
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.column}>
                    <h1 style={styles.label}>Ambiente:</h1>
                    <h1 style={styles.text}>{solicitation?.environment}</h1>
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.column100}>
                    <h1 style={styles.label}>Mensagem:</h1>
                    <h1 style={styles.text}>{solicitation?.message} </h1>
                </div>
            </div>
        {acceptMode ? renderAcceptOptions() : renderSolicitationOptions()}
        </div>
    </div>
)
}
Solicitation.propTypes = {  
    solicitation: PropTypes.object,  
    setModalOpen: PropTypes.func,
  
}  
Solicitation.defaultProps = {  
    solicitation: {},
    setModalOpen:()=>{}
}  

export default Solicitation;
