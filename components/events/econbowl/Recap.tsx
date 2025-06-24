import React from 'react'
import RecapPodium from './RecapPodium'

export default function Recap() {
  return (
    <div id="recap" className="relative bg-gray-100">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="xl:inline">EB 2024 </span>
              <span className="text-yei-primary-main xl:inline">Recap</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 font-medium sm:text-xl md:mt-5  md:max-w-3xl">
              Thank you to our 500+ competitors and proctors!{' '}
            </p>
            <p className="mt-2 max-w-md mx-auto text-md text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
              On November 16th, 2024, over 500 competitors applied their
              economic knowledge and competed virtually for the chance to earn
              cash prizes and become Champions of the 6th Annual Econbowl. It
              was amazing to see such passion for economics from all across the
              world. Whether this is your first time hearing about EconBowl, or
              if you're already a seasoned competitor, we look forward to seeing
              you next November!
            </p>
            {/* <p className="mt-2 max-w-md mx-auto text-md text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
              Recordings:{' '}
              <a
                href="https://www.youtube.com/watch?v=UIEt6PewgA8"
                className="green-link"
                target="_blank"
              >
                QuizBowl Round
              </a>{' '}
              ∙{' '}
              <a
                href="https://www.youtube.com/watch?v=calmVB8vgV4"
                className="green-link"
                target="_blank"
              >
                Team Round
              </a>{' '}
              ∙{' '}
              <a
                href="https://www.youtube.com/watch?v=n_HlLY12OJc"
                className="green-link"
                target="_blank"
              >
                Individual Track
              </a>{' '}
              ∙{' '}
              <a
                href="https://www.youtube.com/watch?v=CXR_bZm6Px8"
                className="green-link"
                target="_blank"
              >
                Speaker Seminar
              </a>{' '}
            </p> */}
            <RecapPodium />
            {/* <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://www.youtube.com/watch?v=U8EAoBALZvc"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10"
                >
                  Recap Video
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="relative w-full flex justify-center py-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:py-0">
          <div className="flex items-center justify-center w-full h-full lg:justify-start">
            <img
              className="max-w-full max-h-[50vh] lg:max-h-[70vh] object-scale-down lg:ml-0"
              src="/img/photos/econbowl24.png"
              alt="EconBowl recap"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
