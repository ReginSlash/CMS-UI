
import '../../Components/BPSupplier/BPSupplier.css'
import filtericon from '../../icons/filtericon.png';
import searchicon from '../../icons/search.png';
import leftbtn from '../../icons/leftbutton.png';
import rightbtn from '../../icons/rightbutton.png';
// import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { render } from '@testing-library/react';
import React, { Component } from "react";

import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// search input
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// FILTER DROPDOWN
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { FilterIcon } from 'lucide-react';


const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

// open dropdown


const StyledListbox = styled('ul')(
  ({ theme }) => `
  width:175px;
  font-size: 1.6rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  
  z-index: 1;
  `,
);


const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
   

  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

// closed dropdown
const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  width:175px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.5rem;
  // font-weight: 600;
  box-sizing: border-box;
  // min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;

  display: flex;
  align-items: flex-start;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);

// =====================================================================

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
}


// DATA TABLE
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

function createData(name, SupplierName, SupplierAddress, ContactNumber, DateCreated,Action) {
  return { name, SupplierName, SupplierAddress, ContactNumber, DateCreated,Action };
}

const rows = [
  createData('Lumeng Junkshop', 'Dalandanan Valenzuela City 04', '0997 124 1245', 'Bra06/20/2023nch', '-','00', '06/20/2023 4:59'),
  createData('Cyrus Manabat', 'Quezonn City, loob Manila', '0945 123 1101', 'Supplier', '53 KGS','00','06/20/2023 4:59'),
  createData('ReCyPat Recycle Shop', 'Sta rita Marilao, 41 Brg Iba', 'Chester and Friends Junkshop', 'Supplier', '105 KGS','00', '06/20/2023 4:59'),
  createData('Chester and Friends Junkshop', 'Sta quiteria, T de leon', 'Nits candle Junkshop', 'Supplier', '45 KGS','00', '06/20/2023 4:59'),
  createData('Nits candle Junkshop', 'Brg Lawa Meycauayan Bul.', 'Mark Nyi Shop all', 'Supplier', '154 KGS','00', '06/20/2023 4:59'),
];


class BPSupplier extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };



  
  render() {
    const { isOpen } = this.state;

    const createHandleMenuClick = (menuItem) => {
      return () => {
        console.log(`Clicked on ${menuItem}`);
      };
    };
  

  return (


    <div class="container">



<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>Supplier table</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A500%2C600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A400%2C600"/>
  <link rel="stylesheet" href="./styles/supplier-table.css"/>
</head>
<body>
<div class="supplier-table-EhF">
  <Sidebar/>
  
  <div class="auto-group-b7uk-sw7">
    <div class="line-1-QRF">
    </div>
    <div class="line-2-8s3">
    </div>
    <div class="auto-group-tgjt-t5X">
      <div class="auto-group-gwrf-ZSZ">
        <p class="results-found-tUq">18 results found</p>

{/* filter dorpdown */}
            {/* DROPDOWN FILTER */}
        <div class="frame-28-2L9">
        <Dropdown>
      <TriggerButton>
        <FilterIcon />
        <span>&nbsp;&nbsp;</span>
        Sort: Supplier
        </TriggerButton>
      <Menu slots={{ listbox: StyledListbox }}>
        <StyledMenuItem onClick={createHandleMenuClick('Administrator')}>
        Administrator
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Warehouse-Admin')}>
        Warehouse-Admin        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Super Administrator')}>
        Super Administrator
        </StyledMenuItem>
      </Menu>
    </Dropdown>

          {/* <div class="frame-22-7sP">
          <div className={`dropdown-container  ${isOpen ? "open" : ""}`}>
          <button onClick={this.toggleMenu} className="dropdown-button sort-supplier-C89">
          <img class="component-16-fP7" src={filtericon}/>
            {isOpen ? "Close:  Supplier     " : "Sort:    Supplier     "}
           
          </button>
          <ul className="dropdown-menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        
            <img class="component-16-fP7" src={filtericon}/>
            <p class="sort-supplier-C89">Sort:    SUPPLIER </p>
            </div> */}

          
        </div>
      </div>
      <div class="label-tWm">
        
      <TableContainer class="label-tWm" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
           
          <TableRow >
            {/* <StyledTableCell className='rowlabelparent' >Dessert (100g serving)</StyledTableCell>     */}
            <th class="pos-color-01 pos-1-align" scope="col">Supplier Name</th>
            <th class="pos-color-02 pos-2-align" scope="col">Address</th>
            <th class="pos-color-02 pos-2-align" scope="col">Contact Number</th>
            <th class="pos-color-02 pos-2-align" scope="col">Date Created</th>
            <th class="pos-color-02 pos-2-align" scope="col">Action</th>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.SupplierName}</StyledTableCell>
              <StyledTableCell align="right">{row.SupplierAddress}</StyledTableCell>
              <StyledTableCell align="right">{row.ContactNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.DateCreated}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>     
    </TableContainer>  
       
        
      </div>
     
     
      
     
      
      
     
    </div>

    
    <div class="group-17-VEq">
      <p class="supplier-2Vf">SUPPLIER</p>
      <div class="frame-17-xu7">
        <div class="group-16-XSR">
            
            
            
          <Paper class="frame-27-GQ1"
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Username"
        inputProps={{ 'aria-label': 'search google maps' }}  
        style={{ fontSize: '15px' }}/>
      <IconButton type="button" sx={{ p: '12px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" /> */}
        </Paper> 


        </div>
        <div class="frame-26-rQ9">Add Supplier</div>
      </div>
    </div>
    <div class="date-controls-R5s">
      <img class="button-wpu" src="./assets/button-f7X.png"/>
      <div class="auto-group-yzch-siZ">
        <div class="date-2LZ">
          <div class="item-1-Ls3">1</div>
          <div class="item-2-fuK">2</div>
          <div class="item-3-Qru">3</div>
        </div>
        <img class="button-xdX" src="./assets/button-hTo.png"/>
      </div>
    </div>
  </div>
</div>
</body>



    </div>
);
  }
}

export default BPSupplier;
