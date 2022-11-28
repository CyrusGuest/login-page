import { useState } from 'react'
import './App.css'
import axios from 'axios'

// http://localhost:3001/api/v1/get_test
// http://localhost:3001/api/v1/post_test

function App() { 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()

    const user = { username, password }

    const response = await axios.post('http://localhost:3001/api/v1/post_test', user)

    console.log(response)
  }

  return (
    <div className="App">
      <h1 className='title'>Login</h1>
      <form className='login-form'>
        <input onChange={(e) => setUsername(e.target.value)} type="email" name="email" id="email" placeholder='Email'/>
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password' />
        <button onClick={submitForm} className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
