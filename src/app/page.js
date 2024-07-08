"use client"

import  { useEffect } from "react"
import Head from "../components/head"
import Portfolios from "../components/portfolios"
import firebase from "../utils/firebase"
import axios from "axios"

export default function Home() {
  
  useEffect(()=>{
    insertLogs()  
  },[])

  const insertLogs = async  () => { 

    let location = ""
    try{
      const response = await axios.get("https://ipapi.co/json",{
       
      })
      const json = response.data
      const { city ,region,  country_name } = json 
      location = city +" "+ region +" "+country_name 
    } catch (ex){
      console.log(ex.message)
    }
 
  
    firebase.firestore().collection("logs").add({
      date: new Date(),
      agent: navigator.userAgent,
      location
    }).then(success=> {
      console.log(success)
    }).catch(ex => {
      console.log(ex.message)
    })
  }

  return (
    <main>
        <Head />
        <hr />
        <Portfolios />
    </main>
  );
}
