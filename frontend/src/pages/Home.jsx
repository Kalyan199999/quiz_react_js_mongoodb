import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

  return (
    <>

      <div className='w-full h-screen bg-blue-300 flex flex-col justify-center align-center gap-2 border-4 border-green-700'>

        <h1 className='text-4xl font-bold text-center text-blue-800'>Welcome to the Quiz App</h1>

        <h1 className='text-xl font-bold text-center text-blue-500'>This is a sample test</h1>

        <div className='flex flex-row justify-center gap-5'>

          <button className='text-white text-xl bg-indigo-500 rounded w-56 h-12 hover:bg-indigo-700' onClick={()=>{
            navigate('/add')
          }}>Add question</button>

          <button className='text-white text-xl bg-indigo-500 rounded w-56 h-12 hover:bg-indigo-700' onClick={()=>{
            navigate('/quiz')
          }}>Take Quiz</button>

        </div>

      </div>

    </>
  )
}

export default Home
