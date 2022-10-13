// import Timeline from "timelinejs-react";
import dynamic from 'next/dynamic'
const Timeline = dynamic(() => import('timelinejs-react'), { ssr: false })

const events = [
  {
    start_date: {
      year: 2021,
      month: 6,
      day: 5,
    },
    media: {
      url: 'https://picsum.photos/200/300',
      thumbnail: 'https://picsum.photos/200/300',
      caption: 'google',
      link: 'https://google.de',
    },
    unique_id: '1',
    text: {
      headline: 'Event1',
      text: '',
    },
    group: 'Catégorie1',
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4,
    },
    media: {
      url: 'https://picsum.photos/200/300',
      thumbnail: 'https://picsum.photos/200/300',
      caption: '',
      link: '',
    },
    end_date: {
      year: 2021,
      month: 9,
      day: 5,
    },
    unique_id: '2',
    text: {
      headline: 'Event2',
      text: '',
    },
    group: 'Catégorie1',
    background: {},
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4,
    },
    media: {
      url: 'https://picsum.photos/200/300',
      thumbnail: 'https://picsum.photos/200/300',
      caption: '',
      link: '',
    },
    end_date: {
      year: 2021,
      month: 8,
      day: 5,
    },
    unique_id: '3',
    text: {
      headline: 'Event3',
      text: '',
    },
    group: 'Catégorie1',
    background: {},
  },
]

const options = {
}
const TimelineComponent = ({ events, data }) => (
  <>
      {/* <Timeline
        target={<div className="timeline" style={{ height: 600 }} />}
        events={events}
        options={options}
      /> */}
      <link rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/themes/timeline.theme.dark.css" />
      <style>{`
        .tl-slider-background{
          display: none
        }
      `}</style>
    </>
)

export default TimelineComponent
