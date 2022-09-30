import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div class="container">
   <div class="row">
      <div class="d-flex justify-content-center align-item-center col-lg-6 col-12">
         <div class="box-auth d-flex justify-content-center align-item-center">
            <div class="d-flex flex-column justify-content-center container">
               <div class="theme-title mb-cs">Sign Up</div>
               {/* <a href="/auth/resend" class="w-100 text-white text-left mb-4"> 
                Receive registration email again. <span class="theme-normal-3 mx-1">Click here</span></a> */}
               <form class="form-register">
                  <div class="form-group">
                     <h3 class="theme-normal-1">Email</h3>
                     <input type="email" class="form-control" id="__BVID__77" />
                  </div>
                  <div class="form-group">
                     <h3 class="theme-normal-1">Password</h3>
                     <input type="password" class="form-control" id="__BVID__78" />
                  </div>
                  <div class="form-group">
                     <h3 class="theme-normal-1">Re-Password</h3>
                     <input type="password" class="form-control" id="__BVID__79" />
                  </div>
                  <div class="form-group mb-2">
                     <h3 class="theme-normal-1">Sponsor (optional)</h3>
                     <input type="text" class="form-control" id="__BVID__80" />
                  </div>
                  <div class="form-group button-submit-register mt-2">
                     <div class="row">
                        <div class="col-12 mt-4">
                           <Link to="/login" class="d-flex w-100 text-white text-center align-items-baseline justify-content-start flex-wrap">
                              If you already a account lucky pool. 
                              <h3 class="theme-normal-3 mx-1">Sign in now</h3>
                           </Link>
                        </div>
                        <div class="d-flex align-items-start justify-content-between flex-column col-sm-6 col-6"></div>
                        <div class="d-flex align-items-end justify-content-between flex-column col-sm-6 col-12">
                           <button type="submit" class="btn theme-button-cyan btn-secondary">
                              <div class="theme-button-content">sign up</div>
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
      <div class="text-center overflow-hidden col-lg-6 col-12">
        <img src="/images/logo.072d07f3.svg" alt="" class="img-mockup-effect" />
    </div>
   </div>
</div>
  )
}
