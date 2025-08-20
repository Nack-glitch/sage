
import './App.css';
import { useState } from 'react';


export default function App() {
  const[country,setCountry]=useState("")
  function getcountry(){
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.json())
    .the((data)=>setCountry(data))
  }
  const[search,setSearch]=useState("")
  function search(name){
    fetch ("https://restcountries.com/v3.1/name/"+ name)
    .then((res)=>
      {if(res.status==200)
        return  res.json()
        else return []
      })
    
    .then((data)=>setCountry(data))                                                                                                                                                                                                                                                                                                                                                                                    
  }
  return <>
 <input placeholder='search a capital city' type='search'
  value={search} 
  onChange={(e)=>setSearch(e.target.value)}/>
  
<button onClick={()=>search(search) }>capital</button>
<button onClick={()=>getcountrys() }>capital</button>

<div >
{country.map((country)=>(
  <div>
    <img src={country.flags.png} alt={country.flags.png}  width="100%"/>
    <p>common name: {country.name.common}</p>
    <p>official name: {country.name.official}</p>

  </div>
))}
</div>
  

  </>  
}































































































