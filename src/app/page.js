"use client"

import  { useEffect } from "react"
import Head from "../components/head"
import Portfolios from "../components/portfolios"
import firebase from "../utils/firebase"

export default function Home() {
  
  useEffect(()=>{
    insertLogs()  
  },[])

  const insertLogs = async  () => { 

    let info = {}
    try{
      const response = await fetch("http://www.geoplugin.net/json.gp")
      const json = await response.json();
      const { geoplugin_city,geoplugin_region,geoplugin_regionName,geoplugin_countryName,geoplugin_timezone  } = json
      info = {
        ip: json.geoplugin_request,
        location: geoplugin_city+" "+geoplugin_region+" "+geoplugin_regionName+" "+geoplugin_countryName
      }
    } catch {}
      
    firebase.firestore().collection("logs").add({
      date: new Date(),
      agent: navigator.userAgent,
      info
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
