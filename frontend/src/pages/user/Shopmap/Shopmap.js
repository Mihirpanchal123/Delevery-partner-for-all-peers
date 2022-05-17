import React from 'react';
import MapCard from './MapCard';
import DetailCard from './DetailCard';

const Shopmap = () => {
    return (
        <>  
            <div >
                <h1 className="text-5xl  font-bold leading-normal mt-0 mb-2 text-white  text-center">All shops on your route</h1>
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
export default Shopmap;