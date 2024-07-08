import React from 'react'
import { useForm } from "react-hook-form";

function Contact() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    < >
    <div id="contacts" name="Contact" className='section max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '>
      <h1 className='text-3xl font-bold mb-4 '>Contact me:</h1>
      <span>Please fill below form to contact me:</span>
      <div className='flex flex-col items-center justify-center mt-5'>
        <form  action="https://getform.io/f/adryyqwa" method="POST" className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
          <h1 className='text-xl font-semibold mb-4'>Send Your Message:</h1>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='Name'>Name:

            </label>
            <input id="name" className='shadow appearance-none border rounded  py-2 px-3 text-gray-800 leading-tight  rounded-lg' placeholder='Enter your full Name' name="name"   {...register("name", { required: true })}>{errors.name && <span>This field is required</span>}</input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='Email-address' >Email-address:

            </label>
            <input className='shadow appearance-none border rounded  py-2 px-3 text-gray-800 leading-tight  rounded-lg' placeholder='Email-address' name="email"></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='Message'>Message:

            </label>
            <input className='shadow appearance-none border rounded  py-2 px-3 text-gray-800 leading-tight  rounded-lg' placeholder='Type your message here' name="message"></input>
          </div>
          <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-600 duration-300'>Send</button>

        </form>
      </div>

    </div>

    </>
  )
}

export default Contact