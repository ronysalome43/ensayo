import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {Button } from '@material-ui/core';

import crobat from './imagenes/crobat.png';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
 
function createData2(name,Descripcion, costo) {
  return {name,Descripcion, costo };
}
const rows = [
  createData('Inicial', '3 años',20),
  createData('Inicial', '4 años', 20),
  createData('Inicial', '5 años', 20),
  createData('Primaria', 'Primero de primaria', 30),
  createData('Primaria', 'Segundo de primaria', 30),
  createData('Primaria', 'Tercero de primaria', 30),
  createData('Primaria', 'Cuarto de primaria', 30),
  createData('Primaria', 'Quinto de primaria', 30),
  createData('Primaria', 'Sexto de primaria', 30),
  createData('Secundaria', 'Primero de Secundaria', 40),
  createData('Secundaria', 'Segundo de Secundaria', 40),
  createData('Secundaria', 'Tercero de Secundaria', 40),
  createData('Secundaria', 'Cuarto de Secundaria', 40),
  createData('Secundaria', 'Quinto de Secundaria', 40),
];
const rows2=[ 
  createData2('Inicial',200),
  createData2('Primaria',300),
  createData2('Secundaria',350),
  createData2('Uniforme completo inicial',100),
  createData2('Uniforme completo Primaria',120),
  createData2('Uniforme completo Secundaria',150),
]
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function App() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);

  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <header className="App-header">
    <List className='lista' 
      sx={{ width: '100%', bgcolor: 'background.paper' }}//se puede aumentar el MAXWIDTH
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" Align="center">
          Tallentus SAC
        </ListSubheader>
      }
    > 
    <h2 >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Requisitos y pasos a seguir" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div>
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={2} >
            <Grid item xs={4}>
              <Item><Item ><div><img src={crobat} style={{width:150, height:150}}/></div></Item></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><Item><div><img src={crobat} style={{width:150, height:150}}/></div></Item></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><Item><div><img src={crobat} style={{width:150, height:150}}/></div></Item></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><Button variant="outlined"
                color="secondary"
                startIcon={<PictureAsPdfIcon
                fontSize='sm'/>}>
                Alumnos nuevos
              </Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><Button variant="outlined"
                color="secondary"
                startIcon={<PictureAsPdfIcon/>}>
                Alumnos traslado
            </Button></Item>
            
            </Grid>
            <Grid item xs={4}>
              <Item><Button variant="outlined"
                  color="secondary"
                  startIcon={<PictureAsPdfIcon/>}>
                  Alumnos regulares
              </Button></Item>
            </Grid>
          </Grid>
        </Box>
        </div>

      </Collapse>
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Vacantes y costos" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <h3 align="center">Resumen de vacantes</h3>
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 ,width:'100%' }} aria-label="simple table" >
        <TableHead >
          <TableRow>
            <StyledTableCell align="center">NIVEL</StyledTableCell>
            <StyledTableCell align="center">GRADO</StyledTableCell>
            <StyledTableCell align="center">VACANTES DISPONIBLES</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h3 align="center">Costos de matrícula</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Descripción</StyledTableCell>
          <StyledTableCell align="center">Costo(S/.)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row2) => (
            <TableRow
              key={row2.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row2.name}
              </TableCell>
              <TableCell align="center">{row2.Descripcion}</TableCell>
              <TableCell align="center">{row2.costo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
      </Collapse>
      </h2>
      <h2>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <HelpOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Preguntas frecuentes" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <div>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="¿Pregunta frecuente 1?" />
          </ListItemButton>
          </div>
          <div>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="¿Pregunta frecuente 2?" />
          </ListItemButton>
          </div>
          <div>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="¿Pregunta frecuente 3?" />
          </ListItemButton>
          </div>
          <div>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="¿Pregunta frecuente 4?" />
          </ListItemButton>
          </div>
        </List>
      </Collapse>
      </h2>
      <div Align="center">
      <Button color="secondary" variant="contained" >
            Iniciar matrícula
      </Button>
      </div>
    </List>
    </header>
  );
}