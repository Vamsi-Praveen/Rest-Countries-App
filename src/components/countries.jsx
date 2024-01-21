import React, { useEffect, useState } from 'react'
import CountryCard from './countryCard'
import axios from "axios"

const Countries = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [loadCount, setLoadCount] = useState(15)

    const handleSearch = (e) => {
        if (filter) setFilter('')
        setSearch(e.target.value)
    }

    const handleLoadMore = (e) => {

        setLoadCount(loadCount + 10)
    }
    useEffect(() => {
        const getCountries = async () => {
            setLoading(true)
            await axios.get('https://restcountries.com/v3.1/all',)
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getCountries();
    }, [])

    return (
        <div className='w-full min-h-[calc(100vh-60px)] bg-light dark:bg-darkBlue'>
            {
                loading ? (
                    <div className='flex items-center justify-center h-[calc(100vh-60px)] '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className='animate-spin' viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" /></svg>

                    </div>
                ) : (
                    <div className='w-full h-full flex flex-col gap-5'>
                        <div className='md:px-[90px] pt-[30px] flex items-center justify-between md:flex-row flex-col px-0 gap-3'>
                            <div className='rounded-sm border bg-white dark:bg-darkBlue dark:border-darkGrey px-5 py-2 flex items-center justify-center shadow-sm'>
                                <i className="fi fi-rr-search text-[14px] mt-0.5 dark:text-white_l"></i>
                                <input
                                    type='text'
                                    placeholder='Search for a country...'
                                    className='px-2 outline-none border-none bg-transparent dark:text-white_l'
                                    onChange={handleSearch}
                                />
                            </div>
                            <div>
                                <select
                                    className='px-2 py-2 outline-none border rounded-sm bg-white shadow-sm dark:bg-darkBlue dark:border-darkGrey dark:text-darkGrey'
                                    onChange={(e) => { setFilter(e.target.value) }}
                                >
                                    <option value="">Filter By Region</option>
                                    <option>Asia</option>
                                    <option>Africa</option>
                                    <option>America</option>
                                    <option>Europe</option>
                                    <option>Oceania</option>
                                </select>
                            </div>
                        </div>
                        <div className='px-[40px] py-[30px] flex items-center justify-center flex-wrap gap-10'>
                            {
                                data.filter((country) => { return country.name.common.toLowerCase().includes(search.toLowerCase()) }).filter((region) => { return region.region.toLowerCase().includes(filter.toLowerCase()) }).slice(0, loadCount).map((el, i) => {
                                    return <div className='hover:-translate-y-2 transition-transform'>
                                        <CountryCard data={el} key={i} />
                                    </div>
                                })
                            }
                            {

                                data.filter((country) => { return country.name.common.toLowerCase().includes(search.toLowerCase()) }).filter((region) => { return region.region.toLowerCase().includes(filter.toLowerCase()) }).length >= 15 ? (
                                    <button className='border px-2 py-1 dark:text-darkGrey dark:border-darkGrey rounded-sm' onClick={handleLoadMore}>Load More</button>
                                ) : ('')
                            }

                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default Countries
