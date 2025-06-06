
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
// import GoogleAuth from "../components/GoogleAuth";
// import logo1 from '../assets/logo.png'

import Logo_Dentist from '../assets/Logo_Dentist.png'



export default function LogIn() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill out all fields!'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));

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
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                className="shadow-none"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="**********"
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
                ) : "Login"
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
            <span>Dont have an account?</span>
            <Link to="/register" className="text-blue-500">Register</Link>          </div>
        </div>
        
      </div>
    </div>
  )
}