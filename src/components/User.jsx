// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Store from '../Utils/Store';
// import { addUser } from '../Utils/UserSlice';

// const User = () => {
//     const data= useSelector(store=>store.User)
//     const dispatch= useDispatch()
//     const[user,setUser]=useState([])
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((data) => {
//                dispatch( addUser(data));
//             })
//             .catch((error) => console.error("Error fetching users:", error));
//     }, [dispatch]);
//   return (
//     <div>
//         <h2>User Name</h2>
//       <ul>
//         {
//           data.map((item) => {
//               return <li key={item.id}>{item.name}</li>;
//           })
//         }
//       </ul>
//     </div>
//   );
// };

// export default User;