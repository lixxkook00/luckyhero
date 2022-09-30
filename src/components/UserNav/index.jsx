import React from 'react'
import './UserNav.scss'

import { Link } from 'react-router-dom'

export default function UserNav() {
  return (
    <div class="user-nav">
        <Link to="/user/verification" class="active-children active" aria-current="page">
            <img src="/images/png_base64_iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6.png" alt="" />
            <span> Verification </span>
        </Link>
        <Link to="/user/authentication" class="">
            <img src="/images/SzJ4rUsvEAAAAASUVORK5CYII_.png" alt="" />
            <span> Authentication </span>
        </Link>
         <Link to="/user/change-password" class="">
            <img src="/images/QzM22ZSOuILt8Q0Cavhgo4dhn4Pa1ttfeAsf2LekDqlx4nlu2f4hpBQS7mwVn8ti2q1yxCQizPPhqTV41gEpMA2KVtRAvL5EO3we.png" alt="" />
            <span>Change Password</span>
        </Link>
        <Link to="/user/change-password" class="">
            <img src="/images/m55GMd69QAAAABJRU5ErkJggg__.png" alt="" />
            <span> Update Address </span>
        </Link>
    </div>
  )
}
