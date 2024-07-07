"use client"

import  { useEffect } from "react"
import Head from "../components/head"
import Portfolios from "../components/portfolios"
import firebase from "../utils/firebase"

export default function Home() {
  
  useEffect(()=>{
    firebase.firestore().collection("logs").add({
      date: new Date(),
      agent: navigator.userAgent
    }).then(success=> {
      console.log(success)
    }).catch(ex => {
      console.log(ex.message)
    })
  },[])

  return (
    <main>
        <Head />
        <hr />
        <Portfolios />
    </main>
  );
}
