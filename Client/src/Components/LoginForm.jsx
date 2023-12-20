import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful signin (e.g., redirect to dashboard)
        console.log('Signin successful!');
      } else {
        // Handle signin error (e.g., show an error message)
        console.error('Signin failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  return (
    // ... (rest of your component code)
    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      {/* ... (other form fields) */}
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
    // ...
  );
};

export default LoginForm;
