import React from 'react';
import MainCard from './MainCard'

const CartPage=()=>{
    return(
        <div className="  n bg-gradient-to-r from-purple-500 to-pink-500" >
            <div className='p-8'>
                <div >
                    <h1 className="text-5xl  font-bold leading-normal mt-0 mb-2 text-cyan-800 text-white text-center">Cart Page</h1>
                </div>
                <div>
                    <MainCard />
                    <MainCard />
                    <MainCard />
                    <MainCard />
                    <MainCard />
                </div>
            </div>
        </div>
               
    )

}
export default CartPage;
