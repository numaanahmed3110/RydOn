import React from 'react'
import captainLogo from "../assets/uber-driver.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captainData, setcaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault()
    setcaptainData({
      email: email,
      password: password
    })
    console.log(captainData)
    setemail("")
    setpassword("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-20  mb-5 " src={captainLogo} />

        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input className='bg-[#efefef] mb-7 rounded px-4 py-2 border-grey w-full text-lg placeholder:text-base '
            required
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#efefef] mb-7 rounded px-4 py-2 border-grey w-full text-lg placeholder:text-base '
            required
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            placeholder='password'
          />
          <button
            className='bg-black text-white text-center mb-3 rounded px-4 py-2 border-grey w-full text-lg placeholder:text-base '>
            Login
          </button>

          <p className=' text-center'>New Rider Here?
            <Link to="/captain-signup" className='text-blue-600'> Register as a Captain</Link>
          </p>

        </form>

      </div>
      <div>
        <Link to="/captain-signup"
          className='bg-[#c06d03] flex items-center justify-center text-white text-center mb-5 rounded px-4 py-2 border-grey w-full text-lg placeholder:text-base '>
          Sign in as User
        </Link>
      </div>
    </div >
  )
}


export default CaptainLogin