// Profile Page Component : This component represents the user's profile page, which displays user information, account details, and provides options for editing the username.

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile, updateProfile } from '../utils/profileThunk'
import AccountCard from "../components/accountCard"
import Button from "../components/button"
import EditForm from "../components/editForm"

function ProfilePage() {
  const dispatch = useDispatch()
  // Fetch token from the Redux store
  const authState = useSelector((state) => state.auth)
  const token = authState.user

  // Fetch user profile data from the Redux store
  const profile = useSelector(state => state.user)

  // Initialize initial form values with user data
  const initialValues = {
    firstName: profile.firstName || '', 
    lastName: profile.lastName || '', 
    userName: profile.userName || '', 
  }

  useEffect(() => {
    // Fetch user profile data when the component mounts or token changes
    if (token) {
      dispatch(fetchProfile())
    }
  }, [token, dispatch])

  // State to control edit mode
  const [editMode, setEditMode] = useState(false)

  // Handler to enable edit mode
  const handleEditClick = () => {
    setEditMode(true)
  }

  // Handler for form submission
  const handleFormSubmit = (updatedValues) => {
    dispatch(updateProfile({ userName: updatedValues.userName }))
      .unwrap()
      .then(() => {
        setEditMode(false)
        dispatch(fetchProfile())
      })
      .catch((error) => {
        console.error('Error updating profile:', error)
      })
  }

  // Handler to cancel editing
  const handleCancel = () => {
    setEditMode(false)
  }

  return (
    <main className="main bg-dark">
      {editMode ? (
        // Render edit form when in edit mode
        <EditForm 
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      ) : (
        // Render user information and edit button when not in edit mode
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
  )
}

export default ProfilePage
