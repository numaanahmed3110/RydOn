import React from 'react'
import blackImage from "../assets/Uber_logo_2018.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'


const UserSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault()
    setuserData({
      username: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    console.log(userData)
    setfirstName("")
    setlastName("")
    setemail("")
    setpassword("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-18  mb-10 " src={blackImage} />

        <form onSubmit={(e) => { submitHandler(e) }}>

          <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input className='bg-[#efefef]  w-1/2 rounded px-4 py-2 border-grey text-base placeholder:text-small '
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value)
              }}
              placeholder='Firstname'
            />
            <input className='bg-[#efefef]  w-1/2 rounded px-4 py-2 border-grey  text-base placeholder:text-small '
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value)
              }}
              placeholder='Lastname'
            />

          </div>

          <h3 className='text-base font-medium mb-2'>What's your email?</h3>
          <input className='bg-[#efefef] mb-5 rounded px-4 py-2 border-grey w-full text-base placeholder:text-small '
            required
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            placeholder='email@example.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input className='bg-[#efefef] mb-5 rounded px-4 py-2 border-grey w-full text-base placeholder:text-small '
            required
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            placeholder='password'
          />

          <button
            className='bg-black text-white text-center mb-5 rounded px-4 py-2 border-grey w-full text-lg placeholder:text-base '>
            SignUp
          </button>

          <p className=' text-center'>Already have an Account?
            <Link to="/login" className='text-blue-600'> Login here</Link>
          </p>


        </form>

      </div>

      <div>
        <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from Uber and
          its affiliates to the number provided.</p>
      </div>
    </div >
  )
}

export default UserSignup