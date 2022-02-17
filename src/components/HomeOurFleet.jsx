import Script from 'next/script'
import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'

export default function OurFleet() {
  return (
    <div>
      <div id="fleetyards-view"></div>
      <Script src="/FleetYards.js"></Script>
    </div>
  )
}
