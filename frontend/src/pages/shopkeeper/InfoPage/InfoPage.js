import React from 'react'
import './infoPage.css';
import Location from './Location';


const InfoPage = () => {
    return (
        <div>
        <div>
            <h1 className="text-5xl  font-bold leading-normal mt-0 mb-2 text-yellow-400 text-center">Info Page</h1>
            <hr className="w-3/4 mb-4 text-blue-500  mx-auto"/>
            <hr className="w-1/2 mb-4 text-blue-500 mx-auto"/>
            <hr className="w-1/4 mb-4 text-blue-500 mx-auto"/>
        </div>
<div className=" mx-auto">
			<div className="flex justify-center px-6 my-12">
				{/* <!-- Row --> */}
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					{/* <!-- Col --> */}
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}
					></div>
					{/* <!-- Col --> */}
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-black text-center">Enter your Details!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-left text-sm font-bold text-gray-700" htmlFor="firstName">
										 Enter your Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="Enter your Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block text-left mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Shop Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Shop Name"
									/>
								</div>
							</div>
							<div className="mb-1">
								<label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="email">
									Shop Description
								</label>
								<textarea
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="EnterShop Description"
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700 text-left" htmlFor="email">
									Shop address
								</label>
								<textarea
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="shop address"
								/>
							</div>
							{/* <div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm text-left font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p className="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
										Confirm Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>
							</div> */}
                            <div className="font-bold text-white">

                                <Location/>
                            </div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Register Account
								</button>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
        </div>

    )
}

export default InfoPage