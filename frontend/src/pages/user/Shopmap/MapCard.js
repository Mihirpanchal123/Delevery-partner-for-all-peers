// import {
//     useJsApiLoader,
//     GoogleMap,
//     useLoadScript,
//     Marker,
//     Autocomplete,
//     DirectionsRenderer,
// } from '@react-google-maps/api'
// import { useRef, useState,useEffect } from 'react'

// const center = { lat: 48.8584, lng: 2.2945 }

// const MapCard = () => {
//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: 'AIzaSyAAq5HtOITE7N6FHBlRTTXbW1VojqmOhZw',
//     })

//     const [map, setMap] = useState(null)
//     const [directionsResponse, setDirectionsResponse] = useState(null)


   
//     // useEffect(() => {
//     //     const fun=async()=>{
//     //         const directionsService = new window.google.maps.DirectionsService()
//     //         const results = await directionsService.route({
//     //             origin: "chandigarh",
//     //             destination: "delhi",
//     //             // eslint-disable-next-line no-undef
//     //             travelMode: window.google.maps.TravelMode.DRIVING,
//     //         })
//     //         // console.log(results)
//     //         setDirectionsResponse(results)
//     //     }
//     //     fun();
//     // }, [])

//     return (
//         <>
//             {/* {
//                 isLoaded?  */}
//                 <GoogleMap
//                 center={center}
//                 zoom={15}
//                 mapContainerStyle={{ width: '100%', height: '100%' }}
//                 // options={{
//                 //     zoomControl: false,
//                 //     streetViewControl: false,
//                 //     mapTypeControl: false,
//                 //     fullscreenControl: false,
//                 // }}
//                 // onLoad={map => setMap(map)}
//             >
//                 {/* <Marker position={center} /> */}
//                 {/* {directionsResponse && ( */}
//                     {/* <DirectionsRenderer directions={directionsResponse} /> */}
//                 {/* )} */}
//             </GoogleMap>
//                 {/* :" "
//             } */}
//         </>

//     );
// }

// // export default GoogleApiWrapper({
// //     apiKey: "AIzaSyAA2REMRoNhvF0vaVaw3SWMncmrQWCe7aE"
// // })(MapContainer)

// export default MapCard;
















import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '380px',
  height: '380px',
  
};

function MapCard({center,openmap}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAAq5HtOITE7N6FHBlRTTXbW1VojqmOhZw"
  })

  const [map, setMap] = React.useState(null)

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} onClick={openmap}/> 
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapCard)










// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class MapCard extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key:'AIzaSyAAq5HtOITE7N6FHBlRTTXbW1VojqmOhZw' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           {/* <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           /> */}
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default MapCard;