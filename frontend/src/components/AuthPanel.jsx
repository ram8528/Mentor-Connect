import React, { useState } from "react";

const AuthPanel = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-gray-100 shadow-xl w-full md:w-1/3 px-8 py-12 rounded-lg mt-20 mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 font-semibold hover:underline"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPanel;
