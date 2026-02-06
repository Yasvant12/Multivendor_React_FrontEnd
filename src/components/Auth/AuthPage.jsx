import React, { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(isLogin ? 'Login' : 'Signup', formData);
      setLoading(false);
      alert(`${isLogin ? 'Login' : 'Signup'} successful!`);
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        rememberMe: false,
      });
    }, 1500);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      rememberMe: false,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Header with Logo */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className="text-2xl">🛒</span>
              </div>
              <span className="text-3xl font-bold text-white font-display">GrabIt</span>
            </div>
            <p className="text-green-100 text-sm font-medium">Fresh Groceries at Your Doorstep</p>
          </div>

          {/* Tab Toggle */}
          <div className="flex gap-1 p-4 bg-slate-100 dark:bg-slate-700/50 m-4 rounded-lg">
            <button
              onClick={() => toggleMode()}
              className={`flex-1 py-2.5 px-4 rounded-md font-semibold text-sm transition-all duration-200 ${
                isLogin
                  ? 'bg-white dark:bg-slate-800 text-green-600 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => toggleMode()}
              className={`flex-1 py-2.5 px-4 rounded-md font-semibold text-sm transition-all duration-200 ${
                !isLogin
                  ? 'bg-white dark:bg-slate-800 text-green-600 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-4">
            
            {/* Sign Up - Name Fields */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className={`w-full px-4 py-2.5 border rounded-lg font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-slate-700 transition-all ${
                      errors.firstName ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200 dark:border-slate-600'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center space-x-1">
                      <span>⚠</span>
                      <span>{errors.firstName}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className={`w-full px-4 py-2.5 border rounded-lg font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-slate-700 transition-all ${
                      errors.lastName ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200 dark:border-slate-600'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center space-x-1">
                      <span>⚠</span>
                      <span>{errors.lastName}</span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-2.5 border rounded-lg font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-slate-700 transition-all ${
                  errors.email ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200 dark:border-slate-600'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center space-x-1">
                  <span>⚠</span>
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 border rounded-lg font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-slate-700 transition-all ${
                  errors.password ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200 dark:border-slate-600'
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 flex items-center space-x-1">
                  <span>⚠</span>
                  <span>{errors.password}</span>
                </p>
              )}
            </div>

            {/* Sign Up - Confirm Password */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-2.5 border rounded-lg font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-slate-700 transition-all ${
                    errors.confirmPassword ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200 dark:border-slate-600'
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1 flex items-center space-x-1">
                    <span>⚠</span>
                    <span>{errors.confirmPassword}</span>
                  </p>
                )}
              </div>
            )}

            {/* Remember Me / Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-slate-300 text-green-600 focus:ring-green-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Remember me</span>
                </label>
                <a href="#" className="text-sm font-semibold text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 transition-colors">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              {loading && (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              <span>{loading ? 'Processing...' : isLogin ? 'Login to Account' : 'Create Account'}</span>
            </button>

            {/* Sign Up Prompt */}
            {isLogin && (
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-6">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="font-bold text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  Sign up here
                </button>
              </p>
            )}

            {/* Login Prompt */}
            {!isLogin && (
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-6">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="font-bold text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  Login here
                </button>
              </p>
            )}
          </form>

          {/* Social Login Section */}
          <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-6">
            <p className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wide">
              Or continue with
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 py-2.5 px-4 border border-slate-200 dark:border-slate-600 rounded-lg font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span className="text-lg">G</span>
                <span className="hidden sm:inline">Google</span>
              </button>
              <button
                type="button"
                className="flex-1 py-2.5 px-4 border border-slate-200 dark:border-slate-600 rounded-lg font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span className="text-lg">f</span>
                <span className="hidden sm:inline">Facebook</span>
              </button>
              <button
                type="button"
                className="flex-1 py-2.5 px-4 border border-slate-200 dark:border-slate-600 rounded-lg font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span className="text-lg">A</span>
                <span className="hidden sm:inline">Apple</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 dark:bg-slate-700/30 px-6 py-4 text-center border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              By signing up, you agree to our <a href="#" className="font-semibold hover:text-slate-700 dark:hover:text-slate-200">Terms</a> and <a href="#" className="font-semibold hover:text-slate-700 dark:hover:text-slate-200">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
