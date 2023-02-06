import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';



function Body() {
  const[items, setitems] =useState([]);

  useEffect( ()=>
  {
     const  functioncallapi= async()=>
     {
      const req = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res=>
      {
      console.log(res.data);
      setitems(res.data.meals);
      }).catch(err=>
      {
console.log(err);
      })
     
     }


     functioncallapi();

  },[])

 const itemlist = items.map((obj)=>
 {
 return <Grid xs={10} > 
 
    {obj.strMeal}
    <img src={obj.strMealThumb} height="200" width="200"  ></img>
    {obj.idMeal}

 </Grid>
  {/* <Grid  item xs={4}>
 
  
  {obj.strMeal}
  
  
  <img src={obj.strMealThumb} width="500px"  ></img>
  
  
  {obj.idMeal}
  </Grid>
  </Grid> */}
 
 })

  return (

   


    <Grid>
      {itemlist}
    </Grid>
  )
}

export default Body
