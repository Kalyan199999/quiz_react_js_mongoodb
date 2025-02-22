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

      // console.log(d.data);
      
    } catch (error) {
      console.log("error");
      
    }
  }

  const handleClick = (e , res , id)=>{

    // console.log(e.target.classList);

    const eleA = document.querySelector('#optionA-'+id);
    // eleA.classList.remove('bg-blue-500')
    console.log(eleA);
    

    const eleB = document.querySelector(`#optionB-${id}`);
    // eleB.classList.remove('bg-blue-500')
    // console.log(eleB);

    const eleC = document.querySelector(`#optionC-${id}`);
    // eleC.classList.remove('bg-blue-500')
    // console.log(eleC);

    const eleD = document.querySelector(`#optionD-${id}`);
    // eleD.classList.remove('bg-blue-500')
    // console.log(eleD);

    console.log(res.toUpperCase() + " "+e.target.value[0].toUpperCase());
    

    const ans = document.querySelector(`#answer-${id}`);
    // console.log(ans);

    const a = eleA.classList.contains('bg-blue-500')
    const b = eleB.classList.contains('bg-blue-500')
    const c = eleC.classList.contains('bg-blue-500')
    const d = eleD.classList.contains('bg-blue-500')

    if( res.toUpperCase() === e.target.value[0].toUpperCase() && ( !ans.classList.contains('bg-green-700') &&  !ans.classList.contains('bg-rose-700') ) ){

      ans.classList.add('bg-green-700')
    }
    else{
      ans.classList.add('bg-rose-700')
    }
    ans.value= "correct answer is:"+res.toUpperCase();

    if(a || b || c|| d ){
      console.log("option is already selected!");
      return;
      
    }

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

                return <div key={item._id} className='w-2/4 border-2 flex flex-col gap-2 items-center rounded-md'>

                  <h1 className='text-3xl text-blue-700'>{idx+1}: {item.question}</h1>

                  <input type="text" value={`A.${item.option[0]}`}  readOnly id={`optionA-${item._id}`} className='optionA outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 ' onClick={(e)=>{handleClick(e,item.answer,item._id)}}/>
                  
                  <input type="text" value={`B.${item.option[1]}`}  readOnly id={`optionB-${item._id}`} className='optionB outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 ' onClick={(e)=>{handleClick(e,item.answer,item._id)}}/>

                  <input type="text" value={`C.${item.option[2]}`}  readOnly id={`optionC-${item._id}`} className='optionC outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 ' onClick={(e)=>{handleClick(e,item.answer,item._id)}}/>

                  <input type="text" value={`D.${item.option[3]}`}  readOnly id={`optionD-${item._id}`} className='optionD outline-none rounded w-2/4 h-10 hover:border-2 border-blue-700 mb-2' onClick={(e)=>{handleClick(e,item.answer,item._id)}}/>
                  
                  <input type="text" value={"Correct answer will be displayed!"}  readOnly id={`answer-${item._id}`} className='outline-none rounded w-2/4 h-10 mb-2 text-center text-xl'/>

                </div>
              })

            }

            <button className='w-60 h-12 bg-green-600 rounded text-white font-bold text-xl mb-2'>Submit</button>

      </div>
    }
      
    </>
  )
}

export default Quiz
