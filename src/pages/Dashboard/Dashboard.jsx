import React from 'react'
import Navigation from '../../components/Navigation'
import Header from '../../components/Header'
import Portfolio from './Components/Portfolio'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Navigation />
        <div className='flex-grow'>
            <Header />
            <Portfolio />
        </div>
    </div>
  )
}

export default Dashboard