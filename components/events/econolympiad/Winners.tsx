import React from 'react'

export default function Prizes() {
  return (
    <div className="bg-yei-secondary-brighter">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            2026 Winners
          </h2>
          <p className="mt-3 text-xl text-indigo-200">
            52 teams submitted presentations this year!
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl items-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">

          {/* 1st Place */}
          <div className="flex flex-col sm:order-2">
            <dd className="order-1 text-3xl font-extrabold text-white">      
                href="https://www.youtube.com/watch?v=K_DgNDMHttc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Veblen Goods
              </a>
            </dd>
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-5 py-1 rounded-full text-2xl font-medium bg-indigo-100 text-indigo-800">
                1st
              </span>
            </dt>
            <dd className="order-3 mt-3 text-lg text-indigo-200">
              Keshav Aggarwal, Yash Mehta, Jasmaan Singh Sahota
            </dd>
            <dd className="order-4 mt-2">
              
                href="https://www.youtube.com/watch?v=K_DgNDMHttc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-300 hover:text-white text-sm underline"
              >
                Watch Presentation →
              </a>
            </dd>
          </div>

          {/* 2nd Place */}
          <div className="flex flex-col mt-10 sm:mt-0 sm:order-1">
            <dd className="order-1 text-2xl font-extrabold text-gray-200">
              ZGL Consulting
            </dd>
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-xl font-medium bg-indigo-200 text-indigo-800">
                2nd
              </span>
            </dt>
            <dd className="order-3 mt-3 text-lg text-indigo-200">
              Vivian Zhang, Shams Guliyeva, Linus Li
            </dd>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col mt-10 sm:mt-0 sm:order-3">
            <dd className="order-1 text-2xl font-extrabold text-gray-300">     
                href="https://www.youtube.com/watch?v=RucdTbMh-U4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                South Forsyth Economics
              </a>
            </dd>
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-md font-semibold bg-indigo-200 text-indigo-800">
                3rd
              </span>
            </dt>
            <dd className="order-3 mt-3 text-lg text-indigo-200">
              Dhanvin Pamulapati, Tanish Jampala, Ishaan Somaka
            </dd>
            <dd className="order-4 mt-2">    
                href="https://www.youtube.com/watch?v=RucdTbMh-U4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-300 hover:text-white text-sm underline"
              >
                Watch Presentation →
              </a>
            </dd>
          </div>

        </dl>
      </div>
    </div>
  )
}
