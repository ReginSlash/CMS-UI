
import '../../style/userrole.css';
import React, { Fragment, useState } from 'react';
import filtericon from '../../icons/filtericon.png';
import searchicon from '../../icons/search.png';
import leftbtn from '../../icons/leftbutton.png';
import rightbtn from '../../icons/rightbutton.png';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

// search input
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';

// FILTER DROPDOWN
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
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

function userrole() {

// FILTER DROPDOWN
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
  <title>RBAC</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A400%2C600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A500%2C600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"/>
  <link rel="stylesheet" href="./styles/rbac.css"/>
</head>
<div class="rbac-Lf3">
     {/* SIDEBAR */}
  {/* <div class="group-36-sus"> */}
    {/* <div class="rectangle-2-Qeu" Sidebar/> */}
    < Sidebar/>
    
 
  <div class="auto-group-vfsx-hK7">
    <div class="group-17-2MP">
      <p class="user-role-list-L7B">User Role List</p>
      <div class="frame-17-etZ">
        <div class="group-16-Cv5">


          <Paper class="frame-27-x8Z"
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
        
        <Link to="/" className='frame-26-w2R'> Add new role
        </Link>


        
      </div>
    </div>
    <div class="line-1-zFb">
    </div>
    <div class="auto-group-ak4u-jys">
      <div class="auto-group-xhjr-eb3">
        <p class="results-found-VrZ">5 results found</p>
        

        {/* DROPDOWN FILTER */}
        <div class="frame-28-RkD">
        <Dropdown>
      <TriggerButton>
        <FilterIcon />
        <span>&nbsp;&nbsp;</span>
        Sort: Role
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
          {/* <div class="frame-22-ufP">

            <img class='component-16-Uru' src={filtericon} />

            <p class="sort-role-name-cCR">Sort:    Role Name</p> */}
          
        </div>
      </div>
      <div class="label-uBX">
        <div class="frame-7-eeu">
          <p class="role-name-nFK">ROLE NAME</p>
          <img class="component-18-Wh7" src="./assets/component-18-Qpq.png"/>
        </div>
        <div class="frame-8-Ed7">
          <p class="features-yah">FEATURES</p>
          <img class="component-18-iYH" src="./assets/component-18-DvH.png"/>
        </div>
        <div class="frame-9-46M">
          <p class="description-o3w">DESCRIPTION</p>
          <img class="component-18-8ru" src="./assets/component-18-Gid.png"/>
        </div>
        <div class="frame-10-51T">
          <p class="date-created-QpR">DATE CREATED</p>
          <img class="component-18-kdP" src="./assets/component-18-uww.png"/>
        </div>
      </div>
      <div class="frame-6-gmw">
        <div class="frame-11-E2m">Administrator</div>
        <div class="frame-12-8P3">Analytic Dashboard, Master List, RBAC...</div>
        <div class="frame-13-Egy">Supervisor Access Only</div>
        <div class="frame-14-MWh">
          <p class="item-19-06-2023-szq">19/06/2023</p>
          {/* <img class="group-11-Qjs" src="./assets/group-11-AhX.png"/> */}
        </div>
      </div>
      <div class="frame-11-wzh">
        <div class="frame-11-hU5">Warehouse-Admin</div>
        <div class="frame-12-Prh">Analytic Dashboard, Master List, RBAC...</div>
        <div class="frame-13-hsP">Warehouse Branch List</div>
        <div class="frame-14-E6d">
          <p class="item-15-06-2023-ZPo">15/06/2023</p>
          {/* <img class="group-11-tgy" src="./assets/group-11-2QH.png"/> */}
        </div>
      </div>
      <div class="frame-12-dPf">
        <div class="frame-11-Ns3">Super Administrator</div>
        <div class="frame-12-62M">All</div>
        <div class="frame-13-oSZ">IT Department</div>
        <div class="frame-14-vn5">
          <p class="item-12-06-2023-G5F">12/06/2023</p>
          {/* <img class="group-11-CDo" src="./assets/group-11-LLh.png"/> */}
        </div>
      </div>
      <div class="frame-13-hwF">
        <div class="frame-11-Fhs">Supervisor Access</div>
        <div class="frame-12-Mku">Dashboard, Reports, Inventory List...</div>
        <div class="frame-13-49X">IT Department</div>
        <div class="frame-14-mpd">
          <p class="item-11-06-2023-hyB">11/06/2023</p>
          {/* <img class="group-11-q3o" src="./assets/group-11-3BP.png"/> */}
        </div>
      </div>
      <div class="frame-14-ZVb">
        <div class="frame-11-upM">Receiving Access</div>
        <div class="frame-12-Da9">Dashboard, Reports, Inventory List...</div>
        <div class="frame-13-LPs">Receiving Department</div>
        <div class="frame-14-fBF">
          <p class="item-10-06-2023-Q8q">10/06/2023</p>
          {/* <img class="group-11-w8m" src="./assets/group-11-oNZ.png"/> */}
        </div>
      </div>
    </div>
    <div class="line-2-GB3">
    </div>
    <div class="date-controls-QHF">
      <img class="button-Kf7" src={leftbtn}/>
      <div class="auto-group-iwe1-fDB">
        <div class="date-Cyo">
          <div class="item-1-L4R">1</div>
          <div class="item-2-roT">2</div>
          <div class="item-3-c1w">3</div>
        </div>
        <img class="button-9Xf" src={rightbtn}/>
      </div>
      </div>

      </div>
      </div>

      </div>




    );
  }
  
  
  export default userrole;
  