import React, { useEffect } from 'react';
// import User from './components/User';
// import Email from './components/Email';
import UserNamedisplay from './components/UserNamedisplay';
import UserEmail from './components/UserEmail';
import { useDispatch } from 'react-redux';
import { getUser } from './Utils/UserSlice';
// import Store from './Utils/Store';

const App = () => {
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])
  return (
    <div>
      {/* <User/>
      <Email/> */}
      <UserNamedisplay/>
      <UserEmail/>
    </div>
  );
};

export default App;