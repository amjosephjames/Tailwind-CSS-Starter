import React from "react";

const Header = () => {
  return (
    <div className="w-[100%] h=[15vh] flex justify-center items-center bg-purple">
      <div className="w-[90%] flex justify-between items-center flex-row">
        <div className="text-white font-bold text-3xl">easybank</div>
        <div className="w-[600px] flex justify-between items-center">
          <span className="pl-3 text-white">Home</span>
          <span className="pl-3 text-white">About</span>
          <span className="pl-3 text-white">Contact</span>
          <span className="pl-3 text-white">Blog</span>
          <span className="pl-3 text-white">Sign In</span>
          <div className="w-[150px] h-[50px] flex justify-center items-center by- text-darkBlue by-white transition-all duration-300 rounded-sm text-2xl">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
