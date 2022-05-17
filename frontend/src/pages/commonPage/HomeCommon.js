import React from 'react'

const HomeCommon = () => {
  return (
    <div><div class="container mx-auto p-5">
    <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div class="flex flex-row justify-center">
        <div class="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
        <h1 class="text-3xl text-gray-600 ml-2">Logo</h1>
      </div>
      <div class="mt-2">
        <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Home</a>
        <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Shop</a>
        <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Profile</a>
        <a href="/login" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Login</a>
        <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Payment</a>
        <a href="#" class="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Cart (0)
        </a>
      </div>
    </div>

    <div class="md:flex md:flex-row mt-20">
      <div class="md:w-2/5 flex flex-col justify-center items-center">
        <h2 class="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">Order groceries for delivery or pickup today</h2>
        <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Whatever you want from local stores, brought right to your door.</p>
        <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Daily essentials
          delivered in
          10 Minutes by your Neighbour</p>
        <a href="#" class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">Shop Now</a>
      </div>
      <div class="md:w-3/5">
        <img src="./images/deliveryboymain.jpg" class="w-full" />
      </div>
    </div>

    <div class="my-20">
      <div class="flex flex-row justify-between my-5">
        <h2 class="text-3xl">Shop from Top Categories</h2>
        <a href="#" class="flex flex-row text-lg hover:text-purple-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/men/aashirwad.jpeg" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Atta,Flour & Sooji</a></h3>
          <div class="flex flex-row my-3">
              <h5>Upto 20% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/men/dairynew.webp" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Dairy & Bakery</a></h3>
          <div class="flex flex-row my-3">
            <h5>Upto 30% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/men/pharma.png" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Pharma & Personal Care</a></h3>
          <div class="flex flex-row my-3">
            
          </div>
          <div class="flex flex-row my-3">
            <h5>Upto 40% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/men/snacks.jpg" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Snack & Branded Foods</a></h3>
          <div class="flex flex-row my-3">
            <h5>Upto 20% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      </div>
    </div> 


    <div class="my-20">
      <div class="flex flex-row justify-between my-5">
        <h2 class="text-3xl">Best Seller & Most Popular</h2>
        <a href="#" class="flex flex-row text-lg hover:text-purple-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/women/summerbaverages.png" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Summer Baverages</a></h3>
          <div class="flex flex-row my-3">
            
            <h5>Upto 10% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/women/dal.jpg" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Houshold Staples</a></h3>
          <div class="flex flex-row my-3">
            <h5>Upto 20% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/women/harpicclean.webp" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Cleaning & Household</a></h3>
          <div class="flex flex-row my-3">
            
            <h5>Upto 30% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/women/masala.jpg" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Masala Oil & more</a></h3>
          <div class="flex flex-row my-3">
            <h5>Upto 10% off</h5>
          </div>
          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">250g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">500g</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">1Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">5Kg</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">10Kg</a>
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      </div>
    </div> 

    <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">

    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
      <img class="rounded-t-lg" src="./images/fastdelivery.jpg" alt=""/>
      </a>
      <div class="p-5">
      <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Superfast Delivery</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Get your order delivered to your doorstep at the earliest from dark stores near you</p>
      <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
      </div>
      </div>

      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <img class="rounded-t-lg" src="./images/megaoffers.jpg" alt=""/>
        </a>
        <div class="p-5">
        <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Best Prices & Offers</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cheaper prices than your local supermarket, great cashback offers to top it off.</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
        </div>


        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
          <img class="rounded-t-lg" src="./images/fooditems.jpg" alt=""/>
          </a>
          <div class="p-5">
          <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wide Assortment</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Choose from 5000+ products across food, personal care, household & other categories</p>
          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          </div>
          </div>


          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
            <img class="rounded-t-lg" src="./images/refund.jpg" alt=""/>
            </a>
            <div class="p-5">
            <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Easy Returns</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Not satisfied with a product? Return it at the doorstep & get a refund within hours.</p>
            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
            </div>


    </div>







    <div class="rounded-lg shadow-lg my-20 flex flex-row">
      <div class="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
        <div class="lg:w-1/2">
          <h3 class="text-2xl font-extrabold mb-4">Subscribe to get our offers first</h3>
          <p class="mb-4 leading-relaxed">Want to hear from us when we have new offers? Sign up for our newsletter and we'll email you every time we have new sale offers.</p>
          <div>
            <input type="email" placeholder="Enter email address" class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4" />
            <button type="submit" class="bg-red-600 py-3 rounded-lg w-full">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
        <img src="./images/subscribe-banner.png" class="h-96" />
      </div>
    </div>

    <div class="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm">
      <div class="mb-4">
        <a href="#" class="mx-2.5">About</a>
        <a href="#" class="mx-2.5">Privacy Policy</a>
        <a href="#" class="mx-2.5">Terms of Services</a>
      </div>
      <p>&copy; Copyright Reserved 2022</p>
    </div>
  </div></div>
  )
}

export default HomeCommon