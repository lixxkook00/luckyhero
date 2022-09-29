import React from 'react'
import './Member.scss'

export default function Member() {
  return (
    <div className="container">
   <div className="row member-content">
      <div className="col-md-6 col-lg-6 col-xl-4">
         <div className="member-content-item-countdown">
            <h3>Commission Status</h3>
            <span className="date">
               <span className="text-danger"> 0days </span><span> 21:29:33 </span>
            </span>
            <div className="line"></div>
         </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-4">
         <div className="member-content-item">
            <h3>Commission</h3>
            <div className="item-text custom-margin">
               <p>Total Direct</p>
               <p><span>0</span><span>HBG</span></p>
            </div>
            <div className="item-text custom-margin">
               <p>Total Claim</p>
               <p><span>0</span><span>HBG</span></p>
            </div>
            <div className="item-text">
               <p>Total Income</p>
               <p><span>0</span><span>HBG</span></p>
            </div>
         </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-4">
         <div className="member-content-item">
            <h3>Referral Link</h3>
            <div className="item-text">
               <p>Total Member</p>
               <p>0 Members</p>
            </div>
            <div className="item-text">
               <p>Ref Link</p>
            </div>
            <div className="item-text">
                <input type="text" aria-label="member-ref" />
                <button type="button" className="btn text btn-secondary">
                    <img src="./images/5_KPnlXvsBUfEcL2b4a_AnJunaJpQEF5EH_DPcglVhtWeW5pEFgXpmxysbERvvyZuL4xL457i7zEt0OXezaNShvOHMOvaZhCP6uJ.png" alt="" />
                </button>
            </div>
         </div>
      </div>
   </div>
   <div className="row member-table">
      <div className="col-xl-12">
         <div className="search-table">
            <input type="text" aria-label="email" placeholder="Email" className="email" />
            <input type="text" aria-label="Ref" placeholder="Ref Level" className="ref" />
            <input type="text" aria-label="Address" placeholder="Address" className="address" />
            <div className="group-btn">
                <button type="button" className="btn theme-button-cyan mx-2 align-items-center btn-secondary">
                    <div className="theme-button-content h-100 d-flex align-items-center justify-content-center"> Search </div>
                </button>
                <button type="button" className="btn btn-refresh mx-2 btn-secondary">
                    <img src="./images/refresh.ac2a8bda.svg" alt="" />

                </button>   
            </div>
         </div>
      </div>
      <div className="col-xl-12">
         <div className="table-responsive">
            <table role="table" aria-busy="false" aria-colcount="9" className="table b-table table-striped" id="__BVID__75">
               
               <thead role="rowgroup" className="customer-header">
                  
                  <tr role="row" className="">
                     <th role="columnheader" scope="col" aria-colindex="1" className="text-center">
                        <div>User ID</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="2" className="text-center">
                        <div>Email</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="3" className="text-center">
                        <div>Address</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="4" className="text-center">
                        <div>Ref</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="5" className="text-center">
                        <div>Deposit HBG</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="6" className="text-center">
                        <div>Deposit USDT</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="7" className="text-center">
                        <div>Commission</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="8" className="text-center">
                        <div>Claimed</div>
                     </th>
                     <th role="columnheader" scope="col" aria-colindex="9" className="text-center custom-width">
                        <div>Register Date</div>
                     </th>
                  </tr>
               </thead>
               <tbody role="rowgroup">
                  
                  <tr role="row" className="b-table-empty-row">
                     <td colSpan="9" role="cell" className="">
                        <div role="alert" aria-live="polite">
                           <h4 className="text-center p-3">No Data</h4>
                        </div>
                     </td>
                  </tr>
                  
               </tbody>
               
            </table>
         </div>
         <div className="member-paginate">
            <div className="paginate">
               
            </div>
         </div>
      </div>
   </div>
</div>
  )
}
