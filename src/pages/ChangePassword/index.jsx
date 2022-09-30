import React from 'react'
import UserNav from '../../components/UserNav'
import './ChangePassword.scss'

export default function ChangePassword() {
  return (
    <div className="user">
        <UserNav activeTab={"change-password"}/>
        
        <div class="user-body">
            <div class="container">
                <div class="row">
                    <div class="mx-auto col-xl-8 col-12">
                        <div class="verifi-info">
                        <img alt="" class="" src="/images/logo.072d07f3.svg" />
                        <div class="verifi-info-name">
                            <h3> Welcome, makeuptpj </h3>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgBtVXRcdpAEH17wnx5EkpQB8Yd4AogFZgOYv05xsTKYDv+gxJCBYkrgBJIBVEJ/siXB26zdyedhISkiRnvDKPjdt/bPd3uE/CORk1Ovp0NQMFQokbyNyx4NmAlv+2S7qfr/yLnm4c+ApqLd4B2S/D6ekFPcdJKzl+fPgN6Udh6kd0lGFKpTkAqFFQfUEPZD3MgIprdLGrJS8QJ9C6SY/9CjfH0YSzJ7nySUgJPztffQ3T5jydWctQ4PypfxT2cBgP83a1pEb/4/VhwGiufYMvn9DjZmKXyZXRNwGFiax9OYqjgJ07lWTx6/EXicSErF38id5WaJbdd4Y/G3yrEjqZnH4H6WPGYBHobOTwGji+rnDqXWdU0m/zAGyy9m/R1qVGBnPv2qfkZR5l0lWWlYU4OOHLCBscYe3xYJE+d0sdHke/j98nNgNQDXVWaf9fGlPCddDex3cLp6zmEm92a4Vigycjji32u3UUquqzDmenlu8eVtNkItaaGLgkVyLXORrxXDxZZkB62g3QouZGCbFZ226Unt7JJWLvkwZyv47AKTyfQTHCZ2EiH1Rjnz2Q4v1DiKF2JxnRXlQRmxPXuk0jDeYW4W9AWkQ5PuRc4vb+SCua+QiMFDRNrX6HqzFtVsSZBmgRyJ9KCmZ6DzgQ5Fl8vB7bouY8ry2iTsdxVwBHFk8p0t39DVTCW5RmwNwOJeJ9NlzV9Q9/V/gFZpOl15FvkdQAAAABJRU5ErkJggg==" alt="" />
                        </div>
                        <p><span>ID: 874908</span><span>Email: makeuptpj@gmail.com</span></p>
                        <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row change">
                    <div class="mx-auto col-xl-7 col-12">
                        <div class="change-info-kyc">
                        <div class="change-heading">
                            <div class="change-heading-img">
                                <img src="/images/QzM22ZSOuILt8Q0Cavhgo4dhn4Pa1ttfeAsf2LekDqlx4nlu2f4hpBQS7mwVn8ti2q1yxCQizPPhqTV41gEpMA2KVtRAvL5EO3we.png" alt="" /></div>
                            <span>Change password</span>
                        </div>
                        <div class="change-form">
                            <div class="form">
                                <h5 class="pl-2">Current password</h5>
                                <input type="password" placeholder="Enter your current password" class="form-control" id="__BVID__49" />
                                <button type="button" class="btn btn-none">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAPCAYAAAARZmTlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgBpVQ7boNAEF1+ouUI+AYp0xkKeucE8Q0sV3ya4IpP5XTpQm6QlJGQwhF8g+wNQksDeWNDhNbI4fOamZ19s293ZrQSW4gwDA1N00xZlo2qqk5YlyJHYjMRRZElSdITXKsfb5rmBPPs+362SCRN011d18dbHFzg6LrunnyFTQResIV5GUG9dxzHyPP8c/JL4jj+hjHH8lE+W0XS69gkJBgDXI74gSyav4O/EfY3Krs0zmQjgDoPCdtoMm+XRZIkP+1lzoDwWmbLwHsCZ2AgPoRLGEtFTAyC2Q/gtWuBw6lcNNecXUpmCoSCXcMSDv2C0AE3LqknA2fwvyKDmCHhsb/ped5KVJgxXavJ5ULN92O5NHXUs8kiQRC8tyP7n8AbBELyZzWekqkMbLhnBV77AM62C6idQ38RGpd1a0VRSnZbiMPY9Avrun7Xhq9GmvALOa6QS0plfJEAAAAASUVORK5CYII=" alt="" />
                                </button>
                            </div>
                            <div class="form">
                                <h5 class="pl-2">New password</h5>
                                <input type="password" placeholder="Enter your new password" class="form-control" id="__BVID__50" />
                                <button type="button" class="btn btn-none">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAPCAYAAAARZmTlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgBpVQ7boNAEF1+ouUI+AYp0xkKeucE8Q0sV3ya4IpP5XTpQm6QlJGQwhF8g+wNQksDeWNDhNbI4fOamZ19s293ZrQSW4gwDA1N00xZlo2qqk5YlyJHYjMRRZElSdITXKsfb5rmBPPs+362SCRN011d18dbHFzg6LrunnyFTQResIV5GUG9dxzHyPP8c/JL4jj+hjHH8lE+W0XS69gkJBgDXI74gSyav4O/EfY3Krs0zmQjgDoPCdtoMm+XRZIkP+1lzoDwWmbLwHsCZ2AgPoRLGEtFTAyC2Q/gtWuBw6lcNNecXUpmCoSCXcMSDv2C0AE3LqknA2fwvyKDmCHhsb/ped5KVJgxXavJ5ULN92O5NHXUs8kiQRC8tyP7n8AbBELyZzWekqkMbLhnBV77AM62C6idQ38RGpd1a0VRSnZbiMPY9Avrun7Xhq9GmvALOa6QS0plfJEAAAAASUVORK5CYII=" alt="" />
                                </button>
                            </div>
                            <div class="form">
                                <h5 class="pl-2">Retype new password</h5>
                                <input type="password" placeholder="Enter your new password" class="form-control" id="__BVID__51" />
                                <button type="button" class="btn btn-none">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAPCAYAAAARZmTlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgBpVQ7boNAEF1+ouUI+AYp0xkKeucE8Q0sV3ya4IpP5XTpQm6QlJGQwhF8g+wNQksDeWNDhNbI4fOamZ19s293ZrQSW4gwDA1N00xZlo2qqk5YlyJHYjMRRZElSdITXKsfb5rmBPPs+362SCRN011d18dbHFzg6LrunnyFTQResIV5GUG9dxzHyPP8c/JL4jj+hjHH8lE+W0XS69gkJBgDXI74gSyav4O/EfY3Krs0zmQjgDoPCdtoMm+XRZIkP+1lzoDwWmbLwHsCZ2AgPoRLGEtFTAyC2Q/gtWuBw6lcNNecXUpmCoSCXcMSDv2C0AE3LqknA2fwvyKDmCHhsb/ped5KVJgxXavJ5ULN92O5NHXUs8kiQRC8tyP7n8AbBELyZzWekqkMbLhnBV77AM62C6idQ38RGpd1a0VRSnZbiMPY9Avrun7Xhq9GmvALOa6QS0plfJEAAAAASUVORK5CYII=" alt="" />
                                </button>
                            </div>
                            <button type="button" class="btn theme-button-cyan ml-auto mr-0 float-right btn-secondary">
                                <div class="theme-button-content">Confirm</div>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}
