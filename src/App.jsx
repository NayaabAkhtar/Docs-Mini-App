import React, { useEffect } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  useEffect(() => {
    document.title="Docs Mini"
  }, [])
  
  return (
    <div className='relative bg-zinc-800 h-screen w-full'>
     <Background/>
     <Foreground/>
    
    </div>
  )
}

export default App
