import React from 'react';
import { useSelector } from 'react-redux';


const UserNamedisplay = () => {
    const data= useSelector((store)=>{
        return store.User
    })

    if(data.loading){
        return <h1>Loading...</h1>
    }
    if(data.error){
        return <h1>{data.error}</h1>
    }
  return (
    <div>
        <h2>User Names</h2>
       <ul>
        {data.data.map((item,idx)=>{
            return <li key={idx}>{item.name}</li>
          })
        }
       </ul>
    </div>
  );
};

export default UserNamedisplay;