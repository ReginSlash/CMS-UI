
import '../../Components/BPCustomer/BPCustomer.css';
import filtericon from '../../icons/filtericon.png';
import searchicon from '../../icons/search.png';
import iconclose from '../../icons/icon-close.png';

import leftbtn from '../../icons/leftbutton.png';
import rightbtn from '../../icons/rightbutton.png';
import Sidebar from '../Sidebar/Sidebar';
import React from 'react';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Input } from '@mui/base/Input';

import { buttonClasses } from '@mui/base/Button';
import Stack from '@mui/material/Stack';

import { Switch, switchClasses } from '@mui/base/Switch';
import swal from 'sweetalert'
import { useNavigate, useParams } from 'react-router-dom'


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


const filterblue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const filtergrey = {
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
  background: ${theme.palette.mode === 'dark' ? filtergrey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? filtergrey[700] : filtergrey[200]};
  color: ${theme.palette.mode === 'dark' ? filtergrey[300] : filtergrey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? filtergrey[900] : filtergrey[200]};
  
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
    outline: 3px solid ${theme.palette.mode === 'dark' ? filterblue[600] : filterblue[200]};
    background-color: ${theme.palette.mode === 'dark' ? filtergrey[800] : filtergrey[100]};
    color: ${theme.palette.mode === 'dark' ? filtergrey[300] : filtergrey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? filtergrey[700] : filtergrey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? filtergrey[800] : filtergrey[100]};
    color: ${theme.palette.mode === 'dark' ? filtergrey[300] : filtergrey[900]};
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
    background: ${theme.palette.mode === 'dark' ? filtergrey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? filtergrey[700] : filtergrey[200]};
  color: ${theme.palette.mode === 'dark' ? filtergrey[300] : filtergrey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? filtergrey[800] : filtergrey[50]};
    border-color: ${theme.palette.mode === 'dark' ? filtergrey[600] : filtergrey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? filterblue[500] : filterblue[200]};
  }
  `,
);

// Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1442,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};


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



// save button
const SaveButton = styled(Button)(
  ({ theme }) => `
  // margin: 0rem 0rem 1.571rem 0.003rem;
  box-sizing: border-box;
  width: calc(100% - 0.0028rem);
  height: 4.2rem;
  background-color: #007bff;
  border-radius: 1rem;
  flex-shrink: 0;

  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.3rem;
  line-height: 2.5;
  background-color: ${btnblue[500]};
  // padding: 8px 16px;
  width: 15rem;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? btngrey[900] : btngrey[100]};
  text-transform: none;

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


// ADD USER
const CustomButton = styled(Button)(
  ({ theme }) => `
  // margin: 0rem 0rem 1.571rem 0.003rem;
  box-sizing: border-box;
  width: calc(100% - 0.0028rem);
  height: 4.2rem;
  background-color: #007bff;
  border-radius: 8rem;
  flex-shrink: 0;

  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.3rem;
  line-height: 2.5;
  background-color: ${btnblue[500]};
  // padding: 8px 16px;
  width: 32rem;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  text-transform: none;
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
  font-size: 1.3rem;
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


// toggle button

const toggleblue = {
  500: '#007FFF',
};

const togglegrey = {
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
};

const Root = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
  cursor: pointer;

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    background: ${theme.palette.mode === 'dark' ? togglegrey[600] : togglegrey[400]};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchClasses.thumb} {
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchClasses.focusVisible} .${switchClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchClasses.checked} {
    .${switchClasses.thumb} {
      left: 20px;
      top: 4px;
      background-color: #fff;
    }

    .${switchClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
);









function BPCustomer() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
    const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };


    const navigate = useNavigate();
 

    const createHandleMenuClick = (menuItem) => {
      return () => {
        console.log(`Clicked on ${menuItem}`);
      };
    };
  
  

// SAVE FUNCTION
function handleSave(event) {
  swal({
    title: "Confirmation?",
    text: "Are you sure you want to save?",
    icon: "question",
    buttons: true,
    dangerMode: true,
})
.then(async (willSave) => {
    if (willSave) {
        try {
            swal("Successfully a new role added to organization", {
                icon: "success",
            }).then(() => {
                 navigate('#')   
            });
        } catch (err) {
            console.log(err);
        }
    }
    else {
        swal({
            title: "Cancelled Successfully",
            // text: "User is Safe",
            icon: "error",
        });
    }
});    
} 


  
  return (


    <div class="container">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>Customer list</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A500%2C600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A400%2C600"/>
  <link rel="stylesheet" href="./styles/customer-list.css"/>
</head>
<body>
<div class="customer-list-do7">
  <Sidebar/>
  <div class="auto-group-tgev-4pR">
    <div class="line-1-myj">
    </div>
    <div class="line-2-v5w">
    </div>
    <div class="auto-group-uheh-4C9">
      <p class="results-found-PER">18 results found</p>
      <div class="frame-28-iGh">
      <Dropdown>
      <TriggerButton>
        <FilterIcon />
        <span>&nbsp;&nbsp;</span>
        Filter: Fullname
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
    
        {/* <div class="frame-22-ccy">
          <img class="component-16-kUH" src={filtericon}/>
          <p class="sort-business-t4h">Sort:    Business </p>
        </div> */}
      </div>
    </div>
    <div class="group-17-muB">
      <p class="customer-7CM">CUSTOMER</p>
      <div class="frame-17-SkR">
        <div class="group-16-oay">
            
          <Paper class="frame-27-9eq"
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
        {/* <div class="frame-26-HwP">Add Customer</div> */}



        <Stack spacing={2} direction="row">
      <SaveButton onClick={handleOpen}>Add New User</SaveButton>

      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

{/* MAIN CSS FORM */}
          <div class="add-user-fcd2">
 
  

 
 
  <div class="group-103-RP7">
    <div class="add-new-user-pop-up-Lky">
      <div class="group-98-HgD">
        <div class="lists-pref-oneline-text-y3F">Customer Details</div>
        <div class="frame-129-pZf">
          <div class="by-adding-a-new-user-you-are-giving-them-permission-to-make-changes-9bw">This is where you can add a customer and please
complete all the details.</div>
        </div>


        <div class="add-customerdetails">FULL NAME*</div>

       <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Complete Name" />
       
        <div class="add-customerdetails">BUSINESS NAME</div>
        <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Business Name" />

        <div class="add-customerdetails">EMAIL*</div>
        <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Enter Email Address" />

        <div class="add-customerdetails">PHONE NUMBER</div>
        <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Phone Number" type="Password" />
        <div class="add-customerdetails">COMPLETE ADDRESS*</div>
        <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Complte Address" type="Password" />

        <div class="lists-pref-oneline-item-cUq">
          
            
          <div class="user-status-7K7"></div>
        </div>
            <CustomButton onClick={handleSave} >Add Customer</CustomButton>
     
      </div>
      <img class="icon-close-mny" src={iconclose} onClick={handleClose}/>
    </div>
  </div>
</div>


          </Typography>
        </Box>
      </Modal>
   
      </div>
    </div>
    <div class="frame-6-xXj">
      <div class="frame-11-sub">Nikka Hill</div>
      <div class="frame-12-yhj">Lumeng Junkshop</div>
      <div class="frame-13-6GZ">0997 124 1245</div>
      <div class="frame-14-D6H">
        <p class="item-06-20-2023-k6D">06/20/2023</p>
        <img class="group-11-U2D" src="./assets/group-11-usX.png"/>
      </div>
    </div>
    <div class="frame-12-bsX">
      <div class="frame-11-XWH">Regin Emblem</div>
      <div class="frame-12-qms">ReCyPat Recycle Shop</div>
      <div class="frame-13-9nZ">0995 004 9987</div>
      <div class="frame-14-GcH">
        <p class="item-06-10-2023-CVw">06/10/2023</p>
        <img class="group-11-8eV" src="./assets/group-11-7gD.png"/>
      </div>
    </div>
    <div class="frame-14-H1b">
      <div class="frame-11-Qc1">Patrick Nits</div>
      <div class="frame-12-uof">Nits candle Junkshop</div>
      <div class="frame-13-pvd">0977 451 2003</div>
      <div class="frame-14-MQm">
        <p class="item-06-10-2023-J57">06/10/2023</p>
        <img class="group-11-qKw" src="./assets/group-11-u61.png"/>
      </div>
    </div>
    <div class="frame-16-a2d">
      <div class="frame-11-u4u">Mark Nguyen</div>
      <div class="frame-12-biR">Mark Nyi Shop all</div>
      <div class="frame-13-uj7">0999 898 0021</div>
      <div class="frame-14-qMs">
        <p class="item-06-5-2023-BAq">06/5/2023</p>
        <img class="group-11-WD7" src="./assets/group-11-C2V.png"/>
      </div>
    </div>
    <div class="frame-18-ScZ">
      <div class="frame-11-ycV">Ryan  Black</div>
      <div class="frame-12-5fX">Black Ry Junkshop</div>
      <div class="frame-13-BiZ">0910 200 4445</div>
      <div class="frame-14-HWh">
        <p class="item-06-5-2023-DfF">06/5/2023</p>
        <img class="group-11-YxR" src="./assets/group-11-MLM.png"/>
      </div>
    </div>
    <div class="frame-11-6U9">
      <div class="frame-11-dDB">Cyrus Manabat</div>
      <div class="frame-12-vxy">--</div>
      <div class="frame-13-ePB">0945 123 1101</div>
      <div class="frame-14-AMX">
        <p class="item-06-10-2023-Hww">06/10/2023</p>
        <img class="group-11-8Sm" src="./assets/group-11-tUy.png"/>
      </div>
    </div>
    <div class="frame-13-GYy">
      <div class="frame-11-oJ1">Chester Go</div>
      <div class="frame-12-kMf">Chester and Friends Junkshop</div>
      <div class="frame-13-FZK">0923 741 2014</div>
      <div class="frame-14-mXf">
        <p class="item-06-10-2023-uNy">06/10/2023</p>
        <img class="group-11-e5f" src="./assets/group-11-z8R.png"/>
      </div>
    </div>
    <div class="frame-15-nSm">
      <div class="frame-11-Wdf">Angelo Lowkey</div>
      <div class="frame-12-Rkd">GeloGelo Yes Junkshop</div>
      <div class="frame-13-wU5">0987 555 0001</div>
      <div class="frame-14-fQ5">
        <p class="item-06-9-2023-zSM">06/9/2023</p>
        <img class="frame-11-j93" src="./assets/frame-11-2UZ.png"/>
      </div>
    </div>
    <div class="frame-17-UMX">
      <div class="frame-11-bS9">Marvin McKinney</div>
      <div class="frame-12-uSq">Marvs Junkshop</div>
      <div class="frame-13-RAH">0902 600 2031</div>
      <div class="frame-14-LY9">
        <p class="item-06-5-2023-5Eq">06/5/2023</p>
        <img class="group-11-ogd" src="./assets/group-11-CnM.png"/>
      </div>
    </div>
    <div class="frame-19-9Vb">
      <div class="frame-11-H61">Erwin Cat</div>
      <div class="frame-12-noT">Erwin Catfood shop and Recyle</div>
      <div class="frame-13-hfX">0932 555 0451</div>
      <div class="frame-14-2Su">
        <p class="item-05-5-2023-MVB">05/5/2023</p>
        <img class="group-11-gnM" src="./assets/group-11-oUu.png"/>
      </div>
    </div>
    <div class="date-controls-dBo">
      <img class="button-xUy" src={leftbtn}/>
      <div class="auto-group-wvum-hBf">
        <div class="date-2zd">
          <div class="item-1-x7b">1</div>
          <div class="item-2-gpH">2</div>
          <div class="item-3-qBP">3</div>
        </div>
        <img class="button-AjT" src={rightbtn}/>
      </div>
    </div>
    <div class="label-78u">
      <div class="frame-7-dsw">
        <p class="full-name-ygu">FULL NAME</p>
        <img class="component-18-Wgq" src="./assets/component-18-gGh.png"/>
      </div>
      <div class="frame-8-3Rs">
        <p class="business-name-Nj3">BUSINESS NAME</p>
        <img class="component-18-Jch" src="./assets/component-18-K2y.png"/>
      </div>
      <div class="frame-9-34V">
        <p class="phone-number-NcZ">PHONE NUMBER</p>
        <img class="component-18-WTs" src="./assets/component-18-rM7.png"/>
      </div>
      <div class="frame-10-FAZ">
        <p class="date-added-BK7">DATE ADDED</p>
        <img class="component-18-KAR" src="./assets/component-18-R9K.png"/>
      </div>
    </div>
  </div>
</div>
</body>

</div>
  );
}

export default BPCustomer;
