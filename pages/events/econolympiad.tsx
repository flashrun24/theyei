import React from 'react'
import Agenda from '../../components/events/econolympiad/Agenda'
import FAQs from '../../components/events/econolympiad/FAQs'
import Hero from '../../components/events/econolympiad/Hero'
import Info from '../../components/events/econolympiad/Info'
import KeyDates from '../../components/events/econolympiad/KeyDates'
import Prizes from '../../components/events/econolympiad/Prizes'
import Page from '../../components/utility/Page'
import Speaker from '../../components/events/econolympiad/Speaker'
import Sponsors from '../../components/events/econolympiad/Sponsors'
import Testimonials from '../../components/events/econolympiad/Testimonials'
import Submit from '../../components/events/econolympiad/Submit'
import Prompt from '../../components/events/econolympiad/Prompt'
import Recap from '../../components/events/econolympiad/Recap'

export default function econolympiad() {
  return (
    <Page
      title="EconOlympiad"
      desc="Youth Economics Initiative's (YEI) Flagship Competition, EconOlympiad, takes place every Spring.  Students compete in small teams to create comprehensive solutions and answer open ended questions. Exclusively available to YEI Members."
    >
      <Hero />
      {/* <Recap /> */}
      <Info />
      <Prompt/>
      <KeyDates />
      <Prizes />
      {/* <Agenda /> */}
      <Speaker />
      <FAQs />
      <Testimonials />
      <Sponsors />
    </Page>
  )
}
