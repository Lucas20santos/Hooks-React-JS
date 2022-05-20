import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';  
import styles from './styles';

// const ITEM_HEIGHT = 36;
// const ITEM_PADDING_TOP = 4;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width:280,
//       borderRadius: 5,
//       borderColor: '#757575',
//       opacity: 1,
//       borderWidth: 1,
//     },
//   },
// };



function Dropdown({value, onChange, options}) {

  return (
    <div>
      <FormControl sx={styles.textField}>
        <Select
          labelId="dropdown"
          id="dropdown"
          value={value}
          onChange={onChange}
        //   MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.id}
              style={styles.input}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

Dropdown.propTypes = {  
    value: PropTypes.string,
    onChange: PropTypes.func, 
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        text: PropTypes.string,
      }))
}  
Dropdown.defaultProps = {  
    value: '',
    onChange: ()=>{}, 
    type:'text',
    options:[],
} 

export default Dropdown;