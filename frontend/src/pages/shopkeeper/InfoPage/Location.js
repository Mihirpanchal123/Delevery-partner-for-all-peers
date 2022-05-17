// import React, { Component } from 'react';
// import { GoogleComponent } from 'react-google-location' 

// // const API_KEY = 'AIzaSyAAq5HtOITE7N6FHBlRTTXbW1VojqmOhZw'

// const API_KEY = 'AIzaSyDin3C0UItqleWEQJ5IrF8cY9fbp5H4q8o'
// class Location extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         place: null,
//       };
//     }
//     render() {
//         console.log("result return here",this.state.place)
//       return (
//         <div className="text-black" >
//            <GoogleComponent
//                 apiKey={API_KEY}
//                 language={'en'}
//                 country={'country:in|country:us'}
//                 coordinates={true}
//                 currentCoordinates={{
//                 "lat": 41.7151377,
//                 "lng": 44.827096
//                 }}
//                 placeholder={'Start typing location'}
//                 // locationBoxStyle={'custom-style'}
//                 // locationListStyle={'custom-style-list'}
//                 onChange={(e) => { this.setState({ place: e }) }} 
//             />
//         </div>
  
//       )
//     } 
//   }
  
  
//   export default Location;

import React, { Component,useState } from 'react';

const Location =()=>{
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      };
    //   console.log(navigator.geolocation.GeolocationCoordinates.latitude)
    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
        //   navigator.geolocation.getCurrentPosition((position) => {
          navigator.geolocation.watchPosition((position) => {
              console.log(position)
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          },options);
        }
      }
    return(
        <>
        <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={getLocation}>Get Location</button>
        <h1>Coordinates</h1>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
        </>
    )
}
export default Location;
