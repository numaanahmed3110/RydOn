import React from 'react'
import image from "../assets/UBER-white.png"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527478950489-e544549ca1d4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
                <img className="w-21 ml-7 mt-1 " src={image} />
                <div className='bg-white py-4 px-4'>
                    <h2 className='text-[30px] font-semibold'>Get Started with Uber</h2>
                    <Link to="/login" className='flex items-center text-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home