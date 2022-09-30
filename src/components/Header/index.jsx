import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {

    const [menuHeader,setMenuHeader] = useState('')
    const handleToggleMenu = () => {
        menuHeader === "" ? setMenuHeader('active') : setMenuHeader('')
    }

    const [login,setLogin] = useState(true)

    return (
        <header className="global-header">
            <div className="left-header">
                <div className="logo-navigation">
                    <a href="/home" className="active-children active" aria-current="page">
                        <img src="/images/logo.072d07f3.svg" alt="" />
                    </a>
                </div>
                <div className="language-navigation">
                    <img src="/images/en.21cd1976.svg" alt="" />
                    <span>EN</span>
                </div>
            </div>

            {
                login 
                ?
                    <>
                        <div className={`menu-header ${menuHeader}`}>
                            <Link to="/home" className="menu-header-item active-children active" aria-current="page"> Home </Link>
                            <Link to="/member" className="menu-header-item"> Member </Link>
                            <Link to="/wallet" className="menu-header-item"> Wallet </Link>
                            <Link to="/pool/information" className="menu-header-item"> Lucky Pool </Link>
                            <Link to="/ticket" className="menu-header-item"> Ticket </Link>
                        </div>

                        <div className="d-flex align-items-center w-custom">
                            <div className="user-header">
                                <div id="balance" className="user-avatar">
                                    <div className="user-balance">
                                        <div className="user-balance-amount"> 753.0857 </div>

                                        <div className="user-balance-symbol">HBG</div>
                                        
                                        <a href="/wallet" className="user-balance-deposit">
                                            <img src="/images/plus.c57417ca.svg" alt="" />
                                        </a>
                                    </div>
                                    
                                    <div className="dropdown b-dropdown btn-group" button-class="user-profile" id="__BVID__17">
                                        <button aria-haspopup="menu" aria-expanded="false" type="button" className="btn dropdown-toggle btn-secondary" id="__BVID__17__BV_toggle_">
                                            <img id="active-pool-tooltip" src="/images/active.d6a1d66a.svg" alt="" />
                                        </button>
                                        {/* <div role="menu" className="dropdown-menu" aria-labelledby="__BVID__17__BV_toggle_" >
                                            <div role="presentation">
                                                <div role="menuitem" href="#" target="_self" className="dropdown-item">
                                                    <a href="/user" className="" target="_self">
                                                        <img src="/images/profile.a7254e75.svg" alt="" />
                                                        <span>Profile</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div role="presentation">
                                                <div role="menuitem" href="#" target="_self" className="dropdown-item">
                                                    <a href=''>
                                                        <img src="/images/logout2.7ff5e9b9.svg" alt="" />
                                                        <span>Logout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="notification-content">
                                <button id="tooltip-button-1" type="button" className="btn notification-tooltip btn-secondary">
                                    
                                </button>

                                <button type="button" className="btn notification btn-secondary">
                                    <img src="/images/bell.d472565f.svg" alt="" />
                                    <div className="notification-count"> 38 </div>
                                </button>
                            </div>

                            <div className="nav-icon hide-on-pc" onClick={() => handleToggleMenu()}>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </>
                :
                <div class="d-flex align-items-center w-custom">
                    <div class="user-header">
                        <div class="not-auth">
                            <a href="/auth/login" class="active-children active" aria-current="page"> Sign In </a>
                            <span class="split-slash">|</span>
                            <a href="/auth/register" class=""> Sign Up </a>
                        </div>
                    </div>
                </div>

            }
            
        
        </header>
    )
}
