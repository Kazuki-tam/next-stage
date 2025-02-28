'use client'

import { useState } from 'react'
import { UserForm } from './user-form'

export function UserFormContainer() {
  const [refreshCount, setRefreshCount] = useState(0)
  
  const handleUserCreated = () => {
    // Increment the refresh count to trigger a refresh in the UserListContainer
    setRefreshCount(prev => prev + 1)
    
    // Use a custom event to communicate with the UserListContainer
    const event = new CustomEvent('userCreated', { detail: { timestamp: Date.now() } })
    window.dispatchEvent(event)
  }
  
  return <UserForm onUserCreated={handleUserCreated} />
}
