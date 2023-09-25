/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Otppage = () => {
  const { phone } = useParams();
  const navigate = useNavigate();
  const [toast, settoast] = useState(false);
  const [message, setmessage] = useState("");

  const register = () => {
    fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({number:phone})
    })
  }

  useEffect(() => {
    console.log(phone)
    function OTPInput() {
      const inputs = document.querySelectorAll('#otp > *[id]');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown',
          function (event) {
            if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); }
            else {
              if (i === inputs.length - 1 && inputs[i].value !== '') { return true; }
              else if (event.keyCode > 47 && event.keyCode < 58) {
                inputs[i].value = event.key;
                if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
              }
              else if (event.keyCode > 64 && event.keyCode < 91) {
                inputs[i].value = event.key;
                if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
              }
            }
          });
      }
    }
    OTPInput();
  }, []);

  const verifyotp = () => {
    const inputs = document.querySelectorAll('#otp > *[id]');
    console.log(inputs)
    let otp = "";
    for (let i = 0; i < inputs.length; i++) {
      otp += inputs[i].value
    }
    console.log(otp)

    fetch("http://localhost:5000/api/user/signup/verify", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "otp": otp, "number": phone })
    }).then((res) => {
      if (res.status === 200) {
        navigate("/success")
      } else if (res.status === 400) {
        return res.json();
      }
    }).then((data) => {
      settoast(true)
      setTimeout(() => {
        settoast(false)
      }, 3000);
      setmessage(data);
    })


  }

  return (
    <div>
      {toast && <div className='fixed  md:top-12 top-20 font-medium z-50 bg-white text-lg p-6 rounded-xl drop-shadow-lg max-sm:mx-auto md:right-20 '>{message}</div>}
      <div className='flex flex-col w-screen text-gray-700 h-screen gap-[2rem] justify-center items-center'>
        <img src='/hand.jpg' alt='image' />
        <h1 className='font-medium text-xl '>Please Verify Phone Number</h1>
        <p>An OTP is sent to {phone}</p>
        <a className='text-yellow-400 underline underline-offset-4' href='/'>Change Phone Number</a>
        <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
          <input className={`m-2 border outline-none h-10 w-10 text-center form-control focus:drop-shadow-md rounded`} type="text" id="first" maxLength="1" />
          <input className={`m-2 border outline-none h-10 w-10 text-center form-control focus:drop-shadow-md rounded`} type="text" id="second" maxLength="1" />
          <input className={`m-2 border outline-none h-10 w-10 text-center form-control focus:drop-shadow-md rounded`} type="text" id="third" maxLength="1" />
          <input className={`m-2 border outline-none h-10 w-10 text-center form-control focus:drop-shadow-md rounded`} type="text" id="fourth" maxLength="1" />
          <input className={`m-2 border outline-none h-10 w-10 text-center form-control focus:drop-shadow-md rounded`} type="text" id="fifth" maxLength="1" />
          <input className={`m-2 border outline-none h-10 w-10 text-center form-control focus:drop-shadow-md rounded`} type="text" id="sixth" maxLength="1" />
        </div>
        <div>Didn't recieved the code? <button onClick={register} className='text-yellow-400 mx-6'>Resend</button></div>
        <div className='flex justify-center  ' >
          <p onClick={verifyotp} className='bg-yellow-400 text-white px-10 py-1 rounded-full cursor-pointer hover:bg-yellow-600'>Verify</p>

        </div>
      </div>
    </div>
  )
}

export default Otppage