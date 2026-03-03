import React from 'react'

export default function FormInput({ label, type = 'text', value, onChange, name, placeholder, error }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${error ? 'border-red-400' : 'border-gray-200'}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
