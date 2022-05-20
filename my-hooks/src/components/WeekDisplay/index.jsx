import React from 'react';
import PropTypes from 'prop-types';  
import styles from './styles';

function WeekDisplay({days}) {
return (
    <div style={styles.row}> 
     <div style={days[0] ? styles.dayActive : styles.dayInactive}>
        <h1 style={days[0] ? styles.dayActiveText : styles.dayInactiveText}>D</h1>
     </div>
     <div style={days[1] ? styles.dayActive : styles.dayInactive}>
        <h1 style={days[1] ? styles.dayActiveText : styles.dayInactiveText}>S</h1>
     </div>
     <div style={days[2] ? styles.dayActive : styles.dayInactive}>
        <h1 style={days[2] ? styles.dayActiveText : styles.dayInactiveText}>T</h1>
     </div>
     <div style={days[3] ? styles.dayActive : styles.dayInactive}>
        <h1 style={days[3] ? styles.dayActiveText : styles.dayInactiveText}>Q</h1>
     </div>
     <div style={days[4] ? styles.dayActive : styles.dayInactive}>
        <h1 style={days[4] ? styles.dayActiveText : styles.dayInactiveText}>Q</h1>
     </div>
     <div style={days[5] ? styles.dayActive : styles.dayInactive}>
        <h1 style={days[5] ? styles.dayActiveText : styles.dayInactiveText}>S</h1>
     </div>
     <div style={days[6] ? styles.dayActive : styles.dayInactive}>
        <h1 style={days[6] ? styles.dayActiveText : styles.dayInactiveText}>S</h1>
     </div>
    </div>
)
}
WeekDisplay.propTypes = {  
    days: PropTypes.arrayOf(PropTypes.bool),    
}  
WeekDisplay.defaultProps = {  
    days: [false,false,false,false,false,false, false],
}  

export default WeekDisplay;
