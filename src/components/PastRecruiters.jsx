import React from 'react'

function PastRecruiters() {
    const images = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1280px-Tata_Consultancy_Services_Logo.svg.png',
        'https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1648406781',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/1200px-Reliance_Jio_Logo_%28October_2015%29.svg.png',
        'https://ml.globenewswire.com/Resource/Download/5614c401-e886-4dc8-b601-7ba4ccd5a313',

        'https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png'
        ,
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png',
        'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/px8dkptpqet9hrjqupqc',
        'https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png'
      ];
  return (
    <div className='container-fluid  p-5 text-light' style={{ backgroundColor: "#162241" }}>
      <h1 className='text-center fw-bold  fs-1 mt-5'>Past Recruiters</h1>
      <div className='mt-5 mb-5'>
      <div className='overflow-hidden'>
      <div className='flex gap-5 auto animate-marquee'>
      
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className='w-[200px] h-[100px]  lg:w-[450px] lg:h-[250px] rounded-full transform transition-transform duration-300 hover:scale-105'
          />
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}

export default PastRecruiters
