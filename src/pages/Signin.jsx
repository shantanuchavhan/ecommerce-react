import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = () => {
      // Implement sign-in logic here
      console.log('Signing in with:', email, password);
    };
  
    return (
        <div className='flex items-center justify-center max-h-[80vh] max-w-[100vw] md:h-[100vh] md:w-[100vw]'>
      <div className="max-w-md mx-auto w-full md:w-[70%] lg:w-[50%]   p-6  bg-black text-white border border-black md:rounded  shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <label className="block mb-4">
          Email:
          <input 
            className="border border-gray-600 rounded w-full py-2 px-3 bg-gray-800 text-white mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            className="border border-gray-600 rounded w-full py-2 px-3 bg-gray-800 text-white mt-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:shadow-outline-gray"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
      </div>
    );
  };

export default Signin;
