import React from 'react'
import Page from '../../components/utility/Page'
import Hero from '../../components/events/core/CoreInfo'

export default function core() {
  return (
    <Page
      title="CORE"
      desc="Community of Rising Economists (CORE) is YEI's flagship community-building program designed to connect, develop, and amplify the next generation of economic thinkers across the globe."
    >
      <CoreInfo />
    </Page>
  )
}
