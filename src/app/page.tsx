import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="w-24 h-24 md:w-48 md:h-auto rounded-full"
        src="/home image.jpg"
        alt="Home Image"
        width="96"
        height="96"
      />
      <div className="text-center md:text-left ml-4">
        <p>Home Page,
          My home is very beautiful.My home is in Rahim Yar Khan, a city known for its rich culture 
          and community values. My residence serves as a place of comfort and inspiration.
        </p>
      </div>
    </div>
  )
}

export default Page
