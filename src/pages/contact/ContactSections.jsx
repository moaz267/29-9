import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ContactSections() {
  return (
    <div className='Contact_sections'>
      <Outlet/>
    </div>
  )
}
