import NavBar from '../Components/NavBar'
import { useRef, useEffect } from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
