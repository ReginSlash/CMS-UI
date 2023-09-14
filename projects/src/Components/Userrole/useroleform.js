import '../../Components/Userrole/useroleform.css';
import React, { useState} from 'react';

import filtericon from '../../icons/filtericon.png';
import searchicon from '../../icons/search.png';
import leftbtn from '../../icons/leftbutton.png';
import rightbtn from '../../icons/rightbutton.png';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select';
import Sidebar from '../Sidebar/Sidebar';

function useroleform() {

  const [Analytic, setAnalytic]=useState(true);
  const [Master, setMaster]=useState(true);
  const [RBAC, setRBAC]=useState(true);
  const [Customeradd, setCustomeradd]=useState(true);
  const [Customerdel, setCustomerdel]=useState(true);
  const [CustomerEdit, setCustomerEdit]=useState(true);
  const [Supplieradd, setSupplieradd]=useState(true);
  const [Supplieredit, setSupplieredit]=useState(true);
  const [Supplierdel, setSupplierdel]=useState(true);
  const [CategoriesAdd, setCategoriesAdd]=useState(true);
  const [Categoriesedit, setCategoriesedit]=useState(true);
  const [Categoriesedel, setCategoriesedel]=useState(true);
  const [BatchListAdd, setBatchListAdd]=useState(true);
  const [Inventoryinterdace, setInventoryinterdace]=useState(true);
  const [Warehouselist, setWarehouselist]=useState(true);
  const [Transferout, setTransferout]=useState(true);
  const [Shredding, setShredding]=useState(true);
  const [SubBranchlogin, setSubBranchlogin]=useState(true); 
  const [SubBranchDashboard, setSubBranchDashboard]=useState(true);
  const [SubBranchBatchList, setSubBranchBatchList]=useState(true);
  const [SubBranchsorting, setSubBranchsorting]=useState(true);
  const [TransferOutInterface, setTransferOutInterface]=useState(true);
  const [ReportInterface, setReportInterface]=useState(true);
  const navigate = useNavigate();
  const  handleChange=()=>{
  }

  
  

  // CANCEL FUNCTION
  function handleCancel(event) {
    swal({
      title: "Are you sure?",
      text: "Do you want to discard record?",
      icon: "info",
      buttons: true,
      dangerMode: true,
  })
  .then(async (willdiscard) => {
      if (willdiscard) {
          try {
              swal("Your record was successfully deleted", {
                  icon: "success",
              }).then(() => {
                   navigate('/MasterList')   
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
                 navigate('/MasterList')   
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
<div class="add-role-Vp5">
< Sidebar/>

  <div class="auto-group-dzsj-2G9">
    <div class="line-1-khw">
    </div>
    <div class="auto-group-khny-GwB">
      <div class="frame-129-mN9">
        <div class="role-based-access-control-rbac-allows-for-users-to-have-different-privileges-which-provides-a-means-to-separate-administration-roles-to-better-align-with-skill-sets-and-responsibilities-6vD">Role-Based Access Control (RBAC) allows for users to have different privileges, which provides a means to separate administration roles to better align with skill sets and responsibilities.</div>
      </div>
      <div class="auto-group-orq9-9Nh">
        <div class="auto-group-qal9-sJh">
          <div class="frame-90-zeD">Role NAME</div>
          <div class="lists-pref-oneline-item-5ff">

                <input class="frame-133-2qo" type='text' placeholder='Administrator'/>
          </div>
        </div>
        <div class="group-188-J2d">
          <div class="frame-91-3W1">Description</div>
          <div class="lists-pref-oneline-item-wLV">
            <input class="frame-133-5xV" type="text" placeholder='Enter Description'/>
          </div>
        </div>
      </div>
      <div class="auto-group-fcsk-NAu">
        <div class="select-all-5r1">Select All</div>
        <div class="unselect-all-khF">Unselect All</div>
      </div>
      <div class="group-23-dFF">
        <div class="auto-group-k2uy-NyX">
          <div class="group-20-7AR">
            <div class="auto-group-sfsx-F1j">
              <div class="master-list-nXT">
                <div class="icon-Jkh">

                 <input class="checkbox-neutral-fLM" type="checkbox" value={Analytic} onChange={()=>handleChange("Analytic")}/>
                  </div>
                <p class="analytic-dashboard-Pn9">Analytic Dashboard</p>  
               </div>
             
              <div class="master-list-LBb">
                <div class="icon-59B">
                  <input class="checkbox-neutral-2KK" type="checkbox" value={Master} onChange={()=>handleChange("Master")}/>
                </div>
                <p class="master-list-AAd">Master list</p>
              </div>
            </div>

        
            <div class="master-list-J1w">
              <div class="icon-eLh">
                <input class="checkbox-neutral-nho" type="checkbox" value={RBAC} onChange={()=>handleChange("RBAC")}/>
              </div>
              <p class="rbac-role-based-access-control-list-vp1">
              RBAC (Role-based Access Control) List
              <br/>
              
              </p>
            </div>
            <div class="auto-group-tim7-FLV">
              <div class="master-list-aNm">
                <div class="icon-7tV">
                <input class="checkbox-neutral-5aR" type="checkbox" value={Customeradd} onChange={()=>handleChange("Customeradd")}/>
                  </div>
                <p class="bp-master-data-customer-add-d69">BP Master Data -  Customer Add</p>
              </div>


              <div class="master-list-9aH">
                <div class="icon-tnm">
                  <input class="checkbox-neutral-FNR" type="checkbox" value={CustomerEdit} onChange={()=>handleChange("CustomerEdit")}/>
                </div>
                <p class="bp-master-data-customer-edit-zL1">BP Master Data -  Customer Edit</p>
              </div>
              <div class="master-list-Xaq">
                <div class="icon-GoK">
                <input class="checkbox-neutral-EVF" type="checkbox" value={Customerdel} onChange={()=>handleChange("Customerdel")}/>
                </div>
                <p class="bp-master-data-customer-delete-ZnR">BP Master Data -  Customer Delete</p>
              </div>
              <div class="master-list-htd">
                <div class="icon-rWd">
                <input class="checkbox-neutral-1uK" type="checkbox" value={Supplieradd} onChange={()=>handleChange("Supplieradd")}/>

                </div>
                <p class="bp-master-data-supplier-add-ZA9">BP Master Data - Supplier Add</p>
              </div>
              <div class="master-list-tiD">
                <div class="icon-EXB">
                <input class="checkbox-neutral-zWM" type="checkbox" value={Supplieredit} onChange={()=>handleChange("Supplieredit")}/>
                </div>
                <p class="bp-master-data-supplier-edit-jTw">BP Master Data - Supplier Edit</p>
              </div>
            </div>
          </div>
          <div class="group-21-qms">
            <div class="auto-group-igtb-ydB">
              <div class="master-list-Wd7">
                <div class="icon-FKo">
                <input class="checkbox-neutral-oMK" type="checkbox" value={Supplierdel} onChange={()=>handleChange("Supplierdel")}/>
                  </div>
                <p class="bp-master-data-supplier-delete-jkm">BP Master Data - Supplier Delete</p>
              </div>
              <div class="master-list-sMB">
                <div class="icon-cJm">
                <input class="checkbox-neutral-ZUu" type="checkbox" value={CategoriesAdd} onChange={()=>handleChange("CategoriesAdd")}/>
                  </div>
                <p class="commodity-settings-categories-add-Hvh">Commodity Settings - Categories Add</p>
              </div>
              <div class="master-list-RX7">
                <div class="icon-ZtD">
                <input class="checkbox-neutral-j21" type="checkbox" value={Categoriesedit} onChange={()=>handleChange("Categoriesedit")}/>
                  </div>
                <p class="commodity-settings-categories-edit-Tih">Commodity Settings - Categories Edit</p>
              </div>
            </div>
            <div class="master-list-PsF">
              <div class="icon-xQZ">
              <input class="checkbox-neutral-7YM" type="checkbox" value={Categoriesedel} onChange={()=>handleChange("Categoriesedel")}/>
              </div>
              <p class="commodity-settings-categories-delete-eoB">Commodity Settings - Categories Delete</p>
            </div>
            <div class="auto-group-hhyv-yaZ">
              <div class="master-list-7wf">
                <div class="icon-FY5">
                <input class="checkbox-neutral-1GM" type="checkbox" value={Categoriesedel} onChange={()=>handleChange("Categoriesedel")}/>
                  </div>

                <p class="commodities-interface-batch-list-add-kUq">Commodities Interface - Batch List Add</p>
              </div>
              <div class="master-list-VSR">
                <div class="icon-RL5">
                <input class="checkbox-neutral-NFK" type="checkbox" value={BatchListAdd} onChange={()=>handleChange("BatchListAdd")}/>

                  <div class="">
                  </div>
                </div>
                <p class="commodities-interface-type-sorting-Jem">Commodities Interface - Type Sorting</p>
              </div>
              <div class="master-list-dww">
                <div class="icon-Zah">
                <input class="checkbox-neutral-hgu" type="checkbox" value={Inventoryinterdace} onChange={()=>handleChange("Inventoryinterdace")}/>
                  </div>
                <p class="inventory-interface-view-SPb">Inventory Interface View</p>
              </div>
              <div class="master-list-AKb">
                <div class="icon-hqK">
                <input class="checkbox-neutral-fGM" type="checkbox" value={Warehouselist} onChange={()=>handleChange("Warehouselist")}/>
                </div>
                <p class="warehouse-master-list-15K">Warehouse master list</p>
              </div>
            </div>
          </div>
          <div class="group-22-jn1">
            <div class="auto-group-uw25-gSM">
              <div class="master-list-DBP">
                <div class="icon-x8y">
                <input class="checkbox-neutral-uK7" type="checkbox" value={TransferOutInterface} onChange={()=>handleChange("TransferOutInterface")}/>
                </div>
                <p class="transfer-out-interface-qyT">Transfer Out Interface</p>
              </div>
              <div class="master-list-z5f">
                <div class="icon-Ktd">
                <input class="checkbox-neutral-gjB" type="checkbox" value={SubBranchlogin} onChange={()=>handleChange("SubBranchlogin")}/>    
                </div>
                <p class="sub-branch-interface-log-in-pqP">Sub Branch interface - Log-in</p>
              </div>
              <div class="master-list-9cm">
                <div class="icon-Hys">
                <input class="checkbox-neutral-Srm" type="checkbox" value={SubBranchDashboard} onChange={()=>handleChange("SubBranchDashboard")}/>    
                </div>
                <p class="sub-branch-interface-dashboard-BZT">Sub Branch interface - Dashboard</p>
              </div>
              <div class="master-list-X7X">
                <div class="icon-fjX">
                <input class="checkbox-neutral-Dm3" type="checkbox" value={SubBranchBatchList} onChange={()=>handleChange("SubBranchBatchList")}/>    
                </div>
                <p class="sub-branch-interface-batch-list-m1s">Sub Branch interface - Batch List</p>
              </div>
            </div>
            <div class="master-list-ViZ">
              <div class="icon-rJD">
              <input class="checkbox-neutral-oz9" type="checkbox" value={SubBranchsorting} onChange={()=>handleChange("SubBranchsorting")}/>    
              </div>
              <p class="sub-branch-interface-type-sorting-Ygq">Sub Branch interface - Type Sorting</p>
            </div>
            <div class="auto-group-w6w5-gY9">
              <div class="master-list-1qK">
                <div class="icon-Zbw">
                <input class="checkbox-neutral-ijj" type="checkbox" value={Shredding} onChange={()=>handleChange("Shredding")}/>    
                </div>
                <p class="sub-branch-interface-shredding-4ob">Sub Branch interface - Shredding</p>
              </div>
              <div class="master-list-QMf">
                <div class="icon-9KF">
                <input class="checkbox-neutral-HgM" type="checkbox" value={TransferOutInterface} onChange={()=>handleChange("TransferOutInterface")}/>    
                </div>
                <p class="transfer-out-interface-dVK">Transfer Out Interface</p>
              </div>
              <div class="master-list-yZB">
                <div class="icon-X4u">
                <input class="checkbox-neutral-H45" type="checkbox" value={ReportInterface} onChange={()=>handleChange("ReportInterface")}/>    
                </div>
                <p class="report-interface-RAH">Report Interface</p>
              </div>
            </div>
          </div>
        </div>
        <div class="auto-group-2pu1-xR7">
          <div class="group-24-HyB">

{/* 
            <Link to="/" className='loginnow-F9K'> 
        </Link> */}

          <buton className='loginnow-F9K' onClick={handleCancel}>Cancel</buton>


          </div>
          <div class="group-23-GaD">
            <div class="loginnow-RCD" onClick={handleSave}>Save</div>
          </div>
        </div>
      </div>
    </div>
    <p class="create-new-role-roK">Create New Role</p>
  </div>
</div>
</div>
    

    );
  }
  
  export default useroleform;