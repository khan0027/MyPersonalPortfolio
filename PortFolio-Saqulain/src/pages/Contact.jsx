import React, { useState } from 'react'

const Contact = () => {

  const [formData,setformData] = useState({
    fullName:"",
    email:"",
    subject:"",
    message:""
  })

function changeHandler(e){
  
}


  return (
    <div className='max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md min-h-screen ' >
      <h1 className='text-center font-semibold text-3xl bg-yellow-100 py-3  border-l-5 border-r-5 border-yellow-500 ' >Contact Me</h1>
    <form action=""  className='space-y-6 my-5 ' >
      <div className='' >
        <label htmlFor="fullName" className='text-sm font-semibold sm:text-lg' >
          Full Name
        </label>
        <input type="text" name="fullName" id="fullName" onChange={changeHandler} value={formData.fullName}  required  className='outline w-full px-4 py-3 rounded-lg transition-all duration-300 ' placeholder='Enter Full Name'  />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"  className='outline w-full px-4 py-3 rounded-lg transition-all duration-300  ' onChange={changeHandler} required  value={formData.email} />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject"  className='outline w-full px-4 py-3 rounded-lg transition-all duration-300  ' onChange={changeHandler} required  value={formData.subject} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" onChange={changeHandler} value={formData.message} required  className='outline w-full px-4 py-3 rounded-lg transition-all duration-300  ' ></textarea>
      </div>
      <div>
        <button type="submit " className='w-full bg-yellow-200 py-3 rounded-lg hover:bg-yellow-300 cursor-pointer transition-colors duration-600 ' >Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Contact