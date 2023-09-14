// import './App.css';
// import './style.css';

import '../../Components/MasterList/Masterlist.css'
import filtericon from '../../icons/filtericon.png';
import searchicon from '../../icons/search.png';
import iconclose from '../../icons/icon-close.png';
import leftbtn from '../../icons/leftbutton.png';
import rightbtn from '../../icons/rightbutton.png';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import React from 'react';
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

import { Switch, switchClasses } from '@mui/base/Switch';
import swal from 'sweetalert'
import { useNavigate, useParams } from 'react-router-dom'

// search input
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// Menu filter
import PropTypes from 'prop-types';
import { Select, selectClasses } from '@mui/base/Select';
import { Option, optionClasses } from '@mui/base/Option';
import { Popper } from '@mui/base/Popper';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { FilterIcon } from 'lucide-react';

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

// ====================================================================================


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

// ====================================================================================


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

// ====================================================================================


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

// ====================================================================================


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


// ====================================================================================


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


// ====================================================================================


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

// ====================================================================================


// filter dropdown
const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} ref={ref} slots={slots} />;
});

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    listbox: PropTypes.elementType,
    popper: PropTypes.func,
    root: PropTypes.elementType,
  }),
};

const Menublue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const Menugrey = {
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

const MenuButton = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
};

// DROPDOWN CLOSED
const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `

  font-family: Poppins;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 180px;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  text-transform: none;

  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  position: relative;
  box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  
  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `,
);

// DROP DOWN LIST
const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.5rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 180PX;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  text-align: left;

  background: ${theme.palette.mode === 'dark' ? Menugrey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? Menugrey[700] : Menugrey[200]};
  color: ${theme.palette.mode === 'dark' ? Menugrey[300] : Menugrey[900]};
  box-shadow: 0px 2px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };
  `,
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? Menublue[900] : Menublue[100]};
    color: ${theme.palette.mode === 'dark' ? Menublue[100] : Menublue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? Menugrey[800] : Menugrey[100]};
    color: ${theme.palette.mode === 'dark' ? Menugrey[300] : Menugrey[900]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? Menublue[900] : Menublue[100]};
    color: ${theme.palette.mode === 'dark' ? Menublue[100] : Menublue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? Menugrey[700] : Menugrey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? Menugrey[800] : Menugrey[100]};
    color: ${theme.palette.mode === 'dark' ? Menugrey[300] : Menugrey[900]};
  }
  `,
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

// ====================================================================================




function Masterlist() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
    const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };


    const navigate = useNavigate();
 

  
  

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
    <div class="line-2-sWy">
    </div>
    <div class="auto-group-lfcu-1t5">
      <p class="results-found-x2d">18 results found</p>

      {/* FILTER BUTTON DROPDOWN ==================================================== */}
      <div class="frame-28-Hah1" >
       
      <IconButton  sx={{ p: '12px' }}>
        <FilterIcon />
      </IconButton>
      <CustomSelect  defaultValue={10} placeholder="Select Fullname" >
         
      <StyledOption value={10}>Filter</StyledOption>
      <StyledOption value={20}>Regin Legaspi</StyledOption>
      <StyledOption value={30}>Patrick Otin</StyledOption>
      <StyledOption value={30}>Ci Cy</StyledOption>
       </CustomSelect>
       </div>
        {/* <div class="frame-22-mEy">
          <img class='component-16-VRs' src={filtericon} />
          <p class="sort-full-name-DMs">Sort:    Full Name</p>
        </div> */}
     

    </div>
    <div class="group-17-VqB">
      <p class="master-list-qPF">Master List</p>
      <div class="frame-17-NPB">
        <div class="group-16-87T">
          
        {/* SEARCH BAR */}
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
    <div>
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
          <div class="add-user-fcd1">
 
  

 
 
  <div class="group-103-RP7">
    <div class="add-new-user-pop-up-Lky">
      <div class="group-98-HgD">
        <div class="lists-pref-oneline-text-y3F">Add new user </div>
        <div class="frame-129-pZf">
          <div class="by-adding-a-new-user-you-are-giving-them-permission-to-make-changes-9bw">by adding a new user you are giving them permission to make changes.</div>
        </div>
        <div class="add-new-user">Role</div>

        
            {/* <div class="select-role-M5j">Select role</div>
            <img class="icon-play-GiV" src="./assets/icon-play.png"/> */}

           
            <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Select Role" />

         
       
        <div class="add-new-user">FULL NAME</div>
        <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Full Name" />

        <div class="add-new-user">Email</div>
        <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Enter Email Address" />

        <div class="add-new-user">password</div>
        <CustomInput class="frame-133-DVK" aria-label="Demo input" placeholder="Enter Password" type="Password" />

        <div class="lists-pref-oneline-item-cUq">
            <div >
            <Switch
        slots={{
          root: Root,
        }}
        {...label}
      />
            </div>
            
          <div class="user-status-7K7">User status</div>
        </div>
            <CustomButton onClick={handleSave} >Add User</CustomButton>
     
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
    </div>
    <div class="frame-6-jYV">
      <div class="frame-11-TUV">Nikka Hill</div>
      <div class="frame-12-9s7">trungkienspktnd@gamail.com</div>
      <div class="frame-13-fKf">Active</div>
      <div class="frame-14-Zvq">
        <p class="warehouse-ty7">Warehouse</p>
        <img class="group-11-qNZ" src="./assets/group-11-CyX.png"/>
      </div>
    </div>
    <div class="frame-12-xxy">
      <div class="frame-11-trd">Regin Emblem</div>
      <div class="frame-12-c1w">tienlapspktnd@gmail.com</div>
      <div class="frame-13-iam">Active</div>
      <div class="frame-14-EZ7">
        <p class="administrator-aN5">Administrator</p>
        <img class="group-11-iDP" src="./assets/group-11-28h.png"/>
      </div>
    </div>
    <div class="frame-14-eMw">
      <div class="frame-11-xtR">Patrick Nits</div>
      <div class="frame-12-5CM">manhhachkt08@gmail.com</div>
      <div class="frame-13-zKK">Active</div>
      <div class="frame-14-hjX">
        <p class="marketer-Sh7">Marketer</p>
        <img class="group-11-Nqf" src="./assets/group-11-fLd.png"/>
      </div>
    </div>
    <div class="frame-16-iPj">
      <div class="frame-11-3S1">Mark Nguyen</div>
      <div class="frame-12-Ydf">danghoang87hl@gmail.com</div>
      <div class="frame-13-4c1">Active</div>
      <div class="frame-14-Nsb">
        <p class="bot-editor-74V">Bot Editor</p>
        <img class="group-11-SsT" src="./assets/group-11-e5X.png"/>
      </div>
    </div>
    <div class="frame-18-aim">
      <div class="frame-11-WsK">Ryan  Black</div>
      <div class="frame-12-2Ks">ckctm12@gmail.com</div>
      <div class="frame-13-iyP">Active</div>
      <div class="frame-14-2DP">
        <p class="ppc-expert-xcq">PPC Expert</p>
        <img class="group-11-6DF" src="./assets/group-11-Daq.png"/>
      </div>
    </div>
    <div class="frame-11-EKT">
      <div class="frame-11-AU1">Cyrus Manabat</div>
      <div class="frame-12-Ujb">tranthuy.nute@gmail.com</div>
      <div class="frame-13-Pbf">Active</div>
      <div class="frame-14-t2d">
        <p class="administrator-D4u">Administrator</p>
        <img class="group-11-wWh" src="./assets/group-11-r49.png"/>
      </div>
    </div>
    <div class="frame-13-sv9">
      <div class="frame-11-CBj">Chester Go</div>
      <div class="frame-12-73o">thuhang.nute@gmail.com</div>
      <div class="frame-13-RKP">Active</div>
      <div class="frame-14-XtD">
        <p class="user-shB">User</p>
        <img class="group-11-cPs" src="./assets/group-11-Tx5.png"/>
      </div>
    </div>
    <div class="frame-15-kFB">
      <div class="frame-11-sah">Angelo Lowkey</div>
      <div class="frame-12-y7w">vuhaithuongnute@gmail.com</div>
      <div class="frame-13-tEu">Active</div>
      <div class="frame-14-CWV">
        <p class="analytics-admin-jmK">Analytics Admin</p>
        <img class="group-11-fus" src="./assets/group-11-Zaq.png"/>
      </div>
    </div>
    <div class="frame-17-DRb">
      <div class="frame-11-wcV">Marvin McKinney</div>
      <div class="frame-12-TKw">binhan628@gmail.com</div>
      <div class="frame-13-mLd">Active</div>
      <div class="frame-14-gTb">
        <p class="team-editor-1km">Team Editor</p>
        <img class="group-11-xAD" src="./assets/group-11-z4R.png"/>
      </div>
    </div>
    <div class="frame-19-h7o">
      <div class="frame-11-Drq">Erwin Cat</div>
      <div class="frame-12-k65">nvt.isst.nute@gmail.com</div>
      <div class="frame-13-FHj">Active</div>
      <div class="frame-14-kkH">
        <p class="team-owner-tLh">Team Owner</p>
        <img class="group-11-cnV" src="./assets/group-11-HAZ.png"/>
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
      <div class="frame-7-n6d">
     

        <p class="full-name-7eh">FULL NAME</p>
        <img class="component-18-rcH" src="./assets/component-18-Cmw.png"/>
      </div>
      <div class="frame-8-PcD">
        <p class="email-vs3">EMAIL</p>
        <img class="component-18-4yF" src="./assets/component-18-CVf.png"/>
      </div>
      <div class="frame-9-PVj">
        <p class="status-KuB">STATUS</p>
        <img class="component-18-fTF" src="./assets/component-18-HGd.png"/>
      </div>
      <div class="frame-10-Ci5">
        <p class="role-wff">ROLE</p>
        <img class="component-18-5G5" src="./assets/component-18-13X.png"/>
      </div>
    </div>
  </div>
</div>
    </div>
   
    

    );
  }
  
  
  export default Masterlist;
  