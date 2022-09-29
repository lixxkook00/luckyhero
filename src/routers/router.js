import React from 'react'
import { Route,Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Member from '../pages/Member';

export default function Router() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/member" element={<Member />} />

    </Routes>
  )
}
