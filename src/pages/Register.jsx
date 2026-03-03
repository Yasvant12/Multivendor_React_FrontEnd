import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../components/common/FormInput'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function validate() {
    const errs = {}
    if (!form.name) errs.name = 'Required'
    if (!form.email.includes('@')) errs.email = 'Invalid email'
    if (form.password.length < 6) errs.password = 'Password too short'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function submit(e) {
    e.preventDefault()
    if (!validate()) return
    // fake register
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={submit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Create account</h2>
        <FormInput label="Full name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
        <FormInput label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
        <FormInput label="Password" name="password" type="password" value={form.password} onChange={handleChange} error={errors.password} />
        <button className="w-full bg-green-600 text-white py-2 rounded mt-2">Register</button>
      </form>
    </div>
  )
}
