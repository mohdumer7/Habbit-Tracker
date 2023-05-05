import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#2f80ed] text-white p-5 flex justify-between items-center">
      <img src="/hamburger.png" alt="hamburger" className="h-10" />
      <p className="text-2xl text-slate-200">HABBIT TRACKER APP</p>
      <img src="/filter.png" alt="hamburger" className="h-10" />
    </div>
  );
};

export default Navbar;
