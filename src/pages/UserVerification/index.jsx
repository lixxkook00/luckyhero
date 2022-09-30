import React from 'react'
import UserNav from '../../components/UserNav'
import './UserVerification.scss'

export default function UserVerification() {
  return (
    <div className="user">
        <UserNav />

        <div class="user-body">
   <div class="container">
      <div class="row">
         <div class="mx-auto col-xl-8 col-12">
            <div class="verifi-info">
               <img alt="" class="" src="/images/logo.072d07f3.svg" />
               <div class="verifi-info-name">
                  <h3> Welcome, makeuptpj </h3>
                  <img src="/images/gFZpOl15FvkdQAAAABJRU5ErkJggg__.png" alt="" />
               </div>
               <p><span>ID: 874908</span><span>Email: makeuptpj@gmail.com</span></p>
               {/* <hr> */}
            </div>
         </div>
      </div>
   </div>
   <div class="container">
      <div class="row verification">
         <div class="mx-auto col-xl-7 col-12">
            <div class="verifi-info-kyc">
               <div class="kyc-heading">
                    <div class="kyc-heading-img">
                        <img src="/images/png_base64_iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6.png" alt="" />
                    </div>
                    <span>Verification (KYC)</span>
               </div>
               <div class="kyc-form">
                  <h5>Passport Number</h5>
                  <input type="text" class="form-control" id="__BVID__206" />
                  <h5 class="mb-4">Passport Image</h5>
                  <div class="kyc-form-content">
                     <p><span class="dot"></span><span class="content">Make sure the image is full information (your information, the information of the origin passport) and clear. </span></p>
                     <p><span class="dot"></span><span class="content"> Make sure the format is jpg, jpeg, png</span></p>
                     <p><span class="dot"></span><span class="content">Please use image up to maximum 2MB size.</span></p>
                  </div>
                  <div class="kyc-form-add-image">
                    <div class="images-show">
                        <img src="/static/img/KYC.035ed776.png" alt="" />
                    </div>
                    <input type="file" aria-label="input-fil" accept=".jpg,.jpeg,.png" class="custom-file-input" />
                  </div>
                  <div class="kyc-form-checkbox">
                    <div class="checkbox-form">
                        <img src="/images/Kb3PgjpCq9WLFAAAAAElFTkSuQmCC.png" alt="" />
                         You agree to our Privacy Policy and Term of Use. 
                    </div>
                    <button type="button" class="btn theme-button-cyan ml-auto mr-0 float-right btn-secondary">
                        <div class="theme-button-content">Update</div>
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    </div>
  )
}
