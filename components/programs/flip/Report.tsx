import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Report() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div aria-hidden="true">
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
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
              y={72}
              width={640}
              height={640}
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>
        <div className="relative pb-16 sm:pb-24 lg:pb-32 pt-12">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-12">
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    FLIP 2026 Research Report
                  </span>
                  <span className="mt-1 block text-2xl tracking-tight font-extrabold sm:text-1xl xl:text-3xl">
                    FLIP 2026 Research Report on Youth Financial Behavior in the
                    Digital Age
                  </span>
                </h1>
                <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  <p className="mt-3 ">
                    Led by VP (of FLIP) Prasanna Chandankhede, alongside Mahesh
                    Yandra and Sricharan Bala, FLIP launched a global project to
                    better understand gaps in youth financial development. We
                    surveyed students across nine countries, using direct
                    outreach and social media to gather real insights into how
                    young people actually manage money.
                  </p>
                  <p className="mt-3 ">
                    Our analysis revealed what we call the “Financial Action
                    Gap” — the disconnect between financial knowledge and
                    real-world action. While most systems focus on budgeting and
                    managing scarcity, very few teach students how to build
                    wealth or think strategically about assets.
                  </p>
                  <p className="mt-3 ">
                    In response, FLIP developed a practical framework designed
                    to move youth financial education beyond theory and into
                    action — empowering students not just to understand money,
                    but to use it confidently and strategically.{' '}
                  </p>
                </div>
                <div>
                  <div className="inline-flex">
                    <a
                      href="/files/FLIP-Economics-Research.pdf"
                      target="_blank"
                      className="mt-3 mr-2 inline-flex items-center justify-center text-white px-5 py-3 border border-transparent text-md font-medium rounded-md bg-yei-primary-main hover:bg-yei-primary-darker trans-300"
                    >
                      Download Report
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="-mr-1 ml-3 h-4 w-4 text-gray-200"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
