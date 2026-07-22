import React, { useState } from 'react'

interface SpeakerProps {
  name: string
  occupation: string
  date: string
  bio: string
  imgSrc?: string | null
  zoomLink?: string
}

export default function Speaker({ name, occupation, date, bio, imgSrc }: SpeakerProps) {
   const initials = name
     .split(' ')
     .map((part) => part[0])
     .join('')
     .toUpperCase() 
  return (
    <li className="w-full md:w-1/2 lg:w-1/3 py-8 px-4 sm:px-8">
      <div className="space-y-6">
        {imgSrc ? (
         <img
           className="bg-yei-secondary-main mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
           src={imgSrc}
         />
       ) : (
         <div className="bg-yei-secondary-main mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 flex items-center justify-center">
           <span className="text-4xl xl:text-5xl font-bold text-white">
             {initials}
           </span>
         </div>
       )}
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl leading-6 font-bold">{name}</h3>
            <p className="font-medium text-xl sm:text-2xl text-yei-primary-main">
              {occupation}
            </p>
          </div>
          <p className="text-gray-700 text-lg sm:text-xl">{date}</p>
          <p className="text-gray-500">
            <Truncate str={bio} n={169} />
          </p>
          {zoomLink && (
           <p className="text-gray-700">
             Join via Zoom:{' '}
             
               <a className="text-yei-primary-main underline"
               href={zoomLink}
               target="_blank"
               rel="noreferrer"
               >
               {zoomLink}
             </a>
+           </p>
+         )}
        </div>
      </div>
    </li>
  )
}

function Truncate({ str, n }: { str: string; n: number }) {
  const [showFull, setShowFull] = useState(false)

  return str.length > n && !showFull ? (
    <span>
      {str.substr(0, n - 1)}...
      <br />
      <span>
        <button
          onClick={() => {
            setShowFull(true)
          }}
          className="underline font-semibold text-gray-700"
        >
          [show more]
        </button>
      </span>
    </span>
  ) : (
    <span>
      {str}
      {showFull && (
        <span>
          <br />
          <span>
            <button
              onClick={() => {
                setShowFull(false)
              }}
              className="underline font-semibold text-gray-700"
            >
              [show less]
            </button>
          </span>
        </span>
      )}
    </span>
  )
}
