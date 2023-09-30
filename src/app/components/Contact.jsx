import React, { useState } from 'react'

const Contact = ({ dark }) => {

  // Define a state to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to your server
    const response = await fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Reset the form fields or show a success message
      setFormData({ name: '', email: '', message: '' });
      // Display a success message
      window.alert('Your Request submitted successfully.');
      // console.log('Form submitted successfully.');
    } else {
      // Handle errors or show an error message to the user
      console.error('Failed to submit the form.');
    }

  };


  return (
    <>
      <div name='contact' className={`w-full ${dark ? 'bg-gray-700 text-gray-200' : 'text-gray-700 bg-gray-200'} flex justify-center items-center p-4`}>
        <div className={`${dark ? 'md:bg-gray-800/20' : 'md:bg-gray-300/80'} sm:mt-36 flex flex-col max-w-[600px] w-full px-6 pt-2 rounded-md`} >
          <div className='pb-8 mt-32 sm:mt-0'>
            <p className={`${dark ? 'text-gray-200' : 'text-gray-700'} text-4xl font-bold inline sm:text-center sm:block w-fit sm:mx-auto border-b-4 border-blue-500`}>Contact</p>
            <p className={`${dark ? 'text-gray-300' : 'text-gray-600'} py-4`}>// Submit the Form Below or shoot me an Email - myemail@gmail.com</p>
          </div>

          <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>

            <input className={`outline-none md:border-none ${dark ? 'text-gray-700 bg-gray-600 border border-gray-500' : 'md:border-none border border-gray-300'} w-full p-2`} type="text" placeholder='Name' name='name' value={formData.name} onChange={handleInputChange} />

            <input className={`outline-none ${dark ? 'text-gray-700 bg-gray-600 border border-gray-500' : 'md:border-none border border-gray-300'} my-3 w-full p-2`} type="email" placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} />

            <textarea className={`outline-none ${dark ? 'text-gray-700 bg-gray-600 border border-gray-500' : 'md:border-none border border-gray-300'} w-full p-2`} name="message" rows="6" placeholder='Your Message' value={formData.message} onChange={handleInputChange}></textarea>

            <button type='submit' className={`${dark ? 'hover:bg-blue-500 border-blue-500' : 'border-blue-500 hover:bg-blue-500'} border-2 px-4 py-3 my-8 mx-auto flex items-center`}>Let's Collaborate</button>

          </form>

        </div>
      </div>
    </>
  )
}

export default Contact