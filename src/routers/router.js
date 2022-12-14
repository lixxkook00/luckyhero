import React from 'react'
import { Route,Routes} from 'react-router-dom';
import ChangePassword from '../pages/ChangePassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Member from '../pages/Member';
import PoolInformation from '../pages/PoolInformation';
import SignUp from '../pages/SignUp';
import Ticket from '../pages/Ticket';
import UpdateAddress from '../pages/UpdateAddress';
import UserAuthentication from '../pages/UserAuthentication';
import UserVerification from '../pages/UserVerification';
import Wallet from '../pages/Wallet';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/home" element={<Home />} />

      <Route exact path="/member" element={<Member />} />

      <Route exact path="/wallet" element={<Wallet />} />

      <Route path="/pool/information" element={<PoolInformation />} />

      <Route exact path="/ticket" element={<Ticket />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/signup" element={<SignUp />} />

      <Route exact path="/user/verification" element={<UserVerification />} />

      <Route exact path="/user/authentication" element={<UserAuthentication />} />

      <Route exact path="/user/change-password" element={<ChangePassword />} />

      <Route exact path="/user/update-address" element={<UpdateAddress />} />

    </Routes>
  )
}
