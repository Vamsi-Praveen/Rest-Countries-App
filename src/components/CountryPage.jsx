import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'


const CountryPage = () => {
    const { country } = useParams();
    const navigate = useNavigate()
    const [countryData, setCountryData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getCountryInfo = async () => {
            setLoading(true)
            await axios.get(`https://restcountries.com/v3.1/alpha/${country}`)
                .then((data) => {
                    setCountryData(data.data[0])
                    setLoading(false)
                })
                .catch((err) => {
                    return console.log(err)
                })
        }
        getCountryInfo();
    }, [])
    const handleClick = () => {
        navigate('/')
    }
    return (
        <section className='bg-light min-h-[calc(100vh-60px)] w-full md:px-[60px] px-[10px] py-[40px] dark:bg-darkBlue dark:text-white'>

            {
                loading ? (
                    <div className='flex items-center justify-center h-[calc(100vh-60px)]'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className='animate-spin dark:text-white' viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" /></svg>

                    </div>
                ) : (
                    <div className='h-full w-full'>
                        <div className='inline-flex px-2 py-1 cursor-pointer mb-3' onClick={handleClick}>
                            <i className="fi fi-rr-arrow-small-left text-xl pr-2"></i>
                            <h1 className='text-[14px] mt-0.5'>Back</h1>
                        </div>
                        <div className='w-full h-full flex items-center justify-around flex-col md:flex-row md:gap-3 gap-5 md:py-[30px] py-[10px]'>
                            <div className='h-full min-w-[30%]'>
                                <img src={countryData.flags.png} alt='Flag' className='h-full w-full' />
                            </div>
                            <div className='flex flex-col items-center justify-center min-w-[70%]'>
                                <div className='flex flex-col'>
                                    <h1 className='text-4xl font-medium tracking-wide mb-4'>{countryData.name.common}</h1>
                                    <div className='flex md:gap-10 gap-6 md:flex-row flex-col'>
                                        <div className='leading-8'>
                                            <h1 className='line-clamp-1'>Native Name&nbsp;: <span className='font-light'>{countryData.name.official}</span></h1>
                                            <h1>Population&nbsp;: <span className='font-light'>{countryData.population}</span></h1>
                                            <h1>Region&nbsp;: <span className='font-light'>{countryData.region}</span></h1>
                                            <h1>Sub Region&nbsp;: <span className='font-light'>{countryData.region}</span></h1>
                                            <h1>Captial&nbsp;: <span className='font-light'>{countryData.capital}</span></h1>
                                        </div>
                                        <div className='leading-8'>
                                            <h1>Top Level Domain&nbsp;: <span className='font-light'>{countryData.tld}</span></h1>
                                            <h1>Currencies:&nbsp;
                                                {
                                                    Object.entries(countryData.currencies).map((e, i) => {
                                                        return <span key={i} className='font-light'>{e[1].name}</span>
                                                    })
                                                }
                                            </h1>
                                            <h1>Languages&nbsp;:&nbsp;
                                                <span className='font-light'>
                                                    {
                                                        Object.entries(countryData.languages)[0][1]
                                                    }
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>


                                <div className='flex gap-3 items-center mt-4 px-[40px] justify-center'>
                                    <h1>Border Countries&nbsp;:</h1>
                                    <div className='flex gap-3 flex-wrap items-center justify-center'>
                                        {
                                            countryData.borders && countryData.borders.map((el, i) => {
                                                return (
                                                    <h1 className='border px-3 py-2 rounded-sm' key={i}>{el}</h1>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }


        </section>
    )
}

export default CountryPage
