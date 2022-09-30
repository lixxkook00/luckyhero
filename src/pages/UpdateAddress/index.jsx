import React from 'react'
import UserNav from '../../components/UserNav'
import './UpdateAddress.scss'

export default function UpdateAddress() {
  return (
    <div className="user">
        <UserNav activeTab={"update-address"}/>

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
                    <div class="mx-auto col-xl-8 col-12">
                        <div class="change-info-kyc">
                        <div class="change-heading">
                            <div class="change-heading-img">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgB7ZJhDcIwEIXfEQQUB5WAhEkAB0jAAXOAhEkAB+AApMzBcceNhGyM3pZuv/Ylr02a9kuvPQJzALBFTojuEHEp4cw5rjANoS2+SjZSCg0OUH6L2uKd5CGlRHjRP2KuUmIlNvID0lLbC3T29r2xdkolB0/ol1p1dhF4xR+0Y26dp2E+y3hpLvCTNdIUEpXvZa6hldjaXzxiJcLKVnHwHBjaxy7pGLGbRTyPuMYE0HtkLpCX5wuz/m55GMd69QAAAABJRU5ErkJggg==" alt="" />
                            </div>
                            <span>Update Address</span>
                        </div>
                        <div class="change-form">
                            <div class="form">
                                <h5 class="pl-2">Enter your new address</h5>
                                <div class="form-content">
                                    <div class="form-enter">
                                        <input type="text" placeholder="Enter your address" readonly="readonly" class="form-control" id="__BVID__53" />
                                    </div>
                                    <button type="button" class="btn theme-button-cyan ml-auto mr-0 float-right btn-secondary">
                                    <div class="theme-button-content"> Connected </div>
                                    </button>
                                </div>
                                <div class="d-flex justify-content-center justify-content-md-start align-items-center flex-wrap">
                                    
                                </div>
                                <span> 
                                    Waring: 
                                    <br />
                                    <span> - To speed up claims and add heroes to the pool. Please connect to the wallet address you used to register your herobook account.</span>
                                    <br />
                                    <span>- The wallet address is only updated once so be careful.</span>
                                </span>
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
