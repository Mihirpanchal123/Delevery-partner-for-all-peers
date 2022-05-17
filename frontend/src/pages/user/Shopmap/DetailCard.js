import React from 'react'
import { useNavigate } from "react-router-dom";
import MapCard from './MapCard';
const DetailCard = () => {
    let navigate = useNavigate();
    const center = {
        lat: 30.741482,
        lng: 76.768066
      };
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      const openmap=()=>{
          openInNewTab(`https://maps.google.com/?q=${center.lat},${center.lng}`)
      }
      const clicked=()=>{
          navigate('/verifyOtp')
      }
    return (
        <div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <MapCard  center={center} openmap={openmap}  />
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">Shop Name here</h5>
                        <h5 className=" text-s  font-bold tracking-tight text-gray-400 ">Resides at</h5>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={clicked}>Address: House-845, old sunny enclave, Kharar</h5>
                    </a>
                    <a  onClick={openmap} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Get Location
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DetailCard