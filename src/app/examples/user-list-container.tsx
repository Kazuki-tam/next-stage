'use client'

import { useEffect, useState } from 'react'
import { UserList } from './user-list'

export function UserListContainer() {
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  
  useEffect(() => {
    // Listen for the custom event from UserFormContainer
    const handleUserCreated = () => {
      setRefreshTrigger(prev => prev + 1)
    }
    
    window.addEventListener('userCreated', handleUserCreated)
    
    return () => {
      window.removeEventListener('userCreated', handleUserCreated)
    }
  }, [])
  
  return <UserList refreshTrigger={refreshTrigger} />
}
