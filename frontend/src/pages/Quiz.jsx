import React , {useState , useEffect} from 'react'

import axios from 'axios'

const API = "http://localhost:5054/quiz";

function Quiz() {

  const [data,setData] = useState([]);
  const [isFetched,setIsFetched] = useState(false);

  useEffect(() => {
    getData();
  } , [])

  const getData = async () => {
    
    try {
      const d = await axios.get(API);

      setData(d.data.data);

      setIsFetched(d.data.isfetched)

      console.log(d.data);
      
    } catch (error) {
      console.log("error");
      
    }
  }

  const handleClick = (e , res)=>{

    console.log(e.target.classList);

    const eleA = document.querySelector('.optionA');
    eleA.classList.remove('bg-blue-500')

    const eleB = document.querySelector('.optionB');
    eleB.classList.remove('bg-blue-500')

    const eleC = document.querySelector('.optionC');
    eleC.classList.remove('bg-blue-500')

    const eleD = document.querySelector('.optionD');
    eleD.classList.remove('bg-blue-500')

    console.log(res.toUpperCase() + " "+e.target.value[0].toUpperCase());
    

    const ans = document.querySelector('.answer');
    if( res.toUpperCase() === e.target.value[0].toUpperCase()){
      ans.classList.add('bg-green-500')
    }
    else{
      ans.classList.add('bg-rose-500')
    }
    ans.value= "correct answer is:"+res.toUpperCase();

    e.target.classList.add(`bg-blue-500`)
    
  }

  return (
    <>

    {
      !isFetched ?  <h1 className='text-3xl text-blue-600'>Loading.........</h1> : 
      
      <div className='w-full  bg-blue-300 flex flex-col gap-2 items-center'>

         <h1 className='text-3xl text-blue-700'>Attempt your quiz</h1>
        
            {
              data.map((item , idx) =>{

                return <div key={item._id} className='w-2/4 border-2 flex flex-col gap-2 items-center'>

                  <h1 className='text-3xl text-blue-700'>{idx+1}: {item.question}</h1>

                  <input type="text" value={`A.${item.option[0]}`}  readOnly className='optionA outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 ' onClick={(e)=>{handleClick(e,item.answer)}}/>
                  <input type="text" value={`B.${item.option[1]}`}  readOnly className='optionB outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 ' onClick={(e)=>{handleClick(e,item.answer)}}/>
                  <input type="text" value={`C.${item.option[2]}`}  readOnly className='optionC outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 ' onClick={(e)=>{handleClick(e,item.answer)}}/>
                  <input type="text" value={`D.${item.option[3]}`}  readOnly className='optionD outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 mb-2' onClick={(e)=>{handleClick(e,item.answer)}}/>
                  
                  <input type="text" value={""} disabled readOnly className='answer outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 mb-2'/>

                </div>
              })

            }

      </div>
    }
      
    </>
  )
}

export default Quiz
