import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import register from '../services/register.js'
export const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [zip, setZip] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpw, setConfirmpw] = useState('')
  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleConfirmpw = (e) => {
    e.preventDefault()
    setConfirmpw(e.target.value)
  }
  const handleSelect = (e) => {
    e.preventDefault()
    setCountry(e.target.value)
  }
  const handleAddress = (e) => {
    e.preventDefault()
    setAddress(e.target.value)
  }
  const handleCity = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }
  const handleProvince = (e) => {
    e.preventDefault()
    setProvince(e.target.value)
  }
  const handleZip = (e) => {
    e.preventDefault()
    setZip(e.target.value)
  }

  const handleClick = (name, email, password, confirmpw, country, address, province, city, zip) => (e) => {
    e.preventDefault()
    if (password === confirmpw) {
      console.log('OK')
      return register({
        user_name: name,
        user_email: email,
        user_password: password,
        user_country: country,
        user_address: address,
        user_city: city,
        user_state: province,
        user_zip: zip,
      })
    } else {
      console.log('passwords dont match')
    }
  }
  return (
    <div className=' bg-slate-400 '>
      <div className=' bg-slate-400 md:mx-20'>
        <div>
          <h5 className=''>Renseignez vos données</h5>
          <p className='text-sm font-medium text-gray-700'>Veuillez renseigner vos données correctement et vous assurer d'avoir choisi le type utilisateur correspondant exactement à votre besoin et à votre statut.</p>
        </div>
        <div className='mt-10 sm:mt-0 '>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <div className='shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 bg-white sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                      username
                    </label>
                    <input onChange={handleName} type='text' name='first-name' id='first-name' autoComplete='given-name' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                  </div>

                  <div className='col-span-6 sm:col-span-4'>
                    <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                      Email address
                    </label>
                    <input onChange={handleEmail} type='text' name='email-address' id='email-address' autoComplete='email' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                      Country
                    </label>
                    <select
                      onChange={handleSelect}
                      id='country'
                      name='country'
                      autoComplete='country-name'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className='col-span-6'>
                    <label htmlFor='street-address' className='block text-sm font-medium text-gray-700'>
                      Street address
                    </label>
                    <input
                      onChange={handleAddress}
                      type='text'
                      name='street-address'
                      id='street-address'
                      autoComplete='street-address'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                      Password
                    </label>
                    <input onChange={handlePassword} type='password' name='password' id='password' autoComplete='password' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                  </div>
                  <div className='col-span-6'>
                    <label htmlFor='confirm-password' className='block text-sm font-medium text-gray-700'>
                      Confirm password
                    </label>
                    <input
                      onChange={handleConfirmpw}
                      type='password'
                      name='confirm-password'
                      id='confirm-password'
                      autoComplete='confirm-password'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label htmlFor='region' className='block text-sm font-medium text-gray-700'>
                      State / Province
                    </label>
                    <input onChange={handleProvince} type='text' name='region' id='region' autoComplete='address-level1' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label htmlFor='region' className='block text-sm font-medium text-gray-700'>
                      City
                    </label>
                    <input onChange={handleCity} type='text' name='region' id='region' autoComplete='address-level1' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
                      ZIP / Postal code
                    </label>
                    <input onChange={handleZip} type='text' name='postal-code' id='postal-code' autoComplete='postal-code' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  onClick={handleClick(name, email, password, confirmpw, country, address, province, city, zip)}
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
