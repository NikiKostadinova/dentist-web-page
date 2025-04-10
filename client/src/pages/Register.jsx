import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import GoogleAuth from "../components/GoogleAuth";
// import logo1 from '../assets/logo.png'

import Logo_Dentist from '../assets/Logo_Dentist.png'



export default function Register() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields!');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.message);
      
      setLoading(false);

    }
  }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left side */}
        <div className="flex-2">
          <Link to="/" className='flex font-bold dark:text-white text-4xl'>
            <img src={Logo_Dentist} alt="Logo" className=' h-12 w-auto mr-3' />
          <span className=' text-3xl font-serif text-[#484849] '>Dr. Dimitar Donchev</span>
            
          </Link>
          <p className="text-sm text-center mt-5">
            Place to share experiance with our children
          </p>

        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="greenToBlue" type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : "Register"
              }
            </Button>
            {/* <GoogleAuth /> */}
            <div>
          {
            errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>)
          }
        </div>
          </form>
          <div className="flex gap-2 text-sm mt-2">
            <span>Have an account?</span>
            <Link to="/login" className="text-blue-500">Login</Link>          </div>
        </div>
        
      </div>
    </div>
  )
}
