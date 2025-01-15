import React from 'react'
import { useAppStore } from '@/store';

function profile() {
  const {userInfo}=useAppStore()
  return (
    <div>profile
      <div>Email:{userInfo.email}</div>
    </div>
  )
}

export default profile