import React, { useState } from 'react'
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import axios from "axios"
import { useAuthStore } from '../store/useAuthStore'

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center  px-4">
      <div className="bg-slate-950 border border-gray-700 rounded-2xl p-12 w-full max-w-md shadow-xl">
        <h1 className="text-center text-4xl font-bold text-white pb-6">Sign In</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h1>Haven't you signed up yet <Link to="/sign-up" className='text-blue-500'> Sign Up</Link></h1>
          </div>

          <Button className="w-full bg-white text-black hover:text-white transition duration-300">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
