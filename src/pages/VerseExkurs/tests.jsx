import Layout from 'pages/VerseExkurs/layout'
import { BasicPanel } from 'components/panels'

export default function Technologie({ data }) {
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto print:pt-5">
      {/* <div className="relative box-border p-[2px] border-2 border-solid border-[#6f6f6f] rounded-3xl before:absolute before:right-20 before:left-20 before:h-[2px] before:bg-[#444] before:content-[''] before:top-[-2px] before:box-border after:bottom-[-2px] after:absolute after:right-20 after:left-20 after:h-[2px] after:bg-[#444] after:content-[''] after:box-border">
        <div className="bg-[rgba(39,43,48,.3)] relative min-h-[40px] border-[3px] border-solid border-primary border-opacity-90 rounded-[20px] before:absolute before:right-10 before:left-10 before:h-1 before:bg-[#444] before:content-[''] before:top-[-3px] before:rounded-br-[1px] before:rounded-bl-[1px] before:box-border after:bottom-[-3px] after:rounded-br-[1px] after:rounded-bl-[1px] after:absolute after:left-10 after:right-10 after:h-1 after:bg-[#444] after:content-[''] after:box-border">
          <div className="rounded-2xl">


            <div className="px-4 py-3">
              <h2>Servus Heading</h2>
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
                and never miss a Sale. You can also enable Sale Notifications
                for Ships in your Hangar.
              </p>
            </div>

            
          </div>
        </div>
      </div> */}

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
