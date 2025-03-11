import React from 'react'
import image from "../assets/Uber_logo_2018.png"
const Home = () => {
    return (
        <div>
            <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
                <img className="w-16 ml-9" src={image} />
                <div className='bg-white text-'>
                    <h2>Get Started with Uber</h2>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Home