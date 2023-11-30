import { useState } from 'react'
import Button from "../components/button"

const EditForm = ({ onSubmit, onCancel, initialValues }) => {
  const [username, setUsername] = useState(initialValues.username)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ username })
  }

  return (
    <>
      <h2 className='edit-title'>Edit user info</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div>
        <label htmlFor="username">User name:</label>
        <input 
          id="username" 
          type="text" 
          value={initialValues.username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        </div>
        <div>
        <label htmlFor="firstName">First name:</label>
        <input 
          id="firstName" 
          type="text" 
          value={initialValues.firstName} 
          readOnly
        />
        </div>
        <div>
        <label htmlFor="lastName">Last name:</label>
        <input 
          id="lastName" 
          type="text" 
          value={initialValues.lastName} 
          readOnly
        />
        </div>
        <div className="actions">
          <Button type="submit" text="Save" className="actions-btn" />
          <Button onClick={onCancel} text="Cancel" className="actions-btn" />
        </div>
      </form>
    </>
  )
}

export default EditForm
