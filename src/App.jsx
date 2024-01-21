import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Loader from './components/Loader'

const Navbar = lazy(() => import('./components/Navbar'))
const Countries = lazy(() => import('./components/countries'))
const CountryPage = lazy(() => import('./components/CountryPage'))
const Error = lazy(() => import('./components/Error'))


const App = () => {
  return (
    <>
      <ThemeProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route element={<Countries />} index />
              <Route path='/country/:country' element={<CountryPage />} />
            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  )
}

export default App
