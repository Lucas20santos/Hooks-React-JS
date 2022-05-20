import React, {useState} from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';
import { IoIosClose } from "react-icons/io";
import Dropdown from '../../../src/components/Dropdown';

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
function ManageAccess({setModalOpen, access}) {

    const [editedAccess,setEditedAccess] = useState({...access, type:'0'});

    let explanation = types.filter((element)=> element.id === editedAccess.type)[0].text;
    return (
        <div style={styles.box}> 
            <div style={styles.header}>
                <h1 style={styles.title}>Editar Acesso</h1>
                <button style={styles.closeButton} onClick={()=> setModalOpen(false)}>
                    <IoIosClose style={styles.closeIcon} ></IoIosClose>
                </button>
            </div>
            <div style={styles.content}>
                <div style={styles.row}>
                    <div style={styles.column}>
                        <h1 style={styles.label}>Usuário:</h1>
                        <h1 style={styles.text}>{editedAccess?.user}</h1>
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={styles.column}>
                        <h1 style={styles.label}>Tipo:</h1>
                        {/* <h1 style={styles.text}>{access?.type}</h1> */}
                        <Dropdown
                            label=""
                            placeholder="Tipo"
                            name="type"
                            options={types}
                            value={editedAccess?.type}
                            onChange={(value) => {setEditedAccess({...editedAccess,type:value.target.value})}}
                        />
                    </div>
                </div>
                <div style={styles.row}>
                    <h1 style={styles.explanation}>{explanation}</h1>
                </div>
            <button style={styles.button} onClick={()=> setModalOpen(false)}>Salvar Alterações</button>
            <button style={styles.button} onClick={()=> setModalOpen(false)}>Remover Acesso</button>
            </div>
        </div>
    )
}
ManageAccess.propTypes = {  
    access: PropTypes.object,  
    setModalOpen: PropTypes.func,
  
}  
ManageAccess.defaultProps = {  
    access: {},
    setModalOpen:()=>{}
}  

export default ManageAccess;
