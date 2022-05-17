import React from 'react';
import MapCard from './MapCard';
import DetailCard from './DetailCard';

const PendingDelivery = () => {
    return (
        <>  
            <div >
                <h1 className="text-5xl  font-bold leading-normal mt-0 mb-2 text-gray-800  text-center">Pending Deliveries</h1>
                <hr className="w-3/4 mb-4 mx-auto"/>
                <hr className="w-1/2 mb-4 mx-auto"/>
                <hr className="w-1/4 mb-4 mx-auto"/>
            </div>
            <div className="grid grid-cols-3 gap-4 p-8">
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
            </div>
        </>

    )
}
export default PendingDelivery;