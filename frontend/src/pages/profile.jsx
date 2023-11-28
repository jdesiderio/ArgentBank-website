import { useState } from 'react'
import AccountCard from "../components/accountCard"
import Button from "../components/button"
import EditForm from "../components/editForm"
import { useSelector } from "react-redux"

function ProfilePage() {
  const profile = useSelector(state => state.profile)
  const [editMode, setEditMode] = useState(false)

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleFormSubmit = (updatedValues) => {
    // Dispatch an action to update the username in the Redux store
    setEditMode(false)
  }

  const handleCancel = () => {
    setEditMode(false)
  }

  return (
    <main className="main bg-dark">
      {editMode ? (
        <EditForm 
          initialValues={{
            firstName: profile.firstName, 
            lastName: profile.lastName,
            username: profile.username
          }}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      ) : (
        <div className="header">
          <h1>Welcome back<br />{profile.firstName} {profile.lastName}!</h1>
          <Button 
            className="edit-button"
            text="Edit Username"
            onClick={handleEditClick}
          />
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
        <AccountCard 
          account="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          balance="Available Balance"
        />
        <AccountCard
          account="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          balance="Available Balance"
        />
        <AccountCard
          account="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          balance="Current Balance"
        />
    </main>
  )}

  export default ProfilePage