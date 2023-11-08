//Contact page
'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqobpvg");
  if (state.succeeded) {
      return <p className='font-bold text-[#744C86]'>Thanks for joining! I will keep in touch...</p>;
  }
  return (
    
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl mb-4 font-semibold text-[#57648C]">Contact Me</h2>
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                id="name"
                type="name" 
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-2">
                Surname:
              </label>
              <input
                id="surname"
                type="surname" 
                name="surname"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address:
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button 
              type="submit" 
              disabled={state.submitting} 
              className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
          
      );
    }
    
    function App() {
      return (
        <div className="flex justify-center items-center h-screen">
          <ContactForm />
        </div>
        
      );
    }
    
    export default App;
    