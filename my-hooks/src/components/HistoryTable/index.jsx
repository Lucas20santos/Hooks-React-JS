import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import styles from './styles';

// Simulando dados:

const logs = [
    { 
        id:'0',
        user:'beatriz.lopes@hotmail.com',
        type:'Entrada',
        createdAt:new Date(),
    },
    { 
        id:'1',
        user:'marcio.evaristo@hotmail.com',
        type:'Saída',
        createdAt:new Date(),
    },
    { 
        id:'2',
        user:'beatriz.lopes@hotmail.com',
        type:'Entrada',
        createdAt:new Date(),
    },
    { 
        id:'3',
        user:'geraldo.maia@hotmail.com',
        type:'Entrada',
        createdAt:new Date(),
    },
    { 
        id:'00',
        user:'beatriz.lopes@hotmail.com',
        type:'Entrada',
        createdAt:new Date(),
    },
    { 
        id:'10',
        user:'marcio.evaristo@hotmail.com',
        type:'Saída',
        createdAt:new Date(),
    },
    { 
        id:'20',
        user:'beatriz.lopes@hotmail.com',
        type:'Entrada',
        createdAt:new Date(),
    },
    { 
        id:'30',
        user:'geraldo.maia@hotmail.com',
        type:'Entrada',
        createdAt:new Date(),
    },
]

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0D698B",
    color: "#F2F1E8",
    fontWeight: "bold",
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#E5E5E5',
    height:20,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function HistoryTable() {
  return (
    <TableContainer component={Paper} sx={styles.container}>
      <Table sx={{ maxWidth: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Usuário</StyledTableCell>
            <StyledTableCell align="center" >Tipo</StyledTableCell>
            <StyledTableCell align="center">Data/Hora</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log) => (
            <StyledTableRow key={log.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {log.user}
              </StyledTableCell>
              <StyledTableCell align="center">{log.type}</StyledTableCell>
              <StyledTableCell align="center">{moment(log.createdAt).format('DD/MM/YY HH:mm')}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HistoryTable;
