import React from 'react'
import UserNav from '../../components/UserNav'
import './UserAuthentication.scss'

export default function UserAuthentication() {
  return (
    <div className="user">
        <UserNav activeTab={"authentication"}/>

        <div class="user-body">
        <div class="container">
            <div class="row">
                <div class="mx-auto col-xl-8 col-12">
                    <div class="verifi-info">
                    <img alt="" class="img-qr" src="/images/LUCKYHERO_makeuptpj_gmail.png" />
                    <div class="verifi-info-name">
                        <h3> Welcome, makeuptpj </h3>
                        <img src="/images/gFZpOl15FvkdQAAAABJRU5ErkJggg__.png" alt="" />
                    </div>
                    <p><span>ID: 874908</span><span>Email: makeuptpj@gmail.com</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row authentication">
                <div class="mx-auto col-xl-7 col-12">
                    <div class="authen-heading">
                        <div class="authen-heading-img">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBrZOBDYIwEEWvTsAGOgIj4AZuICOwAW6gGxgn0A1wA9wANgAn+B60RdK0tCn85JNAL4+7650gl4CMnym7ZX9IiJZWCTiwazYMlxQtIGE3Fqj2iaIE5AtQjJVEgp8eMMaqArQz3r+0VsB1bKfxsfBk23igpYq7mwe+y8uN2G6alj+0trdLjpsNXliS0GNZTRV572AYLeCi2pM4YubwZkxqM0n4zYQKIyjj55nkKs+z7JUf7Hf4esu/VgEzrEtOQ8GhUO3OD/evscvV1tnOvXdhh5UO7JdVxyXwGvWuA6HmL6MYqBAv1+EP9/SzJ4rUsvEAAAAASUVORK5CYII=" alt="" />
                        </div>
                        <span>Two-Factor Authentication</span>
                    </div>
                    <div class="authen-content">
                        <h5 class="pl-2">Authenticator Secret Code</h5>
                        <div class="authen-code">
                            <input type="text" class="form-control" id="__BVID__95" />
                            <div class="image-copy">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7VXREYIwDE09BugGOgIbiJMIE7iCG+AIrOAEMgJOIE6gThBftNyVqi2H9I93l5Qm6SOXhEIUCaq3Y95BpwPOnUmpgy8gsUgzaAluIHfyI+S3IMTMDFnSBFhQJCRe77s82Q9vhTq3FIRbCmZt9hdHbsYuazomY23WApnVVgIVtLz8Cjlhv4G/cQ+Pr7FSOfTRkKfTEQfI/5+KPnlXvsBUfEcL2b4a+AnJunaJpQEF5EH+DPcglVhtWeW5pEFgXpmxysbERvvyZuL4xL457i7zEt0OXezaNShvOHMOvaZhCP6uJsETOu5u3BctwqoAAAAASUVORK5CYII=" alt="" />
                            </div>
                        </div>
                        <h5 class="pl-2"> Enter the authencation code provided by your authentication app </h5>
                        <input type="number" placeholder="Enter Code Here" class="form-control" id="__BVID__96" />
                        <button type="button" class="btn theme-button-cyan mb-3 mb-sm-0 mt-sm-3 btn-secondary">
                            <div class="theme-button-content">Enable</div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
