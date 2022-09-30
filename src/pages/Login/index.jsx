import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

export default function Login() {
  return (
    <div class="container">
   <div class="row">
      <div class="d-flex justify-content-center align-item-center col-lg-6 col-12">
         <div class="box-auth d-flex justify-content-center align-item-center">
            <div class="d-flex flex-column justify-content-center container">
               <div class="theme-title mb-cs">Sign In</div>

               <Link to="/signup" class="w-100 text-white text-left"> 
                    If you don't have account lucky pool. 
                    <span class="theme-normal-3 mx-1">Sign up now</span>
                </Link>
               
               <form class="form-login">
                  <div class="form-group">
                     <h3 class="theme-normal-1">Email</h3>
                     <input type="email" class="form-control" id="__BVID__70" />
                  </div>
                  <div class="form-group">
                     <h3 class="theme-normal-1">Password</h3>
                     <div class="password">
                        <input type="password" class="form-control" id="__BVID__71" />
                            <button type="button" class="btn btn-none">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAPCAYAAAARZmTlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgBpVQ7boNAEF1+ouUI+AYp0xkKeucE8Q0sV3ya4IpP5XTpQm6QlJGQwhF8g+wNQksDeWNDhNbI4fOamZ19s293ZrQSW4gwDA1N00xZlo2qqk5YlyJHYjMRRZElSdITXKsfb5rmBPPs+362SCRN011d18dbHFzg6LrunnyFTQResIV5GUG9dxzHyPP8c/JL4jj+hjHH8lE+W0XS69gkJBgDXI74gSyav4O/EfY3Krs0zmQjgDoPCdtoMm+XRZIkP+1lzoDwWmbLwHsCZ2AgPoRLGEtFTAyC2Q/gtWuBw6lcNNecXUpmCoSCXcMSDv2C0AE3LqknA2fwvyKDmCHhsb/ped5KVJgxXavJ5ULN92O5NHXUs8kiQRC8tyP7n8AbBELyZzWekqkMbLhnBV77AM62C6idQ38RGpd1a0VRSnZbiMPY9Avrun7Xhq9GmvALOa6QS0plfJEAAAAASUVORK5CYII=" alt="" />
                            </button>
                        </div>
                     
                  </div>
                  
                  <div class="form-group button-submit-login">
                     <div class="row flex-column-reverse flex-sm-row">
                        <div class="d-flex align-items-center my-2 align-items-md-start justify-content-between flex-column col-sm-6 col-12">
                           <h3 class="theme-normal-1">Sign in with</h3>
                           <button type="button" class="btn theme-button-white mt-1 mt-sm-3 btn-secondary">
                              <div class="theme-button-content d-flex justify-content-around align-items-center">
                                <img style={{width: "24px"}} src="/images/metamask.969dc431.svg" alt="" />
                                    <span>METAMASK</span>
                                </div>
                           </button>
                        </div>
                        <div class="d-flex align-items-center my-2 align-items-md-end justify-content-between flex-column-reverse flex-sm-column col-sm-6 col-12">
                           <a href="/auth/forgot" class="">
                              <h3 class="theme-normal-1">Forgot password?</h3>
                           </a>
                           <button type="submit" class="btn theme-button-cyan mb-3 mb-sm-0 mt-sm-3 btn-secondary">
                              <div class="theme-button-content">sign in</div>
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
