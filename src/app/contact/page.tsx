import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="w-24 h-24 md:w-48 md:h-auto rounded-full"
        src="/mobile.jpg"
        alt="Mobile Image"
        width="96"
        height="96"
      />
      <div className="text-center md:text-left ml-4">
        <p>contact No. 0305-3364646, 0333-7459594
            address- house no 3/c, Block W, Gulshan-e-usman,Rahim yar Khan
        </p>
      </div>
    </div>
  )
}

export default Page
