import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Roleform from './Components/Userrole/useroleform';
import Dashboard from './Components/Dashboard/Dashboard';
import Userrole from './Components/Userrole/userrole';
import MasterList from './Components/MasterList/Masterlist';
import BPCustomer from './Components/BPCustomer/BPCustomer';
import BPSupplier from './Components/BPSupplier/BPSupplier';
import CommodityCategory from './Components/CommodityCategory/CommodityCategory';
import CommoditySubCategory from './Components/CommoditySubCategory/CommoditySubCategory';
import Receiving from './Components/Commodities/Receiving';
import Login from './Components/login/login';
import ForgotPassword from './Components/ForgotPassword/FGPassword';
import OTP from './Components/ForgotPassword/OTP';
import ConfirmPassword from './Components/ForgotPassword/ConfirmPassword';


// test



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Roleform />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Userrole" element={<Userrole />} />
        <Route path="/MasterList" element={<MasterList />} />
        <Route path="/BPCustomer" element={<BPCustomer />} />
        <Route path="/BPSupplier" element={<BPSupplier />} />
        <Route path="/CommodityCategory" element={<CommodityCategory />} />
        <Route path="/CommoditySubCategory" element={<CommoditySubCategory />} />
        <Route path="/Receiving" element={<Receiving />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />





  
      </Routes>
    </BrowserRouter>
  );
}

export default App;