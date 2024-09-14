import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="w-24 h-24 md:w-48 md:h-auto rounded-full"
        src="/usmanali.jpg"
        alt="About"
        width="96"
        height="96"
      />
      <div className="text-center md:text-left ml-4">
        <p>Syed Usman Ali is a dedicated individual working to promote education and social welfare.
        I am involved in promoting admissions for Tameer e Millat School in Rahim Yar Khan, focusing on providing free resources like books, stationery, and uniforms to disabled and needy students. 
        I am also a skilled developer, currently working on a React project with Tailwind CSS integration.
        My passion for education and technology highlights our commitment to making a positive impact in community. Through all efforts, my aims to uplift underprivileged individuals .

 </p>
      </div>
    </div>
  )
}

export default Page
