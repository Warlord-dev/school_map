import React, {useRef} from 'react'
import { Map as LeafletMap, TileLayer, Marker, GeoJSON, Popup } from 'react-leaflet'

export default function MapComponent (props) {
  const leafletMap = useRef()
  return (
    <div className='map-root'>
      <LeafletMap
        center={[39.7118185, -104.9309452]}
        zoom={11}
        minZoom={13}
        ref={leafletMap}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* TODO: Add schools to the map */}
        {/* TODO: add click event when a school is clicked */}
        {/* TODO: Add popup on click with school info */}
      </LeafletMap>
      <style jsx>{`
          .map-root {
            width: 80%;
          }
          :global(.leaflet-container) {
            height: 100vh !important;
            width: 100%%;
            margin: 0 auto 0 0;
          }
      `}
      </style>
    </div>
  )
}
