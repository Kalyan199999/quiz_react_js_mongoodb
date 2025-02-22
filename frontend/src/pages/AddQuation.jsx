import React ,{useState} from 'react'

import axios from 'axios'


const API = "http://localhost:5054/quiz";

const obj = {
  question: '',
  optionA: '',
  optionB: '',
  optionC: '',
  optionD: '',
  answer: ''
}


function AddQuation() {

  const [data,setData] = useState(obj);

  const handleChange = (e)=>{

    setData({...data,[e.target.name]:e.target.value})
  }

  const handleAdd =async (e)=>{

    const question = data.question;;
    const optionA = data.optionA;
    const optionB = data.optionB;
    const optionC = data.optionC;
    const optionD = data.optionD;
    const answer = data.answer;

    const option = [optionA,optionB,optionC,optionD];

    try {
       
      const d = await axios.post(API,{question,option,answer});

      console.log(d);
      setData(obj);

    } 
    catch (error) {
      console.log("error!");
      
    }
    
    
  }

  return (
    <div className='w-full  bg-blue-300 flex flex-row gap-5 p-4'>

      {/* question page */}

        <div className='w-2/4 h-screen border-2 border-blue-700 rounded-md flex flex-col justify-center items-center gap-5'>

            <h1 className='text-xl text-blue-700'>Add your Question here and give the 4 option and also the answer</h1>
            
            <div className='w-full h-96 flex flex-col gap-2 justify-center'>
      
              <textarea type="text-area" placeholder='Question' rows="4" cols="50" className='min-h-10 max-h-28 border-2 hover:border-blue-700 rounded-md p-2 outline-none resize-none' name='question' value={data.question} onChange={(e)=>handleChange(e)}></textarea>
        
              <input type="text" placeholder='option-A' className='w-3/4 h-10 border-2 hover:border-blue-700 rounded-md p-2 outline-none' name='optionA' value={data.optionA} onChange={(e)=>handleChange(e)}/>
        
              <input type="text" placeholder='option-B' className='w-3/4 h-10 border-2 hover:border-blue-700 rounded-md p-2 outline-none' name='optionB' value={data.optionB} onChange={(e)=>handleChange(e)}/>
        
              <input type="text" placeholder='option-C' className='w-3/4 h-10 border-2 hover:border-blue-700 rounded-md p-2 outline-none' name='optionC' value={data.optionC} onChange={(e)=>handleChange(e)}/>
        
              <input type="text" placeholder='option-D' className='w-3/4 h-10 border-2 hover:border-blue-700 rounded-md p-2 outline-none' name='optionD' value={data.optionD} onChange={(e)=>handleChange(e)}/>
        
              <input type="text" placeholder='Answer' className='w-3/4 h-10 border-2 hover:border-blue-700 rounded-md p-2 outline-none' name='answer' value={data.answer} onChange={(e)=>handleChange(e)}/>

              <button className='w-3/4 h-16 bg-blue-700 text-xl text-white rounded ' onClick={(e)=>{handleAdd(e)}}>Add</button> 

        </div>
      
      </div>

     {/* question display page */}
      <div className='w-2/4 h-screen border-2 border-blue-700 rounded-md flex flex-col justify-center align-center gap-1'>

          {
            data.question &&  <textarea rows='6' cols='25' className='w-auto min-h-10 max-h-28 rounded-xl p-2 outline-none bg-blue-300 text-xl text-white border-2 resize-none' value={data.question.toUpperCase()} readOnly></textarea>
          }

          {
            data.optionA && <label htmlFor="optionB" className='text-2xl text-blue-700 m-5'> <input type="radio" value={data.optionB}/> {data.optionA.toUpperCase()} </label>
          }

          {
            data.optionB && <label htmlFor="optionB" className='text-2xl text-blue-700 m-5'> <input type="radio" value={data.optionB}/> {data.optionB.toUpperCase()} </label>
          }

          {
            data.optionC && <label htmlFor="optionB" className='text-2xl text-blue-700 m-5'> <input type="radio" value={data.optionB}/> {data.optionC.toUpperCase()} </label>
          }

          {
            data.optionD && <label htmlFor="optionB" className='text-2xl text-blue-700 m-5'> <input type="radio" value={data.optionB}/> {data.optionD.toUpperCase()} </label>
          }

          {
            data.answer && <h1 className='text-2xl text-blue-700 m-5'>{data.answer}</h1>
          }
          
      </div>


    </div >
  )
}

export default AddQuation
