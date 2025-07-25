// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async () => {
//     console.log("login button clicked ✅");
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         email,
//         password,
//       });
//       setMessage(response.data);
//     } catch (error) {
//       setMessage("Login failed: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>User Login</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       /><br />
//       <button onClick={handleLogin}>Login</button>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Login;


import Navbar2 from "./component/Navbar2";
import Login from "./component/Login";

function login(){
  return(
    <>
    <Navbar2/>
    <Login/>
    </>
  )
}

export default login;

