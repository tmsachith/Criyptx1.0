import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useState } from 'react'
import '../../styles/Map.css';


const MapView = () => {
  const [center] = useState({
    lat: 6.9271,
    lng: 79.8612
  })

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={center}
        zoom={8}
      >
        {/* Markers */}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapView
