
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
      <Navbar />
      <Main />
    </>
  );
}


