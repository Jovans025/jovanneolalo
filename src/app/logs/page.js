"use client"
import { Table } from "react-bootstrap"
import firebase from "../../utils/firebase"
import { useEffect, useState } from "react"; 

export default function Resume() {
    const [logs, setLogs] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const logsRef = await firebase.firestore().collection("logs").get()
        const logs = logsRef.docs.map(a => {
            return {
                ...a.data(),
                id: a.id
            }
        }) 

        setLogs([...logs])
    }
 

    return (
      <Table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Agent</th>
            </tr> 
        </thead>
        <tbody>
            {
                logs.map(item => (
                    <tr key={item.id}>
                        <td>{new Date(item.date.toDate().toString()).toString()}</td>
                        <td>{item.agent}</td>
                    </tr>
                ))
            }
        </tbody>
      </Table>
    );
  }
  