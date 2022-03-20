import json_file from 'pages/VerseExkurs/timeline.json'

const loadTimelineScript = (callback) => {
  const existingScript = document.getElementById('timelineScript')
  if (!existingScript) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.text = js
    script.id = 'timelineScript'
    document.body.appendChild(script)
    script.onload = () => {
      if (callback) callback()
    }
  }
  if (existingScript && callback) callback()
}


const js = () => {
  var additionalOptions = {
    language: 'de',
    default_bg_color: { r: 17, g: 17, b: 17 },
    timenav_height: 600,
  }

  timeline = new TL.Timeline('timeline-embed', json_file, additionalOptions)
}

export default loadTimelineScript
