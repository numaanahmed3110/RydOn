import React from 'react'
import blackImage from "../assets/Uber_logo_2018.png"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { userDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate()
  const { user, setUser } = useContext(userDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const userData = {
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if (response.status === 200) {
        const data = response.data
        setUser(data.user)
        navigate('/home')
      }
    } catch (error) {
      console.error('Login error:', error);
    }

    setemail("")
    setpassword("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-18  mb-10 " src={blackImage} />

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

          <p className=' text-center'>New Here?
            <Link to="/signup" className='text-blue-600'> Create new Account</Link>
          </p>

        </form>

      </div>
      <div>
        <Link to="/captain-login"
          className='bg-[#10b461] flex items-center justify-center text-white text-center mb-5 rounded px-4 py-2 border-grey w-full text-lg placeholder:text-base '>
          Sign in as Captain
        </Link>
      </div>
    </div >
  )
}

export default UserLogin