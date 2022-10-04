import Layout from 'pages/VerseExkurs/layout'
import { BasicPanel } from 'components/panels'

export default function Technologie({ data }) {
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      <BasicPanel>
        <div className="px-4 py-3">
          <h2>Servus </h2>
        </div>

        <div className="flex items-center min-h-[250px] px-4">
          <p data-v-784ce054="">
            Get notified once a new Ship is released on{' '}
            <a
              href="https://robertsspaceindustries.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              robertsspaceindustries.com
            </a>{' '}
            and never miss a Sale. You can also enable Sale Notifications for
            Ships in your Hangar.
          </p>
        </div>
      </BasicPanel>
    </div>
  )
}

Technologie.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
