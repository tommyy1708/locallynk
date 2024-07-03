import React from 'react'
import getAllUsers from '../../lib/getAllUsers'

export const metadata = {
  title: 'users page',
}

export default function UsersPage() {
  const usersData = getAllUsers();
  
  return (
    <div>page</div>
  )
}
