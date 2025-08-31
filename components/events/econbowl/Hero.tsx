import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>
        <div className="pt-4 relative pb-12 sm:pb-16">
          <main className="mt-20 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <img
                className="w-48 mx-auto"
                src="/img/logos/econbowl.png"
                alt="EconBowl"
              />
              <div className="mt-3 mx-auto text-left md:text-center text-gray-500 text-lg md:mt-5 md:max-w-3xl">
                <p className="italic max-w-xl text-base text-gray-400 inline-flex w-auto border-y-2 border-gray-300 py-3">
                  The Youth Economics Initiative is proud to present our 7th
                  Annual EconBowl!
                </p>
                <p className="mt-4">
                  One of the only economics competitions during the fall
                  semester, EconBowl offers high schoolers the chance to compete
                  against other like-minded individuals and apply real world
                  economics knowledge in a fast-paced environment. Represent
                  your high school, compete for glory, and win cash prizes!
                </p>
                {/* <p className="mt-4 italic text-sm text-gray-400 max-w-xl m-auto">
                  Registration for EconBowl will open mid-September. For questions, please email <a
                    className="text-yei-primary-darker font-medium"
                    href="mailto:events@theyei.org"
                  >
                    events@theyei.org
                  </a>{' '}
                  .
                </p> */}

                <p className="mt-4 italic text-sm text-gray-400 max-w-xl m-auto">
                  <b>
                    Registration will close on November 12, 2024 at 11:59 PST
                    (UTC−8).
                  </b>{' '}
                  The competition will be held on November 16, 9:00 AM PST
                  through Zoom. Written round qualifiers be at 4:00 pm PST for
                  finalists.
                </p>
                {/* <AnchorLink
                  href="#register"
                  offset={100}
                  className="mt-4 inline-flex w-auto items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-opacity-90 sm:px-8"
                >
                  Register!
                </AnchorLink> */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfCBuC-cazFVP-Ntv-UhlZv_zs-5M5J3NBTp0NYNwY57EyWxg/viewform?usp=header"
                  className="mt-4 inline-flex w-auto items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-opacity-90 sm:px-8"
                >
                  Register!
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
