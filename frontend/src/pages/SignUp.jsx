import React, { useState } from 'react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const SignUp = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();


    const { signup } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signup({ fullname, email, password });
    }
    return (
        <div className="w-full min-h-screen flex justify-center items-center  px-4">
            <div className="bg-slate-950 border border-gray-700 rounded-2xl p-12 w-full max-w-md shadow-xl">
                <h1 className="text-center text-4xl font-bold text-white pb-6">Sign Up</h1>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="fullname" className="text-gray-300">Fullname</Label>
                        <Input
                            type="text"
                            id="fullname"
                            placeholder="Enter your fullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="username" className="text-gray-300">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Enter your Username"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

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
                        <h1>Already have an account? <Link to="/sign-in" className='text-blue-500'> Sign In</Link></h1>
                    </div>

                    <Button className="w-full bg-white text-black hover:text-white transition duration-300">
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
