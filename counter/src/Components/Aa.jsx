import React,{useState} from 'react'

function Aa() {
    const [count, setCount]=useState(0);
    const [value, setValue]=useState("");



    const sub=()=>{

        if(count<=0)
            {
                setValue("not available");
            }
        else
        {
            setCount(prev=>prev-1);
            setValue("")
        }


    }

        const add=()=>{
            setCount(prev=>prev+1);
            setValue("");
        }
  return (
    <>
        <button onClick={sub}>-</button>
        {value||count}
        <button onClick={add}>+</button>
    </>
  )
}

export default Aa
