import Head from 'next/head'

import SchoolList from '../components/schools'

import dynamic from 'next/dynamic'

const NoSSRMap = dynamic(() => import('../components/map'), {
  ssr: false
})

export default function Home () {

  // TODO: get & store schools

  // TODO: handle map movement updates

  // TODO: handle school select on map or list

  return (
    <>
      <Head>
        <title>LiveBy School Explorer</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
      </Head>

      <main>
        <NoSSRMap />
        <SchoolList />
      </main>
      <style jsx>{`
        main {
          display: flex;   
        }
      `}</style>
    </>
  )
}
