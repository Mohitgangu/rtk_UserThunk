import React from 'react';
import { useSelector } from 'react-redux';

const UserEmail = () => {
    const data= useSelector(store=>store.User)

    if(data.loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
      <h2>User Emails</h2>
       <ul>
        {
            data.data.map((item,idx)=>{
                return <li key={idx}>{item.email}</li>
            })
        }
       </ul>
    </div>
  );
};

export default UserEmail;