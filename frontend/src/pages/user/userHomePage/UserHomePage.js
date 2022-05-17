import React from 'react'
import './userHomePage.css'


const UserHomePage = () => {
  return (
    <div>
     <div className="main-image"></div>
        <div className=" mainContent">
          <div className="row">
            <div className=" mainForm col-lg-6 order-2 order-lg-1">
              <div className=" container text-center">
                <h1 className="book-h1"><div className="global-h1">Search Here</div> Your nearby Shops</h1>
                <form >
                  <div className="form-group m-4">
                    <div className="text-white-800 " >From:</div>
                    <input className=" text-red-500 mr-sm-2" id="inlineFormCustomSelect" name="from"  required/>
                      
                  </div>
                  <div className="form-group m-4">
                    <div className="text-white-800 " >TO:</div>
                    <input className=" text-red-500 mr-sm-2" id="inlineFormCustomSelect" name="from"  required/>
                      
                  </div>
                </form>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href="/shopMap">Search shops</a></button>
              </div>
            </div>
            <div className="mainText col-lg-6 order-1 order-lg-2">
              <h1 className="main-h1">Shop 2 Door</h1>
              <p className="main-p">Safety | Security | Punctuality</p>
            </div>
          </div>
          {/* <nav className="navbar navbar-expand-lg navbar-light fixed-bottom" style={{backgroundColor: "rgba(110, 107, 107, 0.3)"}}>
            <a className="navbar-brand mx-auto" href="https://github.com/Gokul-J/IRCTC-App" rel="noopener noreferrer" target="_blank"><i className="fab fa-github" style={{fontSize: "1.5em", color: "white"}}></i></a>
          </nav> */}
        </div></div>
  )
}

export default UserHomePage