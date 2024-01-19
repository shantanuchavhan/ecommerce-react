import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Registering with:', email, password)
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh] w-[100vw]">
      <div className="max-w-md mx-auto w-full md:w-[70%] lg:w-[50%]   p-6  bg-black text-white border border-black md:rounded  shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <label className="block mb-4">
          Email:
          <input
            className="border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-white"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            className="border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-white"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-white text-black py-2 px-4 rounded  hover:bg-gray-1000 focus:outline-none focus:shadow-outline-gray"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Register
