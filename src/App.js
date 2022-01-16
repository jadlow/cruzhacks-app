import './App.css';
import {useEffect, useState} from 'react';
import UserList from './components/UserList';
import Form from './components/Form';

function App() {

  const [users, setUsers] = useState([])
  const [editedUser, setEditedUser] = useState(null)

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

  const editUser = (user) => {
    setEditedUser(user)
  }

  const updatedData = (user) => {
    const new_user = users.map(my_user => {
      if(my_user.id == user.id){
        return user
      } else {
        return my_user
      }
    })
    setUsers(new_user)
  }

  return (
    <div className="App">
      <h1>Hacker Finder</h1>

      <UserList users = {users} editUser = {editUser}/>

      {editedUser ? <Form user = {editedUser} updatedData = {updatedData}/>: null}

    </div>
  );
}

export default App;
