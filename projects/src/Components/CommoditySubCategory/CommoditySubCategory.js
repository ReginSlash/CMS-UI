// import './App.css';
// import './style.css';

import '../../Components/CommoditySubCategory/CommoditySubCategory.css'
import filtericon from '../../icons/filtericon.png';
import searchicon from '../../icons/search.png';
import leftbtn from '../../icons/leftbutton.png';
import rightbtn from '../../icons/rightbutton.png';
import Sidebar from '../Sidebar/Sidebar';
import iconclose from '../../icons/icon-close.png';

import { Link } from 'react-router-dom';
import React from 'react';
import { Switch, switchClasses } from '@mui/base/Switch';


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

import { Input } from '@mui/base/Input';

import { buttonClasses } from '@mui/base/Button';
import Stack from '@mui/material/Stack';

// search input
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';



// Input number
import {
    Unstable_NumberInput as NumberInput,
    numberInputClasses,
  } from '@mui/base/Unstable_NumberInput';



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

  function createData(name, Receiptnumber, Status, Source, ReceiveType,TotalWeight, Loss, DateTime,Action) {
    return { name, Receiptnumber, Status, Source, ReceiveType,TotalWeight,Loss,DateTime,Action };
  }
  
  const rows = [
    createData('PET', 'WHITE', 'Valenzuela Branch', 'Add | Delete', 'WHITE FIRST CLASS','00', '06/20/2023 4:59'),
    createData('PET', 'GREEN', 'ReCyPat Recycle Shop', 'Add | Delete', 'WHITE A','00','06/20/2023 4:59'),
    createData('PET', 'LUMINA', 'Chester and Friends Junkshop', 'Add | Delete', 'WHITE B','00', '06/20/2023 4:59'),
    createData('PET', 'WHITE', 'Nits candle Junkshop', 'Add | Delete', 'LUMINA','00', '06/20/2023 4:59'),
    createData('PET', 'LUMINA', 'Mark Nyi Shop all', 'Supplier', 'WHITE CLASS B','00', '06/20/2023 4:59'),
  ];



// MODAL STYLE
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 1442,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
    
  };


//   INPUT BOX
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return <Input slots={{ input: StyledInputElementtext }} {...props} ref={ref} />;
  });

  function UnstyledInputBasic() {
    return <CustomInput aria-label="Demo input" placeholder="Type something…" />;
  }
  const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };

//   input box style
  
  const StyledInputElementtext = styled('input')(
    ({ theme }) => `

    margin: 0rem 0rem 2.742rem 0.224rem;

    width: 32rem;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );


//   input number
const CustomNumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
      <NumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInputElement,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: <span className="arrow">▴</span>,
          },
          decrementButton: {
            children: <span className="arrow">▾</span>,
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });

  

// BUTTON
  function UnstyledButtonsIntroduction() {
    return (
      <Stack spacing={2} direction="row">
        <CustomButton>Button</CustomButton>
        <CustomButton disabled>Disabled</CustomButton>
      </Stack>
    );
  }
  
  const btnblue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };
  
  const btngrey = {
    100: '#eaeef2',
    300: '#afb8c1',
    900: '#24292f',
  };
  
  const CustomButton = styled(Button)(
    ({ theme }) => `
    // margin: 0rem 0rem 1.571rem 0.003rem;
    box-sizing: border-box;
    width: calc(100% - 0.0028rem);
    height: 4.2rem;
    background-color: #007bff;
    border-radius: 4.9rem;
    flex-shrink: 0;

    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.3rem;
    line-height: 2.5;
    background-color: ${btnblue[500]};
    // padding: 8px 16px;
    // width: 30rem;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? btngrey[900] : btngrey[100]};
  
    &:hover {
      background-color: ${btnblue[600]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${btnblue[700]};
    }
  
    &.${buttonClasses.focusVisible} {
      box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
    `,
  );



  function NumberInputIntroduction() {
    return (
      <CustomNumberInput aria-label="Demo number input" placeholder="Type a number…" />
    );
  }
  
  const inputblue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const inputgrey = {
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

//   input number style
  
  const StyledInputRoot = styled('div')(
    ({ theme }) => `
    
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? inputgrey[300] : inputgrey[900]};
    background: ${theme.palette.mode === 'dark' ? inputgrey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? inputgrey[700] : inputgrey[200]};
    // box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? inputblue[900] : inputblue[100]};
    display: grid;
    grid-template-columns: 1fr 19px;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;

    &.${numberInputClasses.focused} {
      border-color: ${inputblue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? inputblue[600] : blue[200]};
    }
  
    &:hover {
      border-color: ${inputblue[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  
  const StyledInputElement = styled('input')(
    ({ theme }) => `
    margin: 0rem 0rem 2.742rem 0.224rem;

    font-size: 1.5rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 2.5;
    grid-column: 1/2;
    grid-row: 1/3;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 12px;
    outline: 0;
  `,
  );
  

//   button
  const StyledButton = styled('button')(
    ({ theme }) => `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    appearance: none;
    padding: 0;
    width: 19px;
    height: 19px;
    font-family: system-ui, sans-serif;
    font-size: 0.875rem;
    line-height: 1;
    box-sizing: border-box;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 0;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      cursor: pointer;
    }
  
    &.${numberInputClasses.incrementButton} {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  
    &.${numberInputClasses.decrementButton} {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  
    & .arrow {
      transform: translateY(-1px);
    }
  `,
  );






function CommoditySubCategory() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (


    <div class="container">
  <head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>Master list TABLE</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A400%2C600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A500%2C600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700"/>
  <link rel="stylesheet" href="./styles/master-list-table.css"/>
</head>

<div class="master-list-table-Fxu">
  <Sidebar/>
  <div class="auto-group-9feh-SAm">
    <div class="line-1-wdK">
    </div>
   
   
    <div class="auto-group-lfcu-1t5">
      <p class="results-found-x2d">18 results found</p>
      <div class="frame-28-Hah">
        
        <div class="frame-22-mEy">
          <img class='component-16-VRs' src={filtericon} />
          <p class="sort-full-name-DMs">Sort:    Full Name</p>
        </div>
      </div>
    </div>
    <div class="group-17-VqB">
      <p class="master-list-qPF">Commodity Sub-Category</p>
      <div class="frame-17-NPB">
        <div class="group-16-87T">
           
          <Paper class="frame-27-4Wu"
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

        {/* modal */}
        {/* <Link to="/Modalmasterlist" class="frame-26-U6m" >Create Batch</Link> */}


        <div class="frame-26-U6m">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}


      <CustomButton onClick={handleOpen} 
      class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1e6y48t-MuiButtonBase-root-MuiButton-root " tabindex="0" type="button">
        
        Create SubCategory
        <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></CustomButton>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
          TRANSACTION FORM
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

        
          

          <div class="Sub-category">
 
  

 
 
 <div class="group-103-RP7">
   <div class="add-new-user-pop-up-Lky">
     <div class="group-98-HgD">
       <div class="lists-pref-oneline-text-y3F">Add Sub-Category </div>
       <div class="frame-129-pZf">
         <div class="by-adding-a-new-user-you-are-giving-them-permission-to-make-changes-9bw">by adding a new user you are giving them permission to make changes.</div>
       </div>
       <div class="add-new-user">COMMODITY TYPE*</div>

       
           {/* <div class="select-role-M5j">Select role</div>
           <img class="icon-play-GiV" src="./assets/icon-play.png"/> */}

          
           <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Select Commodity" />

        
      
       <div class="add-new-user">CATEGORY NAME</div>
       <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Select Category" />

       <div class="add-new-user">SUB CATEGORY NAME</div>
       <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Enter sub Category" />

       <div class="add-new-user">DESCRIPTION</div>
       <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Enter Description |" />


  
       <div class="lists-pref-oneline-item-cUq">
          
           
       </div>
           <CustomButton >Add Category</CustomButton>
    
     </div>
     <img class="icon-close-mny" src={iconclose}onClick={handleClose}/>
   </div>
 </div>
</div>



          </Typography>
        </Box>
      </Modal>
    </div>


      </div>
    </div>
    
    <div class="date-controls-Mk5">
        {/* button paging */}
    <img class='button-5vy' src={leftbtn} />

      {/* <img class="button-5vy" src="./assets/button-BM3.png"/> */}
      <div class="auto-group-cx3f-ptZ">
        <div class="date-aMw">
          <div class="item-1-VUu">1</div>
          <div class="item-2-d5K">2</div>
          <div class="item-3-mSR">3</div>
        </div>

        <img class='button-iMf' src={rightbtn} />

        {/* <img class="button-iMf" src="./assets/button-mLD.png"/> */}
      </div>
    </div>
    <div class="label-eWD">
      
{/* table */}
<TableContainer class="label-eWD" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
           
          <TableRow >
            {/* <StyledTableCell className='rowlabelparent' >Dessert (100g serving)</StyledTableCell>     */}
            <th class="pos-color-01 pos-1-align" scope="col">Commidity TYpe</th>
            <th class="pos-color-02 pos-2-align" scope="col">Category</th>
            <th class="pos-color-02 pos-2-align" scope="col">Sub Category</th>

            <th class="pos-color-02 pos-2-align" scope="col">Description</th>

            <th class="pos-color-02 pos-2-align" scope="col">Action</th>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Receiptnumber}</StyledTableCell>
              <StyledTableCell align="right">{row.ReceiveType}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              <StyledTableCell align="right">{row.Source}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>     
    </TableContainer>  
    </div>
  </div>
</div>
    </div>
    );
  }
  
  
  export default CommoditySubCategory;
  