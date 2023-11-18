import React from 'react'
import Navigation from '../../components/Navigation'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Navigation />
        <div className='flex-grow'>
            <Header />
        </div>
    </div>
  )
}

export default Dashboard