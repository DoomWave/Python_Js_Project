import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [contacts, SetContacts] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.:5000/contacts")
    const data = await response.json() 
    SetContacts(data.contacts)
    console.log(data.contacts)
  }

  return (
    <>
    
    </>
  )
}

export default App

