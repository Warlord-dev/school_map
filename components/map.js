import React, { useRef, useEffect } from 'react'
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  GeoJSON,
  Popup
} from 'react-leaflet'
import { latLng, point } from 'leaflet'

export default function MapComponent(props) {
  const leafletMap = useRef()
  const { items, activeItem, onSelectItem } = props

  useEffect(() => {
    if (activeItem) {
      leafletMap.current.leafletElement.bindPopup(
        `<div>${activeItem.SchoolName}</div>
        <div>${activeItem.AddressStreet}</div>
        <div>${activeItem.AddressCity}, ${activeItem.AddressState} ${activeItem.AddressZip}</div>`,
        latLng(activeItem.lat, activeItem.long)
      )
    }
  }, [activeItem])

  return (
    <div className="map-root">
      <LeafletMap
        center={[39.7118185, -104.9309452]}
        zoom={11}
        minZoom={13}
        ref={leafletMap}
        onViewportChanged={() =>
          console.log(leafletMap.current.leafletElement.getBounds())
        }
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* TODO: Add schools to the map */}
        {/* TODO: add click event when a school is clicked */}
        {/* TODO: Add popup on click with school info */}
        {items
          .filter((school) => school.geom)
          .map((school) => (
            <Marker
              key={school.ID}
              position={[school.lat, school.long]}
              onclick={() => onSelectItem(school)}
            >
              <Popup>
                <div>{school.SchoolName}</div>
                <div>{school.AddressStreet}</div>
                <div>{`${school.AddressCity}, ${school.AddressState} ${school.AddressZip}`}</div>
              </Popup>
            </Marker>
          ))}
      </LeafletMap>
      <style jsx>
        {`
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
