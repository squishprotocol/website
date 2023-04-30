import React from 'react'
import logo from "../../public/logo.png"
function Navbar() {
    return (
        <div className="navbar bg-base-100 flex flex-wrap items-center justify-between py-3 px-4">
  <div className="flex items-center">
    <label className="btn btn-ghost">
      <div className="w-10 h-10 rounded-full">
        <img src={logo} alt="Logo" className="object-cover object-center h-full w-full" />
      </div>
    </label>
  </div>
  <div className="flex-none gap-4">
    <div className="dropdown dropdown-end">
      <div className="p-2 border border-red-400 text-red-400"><a href="https://t.me/squishprotocol">JOIN TELEGRAM</a></div>
    </div>
    <div className="dropdown dropdown-end">
      <div className="p-2 border border-red-400 text-red-400"><a href="https://twitter.com/intent/tweet?text=$sq%20Fair%20Launch%0ALP%20BURN,%20No%20minting,%20STAKING%20REWARD.%0ATotal%20supply%20200000%20$SQ.%0A%0ACA:%200xcfa661975D9b3f6bc7fcb60642c366A12E856348%0A&url=https://dexscreener.com/bsc/0x3b121b20e877366d33c0368be15485b418be786e/%0A&hashtags=musk,bscgem,SQ,crypto,pepe,squish,1000xgem">shill now</a></div>
    </div>
  </div>
</div>

    )
}

export default Navbar
