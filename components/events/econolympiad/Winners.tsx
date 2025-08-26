import React from 'react'

export default function Prizes() {
  return (
    <div className="bg-yei-secondary-brighter">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            2025 Winners
          </h2>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl items-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col sm:order-2">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-5 py-1 rounded-full text-2xl font-medium bg-indigo-100 text-indigo-800">
                1st
              </span>
            </dt>
            <dd className="order-1 text-3xl font-extrabold text-white">
              <img
                className="rounded-lg shadow-lg object-cover object-center w-100"
                src="/img/photos/econolywinners/lambert-economics.png"
                alt="EconOlympiad Image"
              />
              Lambert Economics
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0 sm:order-1">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-xl font-medium bg-indigo-200 text-indigo-800">
                2nd
              </span>
            </dt>
            <dd className="order-1 text-2xl font-extrabold text-gray-200">
              <img
                className="rounded-lg shadow-lg object-cover object-center w-100"
                src="/img/photos/econolywinners/bcp-team-1.png"
                alt="EconOlympiad Image"
              />
              BCP Team 1
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0 sm:order-3">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-md font-semibold bg-indigo-200 text-indigo-800">
                3rd
              </span>
            </dt>
            <dd className="order-1 text-2xl font-extrabold text-gray-300">
              <img
                className="rounded-lg shadow-lg object-cover object-center w-100"
                src="/img/photos/econolywinners/team-cougars.png"
                alt="EconOlympiad Image"
              />
              Team Cougars
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
