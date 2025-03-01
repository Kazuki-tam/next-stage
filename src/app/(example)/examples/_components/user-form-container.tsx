'use client'

import { useState } from 'react'
import { UserForm } from './user-form'

export function UserFormContainer() {
  const [, setRefreshCount] = useState(0)

  const handleUserCreated = () => {
    setRefreshCount(prev => prev + 1)

    const event = new CustomEvent('userCreated', { detail: { timestamp: Date.now() } })
    window.dispatchEvent(event)
  }

  return <UserForm onUserCreated={handleUserCreated} />
}
