import React from 'react';
import PropTypes from 'prop-types';  
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(() => (styles));

function TextInput({placeholder,name,multiline,value,size, rows, onChange, label, type}) 
{

    const classes = useStyles();

    return (
        <div style={styles.area}>
            <h1  style={styles.label}>{label}</h1>
            <TextField
                placeholder={placeholder}
                name={name}
                type={type}
                multiline={multiline}
                value={value}
                size={size}
                variant="outlined"
                onChange={onChange}
                rows={rows}
                InputProps={{
                classes: {
                    root: classes.textField,
                    input: classes.input,
                },
                }}
        />
      </div>
    )
}
TextInput.propTypes = {  
    placeholder: PropTypes.string,
    name: PropTypes.string,
    multiline: PropTypes.bool,
    value: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func, 
    rows: PropTypes.number,
    label: PropTypes.string,
    type: PropTypes.string,
}  
TextInput.defaultProps = {  
    placeholder: 'Insira um texto...',
    name: '',
    multiline: false,
    value: '',
    size: 'small',
    onChange: ()=>{}, 
    rows: 1,
    label: '',
    type:'text'
}  

export default TextInput;
