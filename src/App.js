import React from 'react'
import './App.css';
import DonateForm from './donation/DonateForm'
import NewsApp from './NewsApplication/NewsApp';

function App() {
  return (
    <div className="container p-4">
      <h1 className='text-center' >Donation App</h1>
      <DonateForm />
      {/* <NewsApp /> */}
    </div>
  )
}

export default App
