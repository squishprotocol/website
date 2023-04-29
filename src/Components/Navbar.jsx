import React from 'react'
import image from "../assets/vite.svg"
function Navbar() {
    return (
        <div className="navbar bg-base-100 flex flex-wrap items-center justify-between py-3 px-4">
  <div className="flex items-center">
    <label className="btn btn-ghost">
      <div className="w-10 h-10 rounded-full">
        <img src={image} alt="Logo" className="object-cover object-center h-full w-full" />
      </div>
    </label>
  </div>
  <div className="flex-none gap-4">
    <div className="dropdown dropdown-end">
      <div className="p-2 border border-red-400 text-red-400">Contact us</div>
    </div>
    <div className="dropdown dropdown-end">
      <div className="p-2 border border-red-400 text-red-400">Connect</div>
    </div>
  </div>
</div>

    )
}

export default Navbar