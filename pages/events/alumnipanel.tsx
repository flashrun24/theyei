import React from 'react'
import Page from '../../components/utility/Page'
import Hero from '../../components/events/alumnipanel/Hero'
import Info from '../../components/events/alumnipanel/Info'

export default function econolympiad() {
  return (
    <Page
      title="EconOlympiad"
      desc="Youth Economics Initiative's (YEI) Flagship Competition, EconOlympiad, takes place every Spring.  Students compete in small teams to create comprehensive solutions and answer open ended questions. Exclusively available to YEI Members."
    >
      <Hero />
      <Info />
    </Page>
  )
}
