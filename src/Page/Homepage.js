import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import admitkart from '../image/admitkart.jpeg';
import "react-phone-input-2/lib/style.css";
import { useNavigate} from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const [ph, setph] = useState('');

  const register = () => {
    const number = {number:`+${ph}`}

    fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(number)
    }).then((res)=>{
      if(res.status === 200 ){
        navigate(`/otp-verify/${number.number}`)
      }
    })
  }

  return (
    <>

      <div className='flex flex-col gap-14 my-[9%] font-sans px-8' >
        <div className='flex justify-center'>
          <img src={admitkart} alt='logo' className='w-60'></img>

        </div>
        <div className=' flex flex-col gap-4'>
          <p className='text-xl font-semibold'>Welcome Back</p>
          <p className='text-slate-600  text-base'>Please sign in to your account</p>

        </div>

        <div className='flex flex-col items-center gap-4 '>
          <div className='flex'>

            <PhoneInput country={"in"} value={ph} onChange={setph} className="border-yellow-400 border-[1px] rounded-sm" />
            {/* <input placeholder='Enter your Number' className='border-l-0 border-[1px] px-2 py-[2px] border-black focus:border-yellow-400 outline-none'/> */}
          </div>


          <p className='text-slate-400 text-sm'>We will send you a one time SMS message Charges may apply</p>

        </div>


        <div className='flex justify-center  ' >
          <p onClick={register} className='bg-yellow-400 text-white px-10 py-1 rounded-full cursor-pointer hover:bg-yellow-600'>sign in with OTP</p>

        </div>
      </div>
    </>
  )
}

export default Homepage