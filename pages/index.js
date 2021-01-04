import Head from 'next/head'
import dynamic from 'next/dynamic'
import useSwr from 'swr'
import { useState } from 'react'

import SchoolList from '../components/schools'

const NoSSRMap = dynamic(() => import('../components/map'), {
  ssr: false
})

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data: schools, error } = useSwr('/api/schools', fetcher)
  const [activeSchool, setActiveSchool] = useState()

  if (error) return <div>Failed to load schools</div>
  if (!schools) return <div>Loading...</div>

  // TODO: get & store schools

  // TODO: handle map movement updates

  // TODO: handle school select on map or list

  return (
    <>
      <Head>
        <title>LiveBy School Explorer</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"
        />
      </Head>

      <main>
        <NoSSRMap
          items={schools}
          activeItem={activeSchool}
          onSelectItem={(item) => setActiveSchool(item)}
        />
        <SchoolList
          items={schools}
          activeItem={activeSchool}
          onSelectItem={(item) => setActiveSchool(item)}
        />
      </main>
      <style jsx>{`
        main {
          display: flex;
        }
      `}</style>
    </>
  )
}
