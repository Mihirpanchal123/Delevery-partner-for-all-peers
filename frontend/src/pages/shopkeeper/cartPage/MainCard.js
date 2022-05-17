 import React from 'react'

 const MainCard=()=>{
        return(
            <div className="mb-12">
             <div className=" mx-auto px-20">

<div>
<div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" >
<div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
    <div className="flex-1 px-6 py-8 bg-white lg:p-12 "  >
    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl" >house No:785, olde enclave,kharar</h3>
    {/* <p className="mt-6 text-base text-gray-500">Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus. className dui ut ullamcorper ultrices arcu ad varius adipiscing, aliquet imperdiet hendrerit orci fusce ante felis, mi mus vel finibus viverra nibh taciti.</p> */}
    <div className="flex flex-row ">
        <div class="mb-4 mx-12">
            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" class="w-56 h-56 rounded-full" alt=""/>
        </div>
        <div className="mt-6 mr-8  text-left text-base text-gray-500">
            <div className="mb-3">
                <span className="font-bold ">Name: </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Mobile: </span>
                <span className="ml-4">74587458745</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Address: </span>
                <span className="ml-4">house No:785, olde enclave,kharar</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Detail : </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Detail: </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Detail: </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            
        </div>
        {/* <div className="mt-6 mr-16  text-base text-gray-500">
            <div className="mb-3">
                <span className="font-bold ">Name: </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Name: </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Name: </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            <div className="mb-3">
                <span className="font-bold ">Name: </span>
                <span className="ml-4">Prabhjot Singh</span>
            </div>
            
        </div> */}
        
    </div>
    
    <div className="mt-8">
        <div className="flex items-center">
        <h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">What's included</h4>
        <div className="flex-1 border-t-2 border-gray-200"></div>
        </div>
        <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">banana</p>
        </li>
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">rice</p>
        </li>
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">apples</p>
        </li>
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">grapes</p>
        </li>
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Biscuits</p>
        </li>
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Atta</p>
        </li>
        </ul>
    </div>
    </div>
    <div className="px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12" >
    <p className="mt-4 text-gray-500">Base commision: $299</p>
    <div className="flex items-center justify-center mt-4 text-5xl font-extrabold text-gray-900">
        <span>$149</span>
        <span className="ml-3 text-xl font-medium text-gray-500">- fast </span>
    </div>
    <div class="flex justify-center">
    <div class="mb-3 ">
        <div class="input-group relative flex flex-wrap   rounded">
        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
        
        </div>
    </div>
    </div>
    <div className="mt-6">
        <div className="rounded-md shadow">
        <a href="https://stackdiary.com/" className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900" target="_blank">Allocate</a>
        </div>
    </div>
    <div className="mt-4 text-sm">
        <a href="https://stackdiary.com/" className="font-medium text-gray-700 hover:text-gray-900" target="_blank">Or Scan a 
        <span className="font-bold"> - Barcode</span> 
        </a>
    </div>
    </div>
</div>
</div>
</div>
</div>
</div>
        )
 }

    export default MainCard;