import axios from "axios"
import {  useEffect, useState } from "react"

export const UseGetAll = () =>{
  const [meals , setMeals]=useState([])
  const [loding , setLoding]=useState(true)
  const [error , setError]=useState('')
 async function getAll (){

  return await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')

  }
  useEffect(()=>{
    getAll().then(res=>{
      if(res.data.meals.length > 0){
      setMeals(res.data.meals)
      setLoding(false)
      }else{
        setLoding(false)
        setError('no data found')
      }
    }).catch(err=>{
      setError(err.message)
      setLoding(false)
    })
  },[])
  return {meals, loding, error}

}