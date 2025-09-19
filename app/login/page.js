import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/footer/Footer'

export default function page() {
    return (
        <div>
            <Navbar></Navbar>

            {/* login design */}
            <section className="flex items-center justify-center min-h-[90vh] bg-gradient-to-r from-blue-600 to-green-500">
                <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-md">

                    {/* Logo / Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Welcome Back to <span className="text-blue-600">SmartShop</span>
                    </h2>

                    {/* Form */}
                    <form className="space-y-5">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded text-blue-600" />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500 text-sm">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Login */}
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            Continue with Google
                        </button>
                        <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition">
                            <img src="https://www.svgrepo.com/show/349367/facebook.svg" alt="Facebook" className="w-5 h-5" />
                            Continue with Facebook
                        </button>
                    </div>

                    {/* Register */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <a href="/register" className="text-blue-600 font-medium hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}
