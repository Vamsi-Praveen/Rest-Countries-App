import React from 'react'
import { Link } from 'react-router-dom'
const CountryCard = ({ data }) => {
  return (
    <Link to={`/country/${data.cca2}`}>
      <div className='md:h-[250px] md:w-[200px] h-[260px] w-[220px] rounded-[4px] shadow-md dark:shadow-xl flex flex-col overflow-hidden cursor-pointer'>
        <div className='w-full h-1/2'>
          <img src={data.flags.png} alt='Flag' className='h-full w-full object-cover' />
        </div>
        <div className='w-full h-1/2 p-3 bg-[#fff] dark:bg-darkBlue dark:border-darkGrey dark:text-white_l'>
          <h1 className='font-medium tracking-wider line-clamp-1 text-[18px]'>{data.name.common}</h1>
          <div className='mt-2 leading-5'>
            <h1 className='text-[12px] font-medium'>Population:&nbsp;<span className='font-light'>{data.population}</span></h1>
            <h1 className='text-[12px] font-medium'>Region:&nbsp;<span className='font-light'>{data.region}</span></h1>
            <h1 className='text-[12px] font-medium line-clamp-1'>Captial:&nbsp;<span className='font-light'>{data.capital}</span></h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard
