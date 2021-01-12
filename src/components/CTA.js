import React from 'react'


function CTA() {
  return (
    <a
      className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-green-100 bg-green-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
    >
      <div className="flex items-center">
        <span>Your Referral Link: <span className="text-sm font-bold" id="ref-link">http://crazyrich.trade/register.php?referral=1f8e293</span></span>
      </div>
    </a>
  )
}

export default CTA
