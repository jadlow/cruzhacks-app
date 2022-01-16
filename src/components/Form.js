import React, {useState} from 'react'
import APIService from '../components/APIService'

function Form(props) {

    const [title, setTitle] = useState(props.user.title)
    const [body, setBody] = useState(props.user.body)
    const updateUser = () => {
        APIService.UpdateUser(props.user.id, {title, body})
        .then(resp => props.updatedData(resp))
        .catch(error=> console.log(error))
    }

    return (
        <div>
            {props.user ? (
                <div className = "mb-3">
                <label htmlFor = "title" className = "form-label">Title</label>
                <input type="text" className = "form-control"
                value = {title}
                placeholder = "Please Enter Title"
                onChange = {(e) => setTitle(e.target.value)}
                />
                
                <label htmlFor = "body" className = "form-label">Body</label>
                <textarea
                row = "5"
                value = {body}
                className = "form-control"
                placeholder = "Please Enter Body"
                onChange = {(e) => setBody(e.target.value)}
                />
                <button 
                onClick = {updateUser}
                className = "btn btn-success mt-3">Update</button>
                </div>

            ):null}

        </div>
    )
}

export default Form
