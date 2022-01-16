import './App.css';
import {useEffect, useState} from 'react';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/get',{
      'method':'GET',
      headers: {
        'Content-Type':'applications/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setUsers(resp))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <h1>Hacker Finder</h1>

      <UserList users = {users}/>

    </div>
  );
}

export default App;
