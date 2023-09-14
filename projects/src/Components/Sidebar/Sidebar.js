import React, { useState } from 'react';
import '../../Components/Sidebar/Sidebar.css'
// import './css/sidebar.css';
// import '../css/style.css';
import { Link } from 'react-router-dom';


const Sidebar = ({ onModuleChange }) => {
/* ---------------------------- Administrator MOdule ---------------------*/
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [showUserMasterDataDropdown, setShowUserMasterDataDropdown] = useState(false);
  const [showBPMasterDataDropdown, setShowBPMasterDataDropdown] = useState(false);
  const [showCommodityMasterDataDropdown, setShowCommodityMasterDataDropdown] = useState(false);


/* ------------------------------- Commodity MOdule -----------------------------*/
  const [showComodityDropdown, setShowCommodityDropdown] = useState(false);


/* ------------------------------- FILE UPLOAD MOdule -----------------------------*/
const [showFileUploadDropdown, setShowFileUploadDropdown] = useState(false);

/* ------------------------------- Report MOdule -----------------------------*/
const [showReportDropdown, setShowReportDropdown] = useState(false);
const [showBPReportsDropdown, setBPReportDropdown] = useState(false);

/* ------------------------------- Report MOdule -----------------------------*/
const [showWarehouseDropdown, setShowWarehouseDropdown] = useState(false);



  /* TO Close the other Dropdown if other is clicked*/
  const closeAllDropdowns = () => { 
    setShowUserMasterDataDropdown(false);
    setShowBPMasterDataDropdown(false);
    setShowCommodityMasterDataDropdown(false);
  };

  

  const toggleAdminDropdown = () => {
    setShowAdminDropdown(!showAdminDropdown);
    closeAllDropdowns();

    setShowCommodityDropdown(false);
    setShowFileUploadDropdown(false);
    setShowReportDropdown(false);

    
  };

  const toggleUserMasterDataDropdown = () => {
    closeAllDropdowns();
    setShowUserMasterDataDropdown(!showUserMasterDataDropdown);
  };

  const toggleBPMasterDataDropdown = () => {
    closeAllDropdowns();
    setShowBPMasterDataDropdown(!showBPMasterDataDropdown);
  };

  const toggleCommodityMasterDataDropdown = () => {
    closeAllDropdowns();
    setShowCommodityMasterDataDropdown(!showCommodityMasterDataDropdown);
  };



/* ------------------------------- Commodity MOdule -----------------------------*/

const toggleCommodityDropdown = () => {
  setShowCommodityDropdown(!showComodityDropdown);
  setShowAdminDropdown(false);
  setShowFileUploadDropdown(false);
  setShowReportDropdown(false);

  
};


/* ------------------------------- FILE UPLOAD MOdule -----------------------------*/


const toggleFileUploadDropdown = () => {
  setShowFileUploadDropdown(!showFileUploadDropdown);
  setShowAdminDropdown(false);
  setShowCommodityDropdown(false);
  setShowReportDropdown(false);
  

  
};
/* ------------------------------- WAREHOUSE MOdule -----------------------------*/


const toggleWarehouseDropdown = () => {
  setShowWarehouseDropdown(!showWarehouseDropdown);
  setShowAdminDropdown(false);
  setShowCommodityDropdown(false);
  setShowReportDropdown(false);
  

  
};

/* ------------------------------- Report MOdule -----------------------------*/


const toggleReportDropdown = () => {
  setShowReportDropdown(!showReportDropdown);
  setShowAdminDropdown(false);
  setShowCommodityDropdown(false);
  setShowFileUploadDropdown(false);
};

const toggleBPReportDropdown = () => {

  setBPReportDropdown(!showBPReportsDropdown);
};



  return (
    <div className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="header">
        <img src="path_to_your_image.jpg" alt="Logo" />
        <div className="welcome">
          <p>Welcome back!</p>
          <i className="settings-icon">Settings Icon</i>
        </div>
      </div>
      <ul className="menu">
      
        <li className='module' ><Link className="nav-link" to={'/Dashboard'}><i className="fa-light fa-grid-2" style={{color: "#ffffff;"}}></i> Dashboard</Link></li>
        <li className='module' onClick={toggleAdminDropdown}>Administrator</li>
              <ul className={`dropdown ${showAdminDropdown ? 'expanded' : ''}`}>

                    <li className='submodule' onClick={toggleUserMasterDataDropdown}>User Master Data</li>
                    <ul className={`sub-dropdown ${showUserMasterDataDropdown ? 'expanded' : ''}`}>
                        <Link className="nav-link" to={'/MasterList'}>
                            <li className='nest-submodule'>MasterList</li>
                        </Link>
                      
                        <Link className="nav-link" to={'/Userrole'}>
                            <li className='nest-submodule'>User Role</li>
                        </Link>
                        {/* <li className='nest-submodule'>MasterList</li>
                        <li className='nest-submodule'>User Role</li> */}
                    </ul>
                          {/* ----------------------BREAK--------------------------*/}

                    <li className='submodule' onClick={toggleBPMasterDataDropdown}>BP Master Data</li>
                    <ul className={`sub-dropdown ${showBPMasterDataDropdown ? 'expanded' : ''}`}>
                    <Link className="nav-link" to={'/BPCustomer'}>
                            <li className='nest-submodule'>Customer</li>
                        </Link>
                      
                        <Link className="nav-link" to={'/BPSupplier'}>
                            <li className='nest-submodule'>Supplier</li>
                        </Link>                    </ul>

                          {/* ----------------------BREAK--------------------------*/}

                    <li  className='submodule' onClick={toggleCommodityMasterDataDropdown}>Commodity Settings</li>
                    <ul className={`sub-dropdown ${showCommodityMasterDataDropdown ? 'expanded' : ''}`}>
                    <Link className="nav-link" to={'/CommodityCategory'}>
                            <li className='nest-submodule'>Categories</li>
                        </Link>
                     
                        <Link className="nav-link" to={'/CommoditySubCategory'}>
                            <li className='nest-submodule'>Sub Categories</li>
                        </Link>

                    </ul>
              </ul> {/* END of className={`dropdown ${showAdminDropdown ? 'expanded' : ''} */}



        <li className='module' onClick={toggleCommodityDropdown}>Commodities</li>
              <ul className={`dropdown ${showComodityDropdown ? 'expanded' : ''}`}>

                <Link className="nav-link " to={'/Receiving'}>
                            <li className='submodule'>Receiving (Batch)</li>
                        </Link>

                
                <li className='submodule'>Commodity Sorting</li>
                <li className='submodule'>Categorize</li>
                <li className='submodule'>Press</li>
                <li className='submodule'>Shredding </li>
                <li className='submodule'>Grinding</li>
                <li className='submodule'>Pelletizing</li>
                
              </ul> {/* END of className={`dropdown ${toggleCommodityDropdown ? 'expanded' : ''} */}


        <li className='module'>Inventory</li>


        <li className='module' onClick={toggleFileUploadDropdown}>File Upload</li>
              <ul className={`dropdown ${showFileUploadDropdown ? 'expanded' : ''}`}>

                <li className='submodule'>Upload Master Data</li>
                <li className='submodule'>Commodity Data Update</li>
                
                
              </ul> {/* END of className={`dropdown ${toggleFileUploadDropdown ? 'expanded' : ''} */}

        <li className='module'   onClick={toggleWarehouseDropdown}>Warehouse</li>
              <ul className={`dropdown ${showWarehouseDropdown ? 'expanded' : ''}`}>

                <li className='submodule'>Branch List</li>
                <li className='submodule'>Warehouse List</li>
                </ul> {/* END of className={`dropdown ${toggleWarehouseDropdown ? 'expanded' : ''} */}

        <li className='module' >Transfer History</li>


        <li className='module' onClick={toggleReportDropdown}>Report</li>
        <ul className={`dropdown ${showReportDropdown ? 'expanded' : ''}`}>
                <li className='submodule' onClick={toggleBPReportDropdown}>BP Reports</li>
                    <ul className={`sub-dropdown ${showBPReportsDropdown ? 'expanded' : ''}`}>
                      <li className='nest-submodule'>Supplier Report</li>
                      <li className='nest-submodule'>Customer Report</li>
                    </ul>
                <li className='submodule'>Custom Billing Report</li>
                <li className='submodule'>Losses Reports</li>
                <li className='submodule'>Inventory Report</li>
                <li className='submodule'>Batch In Reports</li>
                <li className='submodule'>Transfer Out Reports</li>
        </ul> {/* END of className={`dropdown ${toggleReportDropdown ? 'expanded' : ''} */}

      

        <li className='module' ><Link className="nav-link" to={'/Login'}><i className="fa-light fa-grid-2" style={{color: "#ffffff;"}}></i> Logout</Link></li>


      </ul>  {/* END of menu */}
    </div>
  );
};

export default Sidebar;
