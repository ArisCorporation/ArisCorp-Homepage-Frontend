// import Timeline from "timelinejs-react";
import dynamic from 'next/dynamic'
const Timeline = dynamic(() => import('timelinejs-react'), { ssr: false })

// const options = {
//   timenav_height: 300
// }
const TimelineComponent = ({ events, data }) => (
  <>
      <Timeline
        target={<div className="timeline" style={{ height: 800 }} />}
        events={events}
        options={{start_at_end: true}}
      />
      <link rel="stylesheet" href="/timeline.theme.ariscorp.css" />
      <style>{`
        .tl-slider-background{
          display: none
        }
      `}</style>
    </>
)

export default TimelineComponent
