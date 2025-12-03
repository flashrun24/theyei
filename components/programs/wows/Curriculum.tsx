import Link from 'next/link'
import React from 'react'
import CurriculumSection from './CurriculumSection'

export default function Curriculum() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="text-5xl  font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-[-5px]">
          Resources
        </div>
        <CurriculumSection
          title="Investment Banking"
          content="Created by Prasanna Chandankhede and Michael Zhao"
          slideLink="https://docs.google.com/presentation/d/e/2PACX-1vSlS0FOH8UOIKj9p6bUjpG5gbZQYfCcH7scoKAToRi26iZCMB3NtPjS0uEuFk6r1ZZezerQ_5IjFlve/embed"
        />
        <CurriculumSection
          title="Women In Venture Capital"
          darkerBg={true}
          slideLink="https://docs.google.com/presentation/d/e/2PACX-1vR4PqlXbLg3J4pLR_DCTPxE4ZmhF7KsSLZejo-7iAIeKWlfA2Y9ih6rEY08YatmzS45H1LG39Zq-KIC/embed"
          content="Created by Prasanna Chandankhede and Michael Zhao"
        />
        <CurriculumSection
          title="Financial Literacy for Women"
          content="Created by Sricharan Bala"
          slideLink="https://docs.google.com/presentation/d/e/2PACX-1vRaHD3SsBESQS6YUSARNbxEG6ScZAtzgJf_3_uCx_OduAPhhlb7ds5uifEEdxDA4SckoQrUOBMc7wfY/embed"
        />
        <CurriculumSection
          title="Women in Finance"
          darkerBg={true}
          slideLink="https://docs.google.com/presentation/d/1Ekc3NYvH2QCO7kACwjNjWZO3N-rRqOR7fqHdRIKfTOs/embed#slide=id.p"
          content="Created by Manesh Yandra"
        />
      </div>
    </div>
  )
}
