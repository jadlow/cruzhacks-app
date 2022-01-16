import React from 'react'

function UserList(props) {
    return (
        <div>
            {props.users && props.users.map(user => {
        return (
          <div key = {user.id}>
            <h2>{user.title}</h2>
            <p>{user.body}</p>
            <p>{user.date}</p>
          </div>
        )
      })}
        </div>
    )
}

export default UserList
