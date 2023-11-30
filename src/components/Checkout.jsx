import React from 'react'

function Checkout() {
    return (
        <div className='pb-5 bg-body-secondary  d-flex flex-column justify-content-center pt-5 align-items-center '>
            <h1 className='text-2xl lg:text-4xl font-bold '>Check out This</h1>
            <p className='text-secondary lg:w-50 w-100 hidden lg:block text-center m-3'>
                Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
            </p>
            <div className="container mt-4 lg:flex flex-col lg:flex-row justify-content-evenly">
                <div className="card  hover:bg-slate-300 lg:w-[400px] w-[350px] mb-4 lg:mb-0" >
                    <img className="card-img-top object-cover " src="https://images.collegedunia.com/public/college_data/images/campusimage/141983345422220124301935560.jpg" alt="Card image"   height="350px"/>
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title text-xl font-bold ">Histroy OF Placements</h5>
                           
                        </div>
                </div>

                <div className="card hover:bg-slate-300 lg:w-[400px] w-[350px]  mb-4 lg:mb-0"  >
                    <img className="card-img-top" src="https://images.collegedunia.com/public/college_data/images/campusimage/141983345422220124301935560.jpg" alt="Card image" height="250px"/>
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title  text-xl font-bold">More about Training & placement</h5>
                           
                        </div>
                </div>
                <div className="card hover:bg-slate-300 lg:w-[400px] w-[350px]  mb-4 lg:mb-0"  >
                    <img className="card-img-top" src="https://images.collegedunia.com/public/college_data/images/campusimage/141983345422220124301935560.jpg" alt="Card image"  height="250px"/>
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title  text-xl font-bold">Achivements</h5>
                           
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
