import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg   d-flex justify-content-center align-items-center  bg-center bg-no-repeat "
                style={{
                    backgroundImage: "url('https://i.ytimg.com/vi/WOY1fySdVZo/maxresdefault.jpg')",
                }}
            ></div>
            <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-75 ">
                <div className=' container '>
                    <div className='w-100 h-100 grid  grid-cols-1 lg:grid-cols-2 '>

                    <div className=" flex flex-col   justify-center">


                        <h1 className='fw-bold text-2xl lg:text-4xl  mb-4'>MGM's T&P Department</h1>
                        <p className='text-lg lg:text-2xl '>  Training and placement: -The placement activity is being handled by an independent officer on special duty. We co-ordinate the placement activities of the institute and also acts as liaison between the organization and the students to enable both to match each others requirements. They are supported by student's coordinators.

                        </p>
                        <span>

                        <button className='btn shadow-lg  mt-5 fw-bold rounded-0 btn-primary'>Go Explore <ArrowRightAltIcon /> </button>
                        </span>
                    </div>

                    <div className="hidden lg:flex justify-center">

                        <img src="https://pbs.twimg.com/media/ECJhV2nUIAYZZzn?format=jpg&name=large" alt="" className='shadow-lg  rounded-4 w-[700px] h-[400px]' />

                    </div>
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Main3
